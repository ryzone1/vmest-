import { Card } from '../card/card';
import { ArticleContent } from './articleContent/articleContent';
import styles from './articlesSection.module.css';

interface ArticleData {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

interface ArticlesSectionProps {
  articles: ArticleData[];
}

export const ArticlesSection = ({ articles }: ArticlesSectionProps) => {
  return (
    <>
    <h2>Статьи</h2>
    <section className={styles.section}>
      {articles.map((article) => (
        <Card key={article.id}>
          <ArticleContent
            title={article.title}
            description={article.description}
            image={article.image}
            url={article.url}
          />
        </Card>
      ))}
    </section>
    </>
  );
};