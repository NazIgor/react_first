import './employees-list.css';
import EmployListItem from "../employees-list-item/employees-list-item";

const EmployeesList=({data, onDelete, onIncrease, onChangeSalary})=>{
    const elements=data.map(item=>{
        return <EmployListItem 
                key={item.id} 
                data={item} 
                onDelete={()=>onDelete(item.id)}
                onIncrease={(e)=>onIncrease(item.id, e.currentTarget.getAttribute('data-target'))}
                onChange={(e)=>onChangeSalary(item.id,e.target.value)}/>
    })
    return(
        <div className="employees-list cont-shad">
            {elements}   
        </div>
    )
};

export default EmployeesList;