# Northcoders React News App

This is a full stack application that serves news content from a REST API via a React app.

The live hosted app can be seen [here](https://condescending-tesla-f2ac29.netlify.app). The app is responsive and can be viewed on both desktop and mobile.

The back end API can be accessed [here](https://j-dublon-nc-news.herokuapp.com/api) - this serves a JSON object detailing all the endpoints of the API. The backend code can be found [here](https://github.com/j-dublon/be-nc-news), with instruction on how to install locally.

## User stories:

As a user, I can:

- view all articles
- view all articles on a certain topic
- sort articles by date, comments, or votes
- click on an article title to view an individual article and its comments
- post a new comment to an existing article (as a default logged in user)
- delete my own comments
- vote on an article and immediately see the change
- vote on a comment and immediately see the change
- receive a 404 error if I go on a non-existent path/a path for a non-existent article/topic
- receive a 400 error if I go on a invalid article ID
- not post a comment if I have not filled in the text box

## Running the app locally

### Prerequisites:

- Node.js (13.13.0)
- React (16.3.1)

### Installation:

1. Fork the repo
2. Clone the fork to your local machine (navigate to a suitable folder, and run `git clone your-forked-url`)
3. cd into your newly cloned local repo and open
4. `npm install`
5. `npm start`

## Desktop and mobile screenshots:

![desktop screenshot](src/Images/desktop.png) ![mobile screenshot](src/Images/mobile.png)

## Built with

- Node.js - runtime environment
- Axios - promise based http client for making requests to the API
- Create React App - to bootstrap app setup
- React - JS library for building user interfaces
- Reach Router - for routing React apps

## Contributing

[Please see here](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for an excellent guide to contributing.

## Author

Jodi Dublon

## Acknowledgements

Many thanks to everyone at Northcoders.
