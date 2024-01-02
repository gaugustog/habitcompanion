import { ModelSortDirection, ModelStringKeyConditionInput, UserByCreatedAtQuery, UserByCreatedAtQueryVariables, UserByDateQuery, UserByDateQueryVariables } from './api'
import { API } from 'aws-amplify'
import * as queries from './queries'
import { GraphQLQuery } from '@aws-amplify/api'
import dayjs from 'dayjs'

interface SummaryHabitsProps {
   day: string
   userId: string
}

export interface DaySummary {
   dayId: string
   daydate: string
   habitsDone: number
   habitsAvaiable: number
}

export async function summaryHabits({ day, userId }:SummaryHabitsProps) {
   const daysSummary: DaySummary[] = []
   const response = await Promise.all([
      getDaysByUser({ day, userId }),
      getHabitsByUser({ day, userId }),
   ])

   const [days, habits] = response
      
   if (days.data?.userByDate?.items && habits.data?.userByCreatedAt?.items) {
      days.data.userByDate.items.forEach((day) => {   
         const habitsDone: string[] = []
         const habitsAvaiable: string[] = []
         day?.dayHabits?.items.forEach((dayhabit) => {
            if (dayhabit?.id) {
               habitsDone.push(dayhabit?.id)   
            }               
         })

         if (habits.data?.userByCreatedAt !== null) {               
            habits.data?.userByCreatedAt?.items.forEach((habit) => {     
               if (habit?.id) {
                  habitsAvaiable.push(habit?.id)   
               }                  
            })               
         }
         if(day?.id && day?.date) {
            daysSummary.push({
               dayId: day?.id,
               daydate: day?.date,
               habitsDone: habitsDone.length,
               habitsAvaiable: habitsAvaiable.length,
            })            
         }                        
      })            
   }
   return daysSummary
}




async function getDaysByUser({ day, userId }:SummaryHabitsProps) {
   const keyCond: ModelStringKeyConditionInput = {
      ge: dayjs(day).add(1, 'day').startOf('day').toISOString(),
   }

   const sortDir: ModelSortDirection = ModelSortDirection.DESC

   const queryVars: UserByDateQueryVariables = {
      userId,
      date: keyCond,      
      limit: 200,
      sortDirection: sortDir,
   }
   return await API.graphql<GraphQLQuery<UserByDateQuery>>(
      {
         query: queries.userByDate,
         variables: queryVars,

      }
   )   
}

export async function getHabitsByUser({ day, userId }:SummaryHabitsProps) {      
   const keyCond: ModelStringKeyConditionInput = {
      ge: dayjs(day).add(1, 'day').startOf('day').toISOString(),
   }
   const queryVars: UserByCreatedAtQueryVariables = {
      userId,
      createdAt: keyCond,
      limit: 100,
   }
   return await API.graphql<GraphQLQuery<UserByCreatedAtQuery>>(
      {
         query: queries.userByCreatedAt,
         variables: queryVars,
      }
   )
}