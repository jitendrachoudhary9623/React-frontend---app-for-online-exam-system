import React, { Component } from 'react';
import LoaderComponent from "../components/Loader.component"
import { shallow,mount } from 'enzyme'

describe("UI test for Error",()=>{
    it('should be defined', () => {
        expect(LoaderComponent).toBeDefined();
      });
      it('should render correctly', () => {
        const tree = shallow(
          <LoaderComponent/>
        );
        expect(tree).toMatchSnapshot();
      });

      it("Loader Component without prop show default message",()=>{
        const tree = shallow(
            <LoaderComponent/>
          );
        expect(tree.find('h5').text()).toEqual("Loading data, please wait");
      });

      it("Loader Component with prop show message specified in the prop",()=>{
        let errorMessage="This is mock error Message";

        const tree = shallow(
            <LoaderComponent errorMessage={errorMessage}/>
          );
        expect(tree.find('h5').text()).toEqual(errorMessage);
      });

      it("Loader Component with Spinner Component",()=>{
        let errorMessage="This is mock error Message";
        const tree = shallow(
            <LoaderComponent errorMessage={errorMessage}/>
          );
        expect(tree.find('img')).toBeDefined();
      });
});