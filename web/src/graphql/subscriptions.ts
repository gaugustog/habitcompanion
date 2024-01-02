/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHabit = /* GraphQL */ `
  subscription OnCreateHabit($filter: ModelSubscriptionHabitFilterInput) {
    onCreateHabit(filter: $filter) {
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
export const onUpdateHabit = /* GraphQL */ `
  subscription OnUpdateHabit($filter: ModelSubscriptionHabitFilterInput) {
    onUpdateHabit(filter: $filter) {
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
export const onDeleteHabit = /* GraphQL */ `
  subscription OnDeleteHabit($filter: ModelSubscriptionHabitFilterInput) {
    onDeleteHabit(filter: $filter) {
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
export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($filter: ModelSubscriptionDayFilterInput) {
    onCreateDay(filter: $filter) {
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
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($filter: ModelSubscriptionDayFilterInput) {
    onUpdateDay(filter: $filter) {
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
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($filter: ModelSubscriptionDayFilterInput) {
    onDeleteDay(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateHabitsLogs = /* GraphQL */ `
  subscription OnCreateHabitsLogs(
    $filter: ModelSubscriptionHabitsLogsFilterInput
  ) {
    onCreateHabitsLogs(filter: $filter) {
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
export const onUpdateHabitsLogs = /* GraphQL */ `
  subscription OnUpdateHabitsLogs(
    $filter: ModelSubscriptionHabitsLogsFilterInput
  ) {
    onUpdateHabitsLogs(filter: $filter) {
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
export const onDeleteHabitsLogs = /* GraphQL */ `
  subscription OnDeleteHabitsLogs(
    $filter: ModelSubscriptionHabitsLogsFilterInput
  ) {
    onDeleteHabitsLogs(filter: $filter) {
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
