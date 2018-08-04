import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Link from 'docs/src/modules/components/Link';

const styles = theme => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
  },
  buttonLeaf: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
  },
  depth0: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
});

class AppDrawerNavItem extends React.Component {
  state = {
    open: this.props.openImmediately,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const {
      children,
      classes,
      depth,
      href,
      onClick,
      openImmediately,
      title,
      ...other
    } = this.props;

    const style = styleNames(
      classes.buttonLeaf,
      { [classes.depth0]: depth === 0 },
      {
        paddingLeft: 8 * (3 + 2 * depth),
      },
    );

    if (href) {
      return (
        <ListItem style={classes.itemLeaf} disableGutters {...other}>
          <Button
            component={props => (
              <Link variant="button" activeStyle={classes.active} href={href} {...props} />
            )}
            style={style}
            disableRipple
            onClick={onClick}
          >
            {title}
          </Button>
        </ListItem>
      );
    }

    return (
      <ListItem style={classes.item} disableGutters {...other}>
        <Button
          classes={{
            root: classes.button,
            // label: openImmediately ? 'algolia-lvl0' : '',
          }}
          onClick={this.handleClick}
          style={style}
        >
          {title}
        </Button>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </ListItem>
    );
  }
}

AppDrawerNavItem.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  openImmediately: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

AppDrawerNavItem.defaultProps = {
  openImmediately: false,
};

export default withStyles(styles)(AppDrawerNavItem);
