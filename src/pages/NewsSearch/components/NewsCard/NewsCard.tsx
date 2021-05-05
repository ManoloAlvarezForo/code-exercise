import React, { useCallback, useState } from "react";
import { Card } from "react-bootstrap";
import { useIntl } from "react-intl";
import { NewsBaseType } from "../../types/newsType";
import styles from "./NewsCard.module.css";
import messages from "./NewsCard.messages";

export interface NewsCardProps {
  newsItem: NewsBaseType;
  showModal: (show: boolean) => void;
  updateHeaderInfo: (imageUrl: string, title: string) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
  newsItem,
  showModal,
  updateHeaderInfo,
}) => {
  const { formatMessage } = useIntl();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const onClickImageHandled = (imageUrl: string, title: string) => {
    showModal(true);
    updateHeaderInfo(imageUrl, title);
  };

  const onLoadImage = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const onErrorImage = useCallback(() => {
    setImageError(true);
  }, []);

  return (
    <Card className={styles.card} data-testid="news-search-card">
      <Card.Body>
        <Card.Title
          className={`${styles.cardTitle} truncate truncate-2-lines text-left`}
        >
          {newsItem.title}
        </Card.Title>
        <Card.Img
          alt="description"
          className={`${styles.cardImg} ${styles.smoothImage} ${
            imageLoaded ? styles.imageVisible : styles.imageHidden
          }`}
          height="160"
          src={newsItem.image.thumbnail}
          onClick={() => onClickImageHandled(newsItem.image.url, newsItem.title)}
          onLoad={onLoadImage}
          onError={onErrorImage}
        />
        {!imageLoaded && (
          <div className={styles.smoothPreloader}>
            <span className={styles.loader} />
          </div>
        )}
        {!imageError && <div className={styles.smoothNoImage}></div>}
        <Card.Text
          className={`${styles.cardText} truncate truncate-4-lines text-left`}
        >
          {newsItem.description}
        </Card.Text>
        <Card.Link
          className={styles.cardLink}
          href={newsItem.url}
          target="_blank"
        >
          {formatMessage(messages.newsSearchCardReadMoreLabel)}
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
