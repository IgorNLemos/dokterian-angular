import { IconModule } from './icon.module';
import { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

export default {
  title: 'Components/icon',
  component: IconComponent,
} as Meta<IconComponent>;

export const Default: StoryObj<IconComponent> = {
  args: {
    // Add default props here
  },
};
