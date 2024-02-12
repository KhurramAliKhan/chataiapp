export const emailValidate =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const dateFormate = (date, noTime) => {
  const d = new Date(date);
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var second = d.getSeconds();
  hours = hours ? (hours < 10 ? '0' + hours : hours) : 24;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  second = second < 60 ? (second < 10 ? '0' + second : second) : second;
  var strTime = hours + ':' + minutes + ':' + second;
  var month = d.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  var currentdate = d.getDate() + 1;
  currentdate = currentdate < 10 ? '0' + currentdate : currentdate;
  return noTime
    ? `${d.getFullYear()}-${month}-${currentdate}`
    : `${d.getFullYear()}-${month}-${currentdate} ${strTime}`;
};
