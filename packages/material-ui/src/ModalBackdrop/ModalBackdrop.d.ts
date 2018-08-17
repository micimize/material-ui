import * as React from 'react';
import { StandardProps } from '..';
import { FadeProps } from '../Fade';
import { TransitionProps } from '../transitions/transition';

export interface ModalBackdropProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement> & Partial<FadeProps>,
      ModalBackdropClassKey
    > {
  invisible?: boolean;
  onClick?: React.ReactEventHandler<{}>;
  open: boolean;
  transitionDuration?: TransitionProps['timeout'];
}

export type ModalBackdropClassKey = 'root' | 'invisible';

declare const ModalBackdrop: React.ComponentType<ModalBackdropProps>;

export default ModalBackdrop;
