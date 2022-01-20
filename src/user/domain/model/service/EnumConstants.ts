const USER_TYPE = {
  User: 'User',
  SystemUser: 'SystemUser',
} as const;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type USER_TYPE = typeof USER_TYPE[keyof typeof USER_TYPE];
