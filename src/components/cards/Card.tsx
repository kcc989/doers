import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react';

export interface CardProps extends BoxProps {
  variant?: 'outline';
}

export default function Card(props: CardProps) {
  const { variant, ...rest } = props;
  const { ...styles } = useStyleConfig('Card', { variant });

  return (
    <Box __css={styles} {...rest}>
      {props.children}
    </Box>
  );
}
