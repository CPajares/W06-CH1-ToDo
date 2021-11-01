import Card from "./Card";
import ReactTestRenderer from "react-test-renderer";

describe("Given the Card component", () => {
  describe("When it´s called with the name patata", () => {
    test("Should render a Card with name patata", () => {
      const card = ReactTestRenderer.create(
        <Card name={"patata"} state={true} />
      );
      expect(card.toJSON()).toMatchSnapshot();
    });
  });
});
