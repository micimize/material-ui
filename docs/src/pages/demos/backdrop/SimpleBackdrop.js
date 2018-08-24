import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Back from '@material-ui/core/BackdropBack';
import BackSection from '@material-ui/core/BackdropBackSection';
import Front from '@material-ui/core/BackdropFront';
import Subheader from '@material-ui/core/BackdropFrontSubheader';
import FrontContent from '@material-ui/core/BackdropFrontContent';
import FadeStack from '@material-ui/core/FadeStack';
import FadeStackItem from '@material-ui/core/FadeStackItem';
import MenuItem from '@material-ui/core/BackdropBackMenuItem';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SimpleMediaCard from '../../demos/cards/SimpleMediaCard';

import styleNames from '@material-ui/core/styles/react-native-style-names';
import { View, Text, ScrollView } from 'react-native';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    web: {
      width: 360 + 20,
      height: 616 + 20,
      position: 'relative',
      border: '10px solid lightgrey',
      borderRadius: 5,
    }
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  content: {
    width: '100%',
  },
};

const Title = ({ style, ...props }) => <Typography variant="title" color="onPrimary" {...props} />;

class SimpleBackdrop extends React.Component {
  state = {
    expanded: false,
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <View style={classes.root}>
        <Backdrop>
          <Back>
            <BackSection expanded>
              <Toolbar>
                <IconButton
                  style={classes.menuButton}
                  onPress={() => this.setState({ expanded: !expanded })}
                >
                  <MenuIcon color="onPrimary" />
                </IconButton>
                <FadeStack>
                  <FadeStackItem selected={!expanded}>
                    <Title style={styleNames(classes.flex)}>Luxurious Lizards</Title>
                  </FadeStackItem>
                  <FadeStackItem selected={expanded}>
                    <Title style={styleNames(classes.flex)}>Nature's Nobility</Title>
                  </FadeStackItem>
                </FadeStack>
              </Toolbar>
            </BackSection>
            <BackSection expanded={this.state.expanded}>
              <List>
                <MenuItem selected>Luxurious Lizards</MenuItem>
                <MenuItem>Glorious Geese</MenuItem>
                <MenuItem>Ecstatic Eggs</MenuItem>
              </List>
            </BackSection>
          </Back>
          <Front disabled={this.state.expanded}>
            <Subheader divider>
              <Typography variant="subheading">Incredible Iguanas</Typography>
            </Subheader>
              <ScrollView style={{ flex: 1 }}>
                <List>
                  <ListItem>
                    <SimpleMediaCard />
                  </ListItem>
                  <ListItem>
                    <SimpleMediaCard />
                  </ListItem>
                  <ListItem>
                    <SimpleMediaCard />
                  </ListItem>
                  <ListItem>
                    <SimpleMediaCard />
                  </ListItem>
                  <ListItem>
                    <SimpleMediaCard />
                  </ListItem>
                </List>
              </ScrollView>
          </Front>
        </Backdrop>
      </View>
    );
  }
}

SimpleBackdrop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBackdrop);
