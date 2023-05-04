function Time(sec){
  if( sec <= 0 || sec > 359999 ){
    return 'Invalid range: maximum time never exceeds 359999';
  } else {
    const hour = Math.floor(sec / 3600).toString();
    const min = Math.floor(sec % 3600 / 60).toString();
    sec = sec % 60;
    return `${hour.length < 2 ? '0'+hour : hour}:${min.length < 2 ? '0'+ min : min}:${sec.toString().length < 2 ? '0'+sec : sec}`;
  }
}
