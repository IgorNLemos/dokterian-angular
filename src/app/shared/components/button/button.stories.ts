import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations:[ButtonComponent],
    }),
  ],
  argTypes: {
    label:{control:'text'},
    class:{
      control:'select',
      options:['primary', 'secondary', 'danger']
    },
    size:{
      control:'select',
      options:['small', 'medium', 'large']
    },
    disabled:{control: 'boolean'},
  },
} as Meta<ButtonComponent>;

export const Primary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Action',
    class: 'primary',
  },
};
