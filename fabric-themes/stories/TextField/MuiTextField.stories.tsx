import React from 'react';
import { MuiBox } from '../../components/MuiBox';
import { MuiTextField, MuiTextFieldProps } from '../../components/MuiTextField';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiTextField> = {
  title: 'Mirage/MuiTextField',
  component: MuiTextField,
  argTypes: {
    autoFocus: {
        description: 'If true, the MuiTextField will be focused during first mount',
        control: {type: 'boolean'},
        defaultValue: 'false'
      },
    color: {
        description: 'the color of the MuiTextField',
        control: {type: 'select'},
        options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
        defaultValue: 'primary'
    },
    disabled: {
        description: 'If true, the MuiTextField will be disabled',
        control: {type: 'boolean'},
        defaultValue: 'false'
    },
    error: {
        description: 'If true, the MuiTextField will be displayed in an error state',
        control: {type: 'boolean'},
        defaultValue: 'false'
    },
    required: {
        description: 'If true, the label is displayed as required and the input element is required.',
        control: {type: 'boolean'},
        defaultValue: 'false'
    },
    size: {
        description: 'The size of the MuiTextField',
        control: {type: 'select'},
        options: ['medium', 'small']
    },
    variant: {
        options: ['filled', 'outlined', 'standard'],
        control: {type: 'select'},
        defaultValue: 'outlined'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiTextField>;

const Template: React.FC<MuiTextFieldProps> = (args) => {
  return (
    <MuiBox
    component="form"
    sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
    }}
    >
      <MuiTextField {...args} />
      <MuiTextField id="filled-basic" label="Filled" variant="filled" />
      <MuiTextField id="standard-basic" label="Standard" variant="standard" />
    </MuiBox>
  )
};

export const Playground = Template.bind({});

Playground.args = {};
