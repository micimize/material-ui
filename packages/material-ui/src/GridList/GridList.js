import React from 'react';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import warning from 'warning';
import withStyles from '../styles/withStyles';

export const styles = {
  /* Styles applied to the root element. */
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflowY: 'auto',
    padding: 0,
  },
};

function GridList(props) {
  const {
    cellHeight,
    children,
    classes,
    style: styleProp,
    cols,
    component: Component,
    spacing,
    style,
    ...other
  } = props;

  return (
    <Component style={styleNames(classes.root, { margin: -spacing / 2 }, styleProp)} {...other}>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return null;
        }

        warning(
          child.type !== React.Fragment,
          [
            "Material-UI: the GridList component doesn't accept a Fragment as a child.",
            'Consider providing an array instead.',
          ].join('\n'),
        );

        const childCols = child.props.cols || 1;
        const childRows = child.props.rows || 1;

        return React.cloneElement(child, {
          style: styleNames(child.props.style, {
            width: `${(100 / cols) * childCols}%`,
            height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
            padding: spacing / 2,
          }),
        });
      })}
    </Component>
  );
}

GridList.propTypes = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  /**
   * Grid Tiles that will be in Grid List.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Number of columns.
   */
  cols: PropTypes.number,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * Number of px for the spacing between tiles.
   */
  spacing: PropTypes.number,
  /**
   * @ignore
   */
  style: PropTypes.object,
};

GridList.defaultProps = {
  cellHeight: 180,
  cols: 2,
  component: View,
  spacing: 4,
};

export default withStyles(styles, { name: 'MuiGridList' })(GridList);
