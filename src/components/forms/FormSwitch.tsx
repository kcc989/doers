import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Switch,
  SwitchProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { useField, UseFieldConfig } from 'react-final-form';

export interface FormSwitchProps extends SwitchProps {
  name: string;
  label: string;
  helperText?: string;
  fieldProps?: UseFieldConfig<string>;
}

export default function FormSwitch({
  name,
  label,
  helperText,
  placeholder,
  fieldProps,
  colorScheme = 'primary',
  ...rest
}: FormSwitchProps) {
  const {
    input,
    meta: { submitting },
  } = useField(name, {
    ...fieldProps,
  });

  const styles = useMultiStyleConfig('FormSwitch', {});

  return (
    <FormControl sx={styles.control} as={Flex} alignItems="center">
      <FormLabel sx={styles.label}>{label}</FormLabel>
      <Switch
        defaultChecked={false}
        {...input}
        disabled={submitting}
        sx={styles.input}
        {...rest}
        type="checkbox"
        colorScheme={colorScheme}
      />
      <FormHelperText sx={styles.helper}>{helperText}</FormHelperText>
    </FormControl>
  );
}
