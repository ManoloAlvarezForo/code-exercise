import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { IntlProvider } from "react-intl";
import Search, { SearchProps } from "./Search";

const defaultProps: SearchProps = {
  updateParams: jest.fn()
};
const renderSearch = (props: SearchProps = defaultProps) =>
  render(
    <IntlProvider locale="en">
      <Search {...props} />
    </IntlProvider>
  );

describe("<NewsSearch />", () => {
  const searchButtonTestId = 'news-search-action';

  it("should render", () => {
    const { getByText } = renderSearch();
    expect(getByText("Search")).toBeInTheDocument();
  });

  it("should display search button", () => {
    const { getByTestId } = renderSearch();
    expect(getByTestId(searchButtonTestId)).toBeInTheDocument();
  });

  it("should have a value the input search", async () => {
    const inputRendered = await renderSearch();
    const searchInput = inputRendered.getByLabelText('search');

    await userEvent.type(searchInput, 'test');
    await waitFor(() => {
      expect(searchInput).toHaveValue('test');
    });
  });

  it("calls onClick prop when Search button clicked", async () => {
    await renderSearch();
    const searchButton = screen.getByRole('button', { name: 'Search' })
    userEvent.click(searchButton);
    await waitFor(() => {
      expect(defaultProps.updateParams).toHaveBeenCalledTimes(1);
    });
  });
});
