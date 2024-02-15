import React from 'react';
import { MuiAccordion, MuiAccordionProps } from '../../components/MuiAccordion';
import type {Meta, StoryObj} from '@storybook/react';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import { MuiTypography } from '../../components/MuiTypography';

const meta: Meta<typeof MuiAccordion> = {
  title: 'Mirage/MuiAccordion',
  component: MuiAccordion,
  // tags: ['autodocs'],
  argTypes: {
    defaultExpanded: {
        type: 'boolean', 
        defaultValue: false,
    },
    disabled: {
        type: 'boolean',
        defaultValue: false,
    }, 
    disableGutters: {
        type: 'boolean', 
        defaultValue: false,
    },
    expanded: {
        type: 'boolean',
        defaultValue: false
    },
    onChange: {
        description: 'Callback fired when the component requests to be closed',
        action: 'clicked'
    },
    square: {
        type: 'boolean',
        defaultValue: false,
    },

  }
}

export default meta;
type Story = StoryObj<typeof MuiAccordion>;

const Template: React.FC<MuiAccordionProps> = (args) => {
  return (
    <MuiAccordion {...args}>
    <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
    >
        <MuiTypography>Accordion 1</MuiTypography>
    </AccordionSummary>
    <AccordionDetails>
        <MuiTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
        </MuiTypography>
    </AccordionDetails>
    </MuiAccordion>
  )
};

export const Playground = Template.bind({});

Playground.args = {
  disabled: false,
  expanded: true,
  square: true
};
