import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import Select, { SelectProps } from '@components/menus/Select';
import { useField, UseFieldConfig } from 'react-final-form';

export interface FormSelectProps extends Omit<SelectProps, 'disabled'> {
  name: string;
  label: string;
  helperText?: string;
  fieldProps?: UseFieldConfig<string>;
}

export default function FormSelect({
  options,
  name,
  label,
  helperText,
  placeholder,
  fieldProps,
  variant = 'outline',
  ...rest
}: FormSelectProps) {
  const {
    input,
    meta: { touched, error, submitError, submitting },
  } = useField(name, fieldProps);

  const styles = useMultiStyleConfig('FormSelect', {});

  const normalizedError = Array.isArray(error)
    ? error.join(', ')
    : error || submitError;

  const isError = normalizedError && touched;

  return (
    <FormControl isInvalid={isError} sx={styles.control}>
      <FormLabel sx={styles.label}>{label}</FormLabel>
      <Select
        buttonProps={{
          sx: styles.input,
        }}
        options={options}
        variant={variant}
        {...input}
        disabled={submitting || false}
        placeholder={placeholder}
      />
      <FormHelperText sx={styles.helper}>{helperText}</FormHelperText>
      <FormErrorMessage sx={styles.error}>{normalizedError}</FormErrorMessage>
    </FormControl>
  );
}
