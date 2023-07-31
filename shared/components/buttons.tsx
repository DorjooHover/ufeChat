import { Text, TouchableOpacity, View } from 'react-native';
import { borderOrange, orange, white } from '../colors';
import { origin } from '../spacing';
import styles, { mergeStyle } from '../styles/style';

export const MainButton = ({
  text = '',
  child,
  color = white,
  borderColor = borderOrange,
  bgColor = orange,
  paddingVertical = 20,
  paddingHorizontal = 30,
  borderRadius = origin,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: '100%',
          backgroundColor: bgColor,
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          borderRadius: borderRadius,
          borderBottomColor: borderColor,
          borderBottomWidth: 4,
          borderStyle: 'solid',
        }}
      >
        {child ?? (
          <Text
            style={mergeStyle(styles.labelLarge, {
              color: color,
              textAlign: 'center',
            })}
          >
            {text}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
