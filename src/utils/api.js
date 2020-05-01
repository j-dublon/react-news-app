import axios from "axios";

export const fetchArticles = (topic_slug, sort_by) => {
  return axios
    .get("https://j-dublon-nc-news.herokuapp.com/api/articles", {
      params: { topic: topic_slug, sort_by },
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

export const fetchArticle = (id) => {
  return axios
    .get(`https://j-dublon-nc-news.herokuapp.com/api/articles/${id}`)
    .then(({ data: { article } }) => {
      console.log(article);
      return article;
    });
};
