import {
  ColorProps,
  LayoutProps,
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type LimitedChakraProps = Omit<
  ChakraTextProps,
  'm' & 'my' & 'mx' & 'p' & 'px' & 'py'
>;

interface TextProps extends LayoutProps, ColorProps {
  chakraProps: LimitedChakraProps;
  children: string | ReactNode;
}

export default function Text({ chakraProps, children, ...rest }: TextProps) {
  return (
    <ChakraText {...rest} {...chakraProps}>
      {children}
    </ChakraText>
  );
}
