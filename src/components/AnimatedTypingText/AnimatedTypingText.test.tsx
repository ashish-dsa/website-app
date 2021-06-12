
import AnimatedTypingText from "./AnimatedTypingText";

describe("AnimatedTypingText", () => {
it("should render correctly", () => {
   const component = (
      <AnimatedTypingText>
        Test
      </AnimatedTypingText>
    );

    expect(component).toMatchSnapshot();
  });
});
