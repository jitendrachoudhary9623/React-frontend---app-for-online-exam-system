import React, { Component } from 'react';
import Button from "../components/admin/button.component"
import { mount, shallow } from 'enzyme'
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

describe("Button component test cases",()=>{

    let wrapper;
    let handleClick =jest.fn(() =>{});

    beforeEach(()=>{

        wrapper=mount(
            <Button onClick={handleClick}/>
        );
    });
    
    describe("Button test",()=>{
        it("Button regression test",()=>{
            expect(
                wrapper.containsMatchingElement(
                    <input type="button" className="btn" value="Delete" />
                    )
            ).toBeTruthy();
        });
    });
});