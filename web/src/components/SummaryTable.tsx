import { useEffect, useState } from 'react'
import { generateYearToDateDates } from '../utils/generateYearToDateDates'
import { HabitDay } from './HabitDay'
import { DaySummary, summaryHabits } from '../graphql/summaryHabits'
import dayjs from 'dayjs'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateYearToDateDates()

export function SummaryTable() {
   const userId = "a4cc20a8-6c06-40ac-abde-9f022c04c7e4"
   const [summary, setSummary] = useState<DaySummary[]>([])
   useEffect(() => {
      summaryHabits({ day: summaryDates[0].toISOString(),userId })
         .then(response => setSummary(response))
   }, [])

   console.log('sumario: ', summary)
   return (
      <div className='w-full flex'>
         <div className='grid grid-rows-7 grid-flow-row gap-3'>
            {weekDays.map((day, index) => {
               return(
                  <div key={index} className='text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center'>
                     {day}
                  </div>
               )
               })
            }
         </div>  
         <div className='grid grid-rows-7 grid-flow-col gap-3'>
            {summary.length > 0 && summaryDates.map((date) => {
               const dayInSummary = summary.find(day => {
                  return dayjs(date).isSame(dayjs(day.daydate).toDate(), 'day')
               })
               return(
                  <HabitDay 
                     key={date.toDateString()} 
                     defaultCompleted={dayInSummary?.habitsDone} 
                     amountTotal={dayInSummary?.habitsAvaiable} 
                     day={date} 
                  />
               )
               })
            }
         </div>       
      </div>
   )
}