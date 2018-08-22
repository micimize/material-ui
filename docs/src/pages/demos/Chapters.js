import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function Chapters({ subtitle, chapters: [{ sections }] }) {
  return () => (
    <ScrollView style={{flex: 1}} contentContainerStyle={{ paddingBottom: 200 }}>
      <Text>{subtitle}</Text>
      {
        sections.map(({ title, sectionFn }) => (
          <View key={title}>
            <Text>{title}</Text>
            {sectionFn()}
          </View>
        ))
      }
    </ScrollView >
  );
}