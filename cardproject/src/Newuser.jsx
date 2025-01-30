const users=[{
    name:"ismail", city:"cuddalore", desc:"front-end dev", online:false, profile:"/img/man-1.jpg", skills:[
        "html","css","js","react","java"
    ]
},
    {
        name:"ismail", city:"cuddalore", desc:"front-end dev", online:false, profile:"/img/man-1.jpg", skills:[
        "html","css","js","react","java"
]},
        {
            name:"ismail", city:"cuddalore", desc:"front-end dev", online:false, profile:"/img/man-1.jpg", skills:[
        "html","css","js","react","java"]
        }


]

function User(props){
    return <div className="card-container">
        <span className={props.online?"status online":"status offline"}>{props.online?"online":"offline"}</span>
        <img src={props.profile} className="image" alt="man" height="150px" width="170px" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.desc}</p>
        <div className="buttons">
            <button className="primary">messages</button>
            <button className="primary outlined">following</button>
        </div>
        <div className="skills">
            <h6>skills</h6>
            <ul>
            {props.skills.map((skill)=>
                <li>{skill}</li>
            )}
            </ul>
        </div>

    </div>
    
}

export const Newuser = () => {
  return (
    <>
    {users.map((user)=>
    <User name={user.name} city={user.city} desc={user.desc} online={user.online} profile={user.profile} skills={user.skills} />)}
    </>
  )
}
