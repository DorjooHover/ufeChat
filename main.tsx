import { useRef, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  Animated,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import imageProfile from './assets/images/khngr.jpg';
import { white } from './shared/colors';
import { MainAppBar } from './shared/components/appbar';
import Chats from './shared/components/chats';
import Chatting from './shared/components/chatting';
import { ChooseGroup, ChooseStudent } from './shared/components/chooses';
import { Feedback } from './shared/components/feedback';
import Home from './shared/components/home';
import { Space20 } from './shared/spacing';
import styles, { mergeStyle } from './shared/styles/style';
import { routes } from './shared/values';
const MainScreen = () => {
  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);
  const [tabs, setTabs] = useState([]);
  const navigation = useNavigation();
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const insets = useWindowDimensions();
  const toggleMenu = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : 230,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -30 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setShowMenu(!showMenu);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={white} barStyle={'default'} />
      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image
          source={imageProfile}
          style={{ width: 60, height: 60, borderRadius: 10 }}
        ></Image>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20,
          }}
        >
          Khongoroo
        </Text>
        <TouchableOpacity>
          <Text style={{ marginTop: 20, color: 'white' }}>View profile</Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {TabButton(currentTab, setCurrentTab, 'Home', imageProfile)}
          {TabButton(currentTab, setCurrentTab, 'Chats', imageProfile)}

          {TabButton(currentTab, setCurrentTab, 'Feedback', imageProfile)}
        </View>
        <View>
          {TabButton(currentTab, setCurrentTab, 'Logout', imageProfile)}
        </View>
      </View>

      <Animated.View
        style={mergeStyle(styles.mainContainer, {
          borderRadius: showMenu ? 15 : 0,
          paddingVertical: !showMenu ? 20 : 50,
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        })}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <Space20 />
          {routes.includes(currentTab) && (
            <MainAppBar
              icon={!showMenu ? 'bars' : 'close'}
              toggleMenu={toggleMenu}
            />
          )}
          <Space20 />
          {currentTab == 'Home' && <Home />}
          {currentTab == 'Chats' && <Chats setCurrentTab={setCurrentTab} />}
          {currentTab == 'Feedback' && <Feedback />}
          {currentTab == 'ChooseGroup' && (
            <ChooseGroup setCurrentTab={setCurrentTab} />
          )}
          {currentTab == 'ChooseStudent' && (
            <ChooseStudent setCurrentTab={setCurrentTab} />
          )}
          {currentTab == 'Chatting' && <Chatting />}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};
export default MainScreen;

const TabButton = (currentTab, setCurrentTab, title, image = imageProfile) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == 'Logout') {
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 20,
          paddingRight: 30,
          borderRadius: 8,
          marginTop: 10,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            borderRadius: 5,
          }}
        ></Image>
        <Text style={{ fontSize: 15, fontWeight: 'bold', paddingLeft: 15 }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
