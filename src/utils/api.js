import axios from "axios";

export const fetchArticles = (topic_slug) => {
  return axios
    .get("https://j-dublon-nc-news.herokuapp.com/api/articles", {
      params: { topic: topic_slug },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://j-dublon-nc-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};
