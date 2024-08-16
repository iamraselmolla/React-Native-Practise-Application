
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const goalInputHandler = (text) => {
    console.log(text)
  };

  const addGoalHandler = () => {

  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} style={styles.inputStyle} placeholder='Goal' />
        <View>
          <Button color={'#b180f0'} style title='Add Goal...' />
        </View>
      </View>
      <View style={styles.goalContainer}>
        <Text style={{ fontSize: 20 }}>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 80,
    paddingLeft: 16,
    paddingRight: 16
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '75%',
    padding: 3,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 2
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  goalContainer: {
    borderTopWidth: 2,
    marginTop: 20,
    borderTopColor: '#cccccc',
  }

});
