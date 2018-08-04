import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  appFrame: {
    width: 360,
    height: 360,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    marginBottom: theme.spacing.unit,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabMoveUp: {
    transform: 'translate3d(0, -46px, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  },
  fabMoveDown: {
    transform: 'translate3d(0, 0, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  snackbar: {
    position: 'absolute',
  },
  snackbarContent: {
    width: 360,
  },
});

class FabIntegrationSnackbar extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const fabClassName = styleNames(classes.fab, open ? classes.fabMoveUp : classes.fabMoveDown);

    return (
      <View style={classes.root}>
        <Button style={classes.button} onClick={this.handleClick}>
          Open snackbar
        </Button>
        <View style={classes.appFrame}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton style={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Out of my way!
              </Typography>
            </Toolbar>
          </AppBar>
          <Button variant="fab" color="secondary" style={fabClassName}>
            <AddIcon />
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'snackbar-fab-message-id',
              style: classes.snackbarContent,
            }}
            message={<Text id="snackbar-fab-message-id">Archived</Text>}
            action={
              <Button color="inherit" size="small" onClick={this.handleClose}>
                Undo
              </Button>
            }
            style={classes.snackbar}
          />
        </View>
      </View>
    );
  }
}

FabIntegrationSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FabIntegrationSnackbar);
