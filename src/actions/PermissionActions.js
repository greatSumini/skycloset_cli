import {PermissionsAndroid, Platform, BackHandler, ToastAndroid} from 'react-native';

export default function() {
    return {
        hasLocationPermission : async function() {
            if(Platform.OS === 'ios' || (Platform.OS === 'anroid' && Platform.Version < 23)) {
                return true;
            }

            ToastAndroid.show('I\'m here', ToastAndroid.SHORT);

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: '하늘옷장에서 내 기기 위치에 액세스하도록 허용하시겠습니까?',
                    message: '내 위치의 날씨를 바로 검색할 수 있습니다.',
                    buttonNeutral: '다음에',
                    buttonNegative: '거부',
                    buttonPositive: '허용',
                },
            );
            if(granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            }
            else {
                BackHandler.exitApp();
                return false;
            }
        }
    }
}