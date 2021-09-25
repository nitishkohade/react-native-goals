import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (value) => {
    if(value === '') return
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value}])
    setIsAddMode(false)
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false)
  }

  const onDelete = (key) => {
    setCourseGoals(currentGoals => currentGoals.filter(item => item.key !== key))
  }


  return (
    <View style={styles.viewPadding}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} cancelGoalHandler={cancelGoalHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.key}
        data={courseGoals} 
        renderItem={(listItem) => <GoalItem onDelete={onDelete} item={listItem.item} />  } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'},
  viewPadding: {paddingTop: 40, paddingLeft: 20, paddingRight: 20},
});
