import React, { Component } from 'react';
import AdminApp from "../components/admin/AdminApp.component"
import { shallow,mount } from 'enzyme'
import { Provider } from 'react-redux';
import { store } from '../datasource/dataStore';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store';

describe('AdminApp', () => {
    it('should be defined', () => {
      expect(AdminApp).toBeDefined();
    });
    it('should render correctly', () => {
      const tree = shallow(
        <AdminApp/>
      );
      expect(tree).toMatchSnapshot();
    });

    it('Admin App should have SideBar', () => {
      const wrapper = shallow(
        <AdminApp/>
      );
      expect(wrapper.find('SideBar')).toBeDefined();
    });

    it('Admin App should have NavBar', () => {
      const wrapper = shallow(
        <AdminApp/>
      );
      expect(wrapper.find('NavBar')).toBeDefined();
    });

    it('Admin App card with p6 should have welcome admin text', () => {
      const wrapper = shallow(
        <AdminApp/>
      );
      const cardText="Welcome Admin";
      expect(wrapper.find('.p6').text()).toEqual(cardText);
    });

    it('Admin App should have container class', () => {
      const wrapper = shallow(
        <AdminApp/>
      );
      expect(wrapper.find('.container')).toBeDefined();
    });
   });