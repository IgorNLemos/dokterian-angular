import { Meta, StoryObj } from '@storybook/angular';
import { SideMenuComponent} from './side-menu.component';

export default {
  title: 'Components/side-menu',
  component: SideMenuComponent,
} as Meta<SideMenuComponent>;

export const Default: StoryObj<SideMenuComponent> = {
  args: {
    // Add default props here
  },
};
