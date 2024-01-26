import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";

import Chat from "./index";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockUsedNavigate,
}));

describe("Testing Chat Page", () => {
    beforeEach(() => {
        const initialState = {
            chat: {
                chat: [
                    {name: "Bee", message: "Testing"},
                    {name: "Boo", message: "Testing 2"},
                ],
            },
        };
        const mockStore = configureStore();
        const store = mockStore(initialState);
        render(
            <Provider store={store}>
                <MemoryRouter
                    initialEntries={[{state: {name: "bee"}, pathname: "/chat"}]}
                >
                    <Chat/>
                </MemoryRouter>
            </Provider>
        );
    });

    it("Showing button Send", async () => {
        expect(screen.getByText("Send")).toBeTruthy();
    });

    it("Showing input message", async () => {
        expect(screen.getByText("Enter your message...")).toBeTruthy();
    });

    it("Inputting name should be reflected to the state", async () => {
        const input = screen.getByLabelText("input");
        fireEvent.change(input, {target: {value: "Bee"}});
        expect(input.value).toBe("Bee");
    });

    it("Showing chat list", async () => {
        expect(screen.getByText("Testing")).toBeTruthy();
        expect(screen.getByText("Testing 2")).toBeTruthy();
    });
});
