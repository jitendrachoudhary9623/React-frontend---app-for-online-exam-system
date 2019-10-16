import React, { Component } from 'react';
import LoginForm from "../components/LoginForm.component"
import { shallow,mount } from 'enzyme'
import { Provider } from 'react-redux';
import { store } from '../datasource/dataStore';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'



describe('UI Test for LoginForm', () => {
    let wrapper;
    
    beforeEach(() => {
        let mockData = {user:{
            username:"",loggedIn:false
        }};
        const mockStore = configureStore()(mockData);
        wrapper = shallow(
                <LoginForm store={mockStore}/>
        );
    }); 
    it('LoginForm to be defined', () => {
        expect(LoginForm).toBeDefined();
    });

    it('LoginForm should render correctly', () => {
        
    });


    it('LoginForm having a form element', () => {
        expect(wrapper.find('#formLogin')).toBeDefined();
    });

    it('Login form should have a input text box with id username',()=>{
        expect(wrapper.find('#username')).toBeDefined();
    });

    it('Login form should have a input text box with id password',()=>{
        expect(wrapper.find('#password')).toBeDefined();
    });
})