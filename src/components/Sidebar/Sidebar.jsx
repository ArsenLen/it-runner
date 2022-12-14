import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
    position: fixed;
    width: 250px;
    height: calc(100vh - 100px);
    box-shadow: 0 0 15px -15px #4b4b4c;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 10px;
    margin: 16px 0 0 16px;
    border-radius: 14px;
    background: white;
`

const SidebarLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 20px;
    margin-bottom: 15px;
`

const Sidebar = () => {
    return (
        <div style={{'width' : '250px'}}>
        <SidebarWrapper>
            
                <SidebarLink to="/add-lesson">Создать урок</SidebarLink>
                <SidebarLink to="/upload">Добавить ДЗ</SidebarLink>
                <SidebarLink to="/add-video">Добавить видео</SidebarLink>
            
        </SidebarWrapper>
        </div>
    );
};

export default Sidebar;