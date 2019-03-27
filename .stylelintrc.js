module.exports = {
  root: true,
  'extends': 'stylelint-config-standard',
  rules: {
    indentation: 2,
    'string-quotes': 'single',
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'selector-combinator-space-after': 'always',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-brackets-space-inside': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'number-leading-zero': 'always',
    'function-url-quotes': 'always',
    // 'function-url-data-uris': 'always',
    'font-family-name-quotes': 'always-unless-keyword',
    'comment-whitespace-inside': 'never',
    'comment-empty-line-before': 'always',
    'at-rule-no-vendor-prefix': true,
    'rule-empty-line-before': 'always-multi-line',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-no-vendor-prefix': true,
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'always',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always'
  }
};