import { Meta, StoryObj } from '@storybook/angular';
import { FabCardComponent } from './fab-card.component';

export default {
  title: 'Components/fab-card',
  component: FabCardComponent,
} as Meta<FabCardComponent>;

export const Default: StoryObj<FabCardComponent> = {
  args: {
    // Add default props here
  },
};
