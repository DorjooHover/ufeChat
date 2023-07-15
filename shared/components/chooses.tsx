import { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  borderGreen,
  borderLightGray,
  green,
  lightGray,
  textLightGray,
} from '../colors';
import { Space15, Space20, Space24 } from '../spacing';
import {
  addMember,
  chooseGroup,
  chooseStudents,
  studentNameOrEmail,
} from '../string';
import styles, { mergeStyle } from '../styles/style';
import { MainButton } from './buttons';
import { ChooseGroupCard, CustomCard } from './cards';

export const ChooseGroup = ({ setCurrentTab }) => {
  const groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.titleLarge}>{chooseGroup}</Text>
        <Space24 />
        <FlatList
          scrollEnabled={false}
          data={groups}
          renderItem={(group) => (
            <ChooseGroupCard
              index={group.index}
              onPress={() => {
                setCurrentTab('ChooseStudent');
              }}
            />
          )}
          keyExtractor={(item) => item}
          numColumns={3}
        />
      </View>
    </ScrollView>
  );
};
export const ChooseStudent = ({ setCurrentTab }) => {
  const groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [text, setText] = useState('');
  const inset = useWindowDimensions();

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const handleButtonPress = () => {
    console.log('Input value:', text);
    // Perform any desired action with the input value
  };
  const [selected, setSelected] = useState([]);
  return (
    <View style={{ height: inset.height }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ position: 'relative' }}>
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
                    placeholder={studentNameOrEmail}
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
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                      >
                        <Text
                          style={mergeStyle(styles.bodyMedium, {
                            color: orange,
                          })}
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
          <Space20 />
          <Text style={styles.titleLarge}>{chooseStudents}</Text>
          <Text
            style={mergeStyle(styles.titleSmall, {
              color: '#000',
              letterSpacing: -0.02,
            })}
          >
            DBM221_257
          </Text>
          <Space24 />
          <FlatList
            scrollEnabled={false}
            data={groups}
            renderItem={(group) => (
              <ChooseGroupCard
                index={group.index}
                selected={selected.includes(group.index)}
                onPress={() => {
                  if (selected.includes(group.index)) {
                    setSelected(selected.filter((item) => item != group.index));
                  } else {
                    setSelected([...selected, group.index]);
                  }
                }}
              />
            )}
            keyExtractor={(item) => item}
            numColumns={3}
          />
        </View>
      </ScrollView>
      {selected.length > 0 && (
        <View style={{ bottom: 120 }}>
          <MainButton
            bgColor={green}
            borderColor={borderGreen}
            child={
              <Text
                style={mergeStyle(styles.bodyLarge, { textAlign: 'center' })}
              >
                {addMember}
              </Text>
            }
          />
        </View>
      )}
    </View>
  );
};
