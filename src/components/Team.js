import React from 'react'
import TeamMember from './TeamMember'

function Team (){
    
    const info=[
        {id:1, img:'./images/01.jpg',    name:'Walter White',    position:'Bryan Cranston',   phone:'+49 12345678',   email:'walter@gmail.com',   website:'walterwhite.com'},
        {id:2, img:'./images/02.jpg',    name:'Jesse Pinkman',   position:'Bryan Cranston',   phone:'+49 12345678',   email:'walter@gmail.com',   website:'walterwhite.com'},
        {id:3, img:'./images/03.jpg',     name:'Skyler white',    position:'Bryan Cranston',  phone:'+49 12345678',   email:'walter@gmail.com',   website:'walterwhite.com'},
        {id:4, img:'./images/04.jpg',     name:'Gus Fring',       position:'Bryan Cranston',  phone:'+49 12345678',    email:'walter@gmail.com'},
        {id:5, img:'./images/05.jpg',     name:'Saul Godman',     position:'Bryan Cranston',  phone:'+49 12345678',   email:'walter@gmail.com'},
        {id:6, img:'./images/06.jpg',     name:'Hank Schrader ',  position:'Bryan Cranston',  phone:'+49 12345678',   email:'walter@gmail.com'}
    ]

    const members= info.map(member =>
        <TeamMember
            key={member.id} 
            img={member.img}
            name={member.name}
            position={member.position}
            phone={member.phone}
            email={member.email}
            website={member.website}
        />
    );


    return(
        <div className='row'>
            {members}
        </div>
    )
}

export default Team