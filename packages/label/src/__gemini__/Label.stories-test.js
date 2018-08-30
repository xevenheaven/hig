import Input from "@hig/input";
import React from "react";
import { storiesOf } from "@storybook/react";

import Label from "../index";

storiesOf("Label", module)
  .add("default", () => <Label>Email</Label>)
  .add("with reference to form element", () => (
    <form id="a_form">
      <Label form="a_form" htmlFor="an_input">
        Input Field
      </Label>
      <Input id="an_input" variant="line" />
    </form>
  ));
