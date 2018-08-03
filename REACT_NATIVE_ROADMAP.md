 Here are my thoughts on the best way to go about achieving native support
* if sticking to jss isn't an absolute requirement, I think [fela](http://fela.js.org/docs/basics/Rules.html) is a viable alternative:
  * fela-native supports [media queries](https://github.com/rofrischmann/fela/blob/master/examples/example-react-native/App.js) and uses [StyleSheet.create properly](https://github.com/rofrischmann/fela/blob/master/packages/fela-native/src/index.js#L51)
  * It is [insanely extensible](https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-custom-property). We could have rewrite rules for web properties to their react-native proxies, strip things like `:hover` rules on native, and probably regain whatever syntax is lost from jss.
* [react-native-animatable](https://github.com/oblador/react-native-animatable) has keyframe support, and could probably be used instead of transition-group as well, which [may or may not work with native](https://github.com/reactjs/react-transition-group/issues/6).
* I agree with subverting the no-cascading view of react-native. It could be opt-in at provider and consumer with `cascade` and `inherit` props.
 Every react-native library I've tried working with has been painful or unusable because of overly-rigid apis and un-overridable styles, with the exception of ones that use [`@shoutem/theme`](https://shoutem.github.io/docs/ui-toolkit/theme/introduction) to allow overrides (like native-base).


NOTES:
Right now we are ignoring props, but material-ui uses the jss `&$prop` selector which is a function of boolean props. I don't know how they are resolving them, maybe jss does something under the hood. I don't expect ours to work right now though.

