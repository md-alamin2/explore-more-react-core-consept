export default function Friend({friend}){
    const {name, email, phone} =friend;
    return(
        <div className="card">
            <h3>Name: {name}</h3>
            <h3>E-mail: {email}</h3>
            <h3>Phone: {phone}</h3>
        </div>
    )
}