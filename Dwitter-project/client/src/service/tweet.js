export default class TweetService {
  constructor(http) {
    this.http = http;
  }
  async getTweets(username) {
    let query = username ? `?username=${username}` : '';
    return this.http.fetch(`/tweets${query}`, {
      methos: 'GET',
    });
  }

  async postTweet(text) {
    return this.http.fetch(`${this.baseURL}/tweets/`, {
      method: 'POST',
      body: JSON.stringify({
        text,
        username: 'wonsick',
        name: 'Wonsik',
      }),
    });
  }

  async deleteTweet(tweetId) {
    return this.http.fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: 'DELETE',
    });
  }

  async updateTweet(tweetId, text) {
    return this.http.fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: 'PUT',
      body: JSON.stringify({text}),
    });
  }
}
