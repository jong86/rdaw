import { store } from '../redux/store';
import audioContext from './audioContext';
import instrumentPlayer from './instrumentPlayer';

function updatePlayheadAnimation(barNum, barWidth, duration) {
  store.dispatch({
    type: 'UPDATE_PLAYHEAD_ANIMATION',
    from: barNum * barWidth,
    to: (barNum * barWidth) + barWidth - 1,
    duration: duration * 1000,
  })
}

let lastFrameSeen = 0;
const scheduledNoteIds = [];
function scheduleNotes(timePerBar, tracks) {
  const msPerFrame = timePerBar / 4096 * 1000;
  const lookaheadMs = 100;
  const framesPerLookahead = msPerFrame * lookaheadMs;

  tracks.forEach(({ timeline }) => {
    timeline.slice(lastFrameSeen, framesPerLookahead).forEach(frame => {
      frame.forEach((noteFrame, i) => {
        console.log(noteFrame);
        if (noteFrame.type === 'INITIATOR' && scheduledNoteIds.indexOf(noteFrame.id) === -1) {
          instrumentPlayer.play(60, i * msPerFrame)
          instrumentPlayer.stop()
          scheduledNoteIds.push(noteFrame.id)
        }
      })
    })
  })

  lastFrameSeen += framesPerLookahead;
}

class PlayHandler {
  constructor() {
    // Make this class a singleton
    if (!PlayHandler.instance) {
      PlayHandler.instance = this
      this.interval = null
    }

    return PlayHandler.instance
  }

  startPlaying() {
    store.dispatch({ type: 'SET_IS_PLAYING', isPlaying: true })

    const playStartTime = audioContext.currentTime
    let totalElapsedTime = 0;
    let barNum = 0;

    const { bpm, barWidth } = store.getState().project
    const timePerBar = 1 / (bpm / 240)
    updatePlayheadAnimation(barNum, store.getState().project.barWidth, timePerBar);

    if (!this.interval) {
      this.interval = setInterval(() => {
        const { project, tracks } = store.getState();
        const { bpm, barWidth } = project;
        const { currentTime } = audioContext;
        const timePerBar = 1 / (bpm / 240);

        const currentBar = Math.floor((currentTime - playStartTime) / timePerBar)
        if (currentBar !== barNum) {
          barNum = currentBar
          updatePlayheadAnimation(barNum, barWidth, timePerBar);
        }

        const elapsedTimeInBar = audioContext.currentTime - playStartTime - (barNum * timePerBar)
        const timeUntilNextBar = timePerBar - elapsedTimeInBar // useful for note scheduling?

        totalElapsedTime = currentTime - playStartTime;

        scheduleNotes(timePerBar, tracks);

      }, 10)
    }
  }

  stopPlaying() {
    store.dispatch({ type: 'SET_IS_PLAYING', isPlaying: false })
    clearInterval(this.interval)
    this.interval = null
    updatePlayheadAnimation(0, 0, 0);
  }
}

const instance = new PlayHandler();
export default instance;
