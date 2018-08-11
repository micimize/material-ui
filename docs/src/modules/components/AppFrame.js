import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import NProgress from 'nprogress';
import Router from 'next/router';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import ColorsIcon from '@material-ui/icons/InvertColors';
import LightbulbOutlineIcon from '@material-ui/docs/svgIcons/LightbulbOutline';
import LightbulbFullIcon from '@material-ui/docs/svgIcons/LightbulbFull';
import NProgressBar from '@material-ui/docs/NProgressBar';
import FormatTextdirectionLToR from '@material-ui/icons/FormatTextdirectionLToR';
import FormatTextdirectionRToL from '@material-ui/icons/FormatTextdirectionRToL';
import GithubIcon from '@material-ui/docs/svgIcons/GitHub';
import Link from 'docs/src/modules/components/Link';
import AppDrawer from 'docs/src/modules/components/AppDrawer';
import AppSearch from 'docs/src/modules/components/AppSearch';
import Notifications from 'docs/src/modules/components/Notifications';
import { pageToTitle } from 'docs/src/modules/utils/helpers';
import actionTypes from 'docs/src/modules/redux/actionTypes';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const styles = theme => ({
  root: {
    flexDirection: 'row',
  },
  grow: {
    flex: '1 1 auto',
  },
  title: {
    marginLeft: 24,
    flex: '0 1 auto',
  },
  appBar: {
    transition: theme.transitions.create('width'),
  },
  appBarHome: {
    boxShadow: 'none',
  },
  appBarShift: {
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 250px)',
    },
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: 250,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
});

class AppFrame extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerOpen = () => {
    this.setState({ mobileOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  handleTogglePaletteType = () => {
    this.props.dispatch({
      type: actionTypes.THEME_CHANGE_PALETTE_TYPE,
      payload: {
        paletteType: this.props.uiTheme.paletteType === 'light' ? 'dark' : 'light',
      },
    });
  };

  handleToggleDirection = () => {
    this.props.dispatch({
      type: actionTypes.THEME_CHANGE_DIRECTION,
      payload: {
        direction: this.props.uiTheme.direction === 'ltr' ? 'rtl' : 'ltr',
      },
    });
  };

  render() {
    const { children, classes, uiTheme } = this.props;

    if (!this.context.activePage) {
      throw new Error('Missing activePage.');
    }

    const title =
      this.context.activePage.title !== false ? pageToTitle(this.context.activePage) : null;

    let disablePermanent = false;
    let navIconStyle = [];
    const appBarStyle = [classes.appBar];

    if (title === null) {
      // home route, don't shift app bar or dock drawer
      disablePermanent = true;
      appBarStyle.push(classes.appBarHome);
    } else {
      navIconStyle = classes.navIconHide;
      appBarStyle.push(classes.appBarShift);
    }

    return (
      <View style={classes.root}>
        <NProgressBar />
        <AppBar style={appBarStyle}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              style={navIconStyle}
            >
              <MenuIcon color="onPrimary" />
            </IconButton>
            {title !== null && (
              <Typography style={classes.title} variant="title" color="inherit" noWrap>
                {title}
              </Typography>
            )}
            <View style={classes.grow} />
            <AppSearch />
            <Tooltip title="Edit docs colors" enterDelay={300}>
              <IconButton
                color="inherit"
                aria-label="Edit docs colors"
                component={Link}
                href="/style/color#color-tool"
              >
                <ColorsIcon color="onPrimary" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Toggle light/dark theme" enterDelay={300}>
              <IconButton
                color="inherit"
                onClick={this.handleTogglePaletteType}
                aria-label="Toggle light/dark theme"
              >
                {uiTheme.paletteType === 'light' ? (
                  <LightbulbOutlineIcon color="onPrimary" />
                ) : (
                  <LightbulbFullIcon color="onPrimary" />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Toggle right-to-left/left-to-right" enterDelay={300}>
              <IconButton
                color="inherit"
                onClick={this.handleToggleDirection}
                aria-label="Toggle right-to-left/left-to-right"
              >
                {uiTheme.direction === 'rtl' ? (
                  <FormatTextdirectionLToR color="onPrimary" />
                ) : (
                  <FormatTextdirectionRToL color="onPrimary" />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub repository" enterDelay={300}>
              <IconButton
                component="a"
                color="inherit"
                href="https://github.com/mui-org/material-ui"
                aria-label="GitHub repository"
              >
                <GithubIcon color="onPrimary" />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Notifications />
        <AppDrawer
          style={classes.drawer}
          disablePermanent={disablePermanent}
          onClose={this.handleDrawerClose}
          onOpen={this.handleDrawerOpen}
          mobileOpen={this.state.mobileOpen}
        />
        {children}
      </View>
    );
  }
}

AppFrame.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  uiTheme: PropTypes.object.isRequired,
};

AppFrame.contextTypes = {
  activePage: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default compose(
  withStyles(styles, {
    name: 'AppFrame',
  }),
  connect(state => ({
    uiTheme: state.theme,
  })),
)(AppFrame);
