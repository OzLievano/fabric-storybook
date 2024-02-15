import { List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import React from 'react';
import { MuiAccordionProps } from '../../components/MuiAccordion';
import { MuiBox } from '../../components/MuiBox';
import { MuiButton } from '../../components/MuiButton';
import { MuiDrawer, MuiDrawerProps } from '../../components/MuiDrawer';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiDrawer> = {
  title: 'Mirage/MuiDrawer',
  component: MuiDrawer,
  argTypes: {
    anchor: {
        description: 'Side from which the drawer will appear',
        control: {type: 'select'},
        options: ['bottom', 'left', 'right', 'top'],
        defaultValue: 'left',
      },
    elevation: {
        control: {type: 'integer'},
        defaultValue: 16
    },
    hideBackdrop: {
        control: {type: 'boolean'},
        defaultValue: false
    },
    onClose: {
        description: 'Callback fired when the component requests to be closed',
        action: 'clicked'
    },
    open: {
        description: 'if true MuiDrawer is shown', 
        control: {type: 'boolean'},
        defaultValue: false
    },
    variant: {
        description: 'The variant to use',
        control: {type: 'select'},
        options: ['permanent', 'persistent', 'temporary'],
        defaultValue:'temporary'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiDrawer>;

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Template: React.FC<MuiDrawerProps> = (args) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <MuiBox
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiBox>
  );

  return (
    <div>
      {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <MuiButton onClick={toggleDrawer(anchor, true)}>{anchor}</MuiButton>
          <MuiDrawer
              {...args}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </MuiDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export const Playground = Template.bind({});

Playground.args = {};


