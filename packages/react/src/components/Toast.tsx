import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Toast = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  width: '210px',
  textAlign: 'center',
});

export interface ToastProps extends ComponentProps<typeof Toast> {
  as?: ElementType,
};

Toast.displayName = 'Toast';