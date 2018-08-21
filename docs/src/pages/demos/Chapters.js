import React from 'react';
import { View, Text } from 'react-native';

export default function Chapters({ subtitle, chapters: [{ sections }] }) {
  return () => (
  <View>
    <Text>{subtitle}</Text>
      {sections.map(({ title, sectionFn }) => (
        <View>
          <Text>{title}</Text>
          {sectionFn()}
        </View>
      ))}
  </View>
  );
}