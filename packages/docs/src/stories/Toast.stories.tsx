import type { StoryObj, Meta } from '@storybook/react';
import { Toast, ToastProps, Text } from '@ignitecall-ui-designsystem/react';

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    children: (
      <>
        <Text>Testando elemento Toast</Text>
      </>
    ),
    backgroundColor: '#202024',
  },
  argTypes: {
    children: {
      description: 'Esse elemento é apenas o Toast',
      control: {
        type: null,
      },
    },
    backgroundColor: {
      description: 'Cor de fundo do Toast | variavel $gray800',
      control: {
        type: 'color'
      }
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {};
