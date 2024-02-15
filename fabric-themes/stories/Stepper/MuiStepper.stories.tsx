import { Step, StepLabel } from '@mui/material';
import React from 'react';
import { MuiAccordionProps } from '../../components/MuiAccordion';
import { MuiBox } from '../../components/MuiBox';
import { MuiStepper, MuiStepperProps } from '../../components/MuiStepper';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiStepper> = {
  title: 'Mirage/MuiStepper',
  component: MuiStepper,
  argTypes: {
    activeStep: {
        description: 'Set the active step (zero based index). Set to -1 to disable all the steps.',
        control: {type: 'integer'},
        defaultValue: '0'
      },
    nonLinear: {
        description: 'If set the Stepper will not assist in controlling steps for linear flow.',
        control: {type: 'boolaen'},
        defaultValue: false
    },
    orientation: {
      description: 'MuiStepper orientation (layout flow direction).',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal'
    },
  }
}

export default meta;
type Story = StoryObj<typeof MuiStepper>;

const Template: React.FC<MuiStepperProps> = (args) => {
  const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
  ];
  return (
    <MuiBox>
     <MuiStepper {...args}>
       {steps.map((label) => (
          <Step key={label}>
              <StepLabel>{label}</StepLabel>
          </Step>
      ))}
      </MuiStepper>
    </MuiBox>
  )
};

export const Playground = Template.bind({});

Playground.args = {};
