import React, { Component } from 'react';
import ViewQuestions from "../components/admin/ViewQuestions.component"
import { mount, shallow } from 'enzyme'
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from '../components/NavBar.component'
import SideBar from '../components/admin/SideBar.component'
describe("ViewQuestions regression test", () => {
    let wrapper;
    beforeEach(() => {
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
                    <ViewQuestions />
                </Provider>
            </Router>
        );
    });

    it("ViewQuestions Regression - have NavBar ", () => {
        expect(
            wrapper.containsMatchingElement(
                <NavBar />
            )
        ).toBeTruthy();
    });

    it("ViewQuestions Regression - have SideBar ", () => {
        expect(
            wrapper.containsMatchingElement(
                <SideBar />
            )
        ).toBeTruthy();
    });

    it("ViewQuestions Regression - title ", () => {
        expect(
            wrapper.containsMatchingElement(
                <div className="card p6">View Questions</div>
            )
        ).toBeTruthy();
    });

    it("ViewQuestions Regression - scrollable ", () => {
        expect(
            wrapper.containsMatchingElement(
                <div className="col s10 scrollable">
                    <div className="container">
                        <div className="card p6">View Questions</div>
                    </div>
                </div>
            )).toBeTruthy();
    });
});