import React from "react";
import {render} from '@testing-library/react';
import Button from './index';
import { Router } from "react-router-dom";


test("Should not allowed click button if isDisbaled is present", () => {
  const {container} = render(<Button isDisabled></Button>)

  expect(container.querySelector('span.disabled')).toBeInTheDocument()
});

test("Should reder loading/spinner", () => {
  const {container, getByText} = render(<Button isLoading></Button>)
  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector('span')).toBeInTheDocument()
});

test("Should render <a> tag", () => {
  const {container} = render(<Button type="link" isExternal ></Button>)

  expect(container.querySelector('a')).toBeInTheDocument()
});

test("Should render <link> component", () => {
  const {container} = render( <Button type="link" isExternal ></Button>)

  expect(container.querySelector('a')).toBeInTheDocument()
});