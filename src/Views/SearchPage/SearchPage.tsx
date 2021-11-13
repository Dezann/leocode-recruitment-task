import React, { useEffect, useState } from 'react'
import { User } from '../../Types/Models/User/User';
import SpinnerComponent from '../../Components/Spinner/SpinnerComponent';
import { Container, Title, UsersList } from './SearchPage.styled'
import SearchBar from '../../Components/SearchBar/SearchBar';
import UserBar from '../../Components/UserBar/UserBar';
import Modal from 'react-modal';
export default function SearchPage() {
    const [loading, setLoading] = useState<Boolean>(true);
    const [users, setUsers] = useState<User[]>([])
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            setLoading(false)
        });
    }, [])

    useEffect(() => {
        setFilteredUsers(users)
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
            <SearchBar users={users} setFilteredUsers={setFilteredUsers} />
            {filteredUsers.length ?
            <UsersList>
                {
                filteredUsers.map((user) => (
                     <UserBar user={user}/>
                ))
                }
            </UsersList>
            :
            <Title>User not found 😔</Title>
            }

        </Container>
    )
}

