import { armedInstrument } from '../music/musicUtils';

export default () => {
  return (
    window.addEventListener('keydown', event => {
      const { keyCode } = event;

      if (keyCode >= 65 && keyCode <= 90) {
        return armedInstrument.play(keyCode);
      }
    }),

    window.addEventListener('keyup', event => {
      const { keyCode } = event;

      if (keyCode >= 65 && keyCode <= 90) {
        return armedInstrument.stop(keyCode);
      }
    })
  )
}