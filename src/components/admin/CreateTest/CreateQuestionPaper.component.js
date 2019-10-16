import React, { Component } from 'react';
import NavBar from '../../NavBar.component';
import QuestionsTable from './questions-table.component';
import SideBar from '../SideBar.component';
import baseURL from '../../../utils/API'
import LoaderComponent from "../../Loader.component";

const axios = require("axios");

class CreateQuestionPaper extends Component {

    constructor(props){
        super(props);
        this.selectedQuestions = new Array();
        this.state = {
            questionSet: null,
            isLoading:false
        };
    }

    UNSAFE_componentWillMount(){
        //Modal open.
       
        this.getAllQuestions();
    }

    getAllQuestions(){
        axios.get(`${baseURL}/question`)
        .then((response) => {
            // handle success
            //console.log(response);
            this.setState({questionSet:response.data})
            for(let i=0 ; i < response.data.length ; i++){
                if(response.data[i].isselected)
                    this.selectedQuestions.push(response.data[i].id);
            }

            //console.log(this.selectedQuestions);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
        
    }

    render(){
        if(this.state.questionSet == null || this.state.isLoading){
            return (<LoaderComponent/>);
        }
        return (
            <div>
           <NavBar/>
                <div className="row">
                    <div className="col s2" style={{ height: "89vh", backgroundColor: "white" }}>
                        <SideBar />
                    </div>
                    <div className="col s10 scrollable">

            <div className={"row"}>
                <div className={"col m1"}></div>
                <div className={"col m10"} style={ { backgroundColor:'rgb(, 52, 52)' } }>
                    <h4>Select Questions:</h4>
                    <QuestionsTable 
                        dataList={this.state.questionSet}
                        onAddQ = { this.addQuestionId }
                        onRemoveQ = { this.removeQuestionId }/>
                    <div style={{float:"right"}}>
                        <a onClick={ this.onClickSaveButton }className="waves-effect waves-light btn">SAVE</a>
                    </div>
                </div>
                <div className={"col m1"}></div>
            </div>
            </div>
            </div>
            </div>
        );
    }

    addQuestionId = (ques) => {
        if(this.selectedQuestions.includes(ques.id) == false){
            this.selectedQuestions.push(ques.id);
        }
        console.log(this.selectedQuestions);
    }

    removeQuestionId = (ques) =>{
        if(this.selectedQuestions.includes(ques.id)){
            this.selectedQuestions = this.selectedQuestions.filter(id => id !== ques.id);
        }
        console.log(this.selectedQuestions);
    }

    saveSelectedQuestions = () =>{
        let reqData = {
            "data":this.selectedQuestions
        }
        axios.post(`${baseURL}/question/saveSelected`,reqData).then((response) =>{
            this.updateUI(response);
        });
    }

    updateUI=(response)=>{
        if(response.data != null){
            this.selectedQuestions = [];
            this.setState({questionSet:response.data,isLoading : false})
            console.log(this.state);
            for(let i=0 ; i < response.data.length ; i++){
                if(response.data[i].isselected)
                    this.selectedQuestions.push(response.data[i].id);
            }
            console.log(this.selectedQuestions);
        } else {
            console.log("Data not captured!");
        }
    }
    onClickSaveButton = () => {
        this.setState({isLoading : true});
        console.log(" Save button clicked...!",this.selectedQuestions);
        this.saveSelectedQuestions();
    }
}

export default CreateQuestionPaper;