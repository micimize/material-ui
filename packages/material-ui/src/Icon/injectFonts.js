function font(family, url) {
  return `@font-face {
    src: url(${url});
    font-family: ${family};
  }`;
}

function fonts(fontObj) {
  return Object.entries(fontObj).reduce(
    (faces, [family, url]) => `${faces}\n${font(family, url)}`,
    '',
  );
}

function injectFonts(fontMap) {
  const iconFontStyles = fonts(fontMap);
  // Create stylesheet
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    style.appendChild(document.createTextNode(iconFontStyles));
  }

  // Inject stylesheet
  document.head.appendChild(style);
}

export default injectFonts;
