
import NavigationButton from "./NavigationButton";

describe("NavigationButton", () => {
it("should render correctly", () => {
   const component = (
      <NavigationButton>
        Test
      </NavigationButton>
    );

    expect(component).toMatchSnapshot();
  });
});
