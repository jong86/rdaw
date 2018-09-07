// @flow
import { store } from '../redux/store';
import audioContext from './audioContext';
import instrumentPlayer from './instrumentPlayer';
import {
  startPlayheadAnimation,
  stopPlayheadAnimation,
  setIsPlaying,
} from '../redux/reducers/project';
import {
  getTimePerBar,
  currentTime,
} from '../util/music';

const {
  FRAMES_PER_BAR,
  SCHEDULER_LOOKAHEAD,
} = store.getState().global.constants;

export class PlayHandler {
  instance: Object
  lastFrameInLastSchedulerRun: number = 0
  scheduledNoteIds: Array<string> = []
  interval: any

  startPlaying(): void {
    const { project, tracks } = store.getState()
    const { isPlaying, bpm, barWidth } = project

    if (!isPlaying) {
      setIsPlaying(true)

      let barNum: number = 0;
      const timePerBar: number = getTimePerBar(bpm)

      // Set playhead animation to play from start to finish of song
      startPlayheadAnimation(project, tracks);

      // Schedule first notes right away
      this.scheduleNotes(timePerBar, tracks, 0);

      const playStartTime = currentTime();

      if (!this.interval) {
        this.interval = setInterval(() => {
          const { project, tracks } = store.getState();
          const { bpm } = project;
          const timePerBar: number = getTimePerBar(bpm);

          // Actual scheduling of the notes
          this.scheduleNotes(timePerBar, tracks, currentTime() - playStartTime);
        }, 50)
      }
    }
  }

  stopPlaying(): void {
    setIsPlaying(false)

    stopPlayheadAnimation();

    clearInterval(this.interval)
    this.interval = null

    this.lastFrameInLastSchedulerRun = 0
    this.scheduledNoteIds = []
  }

  scheduleNotes(timePerBar: number, tracks: Array<Object>, elapsedTime: number): void {
    const timePerFrame: number = timePerBar / FRAMES_PER_BAR;
    const framesPerLookahead: number = Math.floor(SCHEDULER_LOOKAHEAD / timePerFrame);
    const startFrame: number = Math.floor(elapsedTime / timePerFrame)

    tracks.forEach(({ timeline }) => {
      const slice = timeline.slice(startFrame, startFrame + framesPerLookahead);
      slice.forEach((frame, frameIndex) => {
        frame.forEach(noteFrame => {
          if (!this.scheduledNoteIds.includes(noteFrame.id)) {
            const timeUntilNoteStarts: number = frameIndex * timePerFrame
            // Schedule notes in advance
            instrumentPlayer.play(noteFrame.midiNum, currentTime() + timeUntilNoteStarts)
            // Keep track of note IDs so they aren't rescheduled
            this.scheduledNoteIds.push(noteFrame.id)
          }
        })
      })
    })
  }
}

const instance: Object = new PlayHandler();
export default instance;