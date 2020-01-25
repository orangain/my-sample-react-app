import React from "react";
import { Tab } from "semantic-ui-react";

const Home: React.FC = () => {
  const panes = [
    { menuItem: "Tab 1" },
    { menuItem: "Tab 2" },
    { menuItem: "Tab 3" }
  ];

  return <Tab panes={panes} />;
};

export default Home;
