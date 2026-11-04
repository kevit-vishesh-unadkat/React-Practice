import { type } from '../../node_modules/@types/react-dom/client.d';

function TaskFilters({

    filter,
    setFIlter,
    search,
    setSearch
}){

    return (
        <div className="filters">
            <input 
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}/>


            <select 
                value={filter}
                onChange={(e)=>setFIlter(e.target.value)}>
                
                <option value="all">All Tasks</option>

                <option value="completed">Completed</option>

                <option value="pending" >Pending</option>

            </select>
        </div>
    );
}

export default TaskFilters;