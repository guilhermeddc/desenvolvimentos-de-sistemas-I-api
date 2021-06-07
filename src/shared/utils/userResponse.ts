interface IUser {
  id: number;
  email: string;
  user_type: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

const userSerializer = (user: IUser): Omit<IUser, 'password'> => {
  const userSerialized = {
    id: user.id,
    email: user.email,
    user_type: user.user_type,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return userSerialized;
};

export default userSerializer;
