import { MouseEvent } from 'react';
import style from './ArticleContent.module.css';

interface ArticleProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const ArticleContent = ({ title, description, image, url }: ArticleProps) => {
  const handleClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).tagName !== 'A' && (e.target as HTMLElement).tagName !== 'BUTTON') {
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <div className={style.article} onClick={handleClick}>
      <img src={image} alt={title} className={style.fullWidthImg} />
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
    </div>
  );
};