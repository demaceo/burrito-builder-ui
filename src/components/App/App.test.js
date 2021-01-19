import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { getOrders, makeOrder } from "../../apiCalls";
import userEvent from "@testing-library/user-event";
import { mockedOrders, mockedNewOrder } from "../../testingData.js";
jest.mock("../../apiCalls.js");

describe("App", () => {
  beforeEach(() => {
    getOrders.mockResolvedValueOnce(mockedOrders);
    makeOrder.mockResolvedValueOnce(mockedNewOrder)
  });
 
  it("should render a header title", () => {
    render(<App />);

    const headerTitle = document.getElementById("title");
    const orderForm = document.getElementById("order-form");
 
    expect(headerTitle).toBeInTheDocument();
    expect(orderForm).toBeInTheDocument();
  });

  it("should display orders", async () => {
    render(<App />);
    expect(getOrders).toHaveBeenCalled();
  });

    it("should be able to add orders", async () => {
      render(<App />);

      const nameInput = screen.getByPlaceholderText("Name");
      const ingredients = screen.getAllByRole("button");
      const submitButton = screen.getByText("Submit Order");

      userEvent.type(nameInput, "Spider-man");

      userEvent.click(ingredients[3]);
      userEvent.click(submitButton); 

      const spiderman = screen.getByText("Spider-man");
      expect(spiderman).toBeInTheDocument();
      expect(makeOrder).toHaveBeenCalled
    });

}); 