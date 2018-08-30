// @flow
import { store } from '../redux/store';
import audioContext from './audioContext';
import instrumentPlayer from './instrumentPlayer';
import {
  updatePlayheadAnimation,
  setIsPlaying,
} from '../redux/reducers/project';

const {
  FRAMES_PER_BAR,
  SCHEDULER_LOOKAHEAD,
} = store.getState().global.constants;


function getTimePerBar(bpm: number): number {
  return 1 / (bpm / 240)
}

function currentTime(): number {
  return audioContext.currentTime;
}

class PlayHandler {
  instance: Object
  lastFrameInLastSchedulerRun: number = 0
  scheduledNoteIds: Array<string> = []
  interval: any

  startPlaying(): void {
    const { project, tracks } = store.getState()
    const { isPlaying, bpm, barWidth } = project

    if (!isPlaying) {
      setIsPlaying(true)

      const playStartTime = currentTime();
      let barNum = 0;

      const timePerBar = getTimePerBar(bpm)
      updatePlayheadAnimation(barNum, barWidth, timePerBar);

      this.scheduleNotes(timePerBar, tracks, 0);

      if (!this.interval) {
        this.interval = setInterval(() => {
          const { project, tracks } = store.getState();
          const { bpm, barWidth } = project;
          const timePerBar = getTimePerBar(bpm);
          const timeNow = currentTime();

          const currentBar = Math.floor(timeNow - playStartTime) / timePerBar
          if (currentBar !== barNum) {
            barNum = currentBar
            updatePlayheadAnimation(barNum, barWidth, timePerBar);
          }

          this.scheduleNotes(timePerBar, tracks, timeNow - playStartTime);
        }, 50)
      }
    }
  }

  stopPlaying(): void {
    setIsPlaying(false)
    updatePlayheadAnimation(0, 0, 0);

    clearInterval(this.interval)
    this.interval = null

    this.lastFrameInLastSchedulerRun = 0
    this.scheduledNoteIds = []
  }

  scheduleNotes(timePerBar: number, tracks: Array<Object>, elapsedTime: number): void {
    const timePerFrame = timePerBar / FRAMES_PER_BAR;
    const framesPerLookahead = Math.floor(SCHEDULER_LOOKAHEAD / timePerFrame);
    const startFrame = Math.floor(elapsedTime / timePerFrame)

    tracks.forEach(({ timeline }) => {
      const slice = timeline.slice(startFrame, startFrame + framesPerLookahead);
      slice.forEach((frame, frameIndex) => {
        frame.forEach(noteFrame => {
          if (noteFrame.type === 'INITIATOR' && this.scheduledNoteIds.indexOf(noteFrame.id) === -1) {
            const timeNow = currentTime();
            const timeUntilNoteStarts = frameIndex * timePerFrame
            instrumentPlayer.play(noteFrame.midiNum, timeNow + timeUntilNoteStarts)
            this.scheduledNoteIds.push(noteFrame.id)
          }
        })
      })
    })
  }
}

const instance: Object = new PlayHandler();
export default instance;
