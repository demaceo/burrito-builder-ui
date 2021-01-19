import React from "react";
import ReactDOM from "react-dom";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { getOrders, makeOrders } from "../../apiCalls";
import { orders } from "../../testingData";
jest.mock("../../apiCalls.js");

describe("App", () => {
   beforeEach(() => {
     getOrders.mockResolvedValueOnce(orders);
   });
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
    it("should display orders", async () => {
        render(<App />);
        const orderOne = await waitFor(() => screen.getByText("Pat"));
        const orderTwo = await waitFor(() => document.getElementById(2));
        const orderThree = await waitFor(() => document.getElementById(3));

        expect(orderOne).toBeInTheDocument();
        // expect(orderTwo).toBeInTheDocument();
        // expect(orderThree).toBeInTheDocument();
    });
}); 

