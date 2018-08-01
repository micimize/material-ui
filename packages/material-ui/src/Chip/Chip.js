import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import keycode from 'keycode';
import CancelIcon from '../internal/svg-icons/Cancel';
import withStyles from '../styles/withStyles';
import { emphasize, fade } from '../styles/colorManipulator';
import unsupportedProp from '../utils/unsupportedProp';
import '../Avatar/Avatar'; // So we don't have any override priority issue.

export const styles = theme => {
  const height = 32;
  const backgroundColor =
    theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  const deleteIconColor = fade(theme.palette.text.primary, 0.26);

  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none',
      textDecoration: 'none',
      border: 'none', // Remove `button` border
      padding: 0, // Remove `button` padding
    },
    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.08),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    },
    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&:focus': {
        backgroundColor: emphasize(backgroundColor, 0.08),
      },
    },
    /* Styles applied to the `avatar` element if `checked={true}`. */
    avatar: {
      marginRight: -4,
      width: height,
      height,
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      fontSize: theme.typography.pxToRem(16),
    },
    /* Styles applied to the `avartar` elements children. */
    avatarChildren: {
      width: 19,
      height: 19,
    },
    /* Styles applied to the label `span` element`. */
    label: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'inherit',
    },
    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      cursor: 'pointer',
      height: 'auto',
      margin: '0 4px 0 -8px',
      '&:hover': {
        color: fade(deleteIconColor, 0.4),
      },
    },
  };
};

/**
 * Chips represent complex entities in small blocks, such as a contact.
 */
class Chip extends React.Component {
  chipRef = null;

  handleDeleteIconClick = event => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    const { onDelete } = this.props;
    if (onDelete) {
      onDelete(event);
    }
  };

  handleKeyDown = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget !== event.target) {
      return;
    }

    const { onClick, onDelete, onKeyDown } = this.props;
    const key = keycode(event);

    if (onClick && (key === 'space' || key === 'enter')) {
      event.preventDefault();
      onClick(event);
    } else if (onDelete && key === 'backspace') {
      event.preventDefault();
      onDelete(event);
    } else if (key === 'esc') {
      event.preventDefault();
      if (this.chipRef) {
        this.chipRef.blur();
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  render() {
    const {
      avatar: avatarProp,
      classes,
      className: classNameProp,
      clickable,
      component: Component,
      deleteIcon: deleteIconProp,
      label,
      onClick,
      onDelete,
      onKeyDown,
      tabIndex: tabIndexProp,
      ...other
    } = this.props;

    const className = classNames(
      classes.root,
      { [classes.clickable]: onClick || clickable },
      { [classes.deletable]: onDelete },
      classNameProp,
    );

    let deleteIcon = null;
    if (onDelete) {
      deleteIcon =
        deleteIconProp && React.isValidElement(deleteIconProp) ? (
          React.cloneElement(deleteIconProp, {
            className: classNames(deleteIconProp.props.className, classes.deleteIcon),
            onClick: this.handleDeleteIconClick,
          })
        ) : (
          <CancelIcon className={classes.deleteIcon} onClick={this.handleDeleteIconClick} />
        );
    }

    let avatar = null;
    if (avatarProp && React.isValidElement(avatarProp)) {
      avatar = React.cloneElement(avatarProp, {
        className: classNames(classes.avatar, avatarProp.props.className),
        childrenClassName: classNames(classes.avatarChildren, avatarProp.props.childrenClassName),
      });
    }

    let tabIndex = tabIndexProp;

    if (!tabIndex) {
      tabIndex = onClick || onDelete || clickable ? 0 : -1;
    }

    return (
      <Component
        role="button"
        className={className}
        tabIndex={tabIndex}
        onClick={onClick}
        onKeyDown={this.handleKeyDown}
        ref={ref => {
          this.chipRef = ref;
        }}
        {...other}
      >
        {avatar}
        <span className={classes.label}>{label}</span>
        {deleteIcon}
      </Component>
    );
  }
}

Chip.propTypes = {
  /**
   * Avatar element.
   */
  avatar: PropTypes.element,
  /**
   * This property isn't supported.
   * Use the `component` property if you need to change the children structure.
   */
  children: unsupportedProp,
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
   * If true, the chip will appear clickable, and will raise when pressed,
   * even if the onClick property is not defined. This can be used, for example,
   * along with the component property to indicate an anchor Chip is clickable.
   */
  clickable: PropTypes.bool,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: PropTypes.element,
  /**
   * The content of the label.
   */
  label: PropTypes.node,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Chip.defaultProps = {
  clickable: false,
  component: View,
};

export default withStyles(styles, { name: 'MuiChip' })(Chip);
