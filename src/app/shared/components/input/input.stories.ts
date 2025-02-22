import { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'Components/input',
  component: InputComponent,
} as Meta<InputComponent>;

export const Default: StoryObj<InputComponent> = {
  args: {
    // Add default props here
  },
};
