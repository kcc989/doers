import React from "react";
import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

export interface CardProps extends Omit<BoxProps, "css"> {
  variant?: "outline";
}

export default function Card(props: CardProps) {
  const { variant, ...rest } = props;
  const { ...styles } = useStyleConfig("Card", { variant });

  return (
    <Box __sx={styles} {...rest}>
      {props.children}
    </Box>
  );
}
