import { ReactNode, PropsWithoutRef } from 'react';
import {
  Form as FinalForm,
  FormProps as FinalFormProps,
} from 'react-final-form';
import { z } from 'zod';
import { Box, Button, Flex, Text, useStyleConfig } from '@chakra-ui/react';
import { validateZodSchema } from '@utils/zodUtils';
export { FORM_ERROR } from 'final-form';

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements['form']>, 'onSubmit'> {
  /** All your form fields */
  children?: ReactNode;
  /** Text to display in the submit button */
  submitText?: string;
  schema?: S;
  onSubmit: FinalFormProps<z.infer<S>>['onSubmit'];
  initialValues?: FinalFormProps<z.infer<S>>['initialValues'];
  buttonWidth?: string;
  flexW?: string;
}

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  buttonWidth = 'full',
  flexW = 'full',
  ...props
}: FormProps<S>) {
  const styles = useStyleConfig('Form', {});
  return (
    <FinalForm
      initialValues={initialValues}
      validate={validateZodSchema(schema)}
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        submitting,
        submitError,
        hasValidationErrors,
        errors,
      }) => (
        <form onSubmit={handleSubmit} className="form" {...props}>
          {/* Form fields supplied as children are rendered here */}
          <Box w="100%" sx={styles}>
            <Flex
              w={flexW}
              justify={'center'}
              align="center"
              flexDir={'column'}
            >
              {children}
              {submitError && <Text color="text.error">{submitError}</Text>}

              {submitText && (
                <Button
                  maxW="100%"
                  mt="2"
                  width={buttonWidth}
                  variant={'solid'}
                  colorScheme={'primary'}
                  type="submit"
                  disabled={submitting || hasValidationErrors}
                >
                  {submitText}
                </Button>
              )}
            </Flex>
          </Box>
        </form>
      )}
    />
  );
}

export default Form;
