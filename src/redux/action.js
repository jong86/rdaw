//@flow

export default (type: string, options: Object): Object => {
  console.log("Action dispatched: ", type, options)
  return { type, ...options }
}
