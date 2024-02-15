import { MuiBreadcrumbs, MuiBreadcrumbsProps } from '../../components/MuiBreadcrumbs';
import type {Meta, StoryObj} from '@storybook/react';
import { MuiTypography } from '../../components/MuiTypography';
import { Link } from '@mui/material';
import React from 'react';

const meta: Meta<typeof MuiBreadcrumbs> = {
  title: 'Mirage/MuiBreadcrumbs',
  component: MuiBreadcrumbs,
  argTypes: {
    expandText: {
      description: 'Override the default label for the expand button',
      control: { type: 'string' },
      defaultValue: 'Show path'
    },
    itemsAfterCollapse: {
      description: 'The number of items to show after the ellipsis.',
      control: { type: 'string' },
      defaultValue: 1
    },
    itemsBeforeCollapse: {
      description: 'The number of items to show before the ellipsis.',
      control: { type: 'string' },
      defaultValue: 1
    },
    maxItems: {
      description: 'Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first itemsBeforeCollapse and last itemsAfterCollapse will be shown, with an ellipsis in between.',
      control: { type: 'string' },
      defaultValue: 8
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiBreadcrumbs>;

const Template: React.FC<MuiBreadcrumbsProps> = (args) => {
  return (
    <MuiBreadcrumbs {...args} aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Mui
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Core
      </Link>
      <MuiTypography color="text.primary">Breadcrumbs</MuiTypography>
    </MuiBreadcrumbs>
  )
};

export const Playground = Template.bind({});

Playground.args = {};
