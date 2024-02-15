import React from 'react';
import { MuiCard, MuiCardProps } from '../../components/MuiCard';
import type {Meta, StoryObj} from '@storybook/react';
import { CardActions, CardContent } from '@mui/material';
import { MuiButton } from '../../components/MuiButton';
import { MuiTypography } from '../../components/MuiTypography';

const meta: Meta<typeof MuiCard> = {
  title: 'Mirage/MuiCard',
  component: MuiCard,
  argTypes: {
    raised: {
        description: 'If true, the MuiCard will use raised styling',
        control: {type: 'boolean'},
        defaultValue: 'false'
      },
    variant: {
        options: ['elevation', 'outlined'],
        control: {type: 'select'},
        defaultValue: 'elevation'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiCard>;

const Template: React.FC<MuiCardProps> = (args) => <MuiCard {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'outlined',
  children: (
    <div>
      <CardContent>
        <MuiTypography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </MuiTypography>
        <MuiTypography variant="h5" component="div">
          be*nev*o*lent
        </MuiTypography>
        <MuiTypography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </MuiTypography>
        <MuiTypography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </MuiTypography>
      </CardContent>
      <CardActions>
        <MuiButton variant='outlined'>Learn More</MuiButton>
      </CardActions>
  </div>
  ),
};

