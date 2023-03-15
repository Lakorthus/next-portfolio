import { ComponentMeta, ComponentStory } from '@storybook/react';
import Pokemon, { IPokemon } from './Pokemon';
import { mockPokemonProps } from './Pokemon.mocks';

export default {
  title: 'projects/Pokemon',
  component: Pokemon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Pokemon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pokemon> = (args) => (
  <Pokemon {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPokemonProps.base,
} as IPokemon;
