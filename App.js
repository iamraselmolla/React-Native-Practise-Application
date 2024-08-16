
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalInput, setGoalInput] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    setGoalInput(text)
  };

  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, {
      text: goalInput,
      key: Math.random().toString()
    }]);
  };
  const deleteGoalHandler = (key) => {
    console.log(key)
    return;
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== key)
    })
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} />

      <FlatList data={goals} renderItem={item => {
        return <GoalItem deleteGoalHandler={deleteGoalHandler} item={item.item} />
      }} alwaysBounceVertical={false} />


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
  },
  goalItem: {
    fontSize: 20,
    padding: 10,
    backgroundColor: '#5e0acc',
    color: 'white',
    borderRadius: 5,
    marginBottom: 10,
    textAlign: 'center',
  }

});
