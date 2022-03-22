import { Component } from 'react';

import './employees-list-item.css';

class EmployListItem extends Component{   
   constructor(props){
       super(props);
       this.state={
           increase: this.props.data.increase,

       }
   }
    render(){
        const {salary, name,increase, favorite}=this.props.data,
              {onDelete, onIncrease, onChange}=this.props;
        let classIncrease='employees_list_item',
            classFavorite='fa-solid fa-star color_none';
        if (increase){
            classIncrease+=' increase';
        }
        if (favorite){
            classFavorite='fa-solid fa-star gold';
        }
        return(
            <div className='employees_list'>
                <li className={classIncrease}>
                   <div className="__epmloyees">
                       <div className="name"                       
                        onClick={onIncrease}
                        data-target='favorite'>
                           <span>{name}</span>
                       </div>
                       <input 
                            className={increase===false?'':'increase'} 
                            type="text" 
                            defaultValue={salary+' $'}
                            onChange={onChange}/>
                       <div className="employees-icons">
                           <div className="icons-wrapper"
                                onClick={onIncrease} 
                                data-target='increase'>
                               <i className="fa-solid fa-cookie"></i> 
                           </div>
                           <div className="icons-wrapper"
                           onClick={onDelete}>
                               <i className="fa-solid fa-trash-can red"></i>
                           </div>
                           <div className="icons-wrapper"
                                onClick={onIncrease}
                                data-target='favorite'>
                               <i className={classFavorite}>
                               </i>
                           </div>
                       </div> 
                   </div>
               </li>
            </div>
        )
    }
}

export default EmployListItem;