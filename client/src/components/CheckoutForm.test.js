import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm/>);

    const fNameInput = screen.getByLabelText(/first name/i);
    const lNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const button = screen.getByRole("button")
    

    fireEvent.change(fNameInput, { target: { value: "Chad" }});
    fireEvent.change(lNameInput, { target: { value: "Cox" }});
    fireEvent.change(addressInput, { target: { value: "1310 E 200 N" }});
    fireEvent.change(cityInput, { target: { value: "Bountiful" }});
    fireEvent.change(stateInput, { target: { value: "Utah" }});
    fireEvent.change(zipInput, { target: { value: "84010" }});
    fireEvent.click(button);

    const successMessage = screen.getByTestId('successMessage');

    expect(successMessage).toBeInTheDocument();

    const shipFName = screen.getByText(/chad/i);
    const shiptLName = screen.getByText(/cox/i);
    const shipAddress = screen.getByText(/1310 e 200 n/i);
    const shipCity = screen.getByText(/bountiful/i);
    const shipState = screen.getByText(/utah/i)
    const shipZip  = screen.getByText(/84010/i)
});
