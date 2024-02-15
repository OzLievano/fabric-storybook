import { BottomNavigationAction } from '@mui/material';
import { MuiBottomNavigation, MuiBottomNavigationProps } from '../../components/MuiBottomNavigation';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

const meta: Meta<typeof MuiBottomNavigation> = {
  title: 'Mirage/MuiBottomNavigation',
  component: MuiBottomNavigation,
  argTypes: {
    onChange: {},
    value: {
        description: 'The value of the currently selected BottomNavigation',
    },
    showLabels: {
        description: 'If true, all MuiBottomNavigation(s) will show their labels',
        control: {type: 'boolean'},
        defaultValue: 'true'
      },
  }
}

export default meta;
type Story = StoryObj<typeof MuiBottomNavigation>;

const Template: React.FC<MuiBottomNavigationProps> = (args) => {
  return (
    <MuiBottomNavigation {...args} value={0}>
      <BottomNavigationAction label="Recents" value="Recents"/>
      <BottomNavigationAction label="Favorites" value="Favorites"/>
      <BottomNavigationAction label="Nearby" value="˜Nearby"/>
    </MuiBottomNavigation>
  )
};

export const Playground = Template.bind({});

Playground.args = {};
