// App.js
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goalInput) => {
    setGoals(currentGoals => [
      ...currentGoals,
      { text: goalInput, key: Math.random().toString() }
    ]);
  };

  const deleteGoalHandler = (key) => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== key);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <GoalItem
            id={item.key}
            text={item.text}
            onDelete={deleteGoalHandler}
          />
        )}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },
});
