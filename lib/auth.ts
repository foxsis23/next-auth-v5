import { auth } from '@/auth';

export const currentUser = async () => {
  const { user } = await auth();

  return user;
};

export const currentRole = async () => {
  const { user } = await auth();

  return user.role;
};
