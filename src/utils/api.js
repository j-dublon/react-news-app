import axios from "axios";

export const fetchArticles = (topic_slug, sort_by, page, author) => {
  return axios
    .get("https://j-dublon-nc-news.herokuapp.com/api/articles", {
      params: { topic: topic_slug, sort_by, p: page, author },
    })
    .then(({ data }) => {
      data.maxPage = Math.ceil(data.total_count / 9);
      return data;
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
      return article;
    });
};

export const fetchComments = (id, page) => {
  return axios
    .get(`https://j-dublon-nc-news.herokuapp.com/api/articles/${id}/comments`, {
      params: { p: page },
    })
    .then(({ data }) => {
      data.maxPage = Math.ceil(data.total_count / 10);
      return data;
    });
};

export const postComment = (requestBody, id) => {
  return axios
    .post(
      `https://j-dublon-nc-news.herokuapp.com/api/articles/${id}/comments`,
      requestBody
    )
    .then(({ data }) => {
      return data.comment;
    });
};

export const removeComment = (id) => {
  return axios.delete(
    `https://j-dublon-nc-news.herokuapp.com/api/comments/${id}`
  );
};

export const updateVotes = (section, id, voteChange) => {
  return axios.patch(
    `https://j-dublon-nc-news.herokuapp.com/api/${section}/${id}`,
    { inc_votes: voteChange }
  );
};

export const postArticle = (requestBody) => {
  console.log(requestBody);
  return axios
    .post("https://j-dublon-nc-news.herokuapp.com/api/articles", requestBody)
    .then(({ data: { article } }) => {
      console.log(article);
      return article;
    });
};

export const removeArticle = (id) => {
  return axios.delete(
    `https://j-dublon-nc-news.herokuapp.com/api/articles/${id}`
  );
};
