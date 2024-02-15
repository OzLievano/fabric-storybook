import React from 'react';
import { MuiBox } from '../../components/MuiBox';
import { MuiRadio, MuiRadioProps } from '../../components/MuiRadio';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiRadio> = {
  title: 'Mirage/MuiRadio',
  component: MuiRadio,
  argTypes: {
    checked: {
        description: 'If true, the MuiRadio will be checked',
        control: {type: 'boolean'},
        defaultValue: 'false'
      },
    color: {
        options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
        control: {type: 'select'},
        defaultValue: 'primary'
    },
    disabled: {
      description: 'If true, the MuiRadio is disabled',
      control: {type: 'boolean'},
      defaultValue: 'false'
    },
    required: {
      description: 'If true, the input is required',
      control: {type: 'boolean'},
      defaultValue: 'false'
    },
    size: {
      description: 'If true, the input is required',
      options: ['medium', 'small'],
      defaultValue: 'medium'
    },
  }
}

export default meta;
type Story = StoryObj<typeof MuiRadio>;

const Template: React.FC<MuiRadioProps> = (args) => {
  return (
    <MuiBox>
      <MuiRadio {...args}/>
      <MuiRadio {...args}/>
      <MuiRadio
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 28,
            },
          }}
      />
    </MuiBox>
  )
};

export const Playground = Template.bind({});

Playground.args = {};
