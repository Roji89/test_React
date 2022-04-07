import React from "react";
import { sum } from "./sum";

it("render sum of 5 and 3 ", () => {
  expect(sum(5, 3)).toBe(8);
});
