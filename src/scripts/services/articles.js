import articles from "@mocks/mock_articles.json";
import {
  getAllArticlesFirebase,
  getArticleFirebase,
} from "src/firebase/firebaseService";

const isDev = import.meta.env.DEV;

export const getArticles = async () =>
  isDev ? articles : await getAllArticlesFirebase();

export const getArticle = async ({ id }) => {
  if (isDev) {
    const article = articles.find((article) => id === article.id);
    if (article) return article;
    throw new Error("La noticia no existe");
  }

  const article = await getArticleFirebase({ id });
  if (article) return article;
  throw new Error("La noticia no existe");
};
