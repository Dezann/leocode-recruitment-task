import React, { useState } from "react";
import { CloseButton, Name, Username, UserWrapper } from "./UserBar.styled";
import Modal from "react-modal";
import UserPage from "../../Views/UserPage/UserPage";
import { IUser } from "../../Types/Models/User/User";

interface IProps {
    user: IUser;
}

export default function UserBar({ user }: IProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const modalStyle = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            height: "400px",
            transform: "translate(-50%, -50%)",
        },
    };

    return (
        <>
            <UserWrapper key={user.id} onClick={openModal}>
                <Name>{user.name} </Name>
                <Username>@{user.username}</Username>
            </UserWrapper>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => {
                    closeModal();
                }}
                style={modalStyle}
            >
                <CloseButton onClick={closeModal}>X</CloseButton>
                <UserPage user={user} />
            </Modal>
        </>
    );
}
