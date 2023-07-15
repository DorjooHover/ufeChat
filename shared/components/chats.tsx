import { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  borderLightGray,
  borderWaterBlue,
  lightGray,
  orange,
  primary,
  textLightGray,
  waterBlue,
} from '../colors';
import { Space12, Space15, Space45, Space54, Space6 } from '../spacing';
import {
  add,
  createTeamChat,
  lesson,
  lessonCodeGroupNumber,
  team,
} from '../string';
import styles, { mergeStyle } from '../styles/style';
import { CustomCard, GroupCard } from './cards';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export const groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const Chats = ({ setCurrentTab }) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('lesson');
  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const handleButtonPress = () => {
    console.log('Input value:', text);
    // Perform any desired action with the input value
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CustomCard bgColor={waterBlue} borderColor={borderWaterBlue}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity
              onPress={() => {
                setType('lesson');
              }}
            >
              <View
                style={{
                  paddingBottom: 5,
                  borderBottomColor: type == 'lesson' ? orange : 'transparent',
                  borderBottomWidth: 2,
                  borderStyle: 'solid',
                }}
              >
                <Text
                  style={mergeStyle(styles.titleSmall, {
                    color: type == 'lesson' ? orange : primary,
                  })}
                >
                  {lesson}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity
              onPress={() => {
                setType('team');
              }}
            >
              <View
                style={{
                  paddingBottom: 5,
                  borderBottomColor: type == 'team' ? orange : 'transparent',
                  borderBottomWidth: 2,
                  borderStyle: 'solid',
                }}
              >
                <Text
                  style={mergeStyle(styles.titleSmall, {
                    color: type == 'team' ? orange : primary,
                  })}
                >
                  {team}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </CustomCard>
      <Space15 />
      {type == 'lesson' && (
        <Lesson text={text} handleTextChange={handleTextChange} />
      )}
      {type == 'team' && <Team setCurrentTab={setCurrentTab} />}
      <Space54 />
    </ScrollView>
  );
};

export const Lesson = ({ text, handleTextChange }) => {
  return (
    <View>
      <CustomCard bgColor={lightGray} borderColor={borderLightGray}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: text.length > 0 ? 20 : 0,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 45,
              }}
            >
              <Icon
                name="search1"
                size={24}
                color={textLightGray}
                // style={{ marginRight: -40 }}
              />
              <Space15 />
              <TextInput
                style={styles.input}
                placeholderTextColor={textLightGray}
                placeholder={lessonCodeGroupNumber}
                value={text}
                onChangeText={handleTextChange}
              />
            </View>
          </View>
          {text.length > 0 && (
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                borderTopColor: borderLightGray,
                borderTopWidth: 2,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingHorizontal: 45,
                }}
              >
                <Text>{text}</Text>
                <TouchableOpacity>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                      style={mergeStyle(styles.bodyMedium, { color: orange })}
                    >
                      {add}
                    </Text>
                    <Space6 />
                    <Icon name={'addfolder'} size={37} color={orange} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </CustomCard>
      <Space45 />
      <Text style={styles.titleLarge}>Chats</Text>
      <Space12 />
      <FlatList
        scrollEnabled={false}
        data={groups}
        renderItem={(group) => <GroupCard index={group.index} />}
        keyExtractor={(group) => group}
      />
    </View>
  );
};

export const Team = ({ setCurrentTab }) => {
  return (
    <View>
      <CustomCard bgColor={lightGray} borderColor={borderLightGray}>
        <TouchableOpacity
          onPress={() => {
            setCurrentTab('ChooseGroup');
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 45,
            }}
          >
            <Icon
              name="adduser"
              size={24}
              color={textLightGray}
              // style={{ marginRight: -40 }}
            />
            <Space15 />
            <Text
              style={mergeStyle(styles.bodyMedium, { color: textLightGray })}
            >
              {createTeamChat}
            </Text>
          </View>
        </TouchableOpacity>
      </CustomCard>
      <Space45 />
      <Text style={styles.titleLarge}>Chats</Text>
      <Space12 />
      <FlatList
        scrollEnabled={false}
        data={groups}
        renderItem={(group) => <GroupCard index={group.index} />}
        keyExtractor={(group) => group}
      />
    </View>
  );
};
