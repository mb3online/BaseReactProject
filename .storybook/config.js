import { configure } from '@kadira/storybook';

function loadStories() {
  require('./stories/input.story.jsx');
}

configure(loadStories, module);
