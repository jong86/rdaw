export default () => {
  return (
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37: {
          console.log('left');
          break;
        }
        case 39: {
          console.log('right');
          break;
        }
        default: {
          break;
        }
      }
    })
  )
}