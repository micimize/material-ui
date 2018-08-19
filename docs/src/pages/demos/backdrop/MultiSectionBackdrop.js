import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FilterIcon from '@material-ui/icons/FilterList';
import ExpandIcon from '@material-ui/icons/ExpandLess';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import Fade from '@material-ui/core/Fade';
import FadeStack from '@material-ui/core/FadeStack';
import FadeStackItem from '@material-ui/core/FadeStackItem';
import Backdrop from '@material-ui/core/Backdrop';
import Back from '@material-ui/core/BackdropBack';
import BackSection from '@material-ui/core/BackdropBackSection';
import Front from '@material-ui/core/BackdropFront';
import Subheader from '@material-ui/core/BackdropFrontSubheader';
import FrontContent from '@material-ui/core/BackdropFrontContent';
import MenuItem from '@material-ui/core/BackdropBackMenuItem';
import SimpleMediaCard from '../../demos/cards/SimpleMediaCard';

const tags = [
  'chameleon',
  'green anole',
  'uromastyx',
  'wing',
  'gecko',
  'water dragon',
  'red',
  'dwarf',
  'bearded dragon',
  'cool',
  'horned',
  'rainbow',
  'basilisk',
  'leopard gecko',
  'tegu',
  'brown anole',
  'geico',
  'frilled',
  'camouflage',
  'lego',
  'rainforest',
  'tropical rainforest',
  'blue',
  'skink',
  'black',
  'purple',
  'yellow',
  'small',
  'godzilla',
  'giant',
  'monster',
];

const styles = theme => {
  return {
    root: {
      width: 360 + 20,
      height: 616 + 20,
      position: 'relative',
      border: '10px solid lightgrey',
      borderRadius: 5,
    },
    flex: {
      flex: 1,
      display: 'flex', // TODO WHY DO I KEEP HAVING TO SET DISPLAY FLEX
    },
    withFilter: {
      flexGrow: 1,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: 48,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    chipContainer: {
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    chip: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.primary.light,
    },
    chipLabel: {
      color: theme.palette.primary.contrastText,
    },
    content: {
      // overflowY: 'hidden',
    },
  };
};

const Title = props => <Typography variant="title" color="onPrimary" {...props} />;

class MultiSectionBackdrop extends React.Component {
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
                  aria-label="Menu"
                  onClick={() => this.setState({ expanded: expanded ? false : 'nav' })}
                >
                  <MenuIcon color="onPrimary" />
                </IconButton>
                <FadeStack style={styleNames(classes.flex)}>
                  <FadeStackItem selected={!expanded}>
                    <Title style={styleNames(classes.flex)}>Luxurious Lizards</Title>
                  </FadeStackItem>
                  <FadeStackItem
                    selected={expanded === 'nav'}
                    style={styleNames(classes.flex, classes.withFilter)}
                  >
                    <Title style={styleNames(classes.flex, classes.withFilter)}>
                      <Text>Nature's Nobility</Text>
                      <IconButton
                        aria-label="Filters"
                        style={classes.filter}
                        onClick={() => this.setState({ expanded: 'filters' })}
                      >
                        <FilterIcon color="onPrimary" />
                      </IconButton>
                    </Title>
                  </FadeStackItem>
                  <FadeStackItem selected={expanded === 'filters'}>
                    <Title> Filter by tags </Title>
                  </FadeStackItem>
                </FadeStack>
              </Toolbar>
            </BackSection>
            <BackSection expanded={expanded === 'nav'}>
              <List>
                <MenuItem selected>Luxurious Lizards</MenuItem>
                <MenuItem>Glorious Geese</MenuItem>
                <MenuItem>Ecstatic Eggs</MenuItem>
              </List>
            </BackSection>
            <BackSection expanded={expanded === 'filters'} style={classes.chipContainer}>
              {tags.map(label => (
                <Chip
                  key={label}
                  label={label}
                  style={classes.chip}
                  classes={{ label: classes.chipLabel }}
                />
              ))}
            </BackSection>
          </Back>
          <Front
            disabled={expanded === 'nav'}
            expanded={expanded !== 'filters'}
            onExpand={() => this.setState({ expanded: false })}
          >
            <Subheader divider>
              <Typography variant="subheading">Incredible Iguanas</Typography>
              <Fade in={expanded === 'filters'}>
                <ExpandIcon />
              </Fade>
            </Subheader>
            <FrontContent classes={{ root: classes.content }}>
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
            </FrontContent>
          </Front>
        </Backdrop>
      </View>
    );
  }
}

MultiSectionBackdrop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MultiSectionBackdrop);
