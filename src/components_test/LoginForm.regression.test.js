import React, { Component } from 'react';
import LoginForm from "../components/LoginForm.component"
import { mount, shallow } from 'enzyme'
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

describe("Login Form Component", () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            username: "", loggedIn: false
        };
        let mockData = {
            user: {
                username: "", loggedIn: false
            }
        };
        const mockStore = configureStore()(mockData);
        // let store = mockStore();
        wrapper = mount(
            <Router>
                <Provider store={mockStore}>
                    <LoginForm />
                </Provider>
            </Router>
        );
    });

    it("LoginForm - title ", () => {
        expect(
            wrapper.containsMatchingElement(
                <h4>Sign in</h4>
            )
        ).toBeTruthy();
    });

    it("LoginForm - email input ", () => {
        expect(
            wrapper.containsMatchingElement(
                <div className="row input-field col s12">
                    <input type="text" className="row card" ref="username" id="username" style={{ backgroundColor: "#eeeeee" }} required />
                    <label htmlFor="username">Enter email</label>
                </div>)
        ).toBeTruthy();
    });

    it("LoginForm - password input ", () => {
        expect(
            wrapper.containsMatchingElement(
                <div className="row input-field col s12">
                    <input type="password" className="row card" ref="password" id="password" style={{ backgroundColor: "#eeeeee" }} required />
                    <label htmlFor="password">Enter password</label>
                </div>)
        ).toBeTruthy();
    });
    it("LoginForm - login button ", () => {
        expect(
            wrapper.containsMatchingElement(
                <div style={{ marginBottom: "5%" }}>
                    <input className="col s12 m-2 center-align btn waves-effect waves-light blue darken-1 buttonStyle" type="submit" value="Login" />
                </div>)
        ).toBeTruthy();
    });

    it("LoginForm - page title", () => {
        expect(
            wrapper.containsMatchingElement(
                <div className="center-align card-title">Genesis Test Platform</div>
                )
        ).toBeTruthy();
    });

    it("LoginForm - info tab", () => {
        expect(
            wrapper.containsMatchingElement(
                <li className="collection-item">Genesis's Hiring Platform</li>
                )
        ).toBeTruthy();
    });
});