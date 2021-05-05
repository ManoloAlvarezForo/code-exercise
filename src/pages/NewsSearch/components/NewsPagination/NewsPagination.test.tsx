import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import NewsPagination, { NewsPaginationProps } from "./NewsPagination";

const defaultProps: NewsPaginationProps = {
    totalCount: 1,
    pageSize: 12,
    updateParams: jest.fn(),
    pageNumber: 1
}

const renderNewsPagination = (props: NewsPaginationProps = defaultProps) =>
  render(
    <IntlProvider locale="en">
      <NewsPagination {...props} />
    </IntlProvider>
  );

describe("<NewsPagination />", () => {
  it("should render", () => {
    const { getByTestId } = renderNewsPagination();
    expect(getByTestId("news-pagination")).toBeInTheDocument();
  });
});
