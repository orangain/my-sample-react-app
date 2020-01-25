import React from "react";
import { Form, Checkbox, Button } from "semantic-ui-react";

const SingUp: React.FC = () => {
  return (
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
  );
};

export default SingUp;
