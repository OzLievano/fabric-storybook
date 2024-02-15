import React from 'react';
import { MuiAvatar, MuiAvatarProps } from '../../components/MuiAvatar';
import type {Meta, StoryObj} from '@storybook/react';
import { Stack } from '@mui/material';

const meta: Meta<typeof MuiAvatar> = {
  title: 'Mirage/MuiAvatar',
  component: MuiAvatar,
  argTypes: {
    alt: {
        description: 'used in combination siwth src to provide an alt attribute',
        control: { type: 'input' },
    },
    imgProps: {
        description: 'Attributes applied to the img element if the component is used to display an image',
        control: {type: 'object'},
        defaultValue: 'false'
    },
    sizes: {
        description: 'Sizes attribute for the img element',
        control: { type: 'input' },
    },
    src: {
        description: 'the src attribute for the image element',
        control: {type: 'input'},
    },
    variant: {
      options: ['circular', 'rounded', 'square'],
      control: { type: 'select' },
      defaultValue: 'circular'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiAvatar>;
const Template: React.FC<MuiAvatarProps> = (args) => {
  return (
    <Stack direction='row' spacing={2}>
      <MuiAvatar {...args}>
          OL
      </MuiAvatar>
      <MuiAvatar {...args}>
          BV
      </MuiAvatar>
      <MuiAvatar {...args}>
          JZ
      </MuiAvatar>
  </Stack> 
  )
};

export const Playground = Template.bind({});

Playground.args = {
};

