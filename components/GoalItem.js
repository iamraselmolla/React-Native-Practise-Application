// components/GoalItem.js
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ id, text, onDelete }) => {
    return (
        <Pressable onPress={() => onDelete(id)} style={({ pressed }) => pressed && styles.pressedItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#5e0acc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    goalText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    pressedItem: {
        opacity: 0.5,
    },
});

export default GoalItem;
