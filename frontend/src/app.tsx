import React from "react";
import { Menu, Container, Dropdown, Icon } from "semantic-ui-react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";

const App: React.FC = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Menu inverted fixed="top">
        <Menu.Item as="a" header>
          {/* <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} /> */}
          Project Name
        </Menu.Item>
        <Menu.Item as={Link} to="/" active={location.pathname === "/"}>
          Home
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/sign-up"
          active={location.pathname === "/sign-up"}
        >
          Sign-up
        </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown
            item
            simple
            trigger={
              <span>
                <Icon name="user circle" size="large" />
                Dropdown
              </span>
            }
          >
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
      <Container style={{ marginTop: "7em" }}>
        <Switch>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
