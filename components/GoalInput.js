// components/GoalInput.js
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
    const [goalInput, setGoalInput] = useState('');

    const goalInputHandler = (enteredText) => {
        setGoalInput(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(goalInput);
        setGoalInput(''); // Clear the input after adding
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Your goal"
                style={styles.inputStyle}
                onChangeText={goalInputHandler}
                value={goalInput}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '75%',
        padding: 8,
        borderRadius: 4,
    },
});

export default GoalInput;
