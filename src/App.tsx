import React from "react";
import {
  Menu,
  Container,
  Dropdown,
  Form,
  Checkbox,
  Button,
  Tab
} from "semantic-ui-react";

const App: React.FC = () => {
  const panes = [
    { menuItem: "Tab 1" },
    { menuItem: "Tab 2" },
    { menuItem: "Tab 3" }
  ];

  return (
    <div>
      <Menu inverted fixed="top">
        <Menu.Item as="a" header>
          {/* <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} /> */}
          Project Name
        </Menu.Item>
        <Menu.Item as="a" active>
          Home
        </Menu.Item>

        <Dropdown item simple text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
      <Container style={{ marginTop: "7em" }}>
        <Tab panes={panes} />

        <Form style={{ width: "600px" }}>
          <Form.Group inline>
            <Form.Field width={3}>
              <label htmlFor="firstName1">First Name</label>
            </Form.Field>
            <Form.Field width={13}>
              <input id="firstName1" placeholder="First Name" />
            </Form.Field>
          </Form.Group>
          <Form.Group inline>
            <Form.Field width={3}>
              <label htmlFor="lastName1">Last Name</label>
            </Form.Field>
            <Form.Field width={13}>
              <input id="lastName1" placeholder="Last Name" />
            </Form.Field>
          </Form.Group>

          <Form.Group inline>
            <Form.Field width={3}></Form.Field>
            <Form.Field width={13}>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
          </Form.Group>
          <Form.Group inline>
            <Form.Field width={3}></Form.Field>
            <Form.Field width={13}>
              <Button type="submit" primary>
                Submit
              </Button>
            </Form.Field>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default App;
