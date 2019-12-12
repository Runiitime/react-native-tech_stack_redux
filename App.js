import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux'
import {store} from './src/store'
import {Header} from './src/components/common'
import LibraryList from './src/components/LibraryList'

const App = () => {
  return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header title="Libraries"/>
          <LibraryList/>
        </View>
      </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383838'
  }
});

export default App;
