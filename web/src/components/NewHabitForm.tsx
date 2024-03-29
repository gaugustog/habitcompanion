import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from 'react'
import { createHabit } from '../graphql/createHabit'


const avaiableWeekDays = [
   'Domingo',
   'Segunda-feira',
   'Terça-feira',
   'Quarta-feira',
   'Quinta-feira',
   'Sexta-feira',
   'Sábado'
]

export function NewHabitForm () {
   const [title, setTitle] = useState('')
   const [weekDays, setWeekDays] = useState<number[]>([])

   async function createNewHabit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()

      if (!title || weekDays.length === 0) return

      await createHabit({  title, habitWeekDays: weekDays })

      setTitle('')
      setWeekDays([])

      alert('Hábito criado com sucesso!')      
   }

   function handleToggleWeekDay(weekDay: number) {
      if(weekDays.includes(weekDay)) {
         setWeekDays(weekDays.filter(day => day !== weekDay))
      } else {
         setWeekDays([...weekDays, weekDay])
      }      
   }



   return(
      <form onSubmit={createNewHabit} className='w-full flex flex-col mt-6'>
         <label htmlFor='title' className='font-semibold leading-tight'>
            Qual hábito você quer se comprometer?
         </label>

         <input
            type='text'
            id='title'
            placeholder='Ex: Ler 1 capítulo por dia'
            className='p-4 rounded-lg bg-zinc-800 outline-none text-zinc-100 mt-3 placeholder:text-zinc-400'
            value={title}
            onChange={event => setTitle(event.target.value)}
            autoFocus
         />

         <label htmlFor='' className='font-semibold leading-tight mt-4'>
            Qual a recorrência desse hábito?
         </label>

         <div className='flex flex-col gap-2 mt-3'>
            {avaiableWeekDays.map((weekDay, index) => {
               return(
                  <Checkbox.Root
                     key={weekDay}
                     className='flex items-center gap-3 group'
                     checked={weekDays.includes(index)}
                     onCheckedChange={() => handleToggleWeekDay(index)}
                  >
                     <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors'>
                        <Checkbox.Indicator >
                           <Check size={20} weight='bold' className='text-white' />
                        </Checkbox.Indicator>
                     </div>                     
                     <span className='font-semibold text-zinc-100 leading-tight'>
                        {weekDay}
                     </span>
                  </Checkbox.Root>
               )
            })}
         </div>

         <button 
            type='submit' 
            className='mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500 transition-colors'
         >
            <Check size={20} weight='bold'/>
            Confirmar
         </button>
      </form>
   )
}
