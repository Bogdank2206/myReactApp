import React from 'react'
import s from './Users.module.css'
import axios from "axios";


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/users')
    }

    unfollow = (userID) => {
        this.props.unfollow(userID);
    }
    follow = (userID) => {
        this.props.follow(userID);
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => (
                    <div key={u.id} className={s.block}>
                        <div className={s.user}>
                            <img src={u.photo} className={s.photo} alt='bad'/>
                            <div className={s.info}>
                                <div className={s.name}>{u.fullName}</div>
                                <div className={s.message}>{u.message}</div>
                                <div className={s.location}>
                                    <div>{u.location.city}</div>
                                    <div>{u.location.country}</div>
                                </div>
                            </div>
                        </div>
                        {
                            u.isFollowed
                                ? <button className={s.button} onClick={() => {
                                    this.unfollow(u.id)
                                }}>unfollow</button>
                                : <button className={s.button} onClick={() => {
                                    this.follow(u.id)
                                }}>follow</button>
                        }
                    </div>
                ))}
            </div>
        )
    }
}

export default Users;