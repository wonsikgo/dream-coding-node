let tweets = [
  {
    id: '1',
    text: '드림코딩 화이팅!',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
  },
  {
    id: '2',
    text: '드림코딩 !',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'wonsik',
  },
];

export function getAllTweets() {
  return tweets;
}

export function getAllTweetsByUserName(username) {
  return tweets.filter((t) => t.username === username);
}

export function getTweetById(id) {
  return tweets.find((t) => t.id === id);
}

export function createTweet(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweets;
}
