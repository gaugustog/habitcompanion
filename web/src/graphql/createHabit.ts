import { API } from 'aws-amplify'
import * as mutations from './mutations'
import { GraphQLQuery } from '@aws-amplify/api'
import { CreateHabitInput } from './api'
import { v4 } from 'uuid'

interface CreateHabitProps {
   title: string
   userId?: string
   habitWeekDays: number[]
}

export async function createHabit({ title, userId = "a4cc20a8-6c06-40ac-abde-9f022c04c7e4", habitWeekDays}: CreateHabitProps) {
   const habitDetails: CreateHabitInput = {
      id: v4(),
      title,
      userId,
      habitWeekDays,    
    }
    await API.graphql<GraphQLQuery<CreateHabitInput>>({ 
      query: mutations.createHabit, 
      variables: { input: habitDetails }
    })
}