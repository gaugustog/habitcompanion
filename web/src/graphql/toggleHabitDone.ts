import { API } from 'aws-amplify'
import * as mutations from './mutations'
import * as queries from './queries'
import { GraphQLQuery } from '@aws-amplify/api'
import { 
   CreateHabitsLogsInput, 
   DeleteHabitsLogsInput, 
   HabitsLogsByDayIdAndDaydateQuery, 
   HabitsLogsByDayIdAndDaydateQueryVariables, 
   ModelStringKeyConditionInput,
   UserByDateQuery,
   UserByDateQueryVariables,
   CreateDayInput,
} from './api'
import { v4 } from 'uuid'
import dayjs from 'dayjs'
import { DayHabit } from './getDayHabits'

interface ToggleHabitDoneProps {   
   userId: string
   habitId: string   
   habitCreatedAt: string
   day: Date
}

export async function toggleHabitDone({ habitId,habitCreatedAt, day, userId = "a4cc20a8-6c06-40ac-abde-9f022c04c7e4"}: ToggleHabitDoneProps): Promise<DayHabit|null> {
   let dayId: string | null = null
   let newDayHabitDone: DayHabit | null = null

   const keyCond: ModelStringKeyConditionInput = {
      between: [dayjs(day).startOf('day').toISOString(), dayjs(day).add(1, 'day').startOf('day').toISOString()],
   }
   const queryVarsDay: UserByDateQueryVariables = {
      userId,
      date: keyCond,      
      limit: 100,
   }
   const responseDay = await API.graphql<GraphQLQuery<UserByDateQuery>>(
      {
         query: queries.userByDate,
         variables: queryVarsDay,
      }
   )

   if (responseDay.data?.userByDate?.items[0]?.dayHabits) {
      responseDay.data?.userByDate?.items[0]?.dayHabits?.items.map((item) => {
         if(item){
            dayId = item.dayId
         }         
      })
   }

   if (dayId === null) {
      const newDay: CreateDayInput = {
         id: v4(),
         userId,
         date: dayjs(day).startOf('day').toISOString(),
      }
      await API.graphql<GraphQLQuery<CreateDayInput>>({ 
         query: mutations.createDay, 
         variables: { input: newDay }
      })
      if(newDay.id) {
         dayId = newDay.id
      }
   }
   
   if (dayId !== null) {
      const newHabitLogWithDay: CreateHabitsLogsInput = {
         id: v4(),
         habitId,
         dayId: dayId ,
         daydate: dayjs(day).startOf('day').toISOString(),
         habitcreatedAt: habitCreatedAt,
      }
      await API.graphql<GraphQLQuery<CreateHabitsLogsInput>>({ 
         query: mutations.createHabitsLogs, 
         variables: { input: newHabitLogWithDay }
      })

      newDayHabitDone = {
         id: userId,
         habitId: newHabitLogWithDay.habitId,
         habitcreatedAt: newHabitLogWithDay.habitcreatedAt,
         dayId: newHabitLogWithDay.dayId,
         daydate: newHabitLogWithDay.daydate,
         createdAt: dayjs().toISOString(),
         updatedAt: dayjs().toISOString(),
      }
   }
   return newDayHabitDone
}

interface ToggleHabitUndoneProps {   
   dayId: string
   habitId: string      
}


export async function toggleHabitUndone({dayId, habitId}: ToggleHabitUndoneProps) {
   let habitLogId: string | undefined = undefined
   const queryVars: HabitsLogsByDayIdAndDaydateQueryVariables = {
      dayId,
      limit: 100,
   }

   const response = await API.graphql<GraphQLQuery<HabitsLogsByDayIdAndDaydateQuery>>({ 
      query: queries.habitsLogsByDayIdAndDaydate, 
      variables: queryVars 
   })

   if (response.data?.habitsLogsByDayIdAndDaydate?.items) {
      if (response.data?.habitsLogsByDayIdAndDaydate?.items.length > 0) {
         const habitIndex = response.data?.habitsLogsByDayIdAndDaydate?.items.findIndex(habit => habit?.habitId === habitId)
         if(habitIndex > -1) {
            habitLogId = response.data?.habitsLogsByDayIdAndDaydate?.items[habitIndex]?.id
         }
      }
   }

   if(habitLogId !== null) {   
      await API.graphql<GraphQLQuery<DeleteHabitsLogsInput>>({ 
               query: mutations.deleteHabitsLogs, 
               variables: { input: { id: habitLogId } }
            })
   }
}