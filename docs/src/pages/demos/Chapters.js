import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { View, Text, ScrollView } from 'react-native';

const styles = {
  content: {
    paddingBottom: 200,
    width: '100%',
  },
  section: {
    padding: 30,
    width: '100%',
  },
  title: {
    marginLeft: -15,
    paddingBottom: 10
  }
}

const Chapters = withStyles(styles)(
  function Chapters({ classes, subtitle, chapters: [{ sections }] }) {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={classes.content}>
        <Text>{subtitle}</Text>
        {
          sections.map(({ title, sectionFn }) => (
            <View key={title} style={classes.section}>
              <Typography style={classes.title} variant="title">{title}</Typography>
              {sectionFn()}
            </View>
          ))
        }
      </ScrollView >
    )
  }
)

export default props => () => <Chapters {...props}/>