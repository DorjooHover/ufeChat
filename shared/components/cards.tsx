import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import imageProfile from '../../assets/images/khngr.jpg';
import {
  blue,
  borderBlue,
  borderButtonWhite,
  borderLightBlue,
  borderOrange,
  borderWaterBlue,
  buttonWhite,
  green,
  lightBlue,
  orange,
  waterBlue,
  white,
} from '../colors';
import { Space12, Space4, origin } from '../spacing';
import { changes, students } from '../string';
import styles, { mergeStyle } from '../styles/style';
import { MainButton } from './buttons';
export const GroupCard = ({ index }) => {
  let bgColor = blue,
    borderColor = borderBlue,
    textColor = white,
    borderBtnColor = borderOrange,
    btnColor = orange;
  switch (index % 3) {
    case 0:
      bgColor = blue;
      borderColor = borderBlue;
      textColor = white;
      btnColor = orange;
      borderBtnColor = borderOrange;
      break;
    case 1:
      bgColor = lightBlue;
      borderColor = borderLightBlue;
      textColor = '#000';
      btnColor = buttonWhite;
      borderBtnColor = borderButtonWhite;
      break;
    case 2:
      bgColor = waterBlue;
      borderColor = borderWaterBlue;
      textColor = '#000';
      btnColor = orange;
      borderBtnColor = borderOrange;
      break;
  }
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: bgColor,
        marginBottom: 12,
        borderRadius: origin,
        borderBottomWidth: 4,
        borderBottomColor: borderColor,
        borderStyle: 'solid',
        paddingHorizontal: origin,
        paddingTop: 13,
        paddingBottom: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <Text style={mergeStyle(styles.titleSmall, { color: textColor })}>
          MGM331_231
        </Text>
        <Space4 />
        <Text
          style={mergeStyle(styles.labelLarge, {
            marginLeft: 13,
            color: textColor,
          })}
        >
          {changes}: 23
        </Text>
        <Space4 />
        <Text
          style={mergeStyle(styles.labelLarge, {
            marginLeft: 13,
            color: textColor,
          })}
        >
          <Icon name={'persons'} color={textColor} size={24} /> {students}: 30
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 8,
        }}
      >
        <MainButton
          text="Go Chat"
          color={textColor}
          bgColor={btnColor}
          borderColor={borderBtnColor}
        />
      </View>
    </View>
  );
};

export const ChooseGroupCard = ({ index, onPress, selected = false }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flex: 1,
          position: 'relative',
          marginLeft: (index + 1) % 3 != 1 ? 12 : 0,
          marginRight: index % 3 != 2 ? 12 : 0,
          marginBottom: 24,
        }}
      >
        <Image
          source={imageProfile}
          style={{ borderRadius: 100, height: 110, width: 110 }}
        />

        <Space12 />
        <Text style={mergeStyle(styles.labelLarge, { color: '#000' })}>
          MGM331_231
        </Text>
        {selected && (
          <View
            style={{
              position: 'absolute',
              width: 42,
              height: 42,
              borderRadius: 100,
              borderColor: white,
              borderWidth: 7,
              borderStyle: 'solid',
              backgroundColor: green,
              alignItems: 'center',
              justifyContent: 'center',
              right: -7,
              bottom: 20,
            }}
          >
            <Icon name={'check'} color={white} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export const CustomCard = ({ borderColor, bgColor, children }) => {
  return (
    <View
      style={{
        borderBottomColor: borderColor,
        borderBottomWidth: 4,
        borderStyle: 'solid',
        backgroundColor: bgColor,
        borderRadius: origin,
        paddingVertical: origin,
      }}
    >
      {children}
    </View>
  );
};
