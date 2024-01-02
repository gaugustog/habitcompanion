import dayjs from 'dayjs'

export function generateYearToDateDates() {
   const firstDay = dayjs().subtract(4, 'months').startOf('day')
   const today = dayjs().startOf('day')

   const dates = []
   let compareDate = firstDay

   while (compareDate.isBefore(today) || compareDate.isSame(today)) {
      dates.push(compareDate.toDate())
      compareDate = compareDate.add(1, 'day')
   }
   return dates
}