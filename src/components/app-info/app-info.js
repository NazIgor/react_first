import './app-info.css';

const AppInfo=({total, toIncrease})=>{
    
    return (
        <div className="app-info  cont-shad">
            <h1>Учет Сотрудников в компании N</h1>    
            <h2>Общее кол-во сотрудников: {total}</h2>
            <h2>Премию получат: {toIncrease}</h2>
        </div>
    );
}

export default AppInfo;