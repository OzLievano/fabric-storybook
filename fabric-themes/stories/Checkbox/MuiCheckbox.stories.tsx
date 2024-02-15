import React from 'react';
import { MuiBox } from '../../components/MuiBox';
import { MuiCheckbox, MuiCheckboxProps } from '../../components/MuiCheckbox';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiCheckbox> = {
  title: 'Mirage/MuiCheckbox',
  component: MuiCheckbox,
  argTypes: {
    checked: {
        description: 'if true, the component is checked',
        control: {type: 'boolean'},
    },
    color: {
        description: 'The color of the component',
        options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
        control: {type: 'boolean'},
        defaultValue: 'primary'
    },
    defaultChecked: {
        description: 'The default checked state, use when the component is not controlled',
        control: {type: 'boolean'}
    },
    disabled: {
        description: 'if true the component is disabled',
        control: {type: 'boolean'},
    },
    onChange: {
        description: 'Callback fired when the state is changed.',
        action: 'clicked'
    },
    required: {
        description: 'if true, the input element is required',
        control: {type: 'boolean'},
        defaultValue: false,
    },
    size: {
        description: 'The size of the component', 
        options: ['medium', 'small'],
        control: {type: 'select'},
        defaultValue: 'medium'
    },
  }
}

export default meta;
type Story = StoryObj<typeof MuiCheckbox>;

const Template: React.FC<MuiCheckboxProps> = (args) => {
    return (
        <MuiBox>
            <MuiCheckbox {...args}  />
            <MuiCheckbox  />
            <MuiCheckbox disabled />
            <MuiCheckbox  disabled checked />
        </MuiBox>
    )
  };
  
  export const Playground = Template.bind({});
  
  Playground.args = {};


