import type { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps } from '@ignitecall-ui-designsystem/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando elemento Box</span>
      </>
    )
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {};
