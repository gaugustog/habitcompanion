import { API } from 'aws-amplify'
import * as queries from './queries'
import { GraphQLQuery } from '@aws-amplify/api'
import { 
   Habit,
   ModelStringKeyConditionInput, 
   UserByCreatedAtQuery, 
   UserByCreatedAtQueryVariables,
   UserByDateQuery,
   UserByDateQueryVariables,
} from './api'
import dayjs from 'dayjs'

interface GetDayHabitsProps {
   day: string
   userId: string
}

export interface GetDayHabitsResponse {
   avaiableHabits: Habit[] | null
   doneHabits: DayHabit[] | null
}

export interface DayHabitsFullResponse extends DayHabit {
   isDone: boolean
}


export interface DayHabit {
   id?: string
   habitId: string
   habitcreatedAt: string
   dayId: string
   daydate: string
   createdAt: string
   updatedAt: string
}

export interface GetDayDoneHabitsResponse {
   doneHabits: DayHabit[]
}


export async function getDayHabits({ day, userId }:GetDayHabitsProps): Promise<GetDayHabitsResponse> {
   const response = await Promise.all([
      getDayAvaiableHabits({ day, userId }),
      getDayDoneHabits({ day, userId }),
   ])
   const [avaiableHabits, doneHabits] = response
   console.log('avaiableHabits', avaiableHabits)
   console.log('doneHabits', doneHabits)
   return { ...avaiableHabits, ...doneHabits }
}

export async function getDayHabitsFull({ day, userId }:GetDayHabitsProps): Promise<GetDayHabitsResponse> {
   const response = await Promise.all([
      getDayAvaiableHabits({ day, userId }),
      getDayDoneHabits({ day, userId }),
   ])
   const [avaiableHabits, doneHabits] = response
   console.log('avaiableHabits', avaiableHabits)
   console.log('doneHabits', doneHabits)
   return { ...avaiableHabits, ...doneHabits }
}

interface GetDayAvaiableHabitsResponse {
   avaiableHabits: Habit[]
}

export async function getDayAvaiableHabits({ day, userId }:GetDayHabitsProps): Promise<GetDayAvaiableHabitsResponse> {
   const avaiableHabits: Habit[] = []
   
   const keyCond: ModelStringKeyConditionInput = {
      lt: dayjs(day).add(1, 'day').startOf('day').toISOString(),
   }
   const queryVars: UserByCreatedAtQueryVariables = {
      userId,
      createdAt: keyCond,
      limit: 100,
   }
   const response = await API.graphql<GraphQLQuery<UserByCreatedAtQuery>>(
      {
         query: queries.userByCreatedAt,
         variables: queryVars,
      }
   )

   if (response.data?.userByCreatedAt?.items) {
      response.data?.userByCreatedAt?.items.map((item) => {
         if(item){
            avaiableHabits.push({
               __typename: 'Habit',
               id: item.id,               
               title: item.title,
               description: item.description,
               createdAt: item.createdAt,
               streak: item.streak,
               habitWeekDays: item.habitWeekDays,
               userId: item.userId,               
               updatedAt: item.updatedAt
            })
         }         
      })
   }

   return { avaiableHabits }
}


export interface GetDayDoneHabitsResponse {
   doneHabits: DayHabit[]
}

export async function getDayDoneHabits({ day, userId }:GetDayHabitsProps): Promise<GetDayDoneHabitsResponse> {
   const doneHabits: DayHabit[] = []

   const keyCond: ModelStringKeyConditionInput = {
      between: [dayjs(day).startOf('day').toISOString(), dayjs(day).add(1, 'day').startOf('day').toISOString()],
   }
   const queryVars: UserByDateQueryVariables = {
      userId,
      date: keyCond,      
      limit: 100,
   }
   const response = await API.graphql<GraphQLQuery<UserByDateQuery>>(
      {
         query: queries.userByDate,
         variables: queryVars,
      }
   )

   if (response.data?.userByDate?.items[0]?.dayHabits) {
      response.data?.userByDate?.items[0]?.dayHabits?.items.map((item) => {
         if(item){
            doneHabits.push({
               id: item.id,
               habitId: item.habitId,
               habitcreatedAt: item.habitcreatedAt,
               dayId: item.dayId,
               daydate: item.daydate,
               createdAt: item.createdAt,
               updatedAt: item.updatedAt,
            })
         }         
      })
   }

   return { doneHabits }
}