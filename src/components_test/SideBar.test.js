import React, { Component } from 'react';
import SideBar from "../components/admin/SideBar.component"
import { mount,shallow } from 'enzyme'
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

describe("SideBar Component",()=>{

    let wrapper;
    beforeEach(() => {
        const initialState = {
            username:"",loggedIn:false
        };
        let mockData = {user:{
            username:"",loggedIn:false
        }};
        const mockStore = configureStore()(mockData);
       // let store = mockStore();
        wrapper = mount(
            <Router>
                <SideBar store={mockStore}/>
            </Router>
        );
    }); 
    it("Side Bar is defined",()=>{
        expect(SideBar).toBeDefined();
    });

    it("Side Bar should render correctly",()=>{

    })
    it("Side Bar should have specified number of sidebar items",()=>{
        expect(wrapper.find(".sidebar-item").length).toEqual(4);
    });
    it("Side Bar - side bar item with questionBankTitle should be 1",()=>{
        expect(wrapper.find('#questionBankTitleId').length).toBe(1);
    });
    it("Side Bar - side bar item with title Question Bank ",()=>{
        expect(
            wrapper.containsMatchingElement(
                <a href="#" id="questionBankTitleId" className="center-align">Question Bank</a>
                )
          ).toBeTruthy();  
    });
    it("Side Bar - side bar item with title View Question ",()=>{
        expect(
            wrapper.containsMatchingElement(
                <Link to="/ViewQuestions" className="center-align">View Question</Link>
                )
          ).toBeTruthy();  
    });
    it("Side Bar - side bar item with title Add Question ",()=>{
        expect(
            wrapper.containsMatchingElement(
                <Link to="/AddQuestion" className="center-align">Add Question</Link>
                )
          ).toBeTruthy();  
    });
    it("Side Bar - side bar item with title Create Question ",()=>{
        expect(
            wrapper.containsMatchingElement(
                <Link to="/CreateQuestion" className="center-align">Create Test</Link>
                )
          ).toBeTruthy();  
    });
    it("Side Bar - side bar item with title Log out ",()=>{
        expect(
            wrapper.containsMatchingElement(
                <Link to="/"  className="center-align">Log out</Link>
                )
          ).toBeTruthy();  
    });
});