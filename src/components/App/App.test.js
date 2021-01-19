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
 
  it("should render a header title", async () => {
    render(<App />);
    const headerTitle = document.getElementById("title");

    expect(headerTitle).toBeInTheDocument();
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

it.skip("should dipslay orders", async () => {
    render(<App />);
    const form = await waitFor(() =>
    document.getElementById("order-form")
    );
    const orderForm = document.getElementById("order-form");
    const nameOne = await waitFor(() => screen.getByText("Pat"));
    const nameTwo = await waitFor(() => screen.getByText("Sam"));
    const nameThree = await waitFor(() => screen.getByText("Alex"));

    expect(form).toBeInTheDocument();
    expect(orderForm.length).toBe(3);
    expect(nameOne).toBeInTheDocument();
    expect(nameTwo).toBeInTheDocument();
    expect(nameThree).toBeInTheDocument();
});

}); 