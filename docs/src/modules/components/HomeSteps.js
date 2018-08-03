import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FileDownloadIcon from '@material-ui/docs/svgIcons/FileDownload';
import BuildIcon from '@material-ui/icons/Build'; // eslint-disable-line import/no-unresolved
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MarkdownElement from '@material-ui/docs/MarkdownElement';
import NoSsr from '@material-ui/core/NoSsr';
import Link from 'docs/src/modules/components/Link';

const styles = theme => ({
  step: {
    border: `12px solid ${theme.palette.background.paper}`,
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 4}px`,
    },
    [theme.breakpoints.up('md')]: {
      borderRightWidth: 12,
      borderLeftWidth: 12,
    },
  },
  leftStep: {
    borderBottomWidth: 0,
    [theme.breakpoints.up('md')]: {
      borderBottomWidth: 12,
      borderRightWidth: 0,
    },
  },
  rightStep: {
    borderTopWidth: 0,
    [theme.breakpoints.up('md')]: {
      borderTopWidth: 12,
      borderLeftWidth: 0,
    },
  },
  stepTitle: {
    display: 'flex',
    marginBottom: theme.spacing.unit * 3,
    alignItems: 'center',
  },
  stepIcon: {
    color: theme.palette.primary.dark,
    marginRight: theme.spacing.unit * 2,
    fontSize: 30,
  },
  stepBody: {
    minHeight: 270,
  },
  markdownElement: {
    maxWidth: `calc(100vw - ${(theme.spacing.unit * 5 + 1) * 2}px)`,
    '& pre, & pre[class*="language-"], & code': {
      backgroundColor: 'transparent',
    },
    '& pre, & pre[class*="language-"]': {
      padding: theme.spacing.unit,
      margin: 0,
    },
  },
  divider: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2,
  },
  link: {
    marginTop: theme.spacing.unit,
    display: 'block',
  },
  img: {
    maxWidth: 500,
    width: '100%',
    height: 'auto',
  },
});

function HomeSteps(props) {
  const classes = props.classes;

  return (
    <Grid container>
      <Grid item xs={12} md={4} style={classNames(classes.step, classes.leftStep)}>
        <View style={classes.stepTitle}>
          <FileDownloadIcon style={classes.stepIcon} />
          <Typography variant="title">Installation</Typography>
        </View>
        <View style={classes.stepBody}>
          <Typography variant="subheading" gutterBottom>
            {`
            Install Material-UI's source files via npm.
            We take care of injecting the CSS needed.
            `}
          </Typography>
          <MarkdownElement
            style={classes.markdownElement}
            text={`
  \`\`\`sh
  $ npm install @material-ui/core
  \`\`\`
                `}
          />
          <Typography variant="subheading" gutterBottom>
            {'or use a CDN.'}
          </Typography>
          <MarkdownElement
            style={classes.markdownElement}
            text={`
  \`\`\`html
  <script src="https://unpkg.com/@material-ui/core/umd/material-ui.production.min.js" crossorigin="anonymous"></script>
  \`\`\`
                `}
          />
          <Typography variant="subheading" gutterBottom>
            {'Load the default Roboto font.'}
          </Typography>
          <MarkdownElement
            style={classes.markdownElement}
            text={`
  \`\`\`html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
  \`\`\`
                `}
          />
        </View>
        <Divider style={classes.divider} />
        <Button
          component={buttonProps => (
            <Link variant="button" prefetch href="/getting-started/installation" {...buttonProps} />
          )}
        >
          Read installation docs
        </Button>
      </Grid>
      <Grid item xs={12} md={4} style={classes.step}>
        <View style={classes.stepTitle}>
          <BuildIcon style={classes.stepIcon} />
          <Typography variant="title">Usage</Typography>
        </View>
        <View style={classes.stepBody}>
          <Typography variant="subheading" gutterBottom>
            {'Material-UI components work in isolation. They are self-supporting.'}
          </Typography>
          <MarkdownElement
            style={classes.markdownElement}
            text={`
  \`\`\`jsx
  import React from 'react';
  import Button from '@material-ui/core/Button';

  const App = () => (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
  \`\`\`
                `}
          />
        </View>
        <Divider style={classes.divider} />
        <Button
          component={buttonProps => (
            <Link variant="button" prefetch href="/getting-started/usage" {...buttonProps} />
          )}
        >
          Explore the docs
        </Button>
      </Grid>
      <Grid item xs={12} md={4} style={classNames(classes.step, classes.rightStep)}>
        <View style={classes.stepTitle}>
          <WhatshotIcon style={classes.stepIcon} />
          <Typography variant="title">Premium Themes</Typography>
        </View>
        <View style={classes.stepBody}>
          <Typography variant="subheading" gutterBottom>
            {`Take Material-UI to the next level with premium themes from
              our official marketplace—all built on Material-UI.`}
          </Typography>
          <Link prefetch href="/premium-themes" style={classes.link}>
            <NoSsr>
              <img style={classes.img} alt="themes" src="/static/images/themes.jpg" />
            </NoSsr>
          </Link>
        </View>
        <Divider style={classes.divider} />
        <Button
          component={buttonProps => (
            <Link variant="button" prefetch href="/premium-themes" {...buttonProps} />
          )}
        >
          Browse themes
        </Button>
      </Grid>
    </Grid>
  );
}

HomeSteps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSteps);
