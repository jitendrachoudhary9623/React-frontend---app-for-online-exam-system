
import React, { Component } from 'react';
import Timer from "../components/client/Timer.component"
import { shallow } from 'enzyme'


describe('UI Test for timer', () => {
    let specifiedTime = 10;
    let snapshot = shallow(
        <Timer seconds={specifiedTime} />
    );
    it('Timer to be defined', () => {
        expect(Timer).toBeDefined();
    });

    it('Timer should render correctly', () => {
        expect(snapshot).toMatchSnapshot();
    });

    it('Timer should stop after specified time', () => {
        setTimeout(function () {
            expect(snapshot.state('timer')).toEqual(0);
        }.bind(this), specifiedTime * 100);
    });
    it('Timer text should be equal to seconds left', () => {
        setTimeout(function () {
            expect(snapshot.find('a').text()).toEqual("00 : 05");
        }.bind(this), (specifiedTime/2) * 100);
    });
    it('Timer text should show 00 : 00 after timer is out', () => {
        setTimeout(function () {
            expect(snapshot.find('a').text()).toEqual("00 : 00");
        }.bind(this), specifiedTime * 100);
    });
    
    it('Timer text after timeout', () => {
        setTimeout(function () {
            expect(snapshot.find('a').text()).toEqual("00 : 00");
        }.bind(this), (specifiedTime+3) * 100);
    });
   
});