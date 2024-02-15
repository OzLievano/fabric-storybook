import React from 'react';
import { MuiBox } from '../../components/MuiBox';
import { MuiFab, MuiFabProps } from '../../components/MuiFab';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiFab> = {
  title: 'Mirage/MuiFab',
  component: MuiFab,
  argTypes: {
    color: {
        description:'The color of MuiFab',
        control: {type: 'select'},
        options: ['default', 'error', 'info', 'inherit', 'primary', 'secondary','success', 'warning'],
        defaultValue: 'default'
    },
    disabled: {
        description: 'If true, the MuiFab is disabled',
        control: {type: 'boolean'},
        defaultValue: 'false'
    },
    size: {
        options: ['small', 'medium', 'large'],
        control: {type: 'select'},
        defaultValue: 'large'
    },
    variant: {
        options: ['circular', 'extended'],
        control: {type: 'select'},
        defaultValue: 'circular'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiFab>;

const Template: React.FC<MuiFabProps> = (args) => {
  return (
    <MuiBox sx={{ '& > :not(style)': { m: 1 } }}>
      <MuiFab {...args}>
      </MuiFab>
      <MuiFab color="secondary" aria-label="edit">
      </MuiFab>
      <MuiFab variant="extended">
          Navigate
      </MuiFab>
      <MuiFab disabled aria-label="like">
      </MuiFab>
    </MuiBox>
  )
};

export const Playground = Template.bind({});

Playground.args = {};
