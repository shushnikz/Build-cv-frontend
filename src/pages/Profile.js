import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Button, Form, message, Spin, Tabs } from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExpeProjects from '../components/ExpeProjects';
import TabPane from 'antd/es/tabs/TabPane';
import axios from 'axios';

function Profile() {

    const [loading, setLoading] = useState(false)

    const user = JSON.parse(localStorage.getItem("Resumebuild-user"))

    const onFinish = async (values) => {
        setLoading(true)
        try {
            const result = await axios.post("https://build-cv-backend.onrender.com/api/user/update", { ...values, _id: user._id })
            localStorage.setItem("Resumebuild-user", JSON.stringify(result.data))
            setLoading(false)
            message.success("Profile updated successfully")
        } catch (error) {
            setLoading(false)
            message.error("Profile updationfailed")
        }
    }


    return (
        <div>
            <DefaultLayout>
                {loading && <Spin size='large' />}
                <div className='update-profile'>
                    <h4><b>Update Profile</b></h4>
                    <hr />
                    <Form layout='vertical' onFinish={onFinish} initialValues={user}>
                        <Tabs defaultActiveKey='1'>
                            <TabPane tab="Personal Info" key="1">
                                <PersonalInfo />
                            </TabPane>
                            <TabPane tab="Skills and Education" key="2">
                                <SkillsEducation />
                            </TabPane>
                            <TabPane tab="Experience / Projects" key="3">
                                <ExpeProjects />
                            </TabPane>
                        </Tabs>
                        <Button htmlType='submit'>UPDATE</Button>
                    </Form>
                </div>
            </DefaultLayout>
        </div>
    )
}

export default Profile
