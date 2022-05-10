import { ComponentStory } from '@storybook/react';
import React from 'react';

import Form from './Form';
import FormSelect from './FormSelect';
import FormSwitch from './FormSwitch';
import FormTextInput from './FormTextInput';
import FormTextarea from './FormTextarea';

import { z } from 'zod';
import { Box } from '@chakra-ui/react';

const email = z.string().min(1, 'Email is required').email();

const EmailLogin = z.object({
  email,
  story: z.string(),
  cookies: z.boolean(),
  country: z.string(),
});

export default {
  title: 'Forms/Form',
  component: Form,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template: ComponentStory<typeof Form> = (args: any) => (
  <Box m="10">
    <Form {...args} />
  </Box>
);

export const SimpleForm = Template.bind({});
SimpleForm.args = {
  children: (
    <>
      <FormTextInput
        name="email"
        label="Email"
        placeholder="Enter your email..."
      />
      <FormTextarea
        name="story"
        label="Story"
        placeholder="Once upon a time..."
      />
      <FormSelect
        name="country"
        label="Country"
        options={[
          { key: 'USA', value: 'United States' },
          { key: 'PRT', value: 'Portugal' },
        ]}
      />
      <FormSwitch name="cookies" label="Cookies" />
    </>
  ),
  submitText: 'Login',
  schema: EmailLogin,
  initialValues: { email: '' },
  onSubmit: values => {
    console.log(values);
  },
};
