'use client';

import { CardWrapper } from '@/components/auth/CardWrapper';
import { BeatLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { newVerification } from '@/actions/new-verification';
import { FormSuccess } from '@/components/FormSuccess';
import { FormError } from '@/components/FormError';

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const onSubmit = useCallback(() => {
    if (token) {
      newVerification(token)
        .then(data => {
          setSuccess(data.success);
          setError(data.error);
        })
        .catch(() => setError('Something went wrong!'));
    } else {
      setError('Missing token');
    }
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, []);
  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        {!error && !success && <BeatLoader />}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};
