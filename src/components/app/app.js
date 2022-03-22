import { Component } from "react";

import AppInfo from "../app-info/app-info";
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {name:'Name 1 C.', salary:1000, increase:false, favorite:false, id:1},
                {name:'Alex S.', salary:2000, increase:true, favorite:false, id:2},
                {name:'One Again', salary:3000, increase:false, favorite:false, id:3}
            ],
            btns:[
                {name:'all', label:'Все сотрудники', id:'b1'},
                {name:'increase', label:'На повышение', id:'b2'},
                {name:'maxSum', label:'З/п больше 1000', id:'b3'}
            ],
            term:'',
            trigger:'all',
            maxId:4
        }
    }
    deleteItem=(id)=>{
        this.setState({
            data:this.state.data.filter(item=>(item.id!==id))
        })
    }
    addItem=(newItem)=>{
       if (newItem.name==='' || newItem.salary===''){
           alert ('Введите ФИО и зарплату');
           return
       }
       newItem.id=this.state.maxId;
       const newArr=[...this.state.data,newItem];
        this.setState(()=>{
            return {
                data:newArr,
                maxId:this.state.maxId+1
            }
        })
    }
    onIncrease=(id, prop)=>{
        this.setState((data)=>({
            data: this.state.data.map(item=>{
                if (item.id===id){
                    return {...item, [prop]:!item[prop]};
                }
                return item;
            })
        }))
    }
    onChangeSalary=(id,value)=>{
        this.setState((data)=>({
            data: this.state.data.map(item=>{
                if (item.id===id){
                    return {...item, salary:value.replace(/[^0-9]/g,"")};
                }
                return item;
            })
        }))
    }
    filteredData=(items)=>{
        const currTrigger= this.state.trigger;
        switch (currTrigger){
            case 'increase':
                return items.filter(item=> item.increase===true);
            case 'maxSum':
                return items.filter(item=> item.salary>1000);
            default:
                return items;
        }
    }
    showFilter=(items,term)=>{
        const newData= this.filteredData(items);
        if (term.length===0){
            return newData;
        }        
        return newData.filter(item=>item.name.toUpperCase().includes(term.toUpperCase()));
    }
    updateSearch=(term)=>{
        this.setState({term})
    } 
    updateTrigger=(trigger)=>{
        this.setState({trigger})
    }
    render(){
        const {data, term, btns}=this.state;
        const visibleData=this.showFilter(data,term);
        return(
            <div className="app">
                <AppInfo
                    total={data.length}
                    toIncrease={data.filter((item)=>item.increase).length}/>
                <div className="search-panel">
                    <SearchPanel
                        updateSearch={this.updateSearch}/>
                    <AppFilter
                        btns={btns}
                        updateTrigger={this.updateTrigger}
                        trigger={this.state.trigger}/> 
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onIncrease={this.onIncrease} 
                    onChangeSalary={this.onChangeSalary}          
                />
                <EmployeeAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;