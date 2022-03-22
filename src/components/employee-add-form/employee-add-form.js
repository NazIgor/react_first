import { Component } from 'react';

import './employee-add-form.css';

class EmployeeAddForm extends Component{
    constructor (props){
        super(props);
        this.state={
            name:'',
            salary:''
        }
        this.onAdd=props.onAdd;
    }
    onChangeValue=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmitForm=(e)=>{
        e.preventDefault();
        console.log(e);
    }
    addItem=(e)=>{
        e.preventDefault();
        const data=e.target.form;
        const newItem={name:data[0].value, salary:data[1].value, favorite:false, increase:false};
        this.onAdd(newItem);
        this.setState({
            name:'',
            salary:''
        })
    }
    render(){
        const {name, salary}=this.state;
        //const {onAdd}=this.props;
        return (
            <div className="add-form  cont-shad">
                <h2>Добавьте нового сотрудника</h2>
                <form action="#" className="add-form_form">
                    <input required className="add-input" 
                        type="text"
                        placeholder={"Новый сотрудник"}
                        value={name}
                        name='name' 
                        onChange={this.onChangeValue}/>
                    <input required className="add-input" 
                        type="number" 
                        placeholder={"1000$"}
                        value={salary}
                        name='salary' 
                        onChange={this.onChangeValue}/>
                    <button className='btn add-form_btn' 
                        type="submit"
                        onClick={this.addItem}
                        >Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeeAddForm;