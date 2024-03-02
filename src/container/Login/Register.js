import React from 'react';
import { Form, Input, Button, Row, Col, message, Select, Checkbox } from 'antd';
import axios from 'axios';
import { NavLink ,useHistory} from 'react-router-dom';
import { CenterForm } from '../../Style/Style';
const { Option } = Select;
const layout = {
    layout: "vertical"

};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */
    


const Register = () => {
    const history= useHistory();
    const onFinish = (values) => {
        console.log(values);

        axios.post(`http://localhost:9000/user`,

        {
            "uname": values.user.uname
           
        }
        )
            .then(res => {


            if (res.data[0].count > 0) {
                message.error('User Name Already Exist Try Another User Name');
            }
            else {
                axios.post(`http://localhost:9000/reg`,

                {
                    "uname": values.user.uname,
                    "pswd": values.user.pswd,
                    "email": values.user.email,
                    "name": values.user.name,
                    "mno": values.user.phone
                }
            )
                .then(res => {
    
                    history.push('/login');
                   
                })

            }
        })
        
        
           

    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select className='form-numberselector' style={{ width: 70 }}>
                <Option value="91">+91</Option>
                <Option value="01">+01</Option>
            </Select>
        </Form.Item>
    );


    return (


        <>

            <CenterForm>
                <>


                    <Form {...layout} name="nest-messages"
                        onFinish={onFinish}
                        validateMessages={validateMessages}
                        initialValues={{

                            prefix: '91',
                        }}

                    >
                        <Row><span className='form-heading'>Sign Up</span></Row>
                        <Row >
                            <>

                                <Col span={12}>
                                    <Form.Item>
                                        <label className='form-Lable'>Name</label>
                                    </Form.Item>
                                    <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
                                        <Input className='form-Input ' placeholder='Enter Your Full Name' />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item>
                                        <label className='form-Lable'>User Name</label>
                                    </Form.Item>
                                    <Form.Item name={['user', 'uname']} rules={[{ required: true }]}>
                                        <Input className='form-Input ' placeholder='Enter User Name' />
                                    </Form.Item>
                                </Col>

                            </>


                        </Row>
                        <Row>
                            <>

                                <Col span={12}>
                                    <Form.Item>
                                        <label className='form-Lable'>Email</label>
                                    </Form.Item>
                                    <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                                        <Input className='form-Input ' placeholder='Enter Your E-mail Id' />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item>
                                        <label className='form-Lable'>Phone Number</label>
                                    </Form.Item>
                                    <Form.Item
                                        name={['user', 'phone']}

                                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                                    >
                                        <Input placeholder=' Phone Number' className='form-phonecolumn' addonBefore={prefixSelector} />
                                    </Form.Item>
                                </Col>
                            </>


                        </Row>

                        <Row>
                            <>

                                <Col span={12}>
                                    <Form.Item>
                                        <label className='form-Lable'>Password</label>
                                    </Form.Item>
                                    <Form.Item
                                        name={['user', 'pswd']}

                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password className='form-Input ' placeholder='Create New Password' />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item>
                                        <label className='form-Lable'>Confirm Password</label>
                                    </Form.Item>
                                    <Form.Item
                                        name="confirm"

                                        dependencies={['user', 'pswd']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue(['user', 'pswd']) === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password className='form-Input ' placeholder='Confirm Password' />
                                    </Form.Item>
                                </Col>
                            </>


                        </Row>


                        <Row><Col span={24}>
                            <Form.Item name="remember" valuePropName="checked" >
                                <Checkbox className='check' /><span className='form-agreelable'
                                    to="/about">I agree to the
                                    <NavLink className='form-links' to="/about"> privacy policy</NavLink>.</span>
                            </Form.Item></Col>

                        </Row>



                        <Form.Item >
                            <Button className='form-button' htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                        <Form.Item >
                            <Row>
                                <Col span={24} ><span className='form-label' to="/about">Already have a booker account?</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} ><NavLink className='form-link' to="/">Log In Now</NavLink>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>






                </>

            </CenterForm>



        </>
    )
}

export default Register;
