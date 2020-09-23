import { Alert, AsyncStorage } from 'react-native'

export default async function saveState(state) {
  try {
    const seralizedState = JSON.stringify(state)
    await AsyncStorage.setItem("state", seralizedState );
  } catch (error) {
    Alert.alert("Error", error)
  }
}