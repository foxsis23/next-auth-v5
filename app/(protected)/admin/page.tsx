'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RoleGate } from '@/components/auth/RoleGate';
import { FormSuccess } from '@/components/FormSuccess';
import { UserRole } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { admin } from '@/actions/admin';

const AdminPage = () => {
  const onApiRouteClick = () => {
    fetch('/api/admin').then(res => {
      if (res.ok) {
        toast.success('Allowed API route');
      } else {
        toast.error('Forbidden API route');
      }
    });
  };

  const onServerActionClick = () => {
    admin().then(data => {
      if (data.error) {
        toast.error(data.error);
      } else if (data.success) {
        toast.success(data.success);
      }
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🔧 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are admin" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
