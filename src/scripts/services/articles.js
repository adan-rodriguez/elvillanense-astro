import articles from "@mocks/mock_articles.json";

export const getArticles = () => articles;

export const getArticle = ({ id }) => {
  const article = articles.find((article) => id === article.id);
  if (article) return article;
  throw new Error("La noticia no existe");
};
