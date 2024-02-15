import React from 'react';
import { MuiBox } from '../../components/MuiBox';
import { MuiButton } from '../../components/MuiButton';
import { MuiGrid } from '../../components/MuiGrid';
import { MuiTooltip, MuiTooltipProps } from '../../components/MuiTooltip';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MuiTooltip> = {
  title: 'Mirage/MuiTooltip',
  component: MuiTooltip,
  argTypes: {
    arrow: {
      description: 'If true, the Muitooltip adds an arrow',
      control: {type: 'boolean'},
      defaultValue: 'false'
    },
    onClose: {
      description: 'Callback fired when the component requests to be closed',
      action: 'clicked'
    },
    onOpen: {
      description: 'Callback fired when the component requests to be closed',
      action: 'clicked'
    },
    open: {
      description: 'If true, the Muitooltip adds an arrow',
      control: {type: 'boolean'},
    },
    placement: {
      description: 'Tooltip placement.',
      options: ['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left','right-end', 'right-start', 'right', 'top-end', 'top-start','top'],
      defaultValue: 'bottom'
    },
    title: {
      description: 'Tooltip title. Zero-length titles string, undefined, null and false are never displayed.',
    }
  }
}

export default meta;
type Story = StoryObj<typeof MuiTooltip>;

const Template: React.FC<MuiTooltipProps> = (args) => {
  return (
    <MuiBox>
      <MuiGrid container>
          <MuiGrid item>
              <MuiTooltip {...args}>
                  <MuiButton>top-start</MuiButton>
              </MuiTooltip>
              <MuiTooltip title="Add" placement="top">
                  <MuiButton>top</MuiButton>
              </MuiTooltip>
              <MuiTooltip title="Add" placement="top-end">
                  <MuiButton>top-end</MuiButton>
              </MuiTooltip>
          </MuiGrid>
      </MuiGrid>
    </MuiBox>
  )
};

export const Playground = Template.bind({});

Playground.args = {};
