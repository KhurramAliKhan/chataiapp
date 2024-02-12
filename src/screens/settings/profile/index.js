import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useValues} from '@utils/context';

export default profile = ({res}) => {
  const [profileName, setProfileName] = useState('');
  const [profileEmail, setProfileEmail] = useState('');
  const [isDetails, setisDetails] = useState('');
  const {viewRTLStyle, textRTLStyle} = useValues();
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    if (res.success) {
      res.user.name != null && setProfileName(res.user.name);
      res.user.email != null && setProfileEmail(res.user.email);
      setisDetails(true);
    } else {
      setisDetails(false);
    }
  };

  return (
    <View style={[styles.mainView, {flexDirection: viewRTLStyle}]}>
      <View style={[styles.details, {flexDirection: viewRTLStyle}]}>
        <View style={styles.userView}>
          <Text style={styles.user}>
            {isDetails && profileName ? profileName.charAt(0) : 'S'}
          </Text>
        </View>
        {isDetails && profileName && profileEmail ? (
          <View style={styles.detail}>
            <Text style={[styles.name, {textAlign: textRTLStyle}]}>
              {profileName}
            </Text>
            <Text style={[styles.email, {textAlign: textRTLStyle}]}>
              {profileEmail}
            </Text>
          </View>
        ) : (
          <Text style={styles.welcome}>Welcome To Megabot</Text>
        )}
      </View>
    </View>
  );
};
