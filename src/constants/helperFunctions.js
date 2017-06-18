import { take } from 'lodash/array';

export default {
  // isValidURL:
  // return "http://" or "https://" if the URL is valid,
  // or `null` if it isn't
  isValidURL: (url) => {
    const [ match ] = url.match(/^(https?:\/\/)?/gi);
    return !!match;
  },
  // emailDroppedItem:
  // Formulate `mailto` href,
  // Open client's default Email application
  emailDroppedItem: (item) => {
    window.location.href =
      `mailto:?subject=${"Check out this Reddit post"}&body="http://www.reddit.com${item.permalink}"&target="_self"`;
  },
  // openDroppedItemOnReddit:
  // Open topic in new tab on Reddit
  openDroppedItemOnReddit: (item) => {
    window.open(`http://www.reddit.com${item.permalink}`);
  },
  // subRedditURL:
  // formulate SubReddit URL (for Searchbar)
  subRedditURL: (sub) => `https://www.reddit.com/r/${sub}/.json`,
  // formatVotes:
  // If a topic only has 1 vote, we don't want to render '1 ups' / '1 downs'
  formatVotes: (votes, type) =>
    votes === 1 ?
    `${votes} ${type}` :
    `${votes} ${type}s`,
  // trimTopicTitle:
  // Keep the topic's title from overflowing a Topic component's height.
  // (Implementation removed in lieu of dynamically-sized Topic dimensions.)
  trimTopicTitle: (title, len = 60) =>
    title.length >= len ?
    take(title, len)
      .concat('...(click for more)')
    : title,
};
