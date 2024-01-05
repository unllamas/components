import { ReactNode } from 'react';

export interface SheetProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export interface SheetPrimitiveProps {
  $isOpen?: boolean;
}

export interface SheetContentProps {
  $isOpen?: boolean;
}
