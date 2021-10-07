import { Fragment } from "react";
import MarketSummary from "./MarketSummary";
import AvailableMeals from "./AvailableMarketItems";

const Meals = () => {
  return (
    <Fragment>
      <MarketSummary />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
