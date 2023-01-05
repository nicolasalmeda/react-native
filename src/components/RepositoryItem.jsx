import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import theme from '../theme';
import StyledText from './StyledText';

const parseThousand = value => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositryStats = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
      }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          Forks
        </StyledText>
        <StyledText align="center">
          {parseThousand(props.froksCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Reviews
        </StyledText>
        <StyledText align="center">
          {parseThousand(props.reviewCount)}
        </StyledText>
      </View>

      <View>
        <StyledText align="center" fontWeight="bold">
          Rating
        </StyledText>

        <StyledText align="center">
          {parseThousand(props.ratingAvarage)}
        </StyledText>
      </View>
    </View>
  );
};

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  lenguage,
  descripttion,
  fullname,
}) => {
  return (
    <View style={{flexDirection: 'row', paddingBottom: 2}}>
      <View style={{paddingRight: 10}}>
        <Image style={styles.image} source={{uri: ownerAvatarUrl}}></Image>
      </View>
      <View style={{flex: 1, paddingLeft: 4, justifyContent: 'center'}}>
        <StyledText fontSize="subheading" fontWeight="bold">
          Fullname: {fullname}
        </StyledText>
        <StyledText>Description: {descripttion}</StyledText>
        <StyledText style={styles.lenguage}>Lenguage: {lenguage}</StyledText>
      </View>
    </View>
  );
};

const RepositoryItem = props => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
    paddingBottom: 10,
    paddingTop: 5,
  },
  strong: {
    color: '#09f',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lenguage: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    marginTop: 4,
    marginBottom: 4,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
