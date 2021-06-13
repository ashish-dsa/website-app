
import SkillCard from "./SkillCard";

describe("SkillCard", () => {
it("should render correctly", () => {
   const component = (
      <SkillCard>
        Test
      </SkillCard>
    );

    expect(component).toMatchSnapshot();
  });
});
