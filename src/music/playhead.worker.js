let barStartTime;

onmessage = e => {
  switch(e.data.type) {
    case 'START': {
      barStartTime = e.data.barStartTime
      let currentTime = barStartTime
      console.log('currentTime - barStartTime', currentTime - barStartTime);
      while (currentTime - barStartTime < 10) {
        currentTime = performance.now()
        postMessage({ type: 'SCHEDULE_NEXT_BAR' })
      }
    }
  }
}