import { StyleSheet, Text, View } from "react-native";

const GoalItem = (item) => {
    return (
        <View>
            <Text style={styles.goalItem}>{item.item.text}</Text>
        </View>
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