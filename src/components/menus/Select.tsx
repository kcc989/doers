import {
  Box,
  BoxProps,
  Flex,
  Icon,
  useColorModeValue,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { useCallback, useState } from 'react';

export type DropdownItem = {
  key: string | number;
  value: string | number;
};

type DropdownProps = {
  defaultOption?: DropdownItem;
  onChange?: (v: DropdownItem) => void;
  options: DropdownItem[];
  buttonProps?: BoxProps;
  optionsProps?: BoxProps;
  optionProps?: BoxProps;
  placeholder: string;
  variant: string;
};

export default function Dropdown({
  defaultOption,
  onChange = _ => null,
  options,
  placeholder,
  variant,
  ...props
}: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const styles = useMultiStyleConfig('Select', { variant, ...props });

  const handleSelect = useCallback(
    (o: DropdownItem) => {
      setSelectedOption(o);
      onChange(o);
    },
    [onChange]
  );

  return (
    <Listbox value={selectedOption} onChange={handleSelect} as={Box}>
      <Listbox.Button as={Box} __css={styles.button}>
        <Flex align={'center'} justify="space-between">
          <Box>{selectedOption ? selectedOption.value : placeholder}</Box>
          <Flex flexDir={'column'}>
            <Icon my="-0.5" as={ChevronUpIcon} />
            <Icon my="-0.5" as={ChevronDownIcon} />
          </Flex>
        </Flex>
      </Listbox.Button>
      <Listbox.Options as={Box} __css={styles.options}>
        {options.map(o => (
          <Listbox.Option as={Box} key={o.key} value={o} __css={styles.option}>
            {o.value}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
