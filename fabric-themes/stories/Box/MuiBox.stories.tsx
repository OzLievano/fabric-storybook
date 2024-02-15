import React from 'react';
import { MuiBox, MuiBoxProps } from '../../components/MuiBox';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiBox> = {
  title: 'Mirage/MuiBox',
  component: MuiBox,
  argTypes: {}
}

export default meta;
type Story = StoryObj<typeof MuiBox>;

const Template: React.FC<MuiBoxProps> = (args) => {
  return (
    <MuiBox {...args}/>
  )
};

export const Playground = Template.bind({});

Playground.args = {
  disabled: false,
  expanded: true,
  square: true
};
