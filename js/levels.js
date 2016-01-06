var levels = [
  {
    name: 'ASStackLayoutJustifyContent 1',
    instructions: {
      'en': '<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing AsyncDisplayKit layout code! Guide this frog to the lilypad on the right by using the <code>justifyContent</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>ASStackLayoutJustifyContentStart</code>: Items align to the left side of the stack.</li><li><code>ASStackLayoutJustifyContentEnd</code>: Items align to the right side of the stack.</li><li><code>ASStackLayoutJustifyContentCenter</code>: Items align at the center of the stack.</li><li><code>ASStackLayoutJustifyContentSpaceBetween</code>: Items display with equal spacing between them.</li><li><code>ASStackLayoutJustifyContentSpaceAround</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>stack.justifyContent = ASStackLayoutJustifyContentEnd;</code> will move the frog to the right.</p>'
    },
    board: 'g',
    style: {'justify-content': 'flex-end'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];\n  stack.direction = ASStackLayoutDirectionHorizontal;\n",
    after: "  stack.children = @[greenFrog];"
  },
  {
    name: 'ASStackLayoutJustifyContent 2',
    instructions: {
      'en': '<p>Use <code>justifyContent</code> again to help these frogs get to their lilypads. Remember that this property aligns items horizontally and accepts the following values:</p><ul><li><code>ASStackLayoutJustifyContentStart</code>: Items align to the left side of the stack.</li><li><code>ASStackLayoutJustifyContentEnd</code>: Items align to the right side of the stack.</li><li><code>ASStackLayoutJustifyContentCenter</code>: Items align at the center of the stack.</li><li><code>ASStackLayoutJustifyContentSpaceBetween</code>: Items display with equal spacing between them.</li><li><code>ASStackLayoutJustifyContentSpaceAround</code>: Items display with equal spacing around them.</li></ul>'
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
    name: 'ASStackLayoutDirection 2',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>direction</code> and <code>justifyContent</code>.</p><p>Notice that when the direction is horizontal, <code>justifyContent</code> changes to the vertical and <code>alignItems</code> to the horizontal.</p>'
    },
    board: 'gyr',
    style: {'flex-direction': 'column', 'justify-content': 'flex-end'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];",
    after: "  stack.children = @[greenFrog, yellowFrog, redFrog];"
  },
  {
    name: 'ASStackLayoutDirection 5',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>direction</code> and <code>justifyContent</code>.</p>'
    },
    board: 'gyr',
    style: {'flex-direction': 'column', 'justify-content': 'space-between'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];",
    after: "  stack.children = @[greenFrog, yellowFrog, redFrog];"
  },
  {
    name: 'ASStackLayoutDirection 6',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>direction</code>, <code>justifyContent</code>, and <code>alignItems</code>.</p>'
    },
    board: 'gyr',
    style: {'flex-direction': 'column', 'justify-content': 'center', 'align-items': 'flex-end'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];",
    after: "  stack.children = @[greenFrog, yellowFrog, redFrog];"
  },
  {
    name: 'ASStackLayoutAlignSelf 1',
    instructions: {
      'en': '<p>Another property you can apply to individual items is <code>alignSelf</code>. This property can override the alignItems property of the parent stack and accepts the following values:</p><ul><li><code>ASStackLayoutAlignSelfAuto</code>: Inherit alignment value from containing stack.</li><li><code>ASStackLayoutAlignSelfStart</code>: Align to start of cross axis.</li><li><code>ASStackLayoutAlignSelfEnd</code>: Align to end of cross axis.</li><li><code>ASStackLayoutAlignSelfCenter</code>: Center on cross axis.</li><li><code>ASStackLayoutAlignSelfStretch</code>: Expand to fill cross axis.</li><li><code>ASStackLayoutAlignSelfBaselineFirst</code>: align to the first baseline of the stack.</li><li><code>ASStackLayoutAlignSelfBaselineLast</code>: align to the last baseline of the stack.</li></ul>'
    },
    board: 'ggygg',
    selector: '> :nth-child(3)',
    style: {'align-self': 'flex-end'},
    objectToSelectorMap: {'yellowFrog': '> :nth-child(3)'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];\n  stack.direction = ASStackLayoutDirectionHorizontal;\n  stack.alignItems = ASStackLayoutAlignItemsStart;\n  stack.children = @[greenFrog1, greenFrog2, yellowFrog, redFrog1, redFrog2];\n\n",
    after: ""
  },
  {
    name: 'ASStackLayoutAlignSelf 2',
    instructions: {
      'en': '<p>Use <code>alignSelf</code> to help the frogs to their destinations.</p>'
    },
    board: 'gyggy',
    selector: '> .yellow',
    style: {'align-self': 'center'},
    objectToSelectorMap: {'yellowFrog1': '> :nth-child(2)', 'yellowFrog2': '> :nth-child(5)'},
    before: "  ASStackLayoutSpec *stack = [[ASStackLayoutSpec alloc] init];\n  stack.direction = ASStackLayoutDirectionHorizontal;\n  stack.alignItems = ASStackLayoutAlignItemsStart;\n  stack.children = @[greenFrog1, yellowFrog1, greenFrog2, greenFrog3, yellowFrog2];\n\n",
    after: ""
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
