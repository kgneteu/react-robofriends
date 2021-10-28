import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import StoreProvider from "./store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";




jest.mock("react-dom", () => ({render: jest.fn()}));
jest.mock("./serviceWorkerRegistration", () => ({register: jest.fn()}));



describe("Application root", () => {
    it("should render without crashing", () => {

        const div = document.createElement("div");
        div.id = "root";
        document.body.appendChild(div);
        require("./index.tsx");
        expect(ReactDOM.render).toHaveBeenCalledWith(<StoreProvider><App/></StoreProvider>, div);
        expect(serviceWorkerRegistration.register).toHaveBeenCalledTimes(1)
    });
});
