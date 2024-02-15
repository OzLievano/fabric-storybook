import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { MuiAccordionProps } from '../../components/MuiAccordion';
import { MuiBox } from '../../components/MuiBox';
import { MuiList, MuiListProps } from '../../components/MuiList';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiList> = {
  title: 'Mirage/MuiList',
  component: MuiList,
  argTypes: {
    dense: {
        description: 'If true,  compact vertical padding designed for keyboard and mouse input is used for the list and list items',
        control: {type: 'boolean'},
        defaultValue: 'false'
      },
      disablePadding: {
        description: 'If true, vertical padding is removed from the list.',
        control: {type: 'boolean'},
        defaultValue: 'false'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiList>;

const Template: React.FC<MuiListProps> = (args) => {
  return (
    <MuiBox>
    <nav aria-label="main mailbox folders">
        <MuiList {...args}>
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary="Inbox" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary="Drafts" />
            </ListItemButton>
            </ListItem>
        </MuiList>
        </nav>
        <nav aria-label="secondary mailbox folders">
        <MuiList {...args}>
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary="Trash" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
            </ListItemButton>
            </ListItem>
        </MuiList>
    </nav>
    </MuiBox>
  )
};

export const Playground = Template.bind({});

Playground.args = {};
