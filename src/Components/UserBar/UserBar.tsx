import React, { useEffect, useState } from 'react'
import { Name, Username, UserWrapper } from './UserBar.styled'
import Modal from 'react-modal';
import UserPage from '../../Views/UserPage/UserPage';
import { User } from '../../Types/Models/User/User';

interface IProps{
    user: User;
}

export default function UserBar({user}: IProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const openModal = () =>{
        setIsModalOpen(true)
    }

    const modalStyle = {  content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        height: '400px',
        transform: 'translate(-50%, -50%)',
      }
    }


    return (
        <>
        <UserWrapper key={user.id} onClick={openModal}>
            <Name>{user.name} </Name>
            <Username>@{user.username}</Username>
        </UserWrapper>

        <Modal
        isOpen={isModalOpen}
        onRequestClose={()=>{setIsModalOpen(false)}}
        style={modalStyle}
        >
        <UserPage user={user} />
        </Modal>
        </>
    )
}
