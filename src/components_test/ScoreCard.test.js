import React, { Component } from 'react';
import ScoreCard from "../components/client/ScoreCard.component"
import { shallow } from 'enzyme'

describe('UI Test for ScoreCard', () => {
    var score = "10";
    let snapshot = shallow(
        <ScoreCard score={score} />
    );
    it('Score Card to be defined', () => {
        expect(ScoreCard).toBeDefined();
    });

    it('Score Card should render correctly', () => {
        expect(snapshot).toMatchSnapshot();
    });


    it('Score card score should be displayed properly', () => {
        expect(snapshot.find('h3').text()).toEqual(score);
    });

});