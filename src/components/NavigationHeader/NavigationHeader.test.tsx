
import NavigationHeader from "./NavigationHeader";

describe("NavigationHeader", () => {
it("should render correctly", () => {
   const component = (
      <NavigationHeader>
        Test
      </NavigationHeader>
    );

    expect(component).toMatchSnapshot();
  });
});
