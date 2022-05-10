import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
  TextareaProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { useField, UseFieldConfig } from 'react-final-form';

export interface FormTextareaProps extends TextareaProps {
  name: string;
  label: string;
  helperText?: string;
  placeholder?: string;
  fieldProps?: UseFieldConfig<string>;
}

export default function FormTextInput({
  name,
  label,
  helperText,
  placeholder,
  fieldProps,
  ...rest
}: FormTextareaProps) {
  const {
    input,
    meta: { touched, error, submitError, submitting },
  } = useField(name, {
    ...fieldProps,
  });

  const styles = useMultiStyleConfig('FormTextarea', {});

  const normalizedError = Array.isArray(error)
    ? error.join(', ')
    : error || submitError;

  const isError = normalizedError && touched;

  return (
    <FormControl isInvalid={isError} sx={styles.control}>
      <FormLabel sx={styles.label}>{label}</FormLabel>
      <Textarea
        {...input}
        disabled={submitting}
        placeholder={placeholder}
        sx={styles.input}
      />
      <FormHelperText sx={styles.helper}>{helperText}</FormHelperText>
      <FormErrorMessage sx={styles.error}>{normalizedError}</FormErrorMessage>
    </FormControl>
  );
}
