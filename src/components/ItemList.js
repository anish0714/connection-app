import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AvatarImage from 'react-native-paper/lib/commonjs/components/Avatar/AvatarImage';
//Navigation
import {useNavigation} from '@react-navigation/native';

const ItemList = ({firstname, surname, picture, company}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('userProfile', [{firstname, surname}])
      }>
      <View style={styles.cardBottom}>
        {/* logo + 2 texts */}
        <AvatarImage
          size={50}
          source={{
            uri: picture,
          }}
          style={styles.cardItemImage}
        />

        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTextName}>
            {firstname} {surname}
          </Text>
          <Text style={styles.cardTextCompany}>
            Currently working with {company}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
  },
  cardTextContainer: {
    margin: 10,
  },
  cardItemImage: {
    marginLeft: 10,
  },
  cardTextName: {
    fontSize: 20,
    color: '#000',
  },
  cardTextCompany: {
    color: 'gray',
  },
});
