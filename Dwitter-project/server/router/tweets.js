import express from 'express';
import 'express-async-errors';
import * as tweetRepository from '../data/tweet.js';

const router = express.Router();

//GET /tweets
//GET /tweets/?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username ? tweetRepository.getAllTweetsByUserName(username) : tweetRepository.getAllTweets();
  res.status(200).json(data);
});

//GET /tweets/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const tweet = tweetRepository.getTweetById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({message: `Tweet ${id} not found`});
  }
});

//POST /tweets
router.post('/', (req, res, next) => {
  const {text, name, username} = req.body;
  const tweet = tweetRepository.createTweet(text, name, username);
  res.status(201).json(tweet);
});

//PUT /tweets/:id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({message: `Tweet ${id} not found`});
  }
});

//DELETE /tweets/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((t) => t.id !== id);
  res.sendStatus(204);
});

export default router;
