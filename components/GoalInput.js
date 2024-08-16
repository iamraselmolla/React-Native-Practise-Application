import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler, goalInputHandler

    
 }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput onChangeText={goalInputHandler} style={styles.inputStyle} placeholder='Goal' />
            <View>
                <Button onPress={addGoalHandler} color={'#b180f0'} style title='Add Goal...' />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({

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
});


export default GoalInput;