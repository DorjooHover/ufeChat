import * as React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import imageProfile from '../../assets/images/khngr.jpg';
import { blue, orange, primary, titleGray, waterBlue, white } from '../colors';

import { ScrollView } from 'react-native-gesture-handler';
import { Space12, Space15, Space20, Space45, Space6 } from '../spacing';
import { completed, newChat, semesterOff, today, upComing } from '../string';
import styles, { mergeStyle } from '../styles/style';
import { GroupCard } from './cards';
import { CircularProgress, DropDown, Graph } from './custom';

export const Status = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        <View
          style={mergeStyle(
            styles.mainBorder,
            styles.verticalMain,
            styles.betweenCenter,
            {
              flexDirection: 'column',
              width: '100%',
              backgroundColor: waterBlue,
            }
          )}
        >
          <Text style={styles.labelMedium}>{upComing}</Text>
          <Space6 />
          <Text style={styles.displayMedium}>50</Text>
          <Space6 />
          <Text style={styles.labelMedium}>{newChat}</Text>
        </View>
        <Space12 />
        <View
          style={mergeStyle(
            styles.mainBorder,
            styles.verticalMain,
            styles.betweenCenter,
            {
              flexDirection: 'column',
              width: '100%',
              backgroundColor: orange,
            }
          )}
        >
          <Text style={mergeStyle(styles.labelMedium, { color: white })}>
            {semesterOff}
          </Text>
          <Space6 />
          <CircularProgress percentage={73} />
          <Space6 />
          <Text style={mergeStyle(styles.labelMedium, { color: white })}>
            {completed}
          </Text>
        </View>
      </View>
      <Space12 />
      <View
        style={mergeStyle(styles.mainBorder, {
          display: 'flex',
          flex: 2,
          backgroundColor: blue,
        })}
      >
        <Graph />
      </View>
    </View>
  );
};

export const Home = () => {
  const groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const currentDate = new Date(Date.now());
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Space20 />
      <Space15 />
      <Text style={styles.titleLarge}>Hello Esa</Text>
      <Space15 />
      <Status />
      <Space45 />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>
          <Text
            style={mergeStyle(styles.bodyLarge, {
              color: primary,
              letterSpacing: 0.04,
            })}
          >
            {today},{' '}
          </Text>
          <Text style={mergeStyle(styles.bodyLarge, { color: titleGray })}>
            {currentDate.getDate()}{' '}
            {currentDate.toLocaleDateString('default', { month: 'long' })}
          </Text>
        </Text>
        <DropDown onSelect={'All'} options={['All', 'some']} />
      </View>
      <Space20 />

      <FlatList
        scrollEnabled={false}
        data={groups}
        renderItem={(group) => <GroupCard index={group.index} />}
        keyExtractor={(group) => group}
      />
      <Image
        source={imageProfile}
        style={{
          width: '100%',
          height: 300,
          borderRadius: 15,
        }}
      ></Image>
      <View style={{ height: 55 }}></View>
    </ScrollView>
  );
};
