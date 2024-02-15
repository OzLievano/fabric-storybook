import React from 'react';
import { MuiAlert, MuiAlertProps } from '../../components/MuiAlert';
import type {Meta, StoryObj} from '@storybook/react';
import {AlertTitle} from '@mui/material'

const meta: Meta<typeof MuiAlert> = {
  title: 'Mirage/MuiAlert',
  component: MuiAlert,
  argTypes: {
    color: {
		  description: 'The color of the component, unless provided, value is taken from severity prop',
		  options: ['error','info', 'success', 'warning'],
		  control: { type: 'radio' },
    },
    onClose: {
      description: 'Callback fired when the component requests to be closed',
      action: 'clicked'
    },
    severity: {
		  description: 'The severity of the alert, defines the color and icon used.',
		  options: ['error', 'info', 'success', 'warning'],
		  control: { type: 'radio' },
		  defaultValue: 'success'
    },
    variant: {
		  description: 'The variant of MuiAlert to use',
		  options: ['filled', 'outlined', 'standard'],
		  control: { type: 'radio' },
		  defaultValue: 'standard'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiAlert>;

const Template: React.FC<MuiAlertProps> = (args) => {
  return (
    <MuiAlert {...args}>
      <AlertTitle>
          This is an example of an Alert
      </AlertTitle>
    </MuiAlert>
  )
};

export const Playground = Template.bind({});

Playground.args = {
};

