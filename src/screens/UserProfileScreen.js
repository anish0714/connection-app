import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Animateable
import * as Animatable from 'react-native-animatable';

//Icons
import Icon from 'react-native-vector-icons/Ionicons';

import AvatarImage from 'react-native-paper/lib/commonjs/components/Avatar/AvatarImage';

const UserProfileScreen = ({route, navigation}) => {
  const {firstname, surname} = route.params[0];

  // console.log(route.params);

  return (
    <View style={styles.outerContainer}>
      <Icon
        name="md-arrow-back"
        color="gray"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <Animatable.View animation="fadeInDownBig" style={styles.imageContainer}>
        <AvatarImage
          source={{
            uri:
              'data:image/png;base64,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',
          }}
          size={150}
        />
      </Animatable.View>

      <Animatable.View animation="fadeInUpBig" style={styles.card}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardName}>
            {firstname} {surname}
          </Text>
          <Text style={styles.cardText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </Animatable.View>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  card: {
    bottom: 75,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 2,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 2},
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    //top: 75,
    zIndex: 1,
    borderColor: '#ddd',
    borderRadius: 75,
    borderWidth: 10,
    marginLeft: 125,
    marginRight: 125,
  },

  cardTextContainer: {
    alignItems: 'center',
    marginTop: 75,
  },
  cardName: {
    fontSize: 30,
  },
  cardText: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 75,
  },
});
