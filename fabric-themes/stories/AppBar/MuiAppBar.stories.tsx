import React from 'react';
import { MuiAppBar, MuiAppBarProps } from '../../components/MuiAppBar';
import type {Meta, StoryObj} from '@storybook/react';
import { MuiTypography } from '../../components/MuiTypography';
import { MuiButton } from '../../components/MuiButton';
import { IconButton, Toolbar } from '@mui/material';

const meta: Meta<typeof MuiAppBar> = {
  title: 'Mirage/MuiAppBar',
  component: MuiAppBar,
  argTypes: {
    color: {
        description: 'The color of the MuiAppBar Component',
        options: ['inherit','primary', 'secondary', 'transparent', 'error', 'info', 'success' ,'warning'],
        control: { type: 'radio' },
        defaultValue: 'primary'
    },
    enableColorOnDark: {
        description: 'color prop is applied in darkmode',
        control: { type: 'boolean' },
        defaultValue: 'false'
    },
    position: {
        description: 'The positioning type of MuiAppBar ',
        options: ['absolute', 'fixed', 'relative', 'static', 'sticky'],
        control: { type: 'radio' },
        defaultValue: 'fixed'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiAppBar>;

const Template: React.FC<MuiAppBarProps> = (args) => {
  return (
    <MuiAppBar {...args}>
    <Toolbar>
    <IconButton
    >
    </IconButton>
    <MuiTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        News
    </MuiTypography>
    <MuiButton color="inherit">Login</MuiButton>
    </Toolbar>
</MuiAppBar>
  )
};

export const Playground = Template.bind({});

Playground.args = {
};
