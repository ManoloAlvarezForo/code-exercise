import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import NavigationBar, { NavigationBarProps } from "./NavigationBar";

const defaultProps: NavigationBarProps = {
    title: 'test-title'
}
const renderNavigationBar = (props: NavigationBarProps = defaultProps) =>
  render(
    <IntlProvider locale="en">
      <NavigationBar {...props} />
    </IntlProvider>
  );

describe("<NavigationBar />", () => {
  it("should render", async() => {
   const {getByText} = renderNavigationBar();
   expect(getByText('test-title')).toBeInTheDocument();
  });
});
