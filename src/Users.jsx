import { use } from "react"

export default function Users({loadData}){

    const users = use(loadData);
    console.log(users);
    return(
        <div className="card">
            <h3>Users: {users.length}</h3>
        </div>
    )
}