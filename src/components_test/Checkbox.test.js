import React from 'react';
import { shallow } from 'enzyme';
import CheckBoxComponenet from '../components/admin/CreateTest/check-box.component';

const questionObj = {
    "id": 6,
    "op1": "Round",
    "op2": "Syllabus",
    "op3": "Rough",
    "op4": "Fragile",
    "ans_option": 3,
    "isselected": 0,
    "question": "Synonym of Coarse:"
};

function setUpComponenet(){
    return shallow(
        <CheckBoxComponenet 
           onChange = { () => {}}
           question={ questionObj }
           isChecked = { questionObj.isselected } />
      );
}

describe('CreateQuestionPaper', () => {
 it('should be defined', () => {
   expect(CheckBoxComponenet).toBeDefined();
 });
 it('should render correctly', () => {
   const tree = setUpComponenet();
   expect(tree).toMatchSnapshot();
 });
});