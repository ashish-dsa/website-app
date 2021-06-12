import AnimatedText from "./AnimatedText";

describe("AnimatedText", () => {
  it("should render correctly", () => {
    const component = <AnimatedText>Test</AnimatedText>;

    expect(component).toMatchSnapshot();
  });
});
