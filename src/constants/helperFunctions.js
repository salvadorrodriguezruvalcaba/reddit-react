import { take } from 'lodash/array';

export default {
  // generate SubReddit URL
  emailDroppedItem: (item) => {
    window.location.href =
      `mailto:?subject=${"Check out this Reddit post"}&body="http://www.reddit.com${item.permalink}"&target="_self"`;
  },
  openDroppedItemOnReddit: (item) => {
    window.open(`http://www.reddit.com${item.permalink}`);
  },
  subRedditURL: (sub) => `https://www.reddit.com/r/${sub}/.json`,
  // If a topic only has 1 vote, we don't want to render '1 ups' / '1 downs'
  formatVotes: (votes, type) =>
    votes === 1 ?
    `${votes} ${type}` :
    `${votes} ${type}s`,
  // Keep the topic's title from overflowing the container's dimensions
  trimTopicTitle: (title, len = 60) =>
    title.length >= len ?
    take(title, len).concat('...(click for more)')
    : title,
};
