import { Meta, StoryObj } from '@storybook/angular';
import { DashboardComponent } from './dashboard.component';

export default {
  title: 'Components/dashboard',
  component: DashboardComponent,
} as Meta<DashboardComponent>;

export const Default: StoryObj<DashboardComponent> = {
  args: {
    // Add default props here
  },
};
