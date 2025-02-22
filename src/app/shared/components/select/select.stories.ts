import { Meta, StoryObj } from '@storybook/angular';
import { SelectComponent } from './select.component';

export default {
  title: 'Components/select',
  component: SelectComponent,
} as Meta<SelectComponent>;

export const Default: StoryObj<SelectComponent> = {
  args: {
    // Add default props here
  },
};
