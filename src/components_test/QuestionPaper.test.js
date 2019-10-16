import React, { Component } from 'react';
import QuestionPaper from "../components/client/QuestionPaper.component"
import { shallow } from 'enzyme'
import data from "../datasource/mockData"
describe('UI Test for Question Paper Button', () => {
    let questions = {"data":data}
    let snapshot = shallow(
        <QuestionPaper questions={questions} seconds={5}/>
      )
    it('Question Paper to be defined', () => {
        expect(QuestionPaper).toBeDefined();
    });

    it('Question Paper  should render correctly', () => {
        expect(snapshot).toMatchSnapshot();
      });
})