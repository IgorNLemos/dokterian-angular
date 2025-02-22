import { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';

export default {
  title: 'Components/header',
  component: HeaderComponent,
} as Meta<HeaderComponent>;

export const Default: StoryObj<HeaderComponent> = {
  args: {
    // Add default props here
  },
};
