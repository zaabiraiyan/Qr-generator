const users=[{
    name:"ismail",
    city:"cuddalore",
    desc:"front-end",
    skills:[
        "html","css","js","reactjs","nodejs","expressjs"
    ],
    online:false,
    profile:"/img/man-1.jpg"
},{
    name:"arafath",
    city:"madurai",
    desc:"front-end",
    skills:[
        "html","css","js","reactjs","nodejs","expressjs"
    ],
    online:true,
    profile:"/img/image5.jpg"
},{
    name:"zaabi",
    city:"vadakan",
    desc:"front-end",
    skills:[
        "html","css","js","reactjs","nodejs","expressjs"
    ],
    online:false,
    profile:"/img/image4.jpg"
}

]

function User({users}){

    return  <>{users.map((user,index)=><div key={index} className="card-container">
        <span className={user.online?"status online":"status offline"}  >{user.online?"online":"offline"}</span>
        <img src={user.profile} className="image" alt="man" height="170px" width="150px" />
        <h3>{user.name}</h3>
        <h3>{user.city}</h3>
        <p>{user.desc}</p>
        <div className="buttons">
            <button className="primary">messages</button>
            <button className="primary outlined">following</button>
        </div>
        <div className="skills">
            <h6>skills</h6>
            <ul>{user.skills.map((skill,index)=>
                <li key={index}>{skill}</li>
                )}</ul>
        </div>
    </div>)}
    </>
}

export const Usercard = () => {
  return (
   /*  <User name="arafath"
        city="chennai"
        desc="java developer"
        skills={[
            "html","css","js","reactjs","nodejs","expressjs"
        ]}
        online={true}
        profile="/img/man-1.jpg"

    /> */
    <User users={users}/>
  )
}

