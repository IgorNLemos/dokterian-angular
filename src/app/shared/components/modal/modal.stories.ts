import { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from './modal.component';

export default {
  title: 'Components/modal',
  component: ModalComponent,
} as Meta<ModalComponent>;

export const Default: StoryObj<ModalComponent> = {
  args: {
    // Add default props here
  },
};
