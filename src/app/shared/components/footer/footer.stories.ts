import { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';

export default {
  title: 'Components/footer',
  component: FooterComponent,
} as Meta<FooterComponent>;

export const Default: StoryObj<FooterComponent> = {
  args: {
    // Add default props here
  },
};
