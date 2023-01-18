import { Button, Dropdown, Space } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import "../resources/defaultlayout.css"

function DefaultLayout(props) {

    const user = JSON.parse(localStorage.getItem("Resumebuild-user"))
    const navigate = useNavigate()

    const items = [
        {
            key: '1',
            label: (
                <Link to="/">
                    Home
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/profile">
                    Profile
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <span onClick={() => {
                    localStorage.removeItem("Resumebuild-user")
                    navigate("/login")
                }}>Logout</span>
            ),
        },
    ];

    return (
        <div className='layout'>
            <div className='header'>
                <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Build Your Resume</h1>
                <Space direction="vertical">
                    <Space wrap>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomLeft"
                        >
                            <Button icon={<UserOutlined />}>{user.username}</Button>
                        </Dropdown>
                    </Space>
                </Space>

            </div>
            <div className='content' style={{ overflow: "scroll" }}>
                {props.children}
            </div>
        </div>
    )
}

export default DefaultLayout
