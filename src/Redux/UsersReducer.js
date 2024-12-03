const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

const initialState = {
    users: [
        {
            id: 0,
            photo: 'https://forum.service-cm.ru/media/kunena/avatars/users/avatar906.jpg',
            fullName: 'Bogdan',
            message: 'I am Bogdan',
            location: {
                city: 'Voronezh',
                country: 'Russia',
            },
            isFollowed: false,
        },
        {
            id: 1,
            photo: 'https://forum.service-cm.ru/media/kunena/avatars/users/avatar906.jpg',
            fullName: 'Maxim',
            message: 'I am Maxim',
            location: {
                city: 'Voronezh',
                country: 'Russia',
            },
            isFollowed: true,
        },
        {
            id: 2,
            photo: 'https://forum.service-cm.ru/media/kunena/avatars/users/avatar906.jpg',
            fullName: 'Vlad',
            message: 'I am soldier',
            location: {
                city: 'Voronezh',
                country: 'Russia',
            },
            isFollowed: false,
        },
    ]
}


const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, isFollowed: true};
                    } else {
                        return u;
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, isFollowed: false};
                    } else {
                        return u;
                    }
                })
            }
        default:
            return state;
    }
}

export const followAC = (userID) => {
    return {
        type: FOLLOW,
        userID,
    }
}

export const unfollowAC = (userID) => {
    return {
        type: UNFOLLOW,
        userID,
    }
}

export default UsersReducer;