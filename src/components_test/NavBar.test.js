import React, { Component } from 'react';
import NavBar from "../components/NavBar.component"
import { shallow,mount } from 'enzyme'
import { Provider } from 'react-redux';
import { store } from '../datasource/dataStore';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'



describe('UI Test for Nav Bar', () => {
    let wrapper;
    var title = "CDK Test";

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
                <NavBar title={title} store={mockStore}/>
        );
    }); 
    it('Nav Bar to be defined', () => {
        expect(NavBar).toBeDefined();
    });

    it('Nav Bar should render correctly', () => {
    });


    it('Nav Bar having proper Title as specified in the props', () => {
        //console.log(wrapper.render().html());
       // console.log(wrapper.find('#navBarTitle').render());

        expect(wrapper.find('#navBarTitle').length).toBe(1);
    });
   
})