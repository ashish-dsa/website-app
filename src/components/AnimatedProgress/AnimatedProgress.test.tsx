
import AnimatedProgress from "./AnimatedProgress";

describe("AnimatedProgress", () => {
it("should render correctly", () => {
   const component = (
      <AnimatedProgress>
        Test
      </AnimatedProgress>
    );

    expect(component).toMatchSnapshot();
  });
});
