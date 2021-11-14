import React from "react";
import { IUser } from "../../Types/Models/User/User";
import { SearchInput } from "./SearchBar.styled";

interface IProps {
    users: IUser[];
    setFilteredUsers: (users: IUser[]) => void;
}

export default function SearchBar({ users, setFilteredUsers }: IProps) {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const searchValue = event.target.value.toLowerCase();
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchValue)
        );
        setFilteredUsers(filteredUsers);
    }

    return (
        <SearchInput
            onChange={handleChange}
            placeholder="Search by user name 🔎"
        />
    );
}
