import './search-panel.css';

const SearchPanel=({updateSearch})=>{
    return(
        <input 
        type="text" 
        placeholder="Найти сотрудника"
        onChange={(e)=>updateSearch(e.target.value)}/>
    )
}

export default SearchPanel;