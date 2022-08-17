import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Datepicker from 'components/interaction-elements/Datepicker/Datepicker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InteractionElements/Datepicker',
    component: Datepicker,
} as ComponentMeta<typeof Datepicker>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Datepicker> = () => (
    <div className="flex justify-center">
        <Datepicker />
    </div>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};