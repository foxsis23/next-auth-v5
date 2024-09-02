'use client';
import { UserInfo } from '@/components/UserInfo';
import { useCurrentUser } from '@/hooks/use-current-user';

const ClientPage = () => {
  const user = useCurrentUser();

  if (user) {
    return <UserInfo label="📱 Client component" user={user} />;
  }

  return null;
};

export default ClientPage;
