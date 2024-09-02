import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { BackButton } from '@/components/auth/BackButton';

export const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oops something went wrong :(" />
      </CardHeader>
      <CardFooter>
        <BackButton href="/auth/login" label="Back to login" />
      </CardFooter>
    </Card>
  );
};
