import React from 'react';
import { MuiBox } from '../../components/MuiBox';
import { MuiContainer, MuiContainerProps } from '../../components/MuiContainer';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiContainer> = {
  title: 'Mirage/MuiContainer',
  component: MuiContainer,
  argTypes: {
    disableGutters: {
        description: 'If true, the left and right padding is removed',
        control: {type: 'boolean'},
    },
    fixed: {
        description: 'Set the max-width to match the min-width of the current breakpoint',
        control: {type: 'boolean'},
    },
    maxWidth: {
        description: 'Determine the max-width of the container, can be set to false',
        control: {type: 'select'},
        options: ['xs', 'sm', 'md', 'lg', 'xl', false]
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiContainer>;

const Template: React.FC<MuiContainerProps> = (args) => {
  return (
    <MuiContainer {...args}>
      <MuiBox sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
    </MuiContainer>
  )
};

export const Playground = Template.bind({});

Playground.args = {};


