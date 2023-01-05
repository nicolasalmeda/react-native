import React from 'react';
import {Text, StyleSheet} from 'react-native';
import theme from '../theme.js';

const styles = StyleSheet.create({
  text: {
    color: 'grey',
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  sunheading: {
    color: theme.fontSizes.subheading,
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 10,
  },
  align: {
    textAlign: 'center',
  },
});

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  align,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    align === 'center' && styles.align,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    style,
  ];
  return <Text style={textStyles}>{children}</Text>;
}
