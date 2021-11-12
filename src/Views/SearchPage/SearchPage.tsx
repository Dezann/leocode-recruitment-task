import React, { useEffect, useState } from 'react'
import { User } from '../../Types/Models/User/User';
import SpinnerComponent from '../../Components/Spinner/SpinnerComponent';
import { Container, Name, Title, Username, UsersList, UserWrapper } from './SearchPage.styled'
import SearchBar from '../../Components/SearchBar/SearchBar';

export default function SearchPage() {
    const [loading, setLoading] = useState<Boolean>(true);
    const [users, setUsers] = useState<User[]>([])
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            setFilteredUsers(data)
            setLoading(false)
        });
    }, [])

    return (
        loading ? 
        <Container>
            <Title>Loading ... </Title>
            <SpinnerComponent />
        </Container>
        :
        <Container>
            <Title>Users List</Title>
            <SearchBar users={users} setFilteredUsers={setFilteredUsers} />
            <UsersList>
                {filteredUsers.map((user) => (
                    <UserWrapper key={user.id}>
                        <Name>{user.name} </Name>
                        <Username>@{user.username}</Username>
                    </UserWrapper>
                ))}
            </UsersList>
        </Container>
    )
}
