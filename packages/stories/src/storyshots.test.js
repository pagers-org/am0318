import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  framework: 'react',
  configPath: path.join(__dirname, '..', '.storybook'),
});
