import baseURL from "../API"
import axios from "axios";

const addQuestionToDb=(data)=>{
    let add_url = baseURL+"/question/insert"
    axios.post(add_url, this.state).then(
        (res) => {
            if (res.status == 200) {
                alert(`The Question is added Successfully`);
                this.props.history.push("/ViewQuestions");                    

            }
            else {
                alert("Something went wrong");
            }
            console.log(res.data);
        }
    ).catch((err) => {
        alert("Something went wrong");
        console.log(err);
    });
};

export default addQuestionToDb;