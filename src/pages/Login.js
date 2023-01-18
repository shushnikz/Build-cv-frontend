import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Spin } from 'antd';
import "../resources/authentication.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const onFinish = async (values) => {
        setLoading(true)
        try {
            const user = await axios.post("/api/user/login", values)
            message.success("Login successfully")
            localStorage.setItem("Resumebuild-user", JSON.stringify(user.data))
            setLoading(false)
            navigate("/")
        } catch (error) {
            setLoading(false)
            message.error("Login failed")
        }
    }

    useEffect(() => {
        if (localStorage.getItem("Resumebuild-user")) {
            navigate("/")
        }
    })

    return (
        <div className='auth-parent'>
            {loading && (<Spin size='large' />)}
            <h1 className='brand'>Build CV</h1>
            <Form layout='vertical' onFinish={onFinish}>
                <h1>Login Here</h1>
                <hr></hr>
                <Form.Item
                    name="username"
                    label="Username"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                >
                    <Input type='password' />
                </Form.Item>
                <div className='d-flex align-items-center justify-content-between'>
                    <Link to="/register">Click here to Register</Link>
                    <Button type='primary' htmlType='submit'>Login</Button>
                </div>
                <p>Username: John</p>
                <p>Password: 123456</p>
            </Form>
        </div>
    )
}

export default Register
