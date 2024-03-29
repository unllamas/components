import React from 'react';

import { IconsProps } from './types';

export function CaretLeftIcon({ color = 'currentColor' }: IconsProps) {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill={color}>
        <path
          fillRule='evenodd'
          d='M14.601 4.47a.75.75 0 010 1.06l-6.364 6.364a.25.25 0 000 .354l6.364 6.364a.75.75 0 01-1.06 1.06l-6.364-6.364a1.75 1.75 0 010-2.474L13.54 4.47a.75.75 0 011.06 0z'
          clipRule='evenodd'
        ></path>
      </svg>
    </>
  );
}
