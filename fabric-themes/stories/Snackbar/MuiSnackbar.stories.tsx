import React, { useState } from 'react';
import { MuiAlert } from '../../components/MuiAlert';
import { MuiBox } from '../../components/MuiBox';
import { MuiButton } from '../../components/MuiButton';
import { MuiSnackbar, MuiSnackbarProps } from '../../components/MuiSnackbar';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiSnackbar> = {
  title: 'Mirage/MuiSnackbar',
  component: MuiSnackbar,
  argTypes: {
    anchorOrigin: {
      description: 'If true, the MuiSnackbar will use raised styling',
      control: {type: 'select'},
      options: [
        { horizontal: 'center', vertical: 'bottom' },
        { horizontal: 'center', vertical: 'top' },
        { horizontal: 'left', vertical: 'bottom' },
        { horizontal: 'left', vertical: 'top' },
        { horizontal: 'right', vertical: 'bottom' },
        { horizontal: 'right', vertical: 'top' },
      ],
      defaultValue: { vertical: 'bottom', horizontal: 'left' }
      },
    autoHideDuration: {
      description: 'The number of milliseconds to wait before automatically calling the onClose function',
      control: {type: 'number'},
      defaultValue: 'null'
    },
    disableWindowBlurListener: {
      description: 'If true, the autoHideDuration timer will expire even if the window is not focused.',
      control: {type: 'boolean'},
      defaultValue: false,
    },
    open: {
      description: 'If true, MuiSnackbar is shown',
      control: {type: 'boolean'},
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiSnackbar>;

const Template: React.FC<MuiSnackbarProps> = (args) => {
  const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <MuiBox>
            <MuiButton variant="outlined" onClick={handleClick}>
                Open success snackbar
            </MuiButton>
            <MuiSnackbar {...args} open={open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success">
                    This is a success message!
                </MuiAlert>
            </MuiSnackbar>
            <MuiAlert severity="error">This is an error message!</MuiAlert>
            <MuiAlert severity="warning">This is a warning message!</MuiAlert>
            <MuiAlert severity="info">This is an information message!</MuiAlert>
            <MuiAlert severity="success">This is a success message!</MuiAlert>
        </MuiBox>
    )
};

export const Playground = Template.bind({});

Playground.args = {};

