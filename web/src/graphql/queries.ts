/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHabit = /* GraphQL */ `
  query GetHabit($id: ID!, $createdAt: AWSDateTime!) {
    getHabit(id: $id, createdAt: $createdAt) {
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
export const listHabits = /* GraphQL */ `
  query ListHabits(
    $id: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelHabitFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listHabits(
      id: $id
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDay = /* GraphQL */ `
  query GetDay($id: ID!, $date: AWSDateTime!) {
    getDay(id: $id, date: $date) {
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
export const listDays = /* GraphQL */ `
  query ListDays(
    $id: ID
    $date: ModelStringKeyConditionInput
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDays(
      id: $id
      date: $date
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getHabitsLogs = /* GraphQL */ `
  query GetHabitsLogs($id: ID!) {
    getHabitsLogs(id: $id) {
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
export const listHabitsLogs = /* GraphQL */ `
  query ListHabitsLogs(
    $filter: ModelHabitsLogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHabitsLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        day {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userByCreatedAt = /* GraphQL */ `
  query UserByCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelHabitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const userByDate = /* GraphQL */ `
  query UserByDate(
    $userId: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByDate(
      userId: $userId
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const habitsLogsByHabitIdAndHabitcreatedAt = /* GraphQL */ `
  query HabitsLogsByHabitIdAndHabitcreatedAt(
    $habitId: ID!
    $habitcreatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelHabitsLogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    habitsLogsByHabitIdAndHabitcreatedAt(
      habitId: $habitId
      habitcreatedAt: $habitcreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        day {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const habitsLogsByDayIdAndDaydate = /* GraphQL */ `
  query HabitsLogsByDayIdAndDaydate(
    $dayId: ID!
    $daydate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelHabitsLogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    habitsLogsByDayIdAndDaydate(
      dayId: $dayId
      daydate: $daydate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        day {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
