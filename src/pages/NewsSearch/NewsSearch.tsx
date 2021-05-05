import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsList from "./components/NewsList/NewsList";
import Search from "./components/Search/Search";
import NewsPagination from "./components/NewsPagination/NewsPagination";
import { useNewsSearch } from "../NewsSearch/hooks/useNewsSearch";
import Loader from "../../components/Loader/Loader";
import { useIntl } from "react-intl";
import messages from "./NewsSearch.messages";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const NewsSearch: React.FC = () => {
  const { formatMessage } = useIntl();
  const {
    newsSearch,
    isLoading,
    pageSize,
    updateParams,
    totalCount,
    pageNumber,
  } = useNewsSearch();
  
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="11">
          <NavigationBar title={formatMessage(messages.newsSearchTitleLabel)} />
          <Search updateParams={updateParams} />
          {isLoading ? <Loader /> : <NewsList newsSearch={newsSearch} />}
          <NewsPagination
            pageNumber={pageNumber}
            pageSize={pageSize}
            totalCount={totalCount}
            updateParams={updateParams}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NewsSearch;
