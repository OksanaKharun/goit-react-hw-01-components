const Friends = function ({ friends }) {
  return (
    
      <ul className="friend-list">
        {friends.map(({ id,avatar,name,isOnline}) => {
          return (
            <li key={id} className="item">
                  <span className={isOnline ? "status online" : "status offline"}>{isOnline}</span>
                  <img className="avatar" src={avatar} alt="User avatar" width="48" />
                  <p className="name">{name}</p>
           </li>
          );
        })}
      </ul>
  )
}

export default Friends