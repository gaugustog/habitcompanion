import * as Popover from '@radix-ui/react-popover'
import { ProgressBar } from './ProgressBar'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { HabitsList } from './HabitsList'
import { useState } from 'react'


interface HabitDayProps {
   defaultCompleted?: number
   amountTotal?: number
   day: Date
}

export function HabitDay({ defaultCompleted = 0, amountTotal = 0, day }: HabitDayProps) {
   const [amountCompleted, setAmountCompleted] = useState(defaultCompleted)

   const completedPercentage = amountTotal > 0 ? (amountCompleted / amountTotal) * 100 : 0

   function handleCompletedChange(completed: number) {
      setAmountCompleted(completed)
   }

   return (
      <Popover.Root>
         <Popover.Trigger className={clsx('w-10 h-10 rounded-lg transition-colors',{
            'bg-zinc-900 border-zinc-800': completedPercentage === 0,
            'bg-violet-900 border-violet-700': completedPercentage > 0 && completedPercentage < 20,
            'bg-violet-800 border-violet-700': completedPercentage >= 20 && completedPercentage < 40,
            'bg-violet-700 border-violet-600': completedPercentage >= 40 && completedPercentage < 60,
            'bg-violet-600 border-violet-500': completedPercentage >= 60 && completedPercentage < 80,
            'bg-violet-500 border-violet-400': completedPercentage >= 80 && completedPercentage < 100,
            'bg-rose-600 border-rose-500': completedPercentage === 100,            
         })}/>
         <Popover.Portal>
            <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
               <span className='font-semibold text-zinc-400'>{dayjs(day).locale('pt-BR').format('dddd')} </span>
               <span className='mt-1 font-extrabold leading-tight text-3xl'>{dayjs(day).format('DD/MM')}</span>

               <ProgressBar progress={Math.round(completedPercentage)} />

               <HabitsList date={day} onCompletedChange={handleCompletedChange} />              

               <Popover.Arrow height={8} width={16} className='fill-zinc-900'/>
            </Popover.Content>
         </Popover.Portal>
      </Popover.Root>
   )
} 