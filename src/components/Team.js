import React from 'react'
import TeamMember from './TeamMember'

function Team (){
    return(
        <div className='row'>
            <TeamMember 
            info={
                {
                    img:'./images/01.jpg',
                    name:'Walter White',
                    position:'Bryan Cranston',
                    phone:'+49 12345678',
                    email:'walter@gmail.com',
                    website:'walterwhite.com'
                }
            }
            />
            <TeamMember 
            info={
                {
                    img:'./images/02.jpg',
                    name:'Jesse Pinkman',
                    position:'Bryan Cranston',
                    phone:'+49 12345678',
                    email:'walter@gmail.com',
                    website:'walterwhite.com'
                }
            }
            />
            <TeamMember 
            info={
                {
                    img:'./images/03.jpg',
                    name:'Skyler white',
                    position:'Bryan Cranston',
                    phone:'+49 12345678',
                    email:'walter@gmail.com',
                    website:'walterwhite.com'
                }
            }
            />
            <TeamMember 
            info={
                {
                    img:'./images/04.jpg',
                    name:'Gus Fring',
                    position:'Bryan Cranston',
                    phone:'+49 12345678',
                    email:'walter@gmail.com',
                    website:'walterwhite.com'
                }
            }
            />
            <TeamMember 
            info={
                {
                    img:'./images/05.jpg',
                    name:'Saul Godman',
                    position:'Bryan Cranston',
                    phone:'+49 12345678',
                    email:'walter@gmail.com',
                    website:'walterwhite.com'
                }
            }
            />
            <TeamMember 
            info={
                {
                    img:'./images/06.jpg',
                    name:'Hank Schrader ',
                    position:'Bryan Cranston',
                    phone:'+49 12345678',
                    email:'walter@gmail.com',
                    website:'walterwhite.com'
                }
            }
            />
        </div>
    )
}

export default Team