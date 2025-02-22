import { Meta, StoryObj } from '@storybook/angular';
import { LabelComponent } from './label.component';

export default {
  title: 'Components/label',
  component: LabelComponent,
} as Meta<LabelComponent>;

export const Default: StoryObj<LabelComponent> = {
  args: {
    // Add default props here
  },
};
