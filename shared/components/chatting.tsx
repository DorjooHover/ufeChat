import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import imageProfile from '../../assets/images/khngr.jpg';
import { blue100, darkBlue, inputTextGray, lightGray, white } from '../colors';
import { Space20, Space6, Space8 } from '../spacing';
import { add, typeMessage } from '../string';
import styles, { mergeStyle } from '../styles/style';
import { MainButton } from './buttons';
import { ChatCard, CustomCard } from './cards';
const Chatting = () => {
  const navigation = useNavigation();
  const insets = useWindowDimensions();
  const [text, setText] = useState('');
  const handleTextChange = (inputText) => {};
  const [chats, setChats] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{}}>
        <StatusBar
          // animated={true}
          backgroundColor={darkBlue}
          barStyle={'default'}
          translucent
        />
        <CustomCard bgColor={darkBlue} borderColor={blue100}>
          <View style={{ paddingHorizontal: 30 }}>
            <Space20 />
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Icon name="arrow-left" size={30} color="white" />
              </TouchableOpacity>
              <MainButton
                paddingHorizontal={8}
                borderRadius={10}
                paddingVertical={8}
                onPress={() => navigation.navigate('Linking')}
                child={<Icon name="message-square" size={20} color={white} />}
              />
            </View>
            <Space8 />
            <Text style={styles.titleSmall}>MGM331_231</Text>
            <Space8 />
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style={{ flexDirection: 'row' }}>
                {chats.map((chat, index) => {
                  if (index < 4)
                    return (
                      <Image
                        key={index}
                        source={imageProfile}
                        style={{
                          marginLeft: index != 0 ? -10 : 0,
                          width: 30,
                          height: 30,
                          borderRadius: 100,
                        }}
                      />
                    );

                  if (index == chats.length - 1)
                    return (
                      <View
                        style={{
                          width: 30,
                          height: 30,
                          marginLeft: -10,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: white,
                          borderRadius: 100,
                        }}
                      >
                        <Text style={styles.labelSmall}>
                          +{chats.length - 4}
                        </Text>
                      </View>
                    );
                  return;
                })}
              </View>
              <MainButton
                paddingHorizontal={18}
                paddingVertical={8}
                child={
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="plus" size={20} color={white} />
                    <Space6 />
                    <Text
                      style={mergeStyle(styles.labelMedium, { color: white })}
                    >
                      {add}
                    </Text>
                  </View>
                }
              />
            </View>
          </View>
        </CustomCard>
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          height: insets.height - 160,
          backgroundColor: white,
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <ScrollView scrollsToTop={false} style={{}}>
          <View style={{ width: '100%' }}>
            {chats.map((chat, index) => {
              return (
                <ChatCard
                  key={index}
                  reverse={index % 2 == 0}
                  name="Exp"
                  text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, blanditiis, porro qua."
                />
              );
            })}
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: blue100,
                borderRadius: 10,
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 12,
              }}
            >
              <Icon name="plus" color={white} size={24} />
            </View>
          </TouchableOpacity>
          <TextInput
            style={{
              backgroundColor: lightGray,
              flex: 1,
              paddingVertical: 15,
              paddingHorizontal: 14,
              borderRadius: 15,
              color: inputTextGray,
            }}
            placeholderTextColor={inputTextGray}
            placeholder={typeMessage}
            value={text}
            onChangeText={handleTextChange}
          />
          <TouchableOpacity>
            <View
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 12,
              }}
            >
              <Icon name="send" color={blue100} size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Chatting;
