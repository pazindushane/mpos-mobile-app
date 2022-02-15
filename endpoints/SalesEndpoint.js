import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

addAvailableActivity = async () => {
    try {
      let activities = await AsyncStorage.getItem('availableActivities')
      let { newActivity } = this.state
      if (activities != null) {
        activities = JSON.parse(activities)
        activities.push(newActivity)
        await AsyncStorage.setItem( 'availableActivities', JSON.stringify(activities) )
      }
    } catch (error) {
      console.warn(error)
    }
  }
  
  displayAvailableActivities = () => {
    let activities = await AsyncStorage.getItem('availableActivities')
    console.warn(JSON.parse(activities))
  }

  