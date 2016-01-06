var levels = [
  {
    name: 'ASStackLayoutJustifyContent 1',
    instructions: {
      'en': '<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing AsyncDisplayKit layout code! Guide this frog to the lilypad on the right by using the <code>justifyContent</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>ASStackLayoutJustifyContentStart</code>: Items align to the left side of the stack.</li><li><code>ASStackLayoutJustifyContentEnd</code>: Items align to the right side of the stack.</li><li><code>ASStackLayoutJustifyContentCenter</code>: Items align at the center of the stack.</li><li><code>ASStackLayoutJustifyContentSpaceBetween  </code>: Items display with equal spacing between them.</li><li><code>ASStackLayoutJustifyContentSpaceAround</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>stack.justifyContent = ASStackLayoutJustifyContentEnd;</code> will move the frog to the right.</p>'
    },
    board: 'g',
    style: {'justify-content': 'flex-end'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];\n  stack.direction = ASStackLayoutDirectionHorizontal;\n",
    after: "  stack.children = @[greenFrog];"
  },
  {
    name: 'ASStackLayoutJustifyContent 2',
    instructions: {
      'en': '<p>Use <code>justifyContent</code> again to help these frogs get to their lilypads. Remember that this property aligns items horizontally and accepts the following values:</p><ul><li><code>ASStackLayoutJustifyContentStart</code>: Items align to the left side of the stack.</li><li><code>ASStackLayoutJustifyContentEnd</code>: Items align to the right side of the stack.</li><li><code>ASStackLayoutJustifyContentCenter</code>: Items align at the center of the stack.</li><li><code>ASStackLayoutJustifyContentSpaceBetween  </code>: Items display with equal spacing between them.</li><li><code>ASStackLayoutJustifyContentSpaceAround</code>: Items display with equal spacing around them.</li></ul>'
    },
    board: 'gy',
    style: {'justify-content': 'center'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];\n  stack.direction = ASStackLayoutDirectionHorizontal;\n",
    after: "  stack.children = @[greenFrog, yellowFrog];"
  },
  {
    name: 'ASStackLayoutJustifyContent 3',
    instructions: {
      'en': '<p>Help all three frogs find their lilypads just by using <code>justifyContent</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can hover over the property name to view them. Try hovering over <code>justifyContent</code>.</p>'
    },
    board: 'gyr',
    style: {'justify-content': 'space-around'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];\n  stack.direction = ASStackLayoutDirectionHorizontal;\n",
    after: "  stack.children = @[greenFrog, yellowFrog, redFrog];"
  },
  {
    name: 'ASStackLayoutJustifyContent 4',
    instructions: {
      'en': '<p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justifyContent</code>. This time, the lilypads have equal spacing between them.</p>'
    },
    board: 'gyr',
    style: {'justify-content': 'space-between'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];\n  stack.direction = ASStackLayoutDirectionHorizontal;\n",
    after: "  stack.children = @[greenFrog, yellowFrog, redFrog];"
  },
  {
    name: 'ASStackLayoutAlignItems 1',
    instructions: {
      'en': '<p>Now use <code>alignItems</code> to help the frogs get to the bottom of the pond. This property aligns items vertically and accepts the following values:</p><ul><li><code>ASStackLayoutAlignItemsStart</code>: Items align to the top of the stack.</li><li><code>ASStackLayoutAlignItemsEnd</code>: Items align to the bottom of the stack.</li><li><code>ASStackLayoutAlignItemsCenter</code>: Items align at the vertical center of the stack.</li><li><code>ASStackLayoutAlignItemsBaselineFirst</code>: Items display at the first baseline of the stack.</li><li><code>ASStackLayoutAlignItemsBaselineLast</code>: Items display at the last baseline of the stack.</li><li><code>ASStackLayoutAlignItemsStretch</code>: Items are stretched to fit the stack.</li></ul>'
    },
    board: 'gyr',
    style: {'align-items': 'flex-end'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];\n  stack.direction = ASStackLayoutDirectionHorizontal;\n",
    after: "  stack.children = @[greenFrog, yellowFrog, redFrog];"
  },
  {
    name: 'ASStackLayoutAlignItems 2',
    instructions: {
      'en': '<p>Lead the frog to the center of the pond using a combination of <code>justifyContent</code> and <code>alignItems</code>.</p>'
    },
    board: 'g',
    style: {'justify-content': 'center', 'align-items': 'center'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];\n  stack.direction = ASStackLayoutDirectionHorizontal;\n",
    after: "  stack.children = @[greenFrog];"
  },
  {
    name: 'ASStackLayoutAlignItems 3',
    instructions: {
      'en': '<p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Using a combination of <code>justifyContent</code> and <code>alignItems</code>.</p>'
    },
    board: 'gyr',
    style: {'justify-content': 'space-around', 'align-items': 'flex-end'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];\n  stack.direction = ASStackLayoutDirectionHorizontal;\n",
    after: "  stack.children = @[greenFrog, yellowFrog, redFrog];"
  },
  {
    name: 'ASStackLayoutDirection 1',
    instructions: {
      'en': '<p>Help the frogs find their column of lilypads using <code>direction</code>. This property defines the direction items are placed in the stack, and accepts the following values:</p><ul><li><code>ASStackLayoutDirectionVertical</code>: Items are placed vertically.</li><li><code>ASStackLayoutDirectionHorizontal</code>: Items are placed horizontally.</li></ul>'
    },
    board: 'gyr',
    style: {'flex-direction': 'column'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];",
    after: "  stack.children = @[greenFrog, yellowFrog, redFrog];"
  },
  {
    name: 'flex-direction 3',
    instructions: {
      'en': '<p>Help the frogs get to their own lilypads. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>'
    },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 4',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>'
    },
    board: 'gyr',
    style: {'flex-direction': 'column', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 5',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p>'
    },
    board: 'gyr',
    style: {'flex-direction': 'column-reverse', 'justify-content': 'space-between'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 6',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>'
    },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'order 1',
    instructions: {
      'en': '<p>Sometimes reversing the row or column order of a stack is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to set it to a positive or negative integer value.</p><p>Use the <code>order</code> property to reorder the frogs according to their lilypads.</p>'
    },
    board: 'gyr',
    selector: '> :nth-child(2)',
    classes: {'#pond, #background': 'wrap'},
    style: {'order': '2'},
    before: "#pond {\n  display: flex;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'order 2',
    instructions: {
      'en': '<p>Use the <code>order</code> property to send the red frog to his lilypad.</p>'
    },
    board: 'gggrg',
    selector: '> :nth-child(4)',
    classes: {'#pond, #background': 'wrap'},
    style: {'order': '-1'},
    before: "#pond {\n  display: flex;\n}\n\n.red {\n",
    after: "}"
  },
  {
    name: 'align-self 1',
    instructions: {
      'en': '<p>Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.</p>'
    },
    board: 'ggygg',
    selector: '> :nth-child(3)',
    style: {'align-self': 'flex-end'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'align-self 2',
    instructions: {
      'en': '<p>Combine <code>order</code> with <code>align-self</code> to help the frogs to their destinations.</p>'
    },
    board: 'ygygg',
    selector: '> .yellow',
    style: {'align-self': 'flex-end', 'order': '2'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'flex-wrap 1',
    instructions: {
      'en': '<p>Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>'
    },
    board: 'ygggggr',
    style: {'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-wrap 2',
    instructions: {
      'en': '<p>Help this army of frogs form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.</p>'
    },
    board: 'gggggrrrrryyyyy',
    style: {'flex-direction': 'column', 'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-flow 1',
    instructions: {
      'en': '<p>The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of one of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>'
    },
    board: 'gggggrrrrryyyyy',
    style: {'flex-flow': 'column wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-content 1',
    instructions: {
      'en': '<p>The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the stack.</li><li><code>flex-end</code>: Lines are packed at the bottom of the stack.</li><li><code>center</code>: Lines are packed at the vertical center of the stack.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the stack.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the stack. When there is only one line, <code>align-content</code> has no effect.</p>'
    },
    board: 'ggggggggggggggg',
    classes: {'#pond, #background': 'wrap'},
    style: {'align-content': 'flex-start'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 2',
    instructions: {
      'en': '<p>Now the current has bunched the lilypads at the bottom. Use <code>align-content</code> to guide the frogs there.</p>'
    },
    board: 'ggggggggggggggg',
    classes: {'#pond, #background': 'wrap'},
    style: {'align-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 3',
    instructions: {
      'en': '<p>The frogs have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their lilypads.</p>'
    },
    board: 'rgggyrgggyrgggy',
    classes: {'#pond, #background': 'wrap'},
    style: {'flex-direction': 'column-reverse', 'align-content': 'center'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 4',
    instructions: {
      'en': '<p>Bring the frogs home one last time by using the CSS properties you\'ve learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>'
    },
    board: 'rggggyy',
    style: {'flex-direction': 'column-reverse', 'flex-wrap': 'wrap-reverse', 'align-content': 'space-between', 'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, check out my other projects on my <a href="http://thomaspark.co">blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a>, and be sure to share Flexbox Froggy with your friends!</p>'
  },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: {'#pond, #background': 'wrap'},
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};
