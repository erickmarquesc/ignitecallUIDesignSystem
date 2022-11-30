import { Button, ButtonProps } from '@ignitecall-ui-designsystem/react';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar'
  },
} as Meta

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  }
};