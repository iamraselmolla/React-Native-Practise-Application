import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputStyle} placeholder='Goal' />
        <View>
          <Button color={'#b180f0'} style title='Add Goal...' />
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 20 }}>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingLeft: 16,
    paddingRight: 16
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '75%',
    padding: 3,
    marginBottom: 10,
    paddingLeft: 10
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

});
