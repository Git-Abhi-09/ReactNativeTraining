import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveSession = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'true');
};

export const checkSession = async () => {
    const status = await AsyncStorage.getItem('isLoggedIn');
    return status === 'true';
};

export const clearSession = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
};
