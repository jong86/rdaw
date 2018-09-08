// Having web-audio-mock here prevents errors when running tests
const wamock = require("web-audio-mock-api");
let audioContext;
if (process.env.NODE_ENV === 'test') {
  audioContext = new wamock.AudioContext()
} else {
  audioContext = (() => new AudioContext)()
}

export default audioContext