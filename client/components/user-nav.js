import React, {Component} from 'react'
import {Link} from 'react-router-dom'

//Check the ROUTES !

export class UserNav extends Component {
  render() {
    return (
      <div>
        <div>
          <span>Account Settings</span>
          <div>
            <ul>
              <li>
                <Link to="/cart">View Cart</Link>
              </li>
              <li>
                <Link to="/orders">Order History</Link>
              </li>
            </ul>
          </div>
          {this.props.isAdmin ? (
            <div>
              <span>Admin</span>
              <ul>
                <li>
                  <Link to="/users">View All Users</Link>
                </li>
                <li>
                  <Link to="/addplant">Add Plant</Link>
                </li>
                <li>
                  <Link to="/plants">Edit Plant</Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div>
          <Link to="/plants">Start Shopping</Link>
        </div>
      </div>
    )
  }
}
