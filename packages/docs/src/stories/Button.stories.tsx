import type { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@ignitecall-ui-designsystem/react';
import { ArrowRight } from 'phosphor-react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: "Send",
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {};

export const Secundary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secundary',
    children: 'create new',
  },
};

export const tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const Smal: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight='bold' />
      </>
    )
  },
};

export const Disable: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
