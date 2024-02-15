import React from 'react';
import { MuiBox } from '../../components/MuiBox';
import { MuiChip, MuiChipProps } from '../../components/MuiChip';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiChip> = {
  title: 'Mirage/MuiChip',
  component: MuiChip,
  argTypes: {
    clickable: {
        description: 'If true, the chip will appear clickable, and will raise when pressed, even if the onClick prop is not defined.',
        control: {type: 'boolean'},
      },
    color: {
        options: ['default', 'primary', 'secondary', 'error', 'info', 'success','warning'],
        control: {type: 'select'},
        defaultValue: 'default'
    },
    disabled: {
        description: 'If true, the component is disabled.',
        control: {type: 'boolean'},
    },
    onDelete: {
        description: 'Callback fired when the delete icon is clicked.',
        action: 'clicked'
    },
    size: {
        description: 'the size of the component',
        control: {type: 'select'},
        options: ['medium', 'small'],
        defaultValue: 'medium'
    },
    variant: {
        description: 'The variant to use.',
        control: {type: 'select'},
        options: ['filled', 'outlined'],
        defaultValue: 'filled'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiChip>;

const Template: React.FC<MuiChipProps> = (args) => {
  return (
    <MuiBox>
      <MuiChip label="Chip Filled" {...args}/>
      <MuiChip label="Chip Filled" {...args}/>
      <MuiChip label="Chip Outlined" variant="outlined" />
    </MuiBox>
  )
};

export const Playground = Template.bind({});

Playground.args = {
  disabled: false,
  expanded: true,
  square: true
};


