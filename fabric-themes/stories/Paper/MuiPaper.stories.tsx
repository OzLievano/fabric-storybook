import React from 'react';
import { MuiBox } from '../../components/MuiBox';
import { MuiPaper, MuiPaperProps } from '../../components/MuiPaper';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiPaper> = {
  title: 'Mirage/MuiPaper',
  component: MuiPaper,
  argTypes: {
    elevation: {
        description: 'Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.',
        control: {type: 'boolean'},
        defaultValue: 'false'
      },
    square: {
      description: 'If true, rounded corners are disabled.', 
      control: {type: 'boolean'},
      defaultValue: 'false'
    },
    variant: {
        description: 'The variant to use.',
        options: ['elevation', 'outlined'],
        control: {type: 'select'},
        defaultValue: 'elevation'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiPaper>;

const Template: React.FC<MuiPaperProps> = (args) => {
  return (
    <MuiBox
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          flex: '0 0 auto'
        },
      }}
    >
      <MuiPaper {...args} />
      <MuiPaper elevation={0} />
      <MuiPaper elevation={3} />
    </MuiBox>
  )
};

export const Playground = Template.bind({});

Playground.args = {};