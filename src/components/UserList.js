import React from 'react'

function UserList() {
    const users = [{
        name: 'Jane Doe',
        occupation: 'I am a web developer',
        avatar: 'https://w3schools.com/howto/img_avatar.png'
      },
      {
        name: 'John Doe',
        occupation: 'I am a web designer',
        avatar: 'https://w3schools.com/howto/img_avatar.png'
      }
      ]
    
      const usersList = users.map(user => {
        return (<div>
          <img src={user.avatar} style={{width: 200}} />
          <h2 key={user.name}>{user.name}</h2>
          <h3 key={user.occupation}>{user.occupation}</h3>
        </div>
        )
      })
    
      return (
        <section>
      {usersList}
      </section>
          )
}