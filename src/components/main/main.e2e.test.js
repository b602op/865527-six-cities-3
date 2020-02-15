import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const onButtonClick = jest.fn();
  const main = shallow(
      <Main
        errorsCount={999}
        rentalOffers={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`]}
        handleClick={onButtonClick}
      />
  );

  const welcomeButton = main.find(`h2.place-card__name.beautiful a`);

  welcomeButton.props().onClick();
  expect(onButtonClick.mock.calls.length).toBe(1);
});
