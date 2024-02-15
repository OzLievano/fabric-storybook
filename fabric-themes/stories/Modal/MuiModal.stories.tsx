import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { MuiBox } from '../../components/MuiBox';
import { MuiButton } from '../../components/MuiButton';
import { MuiModal, MuiModalProps} from '../../components/MuiModal';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiModal> = {
  title: 'Mirage/MuiModal',
  component: MuiModal,
  argTypes: {
    children: {
        description: 'single child content element',
        control: {type: 'boolean'},
        defaultValue: 'false'
      },
    open: {
        description: 'If true, the MuiModal will be shown', 
        control: {type: 'boolean'},
    },
    onClose: {
        description: 'Callback fired when the component requests to be closed',
        action: 'clicked'
    },
  }
}

export default meta;
type Story = StoryObj<typeof MuiModal>;

const Template: React.FC<MuiModalProps> = (args) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
        <MuiButton onClick={handleOpen}>Open modal</MuiButton>
        <MuiModal
            onClose={handleClose}
            {...args}
        >
            <MuiBox>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </MuiBox>
        </MuiModal>
    </div>
)
};

export const Playground = Template.bind({});

Playground.args = {};
