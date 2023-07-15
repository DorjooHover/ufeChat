import { useEffect, useMemo, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { EasingNode } from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg';
import Icon from 'react-native-vector-icons/AntDesign';
import { waterWhite, white } from '../colors';
import { Space24, origin } from '../spacing';
import { weeklyActivity } from '../string';
import styles, { mergeStyle } from '../styles/style';
import { weeklyDays } from '../values';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const CircularProgress = ({ percentage }) => {
  const strokeWidth = 7;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const translation = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: percentage,
      duration: 500,
      easing: EasingNode.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{ position: 'relative' }}>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="transparent"
          stroke={waterWhite}
          strokeWidth={strokeWidth}
        />
        <AnimatedCircle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="transparent"
          stroke={white}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference}, ${circumference}`}
          strokeDashoffset={translation.interpolate({
            inputRange: [0, 100],
            outputRange: [circumference, 0],
          })}
        />
      </Svg>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          top: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ textAlign: 'center' }}>
          <Text style={styles.titleMedium}>{percentage}</Text>
          <Text style={mergeStyle(styles.labelMedium, { color: white })}>
            %
          </Text>
        </Text>
      </View>
    </View>
  );
};

export const Graph = () => {
  const data = [50, 70, 60, 80, 100]; // Sample data for the graph
  const maxDataValue = Math.max(...data); // Maximum value in the data array
  const barHeight = 200; // Height of the graph bars
  const barWidth = origin; // Width of the graph bars
  const animatedValues = useMemo(
    () => data.map(() => new Animated.Value(0)),
    []
  );
  useEffect(() => {
    data.map((value, index) => {
      return setTimeout(() => {
        Animated.timing(animatedValues[index], {
          toValue: value,
          duration: 1000,

          easing: EasingNode.linear,
        }).start();
      }, 300 * index);
    });
  }, []);
  return (
    <View style={{ flex: 1, height: '100%' }}>
      <Space24 />
      <Text style={mergeStyle(styles.bodyLarge, { textAlign: 'center' })}>
        {weeklyActivity}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingHorizontal: 12,
          paddingBottom: origin,
          flex: 1,
          height: '100%',
        }}
      >
        {data.map((value, index) => {
          const animatedStyle = {
            height: animatedValues[index].interpolate({
              inputRange: [0, maxDataValue],
              outputRange: [0, (value / maxDataValue) * barHeight],
            }),
          };
          return (
            <View key={index}>
              <Animated.View
                key={index}
                style={[styles.bar, animatedStyle]}
              ></Animated.View>
              <Text
                style={mergeStyle(styles.labelMedium, {
                  color: white,
                  textAlign: 'center',
                })}
              >
                {weeklyDays[index]}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export const DropDown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // onSelect(option);
    setIsOpen(false);
  };
  return (
    <View
      style={{
        position: 'relative',
        width: 'auto',
        zIndex: 100,
      }}
    >
      <TouchableOpacity onPress={toggleDropdown}>
        <Text style={styles.dropdownButtonText}>
          {selectedOption ? selectedOption.label : options[0]}{' '}
          <Icon name={'down'} size={10} fontWeight={500} />
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownOptions}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownOption}
              onPress={() => handleOptionSelect(option)}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
