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
            await axios.post("https://build-cv-backend.onrender.com/api/user/register", values)
            setLoading(false)
            message.success("registration successfull")
        } catch (error) {
            setLoading(false)
            message.error("registration failed")
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
                <h1>Register Here</h1>
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
                <Form.Item
                    name="confirm password"
                    label="Confirm Password"
                >
                    <Input type='password' />
                </Form.Item>
                <div className='d-flex align-items-center justify-content-between'>
                    <Link to="/login">Click here to Login</Link>
                    <Button type='primary' htmlType='submit'>Register</Button>
                </div>
            </Form>
        </div>
    )
}

export default Register