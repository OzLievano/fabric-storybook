import React, { useState } from 'react';
import { MuiDialog, MuiDialogProps } from '../../components/MuiDialog';
import type {Meta, StoryObj} from '@storybook/react';
import { DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { MuiButton } from '../../components/MuiButton';

const meta: Meta<typeof MuiDialog> = {
  title: 'Mirage/MuiDialog',
  component: MuiDialog,
  argTypes: {
    open: {
        description: 'If true, the MuiDialog is shown.',
        control: {type: 'boolean'},
      },
    fullScreen: {
        description: 'If true, the MuiDialog is full screen.',
        control: {type: 'boolean'},
        defaultValue: false,
    },
    fullWidth: {
        description: 'If true, the MuiDialog stretches to maxWidth.',
        control: {type: 'boolean'},
        defaultValue: false,
    },
    maxWidth: {
        description: 'Determine the max-width of the dialog, can be set to false',
        control: {type: 'select'},
        options: ['xs', 'sm', 'md', 'lg', 'xl', false]
    },
    onClose: {
        description: 'Callback fired when the component requests to be closed',
        action: 'clicked'
    },
    scroll: {
        description: 'Determine the container for scrolling the dialog',
        control: {type: 'select'},
        options: ['body', 'paper'],
        defaultValue: 'paper'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiDialog>;

const Template: React.FC<MuiDialogProps> = (args) => {
  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
        <>
      <MuiButton variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </MuiButton>
      <MuiDialog
        {...args}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={handleClose}>Disagree</MuiButton>
          <MuiButton onClick={handleClose}>
            Agree
          </MuiButton>
        </DialogActions>
      </MuiDialog>
    </>
  )
};

export const Playground = Template.bind({});

Playground.args = {};
