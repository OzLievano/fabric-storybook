import { MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { MuiMenu, MuiMenuProps } from '../../components/MuiMenu';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiMenu> = {
  title: 'Mirage/MuiMenu',
  component: MuiMenu,
  argTypes: {
    open: {
        description: 'If true, the MuiMenu is shown',
        control: {type: 'boolean'},
    },
    autoFocus: {
        description: 'if true, will focus the [role="menu"]',
        control: {type: 'boolean'},
        defaultValue: true
    },
    disableAutoFocus: {
        description: 'When opening the menu will not focus the active item but the [role="menu"] unless autoFocus is also set to false',
        control: {type: 'boolean'},
        defaultValue: false
    },
    onClose: {
        description: 'Callback fired when the component requests to be closed',
        action: 'clicked'
    },
    variant: {
        options: ['menu', 'selectedMenu'],
        control: {type: 'select'},
        defaultValue: 'selectedMenu'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiMenu>;

const Template: React.FC<MuiMenuProps> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <MuiMenu {...args} anchorEl={anchorEl} open>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
      </MuiMenu>
    )
};

export const Playground = Template.bind({});

Playground.args = {};


