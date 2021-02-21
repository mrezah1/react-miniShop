const DateForamat = (timeStamp) => {
  const date = new Date(timeStamp)
  const dateOut = [
    date.getFullYear(),
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
    date.getDate() + 1 < 10 ? `0${date.getDate() + 1}` : date.getDate() + 1,
  ]
  const timeOut = date.toLocaleTimeString('en')
  return [dateOut.join('-'), timeOut]
}
export default DateForamat
