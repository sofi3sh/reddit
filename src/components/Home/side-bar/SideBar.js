import React from 'react'
import './sidebar.css'


export const SideBar = () => {
  return (
    <div>
       <div className="container_side_bar_home">
          <div className="header_side_bar_home">
            <h2>
            RECENT POSTS
            </h2>
            <a href="#">
            Clear
            </a>
          </div>
          <div className="post">
            <img alt="Subreddit icon" height="50" src="https://storage.googleapis.com/a1aa/image/cbtFfeJaVMvtQkQD3X1tm15HRvTPiYE38orLpmDk8g8Ru9yTA.jpg" width="50"/>
            <div className="post-content">
            <h3>
              r/europe
            </h3>
            <p>
              Preliminary investigation into sabotage after a cable brea...
            </p>
            <div className="meta">
              <span>
              1.8K upvotes
              </span>
              <span>
              137 comments
              </span>
            </div>
            </div>
            <div className="post-image">
            <img alt="Map showing cable break locations" height="70" src="https://storage.googleapis.com/a1aa/image/1WpxjGxEVooqHlUKblg3NtlZNibsNlxSCKTa7LQzqMzkbv8E.jpg" width="70"/>
            <div className="icon">
              svt
            </div>
            </div>
          </div>
          <div className="post">
            <img alt="Subreddit icon" height="50" src="https://storage.googleapis.com/a1aa/image/cbtFfeJaVMvtQkQD3X1tm15HRvTPiYE38orLpmDk8g8Ru9yTA.jpg" width="50"/>
            <div className="post-content">
            <h3>
              r/europe
            </h3>
            <p>
              Russia sabotages six European satellites, Dutch T...
            </p>
            <div className="meta">
              <span>
              11K upvotes
              </span>
              <span>
              1.3K comments
              </span>
            </div>
            </div>
            <div className="post-image">
            <img alt="Person watching news on TV" height="70" src="https://storage.googleapis.com/a1aa/image/5XlADQHe3fiFjk7x0yjrYBb6HY7PoAFxmew3gqaSfeFUytXeE.jpg" width="70"/>
            <div className="icon">
              nos
            </div>
            </div>
          </div>
          </div>
    </div>
  )
}



