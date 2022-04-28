setInterval(() => {
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayNight = "AM";
    let day = date.getDay;
    let month = date.getMonth;
    let dat3 = date.getDate;
  
    if (hours > 12) {
      hours = hours - 12;
      dayNight = "PM";
    }
    if (hours < 12) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + dayNight;
  });
  