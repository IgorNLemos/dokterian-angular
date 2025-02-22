import { Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';

export default {
  title: 'Components/app',
  component: AppComponent,
} as Meta<AppComponent>;

export const Default: StoryObj<AppComponent> = {
  args: {
    // Add default props here
  },
};
