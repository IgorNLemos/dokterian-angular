import { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'Components/card',
  component: CardComponent,
} as Meta<CardComponent>;

export const Default: StoryObj<CardComponent> = {
  args: {
    // Add default props here
  },
};
