import React from 'react';
import { View, Text } from 'react-native';
import { assert } from 'chai';
import { createShallow, getClasses } from '../test-utils';
import Backdrop from './Backdrop';

describe('<Backdrop />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<Backdrop open />);
  });

  it('should render a backdrop div', () => {
    const wrapper = shallow(<Backdrop open style="woofBackdrop" />);
    assert.strictEqual(wrapper.childAt(0).hasClass('woofBackdrop'), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.root), true);
  });
});
