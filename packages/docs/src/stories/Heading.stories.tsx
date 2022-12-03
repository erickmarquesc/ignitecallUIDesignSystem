import type { StoryObj, Meta } from '@storybook/react';
import { Heading, HeadingProps } from '@ignitecall-ui-designsystem/react';

export default {
  title: 'Typograph/Heading',
  component: Heading,
  args: {
    children: "Sample title"
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> ={
  args:{
    as: 'h1',
    children: "H1 Heading",
  },
  parameters:{
    docs:{
      description:{
        story:'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`'
      }
    }
  }
};