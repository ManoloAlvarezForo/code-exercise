import React, { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import Loader from "../../../../components/Loader/Loader";
import { NewsBaseType } from "../../types/newsType";
import NewsCard from "../NewsCard/NewsCard";
import styles from "./NewsList.module.css";
export interface NewsListProps {
  newsSearch: NewsBaseType[];
}

const NewsList: React.FC<NewsListProps> = ({ newsSearch }) => {
  const [lgShow, setLgShow] = useState(false);
  const [headerInfo, setHeaderInfo] = useState({imageUrl: '', title: ''});
  const [imageLoaded, setImageLoaded] = useState(false);
  const onLoadImage = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const onHideHandled = () => {
    setLgShow(false);
    setImageLoaded(false);
  };

  const updateHeader = (imageUrl: string, title: string) => {
    setHeaderInfo({...headerInfo, imageUrl, title})
  }

  return (
    <div className={styles.mainContainer} data-testid="news-search-list">
      {newsSearch.map((newsItem: NewsBaseType) => (
        <NewsCard
          key={newsItem.id}
          newsItem={newsItem}
          showModal={setLgShow}
          updateHeaderInfo={updateHeader}
        />
      ))}
      <Modal size="lg" show={lgShow} onHide={onHideHandled}>
        <Modal.Header style={{fontWeight: 'bold'}} closeButton>{headerInfo.title}</Modal.Header>
        <Modal.Body>
          <img
            src={headerInfo.imageUrl}
            style={{ display: !imageLoaded ? "none" : "inline" }}
            onLoad={onLoadImage}
            alt="news-img"
            height="100%"
            width="100%"
          />
          {!imageLoaded && <Loader />}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewsList;
