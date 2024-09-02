'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <div>
      <Button variant="link" className="w-full font-normal" size="sm" asChild>
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
};
