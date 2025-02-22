import { Meta, StoryObj } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';

export default {
  title: 'Components/textarea',
  component: TextareaComponent,
} as Meta<TextareaComponent>;

export const Default: StoryObj<TextareaComponent> = {
  args: {
    // Add default props here
  },
};
