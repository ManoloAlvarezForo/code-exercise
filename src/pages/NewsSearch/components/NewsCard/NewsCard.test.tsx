import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import newsMock from "../../mocksData/newsMock";
import NewsCard, { NewsCardProps } from "./NewsCard";

const defaultProps: NewsCardProps = {
    newsItem: newsMock[0],
    showModal: jest.fn(),
    updateHeaderInfo: jest.fn()
}
const renderNewsCard = (props: NewsCardProps = defaultProps) =>
  render(
    <IntlProvider locale="en">
      <NewsCard {...props} />
    </IntlProvider>
  );

describe("<NewsCard />", () => {
  it("should render", async() => {
   const {getByText} = renderNewsCard();
   expect(getByText(newsMock[0].title)).toBeInTheDocument();
  });
});
