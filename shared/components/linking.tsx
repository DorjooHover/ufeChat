import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { borderWaterBlue, orange, primary, waterBlue, white } from '../colors';
import { Space12, Space20, Space24, Space8 } from '../spacing';
import { link, remove } from '../string';
import styles, { mergeStyle } from '../styles/style';
import { MainButton } from './buttons';
import { CustomCard } from './cards';
const Linking = () => {
  const navigation = useNavigation();
  const [type, setType] = useState('link');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: white, paddingHorizontal: 20 }}>
        <StatusBar backgroundColor={white} barStyle={'default'} />
        <Space20 />
        <Space20 />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-bet4een',
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="arrow-left" size={30} color="#000" />
            </TouchableOpacity>
            <Space12 />
            <Text style={mergeStyle(styles.titleSmall, { color: '#000' })}>
              MGM331_231
            </Text>
          </View>
          <MainButton
            paddingHorizontal={14}
            bgColor={waterBlue}
            borderColor={borderWaterBlue}
            paddingVertical={8}
            onPress={() => navigation.navigate('Linking')}
            child={
              <View style={{ flexDirection: 'row' }}>
                <Icon name="trash-2" size={20} color={'#000'} />

                <Space8 />
                <Text>{remove}</Text>
              </View>
            }
          />
        </View>
        <Space24 />
        <CustomCard bgColor={waterBlue} borderColor={borderWaterBlue}>
          <View style={{ paddingHorizontal: 30, flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => {
                setType('link');
              }}
            >
              <View
                style={{
                  paddingBottom: 4,
                  borderBottomColor: type == 'link' ? orange : 'transparent',
                  borderBottomWidth: 2,
                  borderStyle: 'solid',
                }}
              >
                <Text
                  style={mergeStyle(styles.titleSmall, {
                    color: type == 'link' ? orange : primary,
                  })}
                >
                  {link}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </CustomCard>
        <Space8 />
      </View>
    </SafeAreaView>
  );
};
export default Linking;
