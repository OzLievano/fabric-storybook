import React from 'react';
import { MuiButton, MuiButtonProps } from '../../components/MuiButton';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiButton> = {
  title: 'Mirage/MuiButton',
  component: MuiButton,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: { type: 'select' },
      defaultValue: 'primary'
    },
    disabled: {
      control: {type: 'boolean'},
      defaultValue: 'false'
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      defaultValue: 'medium'
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select' },
      defaultValue: 'text'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiButton>;

const Template: React.FC<MuiButtonProps> = (args) => <MuiButton {...args} > Click me  </MuiButton>;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'contained',
  color: 'secondary',
  size: 'large'
};

