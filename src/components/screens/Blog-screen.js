import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ArticleBodyFull from "../article_components/Article_body_full";
import getArticle from "../../database/get_article";
function BlogScreen() {
  let { id } = useParams();

  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
    markdown: "",
    authorId: "",
    likeCount: 0,
    createdAt: "",
    sanitizedHtml: "",
  });

  useEffect(() => {
    const fetchArticle = async () => {
      const article = await getArticle(id);
      setArticleData(article);
    };

    fetchArticle();
  }, []);

  return (
    <>
      <Container>
        {articleData && <ArticleBodyFull data={articleData}></ArticleBodyFull>}
      </Container>
    </>
  );
}

export default BlogScreen;
