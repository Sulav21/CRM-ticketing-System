import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Container, Row, Col, Form,Button,Spinner,Alert } from "react-bootstrap";
import {loginPending,loginSuccess,loginFailed} from '../pages/login/LoginSlice.js'
import { loginUser } from "../helpers/AxiosHelpers.js";
import {useNavigate} from 'react-router-dom'
import { getUserProfile } from "../pages/dashboard/userAction.js";

const initialData = {
    email:"",
    password:""
}
export const LoginComp = ({handleOnClick}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const [formDt, setFormDt] = useState(initialData)
const {isLoading,isAuth,error} = useSelector(state=>state.login)

useEffect(() => {
 (sessionStorage.getItem('accessJWT')) && navigate('/dashboard')
}, [navigate])

    const handleOnChange=(e)=>{
        const {name,value} = e.target
        setFormDt({
            ...formDt,
            [name]:value
        })
    }
    const handleOnSubmit=async(e)=>{
        e.preventDefault()
        dispatch(loginPending())
        try {
        const result = await (loginUser(formDt))
      
        if(result.status='error'){
          dispatch(loginFailed(result.message))
        }
       
      if(result.status='success'){
        sessionStorage.setItem('accessJWT',result.jwts.accessJWT)
        localStorage.setItem('refreshJWT',result.jwts.refreshJWT)
        dispatch(loginSuccess())
        dispatch(getUserProfile())
        navigate('/dashboard')

      }
     
      } catch (error) {
          dispatch(loginFailed(error.message))
        }
       
    }
  return (
    <Container>
      <Row>
        <Col>
          <h1>Client Login</h1>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={handleOnChange} placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleOnChange} placeholder="Enter Password" required />
            </Form.Group>
      
            <Button variant="primary" type="submit">
              Login
            </Button>
            {isLoading && <Spinner variant='primary' animation="border" />}
          </Form>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col>
        <a href="#!" className='text-decoration-none' onClick={handleOnClick}>Forget Password ?</a>
        </Col>
      </Row>
    </Container>
  );
};
