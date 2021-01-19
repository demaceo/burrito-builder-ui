import React from "react";
import ReactDOM from "react-dom";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { getOrders, makeOrders } from "../../apiCalls";
import { orders } from "../../testingData";

describe("App", () => {
    // beforeEach(() => {
    // jest.mock("../../apiCalls", () => ({
    //     getOrders: jest.fn(),
    // }));
    // const mockedOrders = getOrders();
// });
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it("should render a header title", () => {
        render(<App />);
        const headerTitle = document.getElementById("title");

        expect(headerTitle).toBeInTheDocument()
    }); 
});

