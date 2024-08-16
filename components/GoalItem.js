import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ props }) => {
    return (
        <Pressable onPress={props.deleteGoalHandler(props.item.text).bind(this, props.id)}>
            <View>
                <Text style={styles.goalItem}>{props.item.text}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({

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

export default GoalItem;