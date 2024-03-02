import React, { useState } from 'react';

import { Form, Input, Button, Row, Col } from 'antd';
import axios from 'axios';
import { CenterForm } from '../../Style/Style';
import { NavLink } from 'react-router-dom';


const layout = {
    layout: 'vertical'
};

const onFinish = (values) => {

}

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const Profilepage = () => {
    return (
        <>
            <CenterForm>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >

                    <Row><span className='form-heading'>Forgot password?</span></Row>
                    <Row >
                        <>
                            <Col span={24}>
                                <Form.Item>
                                    <label className='forgot-lable'>Enter your registered email address 
                                    and we'll send you a secure link to setup a new password.
                                   </label>
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item>
                                    <label className='form-Lable'>E-mail</label>
                                </Form.Item>
                                <Form.Item name="email" rules={[{ required: true }]}>
                                    <Input.Password className='form-Input ' placeholder='Enter E-mail' />
                                </Form.Item>
                            </Col>

                        </>


                    </Row>

                    <Form.Item >
                        <Button className='form-button' type="primary" htmlType="submit">
                            Reset Password
            </Button>
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <NavLink to={`/login`}>Back TO Login</NavLink>
                    </Form.Item>
                </Form>


            </CenterForm>
        </>
    )
}

export default Profilepage;
