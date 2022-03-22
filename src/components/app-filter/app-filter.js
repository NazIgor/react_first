import './app-filter.css';

const AppFilter=({updateTrigger, btns, trigger})=>{
    const active='active';
    const buttons=btns.map(item=>{
        return (
            <button
                key={item.id}
                className={`btn ${trigger===item.name?active:''}`}
                type="button"
                data-trigger={item.name}
                onClick={(e)=>{updateTrigger(e.currentTarget.getAttribute('data-trigger'))}}>
                    {item.label}
            </button>    
        );
    });

    return (
        <div className="search_btns">
            {buttons}
        </div>
    )
}

export default AppFilter;