// @flow
import context from '../audioContext'

const exists = (effect: Object): boolean => {
  return typeof effect !== 'function'
}

export default class {
  masterGain: Object;
  preFXGain: Object;
  overdriveGain: Object;

  deviceChain: Array<Object>;


  constructor(): void {
    this.preFXGain = context.createGain();
    this.masterGain = context.createGain();

    this.deviceChain = [];
    this.deviceChain.push(this.preFXGain);
    this.deviceChain.push(this.masterGain);

    this._connectAllNodesInDeviceChain();
  }

  _connectAllNodesInDeviceChain(): void {
    let i: number;
    const deviceChainLength = this.deviceChain.length;
    for (i = 0; i < deviceChainLength - 1; i++) {
      this.deviceChain[i].connect(this.deviceChain[i + 1])
    }

    this.masterGain.connect(context.destination);
  }

  _disconnectAllNodesInDeviceChain(): void {
    let i: number;
    const deviceChainLength = this.deviceChain.length;
    for (i = 0; i < deviceChainLength; i++) {
      this.deviceChain[i].disconnect()
    }
  }

  overdrive(): Object {
    if (!exists(this.overdriveGain)) {
      this.overdriveGain = context.createGain();
      this.overdriveGain.gain.value = 0.1;
      debugger

      this._disconnectAllNodesInDeviceChain();
      this.deviceChain.splice(-1, 0, this.overdriveGain);
      this._connectAllNodesInDeviceChain();
    }

    console.log(this.deviceChain)
    return this;
  }
}