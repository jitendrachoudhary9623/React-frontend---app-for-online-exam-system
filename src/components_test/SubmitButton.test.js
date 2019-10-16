import React, { Component } from 'react';
import SubmitButton from "../components/client/SubmitButton.component"
import { shallow } from 'enzyme'


describe('UI Test for Submit Button', () => {

  let snapshot = shallow(
    <SubmitButton />
  );
  it('Submit Button to be defined', () => {
    expect(SubmitButton).toBeDefined();
  });

  it('Submit Button  should render correctly', () => {
    expect(snapshot).toMatchSnapshot();
  });
})