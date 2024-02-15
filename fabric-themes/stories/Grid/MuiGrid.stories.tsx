import React from 'react';
import { MuiBox } from '../../components/MuiBox';
import { MuiGrid, MuiGridProps} from '../../components/MuiGrid';
import type {Meta, StoryObj} from '@storybook/react';


const meta: Meta<typeof MuiGrid> = {
  title: 'Mirage/MuiGrid',
  component: MuiGrid,
  argTypes: {
    columns: {
        description: 'The number of columns',
        control: {type: 'number' || 'object' },
        defaultValue: 12,
      },
    container: {
        description: 'component will have flex container behavior',
        control: {type: 'boolean'},
        defaultValue: false
    },
    direction: {
        description: 'defines the flex-direction style property',
        control: {type: 'select'},
        options: ['column-reverse', 'column', 'row-reverse', 'row'],
        defaultValue: 'row'
    },
    item: {
        control: {type: 'boolean'},
        defaultValue: false
    },
    wrap: {
        description: 'defines the flex-wrap style property',
        control: {type: 'select'},
        options: ['nowrap', 'wrap-reverse', 'wrap'],
        defaultValue: 'wrap'
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiGrid>;

const Template: React.FC<MuiGridProps> = (args) => {
  return (
    <MuiBox>
      <MuiGrid {...args}>
      <MuiGrid item xs={8}>
          <div>xs=8</div>
      </MuiGrid>
      <MuiGrid item xs={4}>
          <div>xs=4</div>
      </MuiGrid>
      <MuiGrid item xs={4}>
          <div>xs=4</div>
      </MuiGrid>
      <MuiGrid item xs={8}>
          <div>xs=8</div>
      </MuiGrid>
      </MuiGrid>
    </MuiBox>
  )
};

export const Playground = Template.bind({});

Playground.args = {
  disabled: false,
  expanded: true,
  square: true
};

