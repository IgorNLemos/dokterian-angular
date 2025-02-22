import { Meta, StoryObj } from '@storybook/angular';
import { CustomersComponent } from './customers.component';

export default {
  title: 'Components/customers',
  component: CustomersComponent,
} as Meta<CustomersComponent>;

export const Default: StoryObj<CustomersComponent> = {
  args: {
    // Add default props here
  },
};
