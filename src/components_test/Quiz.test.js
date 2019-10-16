import React, { Component } from 'react';
import Quiz from "../components/client/Quiz.component"
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from "../components/NavBar.component";

describe("View/Delete Component", () => {

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
                <Quiz store={mockStore} />
            </Router>
        );
        wrapper.setState({ score: "", dataFetched: true });

    });
    it("View / Delete Component is defined", () => {
        expect(Quiz).toBeDefined();
    });

    it("should render correctly", () => {
        const tree = shallow(
            <Quiz />
        );
        expect(tree).toMatchSnapshot();
    });

    afterEach(() => {
        wrapper.unmount();
    });
});