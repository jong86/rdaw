import { store } from '../redux/store';
import audioContext from './audioContext';

function updatePlayheadAnimation(barNum, barWidth, duration) {
  store.dispatch({
    type: 'UPDATE_PLAYHEAD_ANIMATION',
    from: barNum * barWidth,
    to: (barNum * barWidth) + barWidth - 1,
    duration: duration * 1000,
  })
}

function scheduleNotes(timePerBar, tracks) {
  console.log(tracks)

}

class PlayHandler {
  constructor() {
    if (!PlayHandler.instance) {
      PlayHandler.instance = this
      this.interval = null
    }

    return PlayHandler.instance
  }

  startPlaying() {
    store.dispatch({ type: 'SET_IS_PLAYING', isPlaying: true })

    const playStartTime = audioContext.currentTime
    let barNum = 0;

    const { bpm, barWidth } = store.getState().project
    const timePerBar = 1 / (bpm / 240)
    updatePlayheadAnimation(barNum, store.getState().project.barWidth, timePerBar);

    if (!this.interval) {
      this.interval = setInterval(() => {
        const { project, tracks } = store.getState();
        const { bpm, barWidth } = project
        const timePerBar = 1 / (bpm / 240)

        const currentBar = Math.floor((audioContext.currentTime - playStartTime) / timePerBar)
        if (currentBar !== barNum) {
          barNum = currentBar
          updatePlayheadAnimation(barNum, barWidth, timePerBar);
        }

        const elapsedTimeInBar = audioContext.currentTime - playStartTime - (barNum * timePerBar)
        const timeUntilNextBar = timePerBar - elapsedTimeInBar // useful for note scheduling?

        console.log('elapsedTimeInBar:', elapsedTimeInBar, 'barNum:', barNum);

        scheduleNotes(timePerBar, tracks);

      }, 50)
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
