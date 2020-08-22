import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, ActivityIndicator, View, FlatList} from 'react-native';
import ItemList from '../components/ItemList';
import Searchbar from 'react-native-paper/lib/commonjs/components/Searchbar';

//Redux
import {connect} from 'react-redux';

//actions
import {getData, searchContacts} from '../actions/connectionAction';

const HomeScreen = ({
  getData,
  searchContacts,
  connectionReducer: {dataItem, loading},
}) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.homeViewContainer}>
      <Searchbar
        placeholder="Search..."
        editable={true}
        onChangeText={(value) => searchContacts(value)}
      />
      {loading ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="gray" />
        </View>
      ) : (
        <FlatList
          keyExtractor={(item) => item.index.toString()}
          data={dataItem}
          renderItem={({item}) => {
            return (
              <ItemList
                firstname={item.firstname}
                surname={item.surname}
                company={item.company}
                picture={item.picture}
              />
            );
          }}
        />
      )}
    </View>
  );
};

HomeScreen.propTypes = {
  connectionReducer: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
  searchContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  connectionReducer: state.connectionReducer,
});

export default connect(mapStateToProps, {getData, searchContacts})(HomeScreen);

const styles = StyleSheet.create({
  homeViewContainer: {
    flex: 1,
  },
  activityIndicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
