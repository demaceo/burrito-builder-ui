import React from "react";
import OrderForm from "./OrderForm";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { makeOrders } from "../../apiCalls";

describe("Order Form", () => {
  it("should render a form", () => {
    render(<OrderForm />);
    const nameInput = screen.getByPlaceholderText("Name");
    const beansButton = screen.getByText("beans");
    const submitButton = screen.getByText("Submit Order");

    expect(nameInput).toBeInTheDocument();
    expect(beansButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
it("should render a form with all available ingredients", () => {
    render(<OrderForm />);

    const beans = screen.getByText("beans");
    const steak = screen.getByText("steak");
    const carnitas = screen.getByText("carnitas");
    const sofritas = screen.getByText("sofritas");
    const lettuce = screen.getByText("lettuce");
    const quesoFresco = screen.getByText("queso fresco");
    const picoDeGallo = screen.getByText("pico de gallo");
    const hotSauce = screen.getByText("hot sauce");
    const guacamole = screen.getByText("guacamole");
    const jalapenos = screen.getByText("jalapenos");
    const cilantro = screen.getByText("cilantro");
    const sourCream = screen.getByText("sour cream");

    expect(beans).toBeInTheDocument();
    expect(steak).toBeInTheDocument();
    expect(carnitas).toBeInTheDocument();
    expect(sofritas).toBeInTheDocument();
    expect(lettuce).toBeInTheDocument();
    expect(quesoFresco).toBeInTheDocument();
    expect(picoDeGallo).toBeInTheDocument();
    expect(hotSauce).toBeInTheDocument();
    expect(guacamole).toBeInTheDocument();
    expect(jalapenos).toBeInTheDocument();
    expect(cilantro).toBeInTheDocument();
    expect(sourCream).toBeInTheDocument();
});

  it("should set the input value of entered data", () => {
    render(<OrderForm />);
    const nameInput = screen.getByPlaceholderText("Name");

    userEvent.type(screen.getByPlaceholderText("Name"), "Spider-Man");

    expect(nameInput).toHaveValue("Spider-Man");
    //not sure why but the expected value and the received value 
    //are coming back the same, but this test is failing.
  });
});
