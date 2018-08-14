import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/lab/Backdrop/Backdrop';
import Back from '@material-ui/lab/Backdrop/BackdropBack';
import BackSection from '@material-ui/lab/Backdrop/BackdropBackSection';
import Front from '@material-ui/lab/Backdrop/BackdropFront';
import Subheader from '@material-ui/lab/Backdrop/BackdropFrontSubheader';
import FrontContent from '@material-ui/lab/Backdrop/BackdropFrontContent';
import { FadeStack, FadeStackItem } from '@material-ui/lab/Backdrop/StackedFade';
import MenuItem from '@material-ui/lab/Backdrop/BackdropBackMenuItem';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FilterIcon from '@material-ui/icons/FilterList';
import ExpandIcon from '@material-ui/icons/ExpandLess';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
import SimpleMediaCard from '../../demos/cards/SimpleMediaCard';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import { View } from 'react-native';

const tags = [
  'chameleon',
  'green anole',
  'wing',
  'gecko',
  'water dragon',
  'bearded dragon',
  'uromastyx',
  'skink',
  'horned',
  'rainbow',
  'leopard gecko',
  'basilisk',
  'tegu',
  'brown anole',
  'geico',
  'frilled',
  'camouflage',
  'lego',
  'rainforest',
  'tropical rainforest',
  'blue',
  'red',
  'black',
  'purple',
  'yellow',
  'small',
  'godzilla',
  'giant',
  'monster',
  'dwarf',
  'cool',
];

const styles = theme => {
  return {
    root: {
      width: 360,
      height: 616,
      position: 'relative',
    },
    flex: {
      flex: 1,
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
    chip: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.primary[300],
      color: theme.palette.primary.contrastText,
    },
    content: {
      overflowY: 'hidden',
    },
  };
};

class MultiSectionBackdrop extends React.Component {
  state = {
    expanded: false,
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    const Title = ({ style, ...props }) => (
      <Typography
        variant="title"
        color="inherit"
        style={styleNames(classes.title, style)}
        {...props}
      />
    );

    return (
      <View style={classes.root}>
        <Backdrop>
          <Back>
            <BackSection expanded>
              <Toolbar>
                <IconButton
                  style={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={() => this.setState({ expanded: expanded ? false : 'nav' })}
                >
                  <MenuIcon />
                </IconButton>
                <FadeStack style={classes.flex}>
                  <FadeStackItem selected={!expanded}>
                    <Title>Luxurious Lizards</Title>
                  </FadeStackItem>
                  <FadeStackItem selected={expanded === 'nav'}>
                    <Title>
                      {"Nature's Nobility"}
                      <IconButton
                        color="inherit"
                        aria-label="Filters"
                        style={classes.filter}
                        onClick={() => this.setState({ expanded: 'filters' })}
                      >
                        <FilterIcon />
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
            <BackSection expanded={expanded === 'filters'}>
              {tags.map(label => (
                <Chip key={label} label={label} style={classes.chip} />
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
