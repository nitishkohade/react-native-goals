import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const GoalItem = props => {
    const {item, onDelete} = props
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, item.key)}><View style={styles.listItem}>
            <Text>
              {item.value}
            </Text>
        </View></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {padding: 10, backgroundColor: 'orange', borderColor: 'black', borderWidth: 1, marginVertical: 3}
  });

export default GoalItem