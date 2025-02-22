import { Meta, StoryObj } from '@storybook/angular';
import { CustomersFormComponent } from './customers-form.component';

export default {
  title: 'Components/customers-form',
  component: CustomersFormComponent,
} as Meta<CustomersFormComponent>;

export const Default: StoryObj<CustomersFormComponent> = {
  args: {
    // Add default props here
  },
};
