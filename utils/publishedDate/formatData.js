// News data format
function addLeadingZero(num) {
  num = num.toString();
  while (num.length < 2) num = '0' + num;
  return num;
}
function addLeadingZero2(num) {
  num = num.toString();
  while (num.length > 2) num = num - '2000';
  return num;
}

export function formatPublishedDateForDateTime(dateString) {
  const timestamp = Date.parse(dateString);
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${addLeadingZero(
    date.getMonth() + 1,
  )}-${date.getDate()}`;
}

export function formatPublishedDateForDisplay(dateString) {
  const timestamp = Date.parse(dateString);
  const date = new Date(timestamp);
  return `${addLeadingZero2(
    date.getFullYear())}.${date.getMonth()}.${date.getDate()}`;
}
