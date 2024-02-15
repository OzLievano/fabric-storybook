import React from 'react';
import { MuiAccordionProps } from '../../components/MuiAccordion';
import { MuiBox } from '../../components/MuiBox';
import { MuiTypography, MuiTypographyProps } from '../../components/MuiTypography'
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiTypography> = {
  title: 'Mirage/MuiTypograhy',
  component: MuiTypography,
  argTypes: {
    align: {
        description: 'If true, the MuiTypograhy will use raised styling',
        control: {type: 'boolean'},
        defaultValue: 'false'
    },
    gutterBottom: {
      description: 'If true, the text will have a bottom margin.',
      control: {type: 'boolean'},
      defaultValue: 'false'
    },
    noWrap: {
      description: 'If true, the text will not wrap, ',
      control: {type: 'boolean'},
      defaultValue: 'false'
    },
    paragraph: {
      description: 'If true, the element will be a paragraph element.',
      control: {type: 'boolean'},
      defaultValue: 'false'
    },
    variant: {
        options: ['body1', 'body2', 'button', 'caption', 'h1','h2','h3', 'h4', 'h5', 'h6','inherit','overline','subtitle1','subtitle2'],
        control: {type: 'select'},
        defaultValue: 'body1'
    },
  }
}
export default meta;
type Story = StoryObj<typeof MuiTypography>;

const Template: React.FC<MuiTypographyProps> = (args) => {
  return (
    <MuiBox>
      <MuiTypography {...args}>{args.children}</MuiTypography>
    </MuiBox>
  )
};

export const Playground = Template.bind({});

Playground.args = {};
