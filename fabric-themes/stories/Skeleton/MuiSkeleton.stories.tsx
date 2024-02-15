import React from 'react';
import { MuiBox } from '../../components/MuiBox';
import { MuiSkeleton, MuiSkeletonProps } from '../../components/MuiSkeleton';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiSkeleton> = {
  title: 'Mirage/MuiSkeleton',
  component: MuiSkeleton,
  argTypes: {
    animation: {
      description: 'The animation. If false the animation effect is disabled.',
      control: {type: 'select'},
      options: ['pulse', 'wave', 'false'],
      defaultValue: 'pulse'
    },
    height: {
      description: 'Height of the skeleton', 
      control: {type: 'number'},
    },
    variant: {
      options: ['circular', 'rectangular', 'rounded', 'text'],
      control: {type: 'select'},
      defaultValue: 'text'
    },
    width: {
      description: 'Width of the skeleton', 
      control: {type: 'number'},
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiSkeleton>;

const Template: React.FC<MuiSkeletonProps> = (args) => {
  return (
  <MuiBox>
    <MuiSkeleton {...args}/>
    <MuiSkeleton variant="circular" width={40} height={40} />
    <MuiSkeleton variant="rectangular" width={210} height={60} />
    <MuiSkeleton variant="rounded" width={210} height={60} />
  </MuiBox>
  )
};

export const Playground = Template.bind({});

Playground.args = {
  disabled: false,
  expanded: true,
  square: true
};
