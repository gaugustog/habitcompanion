import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { GetDayHabitsResponse, getDayHabits } from '../graphql/getDayHabits'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { toggleHabitDone, toggleHabitUndone } from '../graphql/toggleHabitDone'

interface HabitsListProps {
   date: Date
   onCompletedChange?: (completed: number) => void
}

interface ToggleHabitProps {
   habitId?: string
   userId?: string
   day?: Date
   habitCreatedAt?: string
}

export function HabitsList({ date, onCompletedChange }: HabitsListProps) {
   const userId = "a4cc20a8-6c06-40ac-abde-9f022c04c7e4"
   const [habitsInfo, setHabitsInfo] = useState<GetDayHabitsResponse>()
   useEffect(() => {
      // console.log(date.toISOString())
      getDayHabits({ day: date.toISOString() ,userId }).then(response => setHabitsInfo(response))
   }, [date])

   const isDateInPast = dayjs(date).endOf('day').isBefore(new Date())

   function handleToggleHabit({ habitId, userId, day, habitCreatedAt }: ToggleHabitProps) {
      const isHabitDone = habitsInfo?.doneHabits?.some(doneHabit => doneHabit.habitId === habitId)
      let updatedDoneHabits = habitsInfo?.doneHabits || []

      if (isHabitDone && habitsInfo && habitsInfo.doneHabits && habitId && userId) {
         const doneHabitIndex = habitsInfo.doneHabits.findIndex(doneHabit => doneHabit.habitId === habitId)
         if (doneHabitIndex > -1) {
            const doneHabit = habitsInfo.doneHabits[doneHabitIndex]
            toggleHabitUndone({ dayId: doneHabit.dayId , habitId }).then(() => {
               updatedDoneHabits = habitsInfo.doneHabits?.filter(doneHabit => doneHabit.habitId !== habitId) || []               
               setHabitsInfo({
                  ...habitsInfo,
                  doneHabits: updatedDoneHabits
               })
               onCompletedChange && onCompletedChange(updatedDoneHabits.length)
            })
         }
      } else {
         if(habitsInfo && habitId && userId && day && habitCreatedAt) {
            toggleHabitDone({ habitId, userId, day, habitCreatedAt }).then((result) => {
               if (result) {
                  updatedDoneHabits = [...updatedDoneHabits, result]
                  setHabitsInfo({
                     ...habitsInfo,
                     doneHabits: updatedDoneHabits
                  })
                  onCompletedChange && onCompletedChange(updatedDoneHabits.length)
               }
            })
         }
      }
   }

   return (
      <div className='mt-6 flex flex-col gap-3'>
         {habitsInfo?.avaiableHabits?.map(habit => (
            <Checkbox.Root
               key={habit.id}
               className='flex items-center gap-3 group'
               onCheckedChange={() => handleToggleHabit({ habitId: habit.id, userId, day: date, habitCreatedAt: habit.createdAt })}
               disabled={isDateInPast}
               checked={habitsInfo?.doneHabits?.some(doneHabit => doneHabit.habitId === habit.id)}
            >
               <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors'>
                  <Checkbox.Indicator >
                     <Check size={20} weight='bold' className='text-white' />
                  </Checkbox.Indicator>
               </div>                     
               <span className='font-semibold text-zinc-100 leading-tight text-xl group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
                  {habit.title}
               </span>
            </Checkbox.Root>            
         ))}         
      </div> 
   )
}