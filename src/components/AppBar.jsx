import React from 'react';
import {ViewPropTypes, StyleSheet, View} from 'react-native';
import StyledText from './StyledText';
import theme from '../theme.js';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" style={styles.text}>
        Repositories
      </StyledText>
    </View>
  );
};

export default AppBar;
