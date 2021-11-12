import React, { useEffect, useState } from 'react'
import { User } from '../../Types/Models/User/User';
import { SearchInput } from './SearchBar.styled'

interface IProps{
    users: User[];
    setFilteredUsers: any;
}

export default function SearchBar({users, setFilteredUsers}: IProps) {
    function handleChange(event: any) {
        const searchValue = event.target.value.toLowerCase()
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchValue));
        setFilteredUsers(filteredUsers)
    }

    return (
        <SearchInput onChange={handleChange} placeholder='Search by user name 🔎'/>
    )
}
