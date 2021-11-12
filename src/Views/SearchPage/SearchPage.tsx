import React, { useEffect, useState } from 'react'
import { User } from '../../Types/Models/User/User';
import SpinnerComponent from '../../Components/Spinner/SpinnerComponent';
import { Container, Name, Title, Username, UsersList, UserWrapper } from './SearchPage.styled'

export default function SearchPage() {
    const [loading, setLoading] = useState<Boolean>(true);
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            setLoading(false)
        });
    }, [users])


    return (
        loading ? 
        <Container>
            <Title>Loading ... </Title>
            <SpinnerComponent />
        </Container>
        :
        <Container>
                        <Title>Users List</Title>
            <UsersList>
                {users.map((user) => (
                    <UserWrapper>
                        <Name>{user.name} </Name>
                        <Username>@{user.username}</Username>
                    </UserWrapper>
                ))}
            </UsersList>
        </Container>
    )
}
