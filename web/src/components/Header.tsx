import logoImage from '../assets/logo.svg'
import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { NewHabitForm } from './NewHabitForm'

export function Header() {
  return(
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
        <img src={logoImage} alt="Habits Logo"/>

        <Dialog.Root>
          <Dialog.Trigger type="button" className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors'>
            <Plus size={20} className='text-violet-500' />
            Novo Hábito
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
            <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <Dialog.Close className='absolute top-6 right-6 text-zinc-400 hover:text-zinc-200'>
                <X />
              </Dialog.Close>
              <Dialog.Title className='text-3xl leading-tight font-extrabold text-zinc-100'>Criar Hábito</Dialog.Title>
              <Dialog.Description className='text-zinc-400'>Adicione um novo hábito para acompanhar</Dialog.Description>              
              <NewHabitForm />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>        
      </div>
  )
}