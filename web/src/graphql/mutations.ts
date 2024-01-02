/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHabit = /* GraphQL */ `
  mutation CreateHabit(
    $input: CreateHabitInput!
    $condition: ModelHabitConditionInput
  ) {
    createHabit(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      streak
      habitDays {
        items {
          id
          habitId
          habitcreatedAt
          dayId
          daydate
          habit {
            id
            title
            description
            createdAt
            streak
            habitWeekDays
            userId
            updatedAt
            userHabitsId
            __typename
          }
          day {
            id
            date
            userId
            createdAt
            updatedAt
            userDaysId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      habitWeekDays
      user {
        id
        username
        habits {
          items {
            id
            title
            description
            createdAt
            streak
            habitWeekDays
            userId
            updatedAt
            userHabitsId
            __typename
          }
          nextToken
          __typename
        }
        days {
          items {
            id
            date
            userId
            createdAt
            updatedAt
            userDaysId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      updatedAt
      userHabitsId
      __typename
    }
  }
`;
export const updateHabit = /* GraphQL */ `
  mutation UpdateHabit(
    $input: UpdateHabitInput!
    $condition: ModelHabitConditionInput
  ) {
    updateHabit(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      streak
      habitDays {
        items {
          id
          habitId
          habitcreatedAt
          dayId
          daydate
          habit {
            id
            title
            description
            createdAt
            streak
            habitWeekDays
            userId
            updatedAt
            userHabitsId
            __typename
          }
          day {
            id
            date
            userId
            createdAt
            updatedAt
            userDaysId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      habitWeekDays
      user {
        id
        username
        habits {
          items {
            id
            title
            description
            createdAt
            streak
            habitWeekDays
            userId
            updatedAt
            userHabitsId
            __typename
          }
          nextToken
          __typename
        }
        days {
          items {
            id
            date
            userId
            createdAt
            updatedAt
            userDaysId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      updatedAt
      userHabitsId
      __typename
    }
  }
`;
export const deleteHabit = /* GraphQL */ `
  mutation DeleteHabit(
    $input: DeleteHabitInput!
    $condition: ModelHabitConditionInput
  ) {
    deleteHabit(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      streak
      habitDays {
        items {
          id
          habitId
          habitcreatedAt
          dayId
          daydate
          habit {
            id
            title
            description
            createdAt
            streak
            habitWeekDays
            userId
            updatedAt
            userHabitsId
            __typename
          }
          day {
            id
            date
            userId
            createdAt
            updatedAt
            userDaysId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      habitWeekDays
      user {
        id
        username
        habits {
          items {
            id
            title
            description
            createdAt
            streak
            habitWeekDays
            userId
            updatedAt
            userHabitsId
            __typename
          }
          nextToken
          __typename
        }
        days {
          items {
            id
            date
            userId
            createdAt
            updatedAt
            userDaysId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      updatedAt
      userHabitsId
      __typename
    }
  }
`;
export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
      id
      date
      dayHabits {
        items {
          id
          habitId
          habitcreatedAt
          dayId
          daydate
          habit {
            id
            title
            description
            createdAt
            streak
            habitWeekDays
            userId
            updatedAt
            userHabitsId
            __typename
          }
          day {
            id
            date
            userId
            createdAt
            updatedAt
            userDaysId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      user {
        id
        username
        habits {
          items {
            id
            title
            description
            createdAt
            streak
            habitWeekDays
            userId
            updatedAt
            userHabitsId
            __typename
          }
          nextToken
          __typename
        }
        days {
          items {
            id
            date
            userId
            createdAt
            updatedAt
            userDaysId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      createdAt
      updatedAt
      userDaysId
      __typename
    }
  }
`;
export const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
      id
      date
      dayHabits {
        items {
          id
          habitId
          habitcreatedAt
          dayId
          daydate
          habit {
            id
            title
            description
            createdAt
            streak
            habitWeekDays
            userId
            updatedAt
            userHabitsId
            __typename
          }
          day {
            id
            date
            userId
            createdAt
            updatedAt
            userDaysId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      user {
        id
        username
        habits {
          items {
            id
            title
            description
            createdAt
            streak
            habitWeekDays
            userId
            updatedAt
            userHabitsId
            __typename
          }
          nextToken
          __typename
        }
        days {
          items {
            id
            date
            userId
            createdAt
            updatedAt
            userDaysId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      createdAt
      updatedAt
      userDaysId
      __typename
    }
  }
`;
export const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
      id
      date
      dayHabits {
        items {
          id
          habitId
          habitcreatedAt
          dayId
          daydate
          habit {
            id
            title
            description
            createdAt
            streak
            habitWeekDays
            userId
            updatedAt
            userHabitsId
            __typename
          }
          day {
            id
            date
            userId
            createdAt
            updatedAt
            userDaysId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      user {
        id
        username
        habits {
          items {
            id
            title
            description
            createdAt
            streak
            habitWeekDays
            userId
            updatedAt
            userHabitsId
            __typename
          }
          nextToken
          __typename
        }
        days {
          items {
            id
            date
            userId
            createdAt
            updatedAt
            userDaysId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      createdAt
      updatedAt
      userDaysId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      habits {
        items {
          id
          title
          description
          createdAt
          streak
          habitDays {
            nextToken
            __typename
          }
          habitWeekDays
          user {
            id
            username
            createdAt
            updatedAt
            __typename
          }
          userId
          updatedAt
          userHabitsId
          __typename
        }
        nextToken
        __typename
      }
      days {
        items {
          id
          date
          dayHabits {
            nextToken
            __typename
          }
          user {
            id
            username
            createdAt
            updatedAt
            __typename
          }
          userId
          createdAt
          updatedAt
          userDaysId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      habits {
        items {
          id
          title
          description
          createdAt
          streak
          habitDays {
            nextToken
            __typename
          }
          habitWeekDays
          user {
            id
            username
            createdAt
            updatedAt
            __typename
          }
          userId
          updatedAt
          userHabitsId
          __typename
        }
        nextToken
        __typename
      }
      days {
        items {
          id
          date
          dayHabits {
            nextToken
            __typename
          }
          user {
            id
            username
            createdAt
            updatedAt
            __typename
          }
          userId
          createdAt
          updatedAt
          userDaysId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      habits {
        items {
          id
          title
          description
          createdAt
          streak
          habitDays {
            nextToken
            __typename
          }
          habitWeekDays
          user {
            id
            username
            createdAt
            updatedAt
            __typename
          }
          userId
          updatedAt
          userHabitsId
          __typename
        }
        nextToken
        __typename
      }
      days {
        items {
          id
          date
          dayHabits {
            nextToken
            __typename
          }
          user {
            id
            username
            createdAt
            updatedAt
            __typename
          }
          userId
          createdAt
          updatedAt
          userDaysId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHabitsLogs = /* GraphQL */ `
  mutation CreateHabitsLogs(
    $input: CreateHabitsLogsInput!
    $condition: ModelHabitsLogsConditionInput
  ) {
    createHabitsLogs(input: $input, condition: $condition) {
      id
      habitId
      habitcreatedAt
      dayId
      daydate
      habit {
        id
        title
        description
        createdAt
        streak
        habitDays {
          items {
            id
            habitId
            habitcreatedAt
            dayId
            daydate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        habitWeekDays
        user {
          id
          username
          habits {
            nextToken
            __typename
          }
          days {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        updatedAt
        userHabitsId
        __typename
      }
      day {
        id
        date
        dayHabits {
          items {
            id
            habitId
            habitcreatedAt
            dayId
            daydate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        user {
          id
          username
          habits {
            nextToken
            __typename
          }
          days {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        createdAt
        updatedAt
        userDaysId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateHabitsLogs = /* GraphQL */ `
  mutation UpdateHabitsLogs(
    $input: UpdateHabitsLogsInput!
    $condition: ModelHabitsLogsConditionInput
  ) {
    updateHabitsLogs(input: $input, condition: $condition) {
      id
      habitId
      habitcreatedAt
      dayId
      daydate
      habit {
        id
        title
        description
        createdAt
        streak
        habitDays {
          items {
            id
            habitId
            habitcreatedAt
            dayId
            daydate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        habitWeekDays
        user {
          id
          username
          habits {
            nextToken
            __typename
          }
          days {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        updatedAt
        userHabitsId
        __typename
      }
      day {
        id
        date
        dayHabits {
          items {
            id
            habitId
            habitcreatedAt
            dayId
            daydate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        user {
          id
          username
          habits {
            nextToken
            __typename
          }
          days {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        createdAt
        updatedAt
        userDaysId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteHabitsLogs = /* GraphQL */ `
  mutation DeleteHabitsLogs(
    $input: DeleteHabitsLogsInput!
    $condition: ModelHabitsLogsConditionInput
  ) {
    deleteHabitsLogs(input: $input, condition: $condition) {
      id
      habitId
      habitcreatedAt
      dayId
      daydate
      habit {
        id
        title
        description
        createdAt
        streak
        habitDays {
          items {
            id
            habitId
            habitcreatedAt
            dayId
            daydate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        habitWeekDays
        user {
          id
          username
          habits {
            nextToken
            __typename
          }
          days {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        updatedAt
        userHabitsId
        __typename
      }
      day {
        id
        date
        dayHabits {
          items {
            id
            habitId
            habitcreatedAt
            dayId
            daydate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        user {
          id
          username
          habits {
            nextToken
            __typename
          }
          days {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        createdAt
        updatedAt
        userDaysId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
