import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import { ParamsTypes } from "../../hooks/useNewsSearch";
import styles from './Search.module.css';
import messages from './Search.messages';
import {useIntl} from 'react-intl';

export interface SearchProps {
  updateParams: (params: ParamsTypes) => void;
}

const Search: React.FC<SearchProps> = ({ updateParams }) => {
  const {formatMessage} = useIntl()
  return (
    <div className={styles.mainContainer}>
       <Formik
        initialValues={{
          query: "",
        }}
        onSubmit={async (values: any) => {
          const { query } = values;
          updateParams({ q: query, pageNumber: 1 });
        }}
      >
        {() => (
          <Form className={styles.formWrapper}>
            <Field
              className="form-control"
              id="query"
              name="query"
              placeholder={formatMessage(messages.newsSearchPlaceHolder)}
              required
              aria-label="search"
            />
            <Button
              data-testid="news-search-action"
              style={{ marginLeft: "10px" }}
              type="submit"
              className="mb-2"
            >
              {formatMessage(messages.newsSearchButtonLabel)}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
     
  );
};

export default Search;