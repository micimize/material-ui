import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 275,
  },
  bullet: {
    margin: '0 2px',
    transform: [{ scale: 0.5 }],
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <Text style={classes.bullet}>•</Text>;

  return (
    <View>
      <Card style={classes.card}>
        <CardContent>
          <Typography style={classes.title} color="textSecondary">
            Word of the Day
          </Typography>
          <Typography variant="headline">
            be
            {bull}
            nev
            {bull}o{bull}
            lent
          </Typography>
          <Typography style={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography>
            well meaning and kindly.
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </View>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
