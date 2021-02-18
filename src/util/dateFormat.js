const DateForamat = (timeStamp) => {
  const date = new Date(timeStamp)
  // const day = date.toLocaleDateString('en', { day: 'numeric' })
  // const month = date.toLocaleDateString('en', { month: 'numeric' })
  // const year = date.toLocaleDateString('en', { year: 'numeric' })

  const dateOut = date
    .toLocaleDateString('en', {
      month: '2-digit',
      year: 'numeric',
      day: '2-digit',
    })
    // .toString() 
    // .split('/')
    // .join(' / ')
  const timeOut = date.toLocaleTimeString('en')
  return [dateOut, timeOut]
}
export default DateForamat
