import { Meta, StoryObj } from '@storybook/angular';
import { LoginComponent } from './login.component';

export default {
  title: 'Components/login',
  component: LoginComponent,
} as Meta<LoginComponent>;

export const Default: StoryObj<LoginComponent> = {
  args: {
    // Add default props here
  },
};
