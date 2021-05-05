import { useState, useMemo, useReducer, useEffect } from "react";
import axios from "axios";
import { SEARCH_API_URL } from "../../../api";
import { NewsBaseType } from "../types/newsType";

export interface ParamsTypes {
    q?: string;
    withThumbnails?: boolean;
    pageNumber?: number;
    pageSize?: number;
}

export const useNewsSearch = () => {
  const defaultParams = useMemo(
    () => ({
      q: "z",
      withThumbnails: true,
      pageNumber: 1,
      pageSize: 12,
    }),
    []
  );

  const headers = useMemo(
    () => ({
      "x-rapidapi-key": "e28105562fmsh01edebafeeb6117p1f37e7jsn0221a314ae3d",
      "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    }),
    []
  );

  const [params, setParams] = useState(defaultParams);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const initialState = {
    newsSearch: [] as NewsBaseType[],
    totalCount: 0,
  };
  const createAction = (type: string, payload: any) => {
    return {
      type,
      payload,
    };
  };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'NEWS_SEARCH':
        return {
          ...state,
          newsSearch: action.payload,
        };
      case 'TOTAL_COUNT':
        return {
          ...state,
          totalCount: action.payload,
        };
      default:
        return state;
    }
  };

  const updateParams = (newParams: ParamsTypes) => {
      setIsLoading(true);
      setParams({...params, ...newParams});
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getNews = async () => {
        try {
            const {data: {value, totalCount}} = await axios.get(SEARCH_API_URL, { params, headers });
            dispatch(createAction('NEWS_SEARCH', value))
            dispatch(createAction('TOTAL_COUNT', totalCount))
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    }

    getNews();
  }, [headers, params])

  return {
    newsSearch: state.newsSearch,
    totalCount: state.totalCount,
    updateParams,
    error,
    isLoading,
    pageSize: params.pageSize,
    pageNumber: params.pageNumber,
  };
};
