import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { useField, UseFieldConfig } from 'react-final-form';

export interface FormTextInputProps extends InputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'hidden';
  name: string;
  label: string;
  helperText?: string;
  placeholder?: string;
  fieldProps?: UseFieldConfig<string>;
}

export default function FormTextInput({
  type,
  name,
  label,
  helperText,
  placeholder,
  fieldProps,
  ...rest
}: FormTextInputProps) {
  const {
    input,
    meta: { touched, error, submitError, submitting },
  } = useField(name, {
    parse:
      type === 'number'
        ? (Number as any)
        : // Converting `""` to `null` ensures empty values will be set to null in the DB
          v => (v === '' ? null : v),
    ...fieldProps,
  });

  const styles = useMultiStyleConfig('FormTextInput', {});

  const normalizedError = Array.isArray(error)
    ? error.join(', ')
    : error || submitError;

  const isError = normalizedError && touched;

  return (
    <FormControl isInvalid={isError} sx={styles.control}>
      <FormLabel sx={styles.label}>
        {type === 'hidden' ? null : label}
      </FormLabel>
      <Input
        {...input}
        disabled={submitting}
        type={type}
        placeholder={placeholder}
        sx={styles.input}
      />
      <FormHelperText sx={styles.helper}>{helperText}</FormHelperText>
      <FormErrorMessage sx={styles.error}>{normalizedError}</FormErrorMessage>
    </FormControl>
  );
}
