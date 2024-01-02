import { API } from "aws-amplify"
import * as mutations from './mutations'
import { GraphQLQuery } from '@aws-amplify/api'
import { CreateUserInput, CreateHabitInput, CreateDayInput, CreateHabitsLogsInput } from './api'
import { v4 } from 'uuid'
import dayjs from "dayjs";

export function SeedGQL() {
  const user1_id = v4()
  
  const habit1_id = v4()
  const habit2_id = v4()
  const habit3_id = v4()
  const habit4_id = v4()

  const day1_id = v4()
  const day2_id = v4()
  const day3_id = v4()

  const habit4CreatedDate = dayjs().subtract(1, 'day').startOf('day').toISOString()
  const habit3CreatedDate = dayjs().subtract(2, 'day').startOf('day').toISOString()
  const habit2CreatedDate = dayjs().subtract(3, 'day').startOf('day').toISOString()
  const habit1CreatedDate = dayjs().subtract(4, 'day').startOf('day').toISOString()

  const day3Date = dayjs().startOf('day').toISOString()
  const day2Date = dayjs().subtract(1, 'day').startOf('day').toISOString()
  const day1Date = dayjs().subtract(2, 'day').startOf('day').toISOString()
  
  console.log('user1_id', user1_id)
  console.log('habit1_id', habit1_id)
  console.log('habit2_id', habit2_id)
  console.log('habit3_id', habit3_id)
  console.log('habit4_id', habit4_id)
  console.log('day1_id', day1_id)
  console.log('day2_id', day2_id)
  console.log('day3_id', day3_id)
  console.log('habit1CreatedDate', habit1CreatedDate)
  console.log('habit2CreatedDate', habit2CreatedDate)
  console.log('habit3CreatedDate', habit3CreatedDate)
  console.log('habit4CreatedDate', habit4CreatedDate)
  console.log('day1Date', day1Date)
  console.log('day2Date', day2Date)
  console.log('day3Date', day3Date)

  
  const userDetails: CreateUserInput = {
    id: user1_id,
    username: 'user1',    
  }

  const habitDetails_01: CreateHabitInput = {
    id: habit1_id,
    title: 'Beber 4L de agua ao dia',
    userId: user1_id,
    createdAt: habit1CreatedDate,
    habitWeekDays: [0,1,2,3,4,5,6],    
  }

  const habitDetails_02: CreateHabitInput = {
    id: habit2_id,
    title: 'Fazer 40 minutos de exercício',
    userId: user1_id,
    createdAt: habit2CreatedDate,
    habitWeekDays: [0,1,2,3,4,5,6],    
  }

  const habitDetails_03: CreateHabitInput = {
    id: habit3_id,
    title: 'Ler 10 páginas de um livro',
    userId: user1_id,
    createdAt: habit3CreatedDate,
    habitWeekDays: [0,1,2,3,4,5,6],    
  }

  const habitDetails_04: CreateHabitInput = {
    id: habit4_id,
    title: 'Não comer doces',
    userId: user1_id,
    createdAt: habit4CreatedDate,
    habitWeekDays: [0,1,2,3,4,5,6],    
  }

  const dayDetails_01: CreateDayInput = {
    id: day1_id,
    date: day1Date,    
    userId: user1_id,    
  }

  const dayDetails_02: CreateDayInput = {
    id: day2_id,
    date: day2Date,    
    userId: user1_id,    
  }

  const dayDetails_03: CreateDayInput = {
    id: day3_id,
    date: day3Date,    
    userId: user1_id,    
  }

  const habitsLogsDay1_Habit1: CreateHabitsLogsInput = {
    id: v4(),
    habitId: habit1_id,
    habitcreatedAt: habit1CreatedDate,
    dayId: day1_id,
    daydate: day1Date,
  }

  const habitsLogsDay1_Habit2: CreateHabitsLogsInput = {
    id: v4(),
    habitId: habit2_id,
    dayId: day1_id,
    habitcreatedAt: habit2CreatedDate,
    daydate: day1Date,
  }  

  const habitsLogsDay2_Habit2: CreateHabitsLogsInput = {
    id: v4(),
    habitId: habit2_id,
    dayId: day2_id,
    habitcreatedAt: habit2CreatedDate,
    daydate: day2Date,
  }
  
  const habitsLogsDay3_Habit1: CreateHabitsLogsInput = {
    id: v4(),
    habitId: habit1_id,
    dayId: day3_id,
    habitcreatedAt: habit1CreatedDate,
    daydate: day3Date,
  }

  const habitsLogsDay3_Habit2: CreateHabitsLogsInput = {
    id: v4(),
    habitId: habit2_id,
    dayId: day3_id,
    habitcreatedAt: habit2CreatedDate,
    daydate: day3Date,
  }

  const habitsLogsDay3_Habit3: CreateHabitsLogsInput = {
    id: v4(),
    habitId: habit3_id,
    dayId: day3_id,
    habitcreatedAt: habit3CreatedDate,
    daydate: day3Date,
  }

  const habitsLogsDay3_Habit4: CreateHabitsLogsInput = {
    id: v4(),
    habitId: habit4_id,
    dayId: day3_id,
    habitcreatedAt: habit4CreatedDate,
    daydate: day3Date,
  }
  
  API.graphql<GraphQLQuery<CreateUserInput>>({ 
    query: mutations.createUser, 
    variables: { input: userDetails }
  }).then(() => {
    Promise.all([
      API.graphql<GraphQLQuery<CreateHabitInput>>({ 
        query: mutations.createHabit, 
        variables: { input: habitDetails_01 }
      }),    
      API.graphql<GraphQLQuery<CreateHabitInput>>({
        query: mutations.createHabit,
        variables: { input: habitDetails_02 }
      }),    
      API.graphql<GraphQLQuery<CreateHabitInput>>({
        query: mutations.createHabit,
        variables: { input: habitDetails_03 }
      }),    
      API.graphql<GraphQLQuery<CreateHabitInput>>({
        query: mutations.createHabit,
        variables: { input: habitDetails_04 }
      }),    
      API.graphql<GraphQLQuery<CreateDayInput>>({
        query: mutations.createDay,
        variables: { input: dayDetails_01 }
      }),    
      API.graphql<GraphQLQuery<CreateDayInput>>({
        query: mutations.createDay,
        variables: { input: dayDetails_02 }
      }),    
      API.graphql<GraphQLQuery<CreateDayInput>>({
        query: mutations.createDay,
        variables: { input: dayDetails_03 }
      }),
    ]).then(() => {
      Promise.all([
        API.graphql<GraphQLQuery<CreateHabitsLogsInput>>({
          query: mutations.createHabitsLogs,
          variables: { input: habitsLogsDay1_Habit1 }
        }),    
        API.graphql<GraphQLQuery<CreateHabitsLogsInput>>({
          query: mutations.createHabitsLogs,
          variables: { input: habitsLogsDay1_Habit2 }
        }),    
        API.graphql<GraphQLQuery<CreateHabitsLogsInput>>({
          query: mutations.createHabitsLogs,
          variables: { input: habitsLogsDay2_Habit2 }
        }),    
        API.graphql<GraphQLQuery<CreateHabitsLogsInput>>({
          query: mutations.createHabitsLogs,
          variables: { input: habitsLogsDay3_Habit1 }
        }),    
        API.graphql<GraphQLQuery<CreateHabitsLogsInput>>({
          query: mutations.createHabitsLogs,
          variables: { input: habitsLogsDay3_Habit2 }
        }),    
        API.graphql<GraphQLQuery<CreateHabitsLogsInput>>({
          query: mutations.createHabitsLogs,
          variables: { input: habitsLogsDay3_Habit3 }
        }),    
        API.graphql<GraphQLQuery<CreateHabitsLogsInput>>({
          query: mutations.createHabitsLogs,
          variables: { input: habitsLogsDay3_Habit4 }
        }),
      ]).then(() => {
        console.log('seeded')
      })
    })    
  })
}
