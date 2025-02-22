import { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';

export default {
  title: 'Components/alert',
  component: AlertComponent,
} as Meta<AlertComponent>;

export const Default: StoryObj<AlertComponent> = {
  args: {
    // Add default props here
  },
};
