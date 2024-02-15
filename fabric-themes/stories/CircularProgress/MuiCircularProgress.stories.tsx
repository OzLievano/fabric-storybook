import React from 'react';
import { MuiBox } from '../../components/MuiBox';
import { MuiCircularProgress, MuiCircularProgressProps } from '../../components/MuiCircularProgress';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiCircularProgress> = {
  title: 'Mirage/MuiCircularProgress',
  component: MuiCircularProgress,
  argTypes: {
    color: {
        description: 'If true, the MuiCard will use raised styling',
        options: ['inherit', 'primary','secondary', 'error', 'info', 'success', 'warning'],
        control: {type: 'select'},
        defaultValue: 'primary'
    },
    disableShrink: {
        description: 'if true, the shrink animation is disabled, only works with variant indeterminate',
        control: {type: 'boolean'},
        defaultValue: false
    },
    size: {
        description: 'the size of the component, if using a number px is assumed, if string include the CSS unit',
        control: {type: 'number' || 'string' } ,
        defaultvalue: 40,
    },
    thickness: {
        description: 'the thickness of the circle',
        control: {type: 'number'} ,
        defaultvalue: 3.6,
    },
    variant: {
        options: ['determinate', 'indeterminate'],
        control: {type: 'select'},
        defaultValue: 'determinate'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiCircularProgress>;

const Template: React.FC<MuiCircularProgressProps> = (args) => {
  return (
    <MuiBox>
      <MuiCircularProgress {...args} />
      <MuiCircularProgress color="success" />
      <MuiCircularProgress color="inherit" />
    </MuiBox>
  )
};

export const Playground = Template.bind({});

Playground.args = {};


