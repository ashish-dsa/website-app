
import TestimonialCard from "./TestimonialCard";

describe("TestimonialCard", () => {
it("should render correctly", () => {
   const component = (
      <TestimonialCard>
        Test
      </TestimonialCard>
    );

    expect(component).toMatchSnapshot();
  });
});
