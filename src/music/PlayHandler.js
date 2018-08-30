import { store } from '../redux/store';
import audioContext from './audioContext';
import instrumentPlayer from './instrumentPlayer';

const {
  FRAMES_PER_BAR,
  SCHEDULER_LOOKAHEAD,
} = store.getState().global.constants;

function updatePlayheadAnimation(barNum, barWidth, duration) {
  store.dispatch({
    type: 'UPDATE_PLAYHEAD_ANIMATION',
    from: barNum * barWidth,
    to: (barNum * barWidth) + barWidth,
    duration: duration * 1000,
  })
}

function setIsPlaying(isPlaying) {
  store.dispatch({ type: 'SET_IS_PLAYING', isPlaying: isPlaying })
}

function getTimePerBar(bpm) {
  return 1 / (bpm / 240)
}

function currentTime() {
  return audioContext.currentTime;
}


class PlayHandler {
  constructor() {
    this.lastFrameInLastSchedulerRun = 0
    this.scheduledNoteIds = []

    // Make this class a singleton
    if (!PlayHandler.instance) {
      PlayHandler.instance = this
    }

    return PlayHandler.instance
  }

  startPlaying() {
    const { isPlaying, bpm, barWidth } = store.getState().project

    if (!isPlaying) {
      setIsPlaying(true)

      const playStartTime = currentTime();
      let barNum = 0;

      const timePerBar = getTimePerBar(bpm)
      updatePlayheadAnimation(barNum, barWidth, timePerBar);

      if (!this.interval) {
        this.interval = setInterval(() => {
          const { project, tracks } = store.getState();
          const { bpm, barWidth } = project;
          const timePerBar = getTimePerBar(bpm);

          const currentBar = Math.floor((currentTime() - playStartTime) / timePerBar)
          if (currentBar !== barNum) {
            barNum = currentBar
            console.log("new bar")
            updatePlayheadAnimation(barNum, barWidth, timePerBar);
          }

          this.scheduleNotes(timePerBar, tracks, currentTime() - playStartTime);
        }, 50)
      }
    }
  }

  stopPlaying() {
    setIsPlaying(false)
    updatePlayheadAnimation(0, 0, 0);

    clearInterval(this.interval)
    this.interval = null

    this.lastFrameInLastSchedulerRun = 0
    this.scheduledNoteIds = []
  }

  scheduleNotes(timePerBar, tracks, elapsedTime) {
    const timePerFrame = timePerBar / FRAMES_PER_BAR;
    const framesPerLookahead = Math.floor(SCHEDULER_LOOKAHEAD / timePerFrame);
    const startFrame = Math.floor(elapsedTime / timePerFrame)

    // debugger

    tracks.forEach(({ timeline }) => {
      const slice = timeline.slice(startFrame, startFrame + framesPerLookahead);
      slice.forEach((frame, frameIndex) => {
        frame.forEach(noteFrame => {
          if (noteFrame.type === 'INITIATOR' && this.scheduledNoteIds.indexOf(noteFrame.id) === -1) {
            instrumentPlayer.play(noteFrame.midiNum, frameIndex * timePerFrame)
            this.scheduledNoteIds.push(noteFrame.id)
          }
        })
      })
    })
  }
}

const instance = new PlayHandler();
export default instance;
