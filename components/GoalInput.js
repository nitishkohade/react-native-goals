import React, { useState } from 'react';
import {StyleSheet, Button, TextInput, View, Modal} from 'react-native'

const GoalInput = props => {

    const {addGoalHandler, visible, cancelGoalHandler} = props

    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const onAddGoalHandler = () => {
        addGoalHandler(enteredGoal)
        setEnteredGoal('')
    }

    const onCancelGoalHandler = () => {
        cancelGoalHandler()
        setEnteredGoal('')
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.viewFlex}>
                <TextInput placeholder="Course Goal" 
                style={styles.inputStyle} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.groupButton}> 
                    <View style={styles.button}> 
                        <Button color="red" title="CANCEL" style={{top:20}} onPress={onCancelGoalHandler} />
                    </View>
                    <View style={styles.button}> 
                        <Button title="ADD" style={{top:20}} onPress={onAddGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    viewFlex: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    inputStyle: {borderColor:'black', 
    borderWidth: 1, borderRadius: 5,
    padding: 5, width: '80%', marginBottom: 10},
    groupButton: {flexDirection: 'row', justifyContent: 'space-around', width: '60%'},
    button: {width: '40%'}
  });

export default GoalInput;