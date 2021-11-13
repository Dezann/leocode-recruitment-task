import React  from 'react'
import { User } from '../../Types/Models/User/User'
import { Title } from '../SearchPage/SearchPage.styled'
import { Link, Subtitle, UserDataWrapper } from './UserPage.styled'

interface IProps{
    user?: User;
}

export default function UserPage({user}: IProps) {
    return (
        user ?
        <UserDataWrapper>
            <Title>{user.name}</Title>
            <Subtitle>Username: @{user.username}</Subtitle>
            <Subtitle>Email: {user.email}</Subtitle>
            <Subtitle>Phone: {user.phone}</Subtitle>
            <Subtitle>Website: <Link href={"https://" + user.website}>{user.website}</Link></Subtitle>
        </UserDataWrapper>
        :
        <p>User not found</p>
    )
}
