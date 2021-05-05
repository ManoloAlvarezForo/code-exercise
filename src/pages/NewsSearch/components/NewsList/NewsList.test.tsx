import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import newsMock from "../../mocksData/newsMock";
import NewsList, { NewsListProps } from "./NewsList";

const defaultProps: NewsListProps = {
    newsSearch: newsMock
}
const renderNewsList = (props: NewsListProps = defaultProps) =>
  render(
    <IntlProvider locale="en">
      <NewsList {...props} />
    </IntlProvider>
  );

describe("<NewsList />", () => {
  it("should render", () => {
    const { getByTestId } = renderNewsList();
    expect(getByTestId("news-search-list")).toBeInTheDocument();
  });

  it("should display the card items", () => {
    const { getAllByTestId } = renderNewsList();
    const length = newsMock.length;
    expect(getAllByTestId('news-search-card')).toHaveLength(length);
  });
});
