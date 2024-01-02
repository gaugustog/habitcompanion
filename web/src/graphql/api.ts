/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateHabitInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  createdAt?: string | null,
  streak?: number | null,
  habitWeekDays?: Array< number | null > | null,
  userId: string,
  userHabitsId?: string | null,
};

export type ModelHabitConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  streak?: ModelIntInput | null,
  habitWeekDays?: ModelIntInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelHabitConditionInput | null > | null,
  or?: Array< ModelHabitConditionInput | null > | null,
  not?: ModelHabitConditionInput | null,
  userHabitsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Habit = {
  __typename: "Habit",
  id: string,
  title: string,
  description?: string | null,
  createdAt: string,
  streak?: number | null,
  habitDays?: ModelHabitsLogsConnection | null,
  habitWeekDays?: Array< number | null > | null,
  user?: User | null,
  userId: string,
  updatedAt: string,
  userHabitsId?: string | null,
};

export type ModelHabitsLogsConnection = {
  __typename: "ModelHabitsLogsConnection",
  items:  Array<HabitsLogs | null >,
  nextToken?: string | null,
};

export type HabitsLogs = {
  __typename: "HabitsLogs",
  id: string,
  habitId: string,
  habitcreatedAt: string,
  dayId: string,
  daydate: string,
  habit: Habit,
  day: Day,
  createdAt: string,
  updatedAt: string,
};

export type Day = {
  __typename: "Day",
  id: string,
  date: string,
  dayHabits?: ModelHabitsLogsConnection | null,
  user: User,
  userId: string,
  createdAt: string,
  updatedAt: string,
  userDaysId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  habits?: ModelHabitConnection | null,
  days?: ModelDayConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelHabitConnection = {
  __typename: "ModelHabitConnection",
  items:  Array<Habit | null >,
  nextToken?: string | null,
};

export type ModelDayConnection = {
  __typename: "ModelDayConnection",
  items:  Array<Day | null >,
  nextToken?: string | null,
};

export type UpdateHabitInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  createdAt: string,
  streak?: number | null,
  habitWeekDays?: Array< number | null > | null,
  userId?: string | null,
  userHabitsId?: string | null,
};

export type DeleteHabitInput = {
  id: string,
  createdAt: string,
};

export type CreateDayInput = {
  id?: string | null,
  date: string,
  userId: string,
  userDaysId?: string | null,
};

export type ModelDayConditionInput = {
  userId?: ModelIDInput | null,
  and?: Array< ModelDayConditionInput | null > | null,
  or?: Array< ModelDayConditionInput | null > | null,
  not?: ModelDayConditionInput | null,
  userDaysId?: ModelIDInput | null,
};

export type UpdateDayInput = {
  id: string,
  date: string,
  userId?: string | null,
  userDaysId?: string | null,
};

export type DeleteDayInput = {
  id: string,
  date: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateHabitsLogsInput = {
  id?: string | null,
  habitId: string,
  habitcreatedAt: string,
  dayId: string,
  daydate: string,
};

export type ModelHabitsLogsConditionInput = {
  habitId?: ModelIDInput | null,
  habitcreatedAt?: ModelStringInput | null,
  dayId?: ModelIDInput | null,
  daydate?: ModelStringInput | null,
  and?: Array< ModelHabitsLogsConditionInput | null > | null,
  or?: Array< ModelHabitsLogsConditionInput | null > | null,
  not?: ModelHabitsLogsConditionInput | null,
};

export type UpdateHabitsLogsInput = {
  id: string,
  habitId?: string | null,
  habitcreatedAt?: string | null,
  dayId?: string | null,
  daydate?: string | null,
};

export type DeleteHabitsLogsInput = {
  id: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelHabitFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  streak?: ModelIntInput | null,
  habitWeekDays?: ModelIntInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelHabitFilterInput | null > | null,
  or?: Array< ModelHabitFilterInput | null > | null,
  not?: ModelHabitFilterInput | null,
  userHabitsId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelDayFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelDayFilterInput | null > | null,
  or?: Array< ModelDayFilterInput | null > | null,
  not?: ModelDayFilterInput | null,
  userDaysId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelHabitsLogsFilterInput = {
  id?: ModelIDInput | null,
  habitId?: ModelIDInput | null,
  habitcreatedAt?: ModelStringInput | null,
  dayId?: ModelIDInput | null,
  daydate?: ModelStringInput | null,
  and?: Array< ModelHabitsLogsFilterInput | null > | null,
  or?: Array< ModelHabitsLogsFilterInput | null > | null,
  not?: ModelHabitsLogsFilterInput | null,
};

export type ModelSubscriptionHabitFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  streak?: ModelSubscriptionIntInput | null,
  habitWeekDays?: ModelSubscriptionIntInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionHabitFilterInput | null > | null,
  or?: Array< ModelSubscriptionHabitFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionDayFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionDayFilterInput | null > | null,
  or?: Array< ModelSubscriptionDayFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionHabitsLogsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  habitId?: ModelSubscriptionIDInput | null,
  habitcreatedAt?: ModelSubscriptionStringInput | null,
  dayId?: ModelSubscriptionIDInput | null,
  daydate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHabitsLogsFilterInput | null > | null,
  or?: Array< ModelSubscriptionHabitsLogsFilterInput | null > | null,
};

export type CreateHabitMutationVariables = {
  input: CreateHabitInput,
  condition?: ModelHabitConditionInput | null,
};

export type CreateHabitMutation = {
  createHabit?:  {
    __typename: "Habit",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    streak?: number | null,
    habitDays?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    habitWeekDays?: Array< number | null > | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    updatedAt: string,
    userHabitsId?: string | null,
  } | null,
};

export type UpdateHabitMutationVariables = {
  input: UpdateHabitInput,
  condition?: ModelHabitConditionInput | null,
};

export type UpdateHabitMutation = {
  updateHabit?:  {
    __typename: "Habit",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    streak?: number | null,
    habitDays?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    habitWeekDays?: Array< number | null > | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    updatedAt: string,
    userHabitsId?: string | null,
  } | null,
};

export type DeleteHabitMutationVariables = {
  input: DeleteHabitInput,
  condition?: ModelHabitConditionInput | null,
};

export type DeleteHabitMutation = {
  deleteHabit?:  {
    __typename: "Habit",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    streak?: number | null,
    habitDays?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    habitWeekDays?: Array< number | null > | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    updatedAt: string,
    userHabitsId?: string | null,
  } | null,
};

export type CreateDayMutationVariables = {
  input: CreateDayInput,
  condition?: ModelDayConditionInput | null,
};

export type CreateDayMutation = {
  createDay?:  {
    __typename: "Day",
    id: string,
    date: string,
    dayHabits?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    userDaysId?: string | null,
  } | null,
};

export type UpdateDayMutationVariables = {
  input: UpdateDayInput,
  condition?: ModelDayConditionInput | null,
};

export type UpdateDayMutation = {
  updateDay?:  {
    __typename: "Day",
    id: string,
    date: string,
    dayHabits?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    userDaysId?: string | null,
  } | null,
};

export type DeleteDayMutationVariables = {
  input: DeleteDayInput,
  condition?: ModelDayConditionInput | null,
};

export type DeleteDayMutation = {
  deleteDay?:  {
    __typename: "Day",
    id: string,
    date: string,
    dayHabits?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    userDaysId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    habits?:  {
      __typename: "ModelHabitConnection",
      items:  Array< {
        __typename: "Habit",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        streak?: number | null,
        habitDays?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        habitWeekDays?: Array< number | null > | null,
        user?:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        userId: string,
        updatedAt: string,
        userHabitsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        date: string,
        dayHabits?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        createdAt: string,
        updatedAt: string,
        userDaysId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    habits?:  {
      __typename: "ModelHabitConnection",
      items:  Array< {
        __typename: "Habit",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        streak?: number | null,
        habitDays?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        habitWeekDays?: Array< number | null > | null,
        user?:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        userId: string,
        updatedAt: string,
        userHabitsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        date: string,
        dayHabits?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        createdAt: string,
        updatedAt: string,
        userDaysId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    habits?:  {
      __typename: "ModelHabitConnection",
      items:  Array< {
        __typename: "Habit",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        streak?: number | null,
        habitDays?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        habitWeekDays?: Array< number | null > | null,
        user?:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        userId: string,
        updatedAt: string,
        userHabitsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        date: string,
        dayHabits?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        createdAt: string,
        updatedAt: string,
        userDaysId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHabitsLogsMutationVariables = {
  input: CreateHabitsLogsInput,
  condition?: ModelHabitsLogsConditionInput | null,
};

export type CreateHabitsLogsMutation = {
  createHabitsLogs?:  {
    __typename: "HabitsLogs",
    id: string,
    habitId: string,
    habitcreatedAt: string,
    dayId: string,
    daydate: string,
    habit:  {
      __typename: "Habit",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      streak?: number | null,
      habitDays?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      habitWeekDays?: Array< number | null > | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      updatedAt: string,
      userHabitsId?: string | null,
    },
    day:  {
      __typename: "Day",
      id: string,
      date: string,
      dayHabits?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      userDaysId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHabitsLogsMutationVariables = {
  input: UpdateHabitsLogsInput,
  condition?: ModelHabitsLogsConditionInput | null,
};

export type UpdateHabitsLogsMutation = {
  updateHabitsLogs?:  {
    __typename: "HabitsLogs",
    id: string,
    habitId: string,
    habitcreatedAt: string,
    dayId: string,
    daydate: string,
    habit:  {
      __typename: "Habit",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      streak?: number | null,
      habitDays?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      habitWeekDays?: Array< number | null > | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      updatedAt: string,
      userHabitsId?: string | null,
    },
    day:  {
      __typename: "Day",
      id: string,
      date: string,
      dayHabits?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      userDaysId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHabitsLogsMutationVariables = {
  input: DeleteHabitsLogsInput,
  condition?: ModelHabitsLogsConditionInput | null,
};

export type DeleteHabitsLogsMutation = {
  deleteHabitsLogs?:  {
    __typename: "HabitsLogs",
    id: string,
    habitId: string,
    habitcreatedAt: string,
    dayId: string,
    daydate: string,
    habit:  {
      __typename: "Habit",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      streak?: number | null,
      habitDays?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      habitWeekDays?: Array< number | null > | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      updatedAt: string,
      userHabitsId?: string | null,
    },
    day:  {
      __typename: "Day",
      id: string,
      date: string,
      dayHabits?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      userDaysId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetHabitQueryVariables = {
  id: string,
  createdAt: string,
};

export type GetHabitQuery = {
  getHabit?:  {
    __typename: "Habit",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    streak?: number | null,
    habitDays?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    habitWeekDays?: Array< number | null > | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    updatedAt: string,
    userHabitsId?: string | null,
  } | null,
};

export type ListHabitsQueryVariables = {
  id?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  filter?: ModelHabitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListHabitsQuery = {
  listHabits?:  {
    __typename: "ModelHabitConnection",
    items:  Array< {
      __typename: "Habit",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      streak?: number | null,
      habitDays?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      habitWeekDays?: Array< number | null > | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      updatedAt: string,
      userHabitsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDayQueryVariables = {
  id: string,
  date: string,
};

export type GetDayQuery = {
  getDay?:  {
    __typename: "Day",
    id: string,
    date: string,
    dayHabits?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    userDaysId?: string | null,
  } | null,
};

export type ListDaysQueryVariables = {
  id?: string | null,
  date?: ModelStringKeyConditionInput | null,
  filter?: ModelDayFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDaysQuery = {
  listDays?:  {
    __typename: "ModelDayConnection",
    items:  Array< {
      __typename: "Day",
      id: string,
      date: string,
      dayHabits?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      userDaysId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    habits?:  {
      __typename: "ModelHabitConnection",
      items:  Array< {
        __typename: "Habit",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        streak?: number | null,
        habitDays?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        habitWeekDays?: Array< number | null > | null,
        user?:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        userId: string,
        updatedAt: string,
        userHabitsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        date: string,
        dayHabits?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        createdAt: string,
        updatedAt: string,
        userDaysId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHabitsLogsQueryVariables = {
  id: string,
};

export type GetHabitsLogsQuery = {
  getHabitsLogs?:  {
    __typename: "HabitsLogs",
    id: string,
    habitId: string,
    habitcreatedAt: string,
    dayId: string,
    daydate: string,
    habit:  {
      __typename: "Habit",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      streak?: number | null,
      habitDays?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      habitWeekDays?: Array< number | null > | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      updatedAt: string,
      userHabitsId?: string | null,
    },
    day:  {
      __typename: "Day",
      id: string,
      date: string,
      dayHabits?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      userDaysId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHabitsLogsQueryVariables = {
  filter?: ModelHabitsLogsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHabitsLogsQuery = {
  listHabitsLogs?:  {
    __typename: "ModelHabitsLogsConnection",
    items:  Array< {
      __typename: "HabitsLogs",
      id: string,
      habitId: string,
      habitcreatedAt: string,
      dayId: string,
      daydate: string,
      habit:  {
        __typename: "Habit",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        streak?: number | null,
        habitDays?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        habitWeekDays?: Array< number | null > | null,
        user?:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        userId: string,
        updatedAt: string,
        userHabitsId?: string | null,
      },
      day:  {
        __typename: "Day",
        id: string,
        date: string,
        dayHabits?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        createdAt: string,
        updatedAt: string,
        userDaysId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserByCreatedAtQueryVariables = {
  userId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelHabitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByCreatedAtQuery = {
  userByCreatedAt?:  {
    __typename: "ModelHabitConnection",
    items:  Array< {
      __typename: "Habit",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      streak?: number | null,
      habitDays?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      habitWeekDays?: Array< number | null > | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      updatedAt: string,
      userHabitsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserByDateQueryVariables = {
  userId: string,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDayFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByDateQuery = {
  userByDate?:  {
    __typename: "ModelDayConnection",
    items:  Array< {
      __typename: "Day",
      id: string,
      date: string,
      dayHabits?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      userDaysId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type HabitsLogsByHabitIdAndHabitcreatedAtQueryVariables = {
  habitId: string,
  habitcreatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelHabitsLogsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type HabitsLogsByHabitIdAndHabitcreatedAtQuery = {
  habitsLogsByHabitIdAndHabitcreatedAt?:  {
    __typename: "ModelHabitsLogsConnection",
    items:  Array< {
      __typename: "HabitsLogs",
      id: string,
      habitId: string,
      habitcreatedAt: string,
      dayId: string,
      daydate: string,
      habit:  {
        __typename: "Habit",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        streak?: number | null,
        habitDays?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        habitWeekDays?: Array< number | null > | null,
        user?:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        userId: string,
        updatedAt: string,
        userHabitsId?: string | null,
      },
      day:  {
        __typename: "Day",
        id: string,
        date: string,
        dayHabits?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        createdAt: string,
        updatedAt: string,
        userDaysId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type HabitsLogsByDayIdAndDaydateQueryVariables = {
  dayId: string,
  daydate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelHabitsLogsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type HabitsLogsByDayIdAndDaydateQuery = {
  habitsLogsByDayIdAndDaydate?:  {
    __typename: "ModelHabitsLogsConnection",
    items:  Array< {
      __typename: "HabitsLogs",
      id: string,
      habitId: string,
      habitcreatedAt: string,
      dayId: string,
      daydate: string,
      habit:  {
        __typename: "Habit",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        streak?: number | null,
        habitDays?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        habitWeekDays?: Array< number | null > | null,
        user?:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        userId: string,
        updatedAt: string,
        userHabitsId?: string | null,
      },
      day:  {
        __typename: "Day",
        id: string,
        date: string,
        dayHabits?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        createdAt: string,
        updatedAt: string,
        userDaysId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateHabitSubscriptionVariables = {
  filter?: ModelSubscriptionHabitFilterInput | null,
};

export type OnCreateHabitSubscription = {
  onCreateHabit?:  {
    __typename: "Habit",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    streak?: number | null,
    habitDays?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    habitWeekDays?: Array< number | null > | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    updatedAt: string,
    userHabitsId?: string | null,
  } | null,
};

export type OnUpdateHabitSubscriptionVariables = {
  filter?: ModelSubscriptionHabitFilterInput | null,
};

export type OnUpdateHabitSubscription = {
  onUpdateHabit?:  {
    __typename: "Habit",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    streak?: number | null,
    habitDays?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    habitWeekDays?: Array< number | null > | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    updatedAt: string,
    userHabitsId?: string | null,
  } | null,
};

export type OnDeleteHabitSubscriptionVariables = {
  filter?: ModelSubscriptionHabitFilterInput | null,
};

export type OnDeleteHabitSubscription = {
  onDeleteHabit?:  {
    __typename: "Habit",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    streak?: number | null,
    habitDays?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    habitWeekDays?: Array< number | null > | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    updatedAt: string,
    userHabitsId?: string | null,
  } | null,
};

export type OnCreateDaySubscriptionVariables = {
  filter?: ModelSubscriptionDayFilterInput | null,
};

export type OnCreateDaySubscription = {
  onCreateDay?:  {
    __typename: "Day",
    id: string,
    date: string,
    dayHabits?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    userDaysId?: string | null,
  } | null,
};

export type OnUpdateDaySubscriptionVariables = {
  filter?: ModelSubscriptionDayFilterInput | null,
};

export type OnUpdateDaySubscription = {
  onUpdateDay?:  {
    __typename: "Day",
    id: string,
    date: string,
    dayHabits?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    userDaysId?: string | null,
  } | null,
};

export type OnDeleteDaySubscriptionVariables = {
  filter?: ModelSubscriptionDayFilterInput | null,
};

export type OnDeleteDaySubscription = {
  onDeleteDay?:  {
    __typename: "Day",
    id: string,
    date: string,
    dayHabits?:  {
      __typename: "ModelHabitsLogsConnection",
      items:  Array< {
        __typename: "HabitsLogs",
        id: string,
        habitId: string,
        habitcreatedAt: string,
        dayId: string,
        daydate: string,
        habit:  {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        },
        day:  {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      habits?:  {
        __typename: "ModelHabitConnection",
        items:  Array< {
          __typename: "Habit",
          id: string,
          title: string,
          description?: string | null,
          createdAt: string,
          streak?: number | null,
          habitWeekDays?: Array< number | null > | null,
          userId: string,
          updatedAt: string,
          userHabitsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      days?:  {
        __typename: "ModelDayConnection",
        items:  Array< {
          __typename: "Day",
          id: string,
          date: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
          userDaysId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    userDaysId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    habits?:  {
      __typename: "ModelHabitConnection",
      items:  Array< {
        __typename: "Habit",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        streak?: number | null,
        habitDays?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        habitWeekDays?: Array< number | null > | null,
        user?:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        userId: string,
        updatedAt: string,
        userHabitsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        date: string,
        dayHabits?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        createdAt: string,
        updatedAt: string,
        userDaysId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    habits?:  {
      __typename: "ModelHabitConnection",
      items:  Array< {
        __typename: "Habit",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        streak?: number | null,
        habitDays?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        habitWeekDays?: Array< number | null > | null,
        user?:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        userId: string,
        updatedAt: string,
        userHabitsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        date: string,
        dayHabits?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        createdAt: string,
        updatedAt: string,
        userDaysId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    habits?:  {
      __typename: "ModelHabitConnection",
      items:  Array< {
        __typename: "Habit",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        streak?: number | null,
        habitDays?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        habitWeekDays?: Array< number | null > | null,
        user?:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        userId: string,
        updatedAt: string,
        userHabitsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        date: string,
        dayHabits?:  {
          __typename: "ModelHabitsLogsConnection",
          nextToken?: string | null,
        } | null,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        createdAt: string,
        updatedAt: string,
        userDaysId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHabitsLogsSubscriptionVariables = {
  filter?: ModelSubscriptionHabitsLogsFilterInput | null,
};

export type OnCreateHabitsLogsSubscription = {
  onCreateHabitsLogs?:  {
    __typename: "HabitsLogs",
    id: string,
    habitId: string,
    habitcreatedAt: string,
    dayId: string,
    daydate: string,
    habit:  {
      __typename: "Habit",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      streak?: number | null,
      habitDays?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      habitWeekDays?: Array< number | null > | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      updatedAt: string,
      userHabitsId?: string | null,
    },
    day:  {
      __typename: "Day",
      id: string,
      date: string,
      dayHabits?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      userDaysId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHabitsLogsSubscriptionVariables = {
  filter?: ModelSubscriptionHabitsLogsFilterInput | null,
};

export type OnUpdateHabitsLogsSubscription = {
  onUpdateHabitsLogs?:  {
    __typename: "HabitsLogs",
    id: string,
    habitId: string,
    habitcreatedAt: string,
    dayId: string,
    daydate: string,
    habit:  {
      __typename: "Habit",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      streak?: number | null,
      habitDays?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      habitWeekDays?: Array< number | null > | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      updatedAt: string,
      userHabitsId?: string | null,
    },
    day:  {
      __typename: "Day",
      id: string,
      date: string,
      dayHabits?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      userDaysId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHabitsLogsSubscriptionVariables = {
  filter?: ModelSubscriptionHabitsLogsFilterInput | null,
};

export type OnDeleteHabitsLogsSubscription = {
  onDeleteHabitsLogs?:  {
    __typename: "HabitsLogs",
    id: string,
    habitId: string,
    habitcreatedAt: string,
    dayId: string,
    daydate: string,
    habit:  {
      __typename: "Habit",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      streak?: number | null,
      habitDays?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      habitWeekDays?: Array< number | null > | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      updatedAt: string,
      userHabitsId?: string | null,
    },
    day:  {
      __typename: "Day",
      id: string,
      date: string,
      dayHabits?:  {
        __typename: "ModelHabitsLogsConnection",
        items:  Array< {
          __typename: "HabitsLogs",
          id: string,
          habitId: string,
          habitcreatedAt: string,
          dayId: string,
          daydate: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        habits?:  {
          __typename: "ModelHabitConnection",
          nextToken?: string | null,
        } | null,
        days?:  {
          __typename: "ModelDayConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      userDaysId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
