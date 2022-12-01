import type { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@ignitecall-ui-designsystem/react';

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    children: "Sample Text"
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> ={
  args:{
    as: 'strong',
    children: "Strong text",
  }
};