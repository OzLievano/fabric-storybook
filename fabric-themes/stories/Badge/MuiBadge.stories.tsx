import React from 'react';
import { MuiBadge, MuiBadgeProps } from '../../components/MuiBadge';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiBadge> = {
  title: 'Mirage/MuiBadge',
  component: MuiBadge,
  argTypes: {
    color: {
        description: 'color of the MuiBadge component',
        options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
        control: { type: 'select' },
        defaultValue: 'primary'
    },
    invisible: {
        description: 'controls the visibility of the Muibadge',
        control: {type: 'boolean'},
        defaultValue: 'false'
    },
    max: {
        description: 'max count to show',
        control: {type: 'number'},
        defaultValue: 99,
    },
    overlap: {
        description: 'Wrapped shape the MuiBadge should overlap.',
        options: ['circular', 'rectangular'],
        control: { type: 'select' },
        defaultValue: 'rectangular'
    },
    showZero: {
        description: 'Controls whether the badge is hidden when badgeContent is zero.',
        control: {type: 'boolean'},
        defaultValue: 'false'
      },
    variant: {
        description: 'The variant to use for MuiBadge',
        options: ['dot', 'standard'],
        control: { type: 'select' },
        defaultValue: 'standard'
    },
  }
}

export default meta;
type Story = StoryObj<typeof MuiBadge>;

const Template: React.FC<MuiBadgeProps> = (args) => {
  return (
   <MuiBadge {...args} />
  )
};

export const Playground = Template.bind({});

Playground.args = {};
