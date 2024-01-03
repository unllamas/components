import React from 'react';

import { Text } from '../Text';

import { FeedbackProps } from './types';

import { FeedbackPrimitive } from './style';

export function Feedback(props: FeedbackProps) {
  const { children, status, show = false } = props;

  return (
    <FeedbackPrimitive $isShow={show} $isSuccess={status === 'success'}>
      <Text size='small' align='right'>
        {children}
      </Text>
    </FeedbackPrimitive>
  );
}
