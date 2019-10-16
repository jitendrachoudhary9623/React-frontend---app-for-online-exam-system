import React, { Component } from 'react';
import CheckBoxComponenet from "./check-box.component";

class QuestionsTable extends Component {

    state = { 
        questionSet:this.props.dataList
    }
    render() { 
        return ( 
            <div className="card">
                        <div className="card-content">
                            <div>
                                <table className="centered striped">
                                    <thead style={{fontSize:"120%"}}>
                                        <tr>
                                            <th>Id</th>
                                            <th>Type</th>
                                            <th>Question</th>
                                            {/* <th>Info</th> */}
                                            <th>Select</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { 
                                            this.state.questionSet.map((question,index)=>
                                                (<tr key={question.id}>
                                                    <td>
                                                        {question.id}
                                                    </td>
                                                    <td>
                                                        {question.type = "Objective"}
                                                    </td>
                                                    <td style={{textAlign:"left"}}>
                                                        {question.question}
                                                    </td>
                                                    {/* <td>
                                                        <i className="material-icons">info</i>
                                                    </td>    */}
                                                    <td>
                                                        <CheckBoxComponenet 
                                                            Question={question} 
                                                            onChange={this.handleChange} 
                                                            isChecked={ question.isselected }/>
                                                    </td>
                                                </tr>)
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
         );
    }

    handleChange = (isChecked,ques)=>{
        console.log("Changed checkbox",isChecked,ques);
        if(isChecked){
            this.props.onAddQ(ques);
        }else{
            this.props.onRemoveQ(ques);
        }
    }
}
 
export default QuestionsTable;