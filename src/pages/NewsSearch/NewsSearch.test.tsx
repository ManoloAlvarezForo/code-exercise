import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import NewsSearch from "./NewsSearch";

const renderNewsSearch = () =>
  render(
    <IntlProvider locale="en">
      <NewsSearch />
    </IntlProvider>
  );

describe("<NewsSearch />", () => {
  it("should render", () => {
    const { getByText } = renderNewsSearch();
    expect(getByText("News search")).toBeInTheDocument();
  });
});
