import React from "react";
import {CardText, CardTitle, Container, Card, Col, Row, Button, Form, FormGroup, Input, Label } from "reactstrap";
import Header from "./Header";
import axios from "axios";

import { LOGIN_API_URL } from "../constants";
//import { keyboard } from "@testing-library/user-event/dist/keyboard";

class LoginForm extends React.Component {
  state = {
    pk: 0,
    Username: "",
    Password: "",
    items: [],
    errorMessage: ""
  };

  componentDidMount() {
    if (this.props.student) {
      const { pk, Username, Password} = this.props.student;
      this.setState({ pk, Username, Password});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStudent = e => {
    e.preventDefault();
    axios.post(LOGIN_API_URL, this.state)
    .then(response => this.setState({items: response.data}))
    .catch(err => { 
      console.log('err', err)
      if(err.response.data.detail){
        console.log("inside if", err.response.data.detail)
        this.setState({  errorMessage: err.response.data.detail});
      }
    //   Object.entries(err.response.data).forEach(entry => {
    //     const [key, value] = entry;
    //     console.log(key, value);
    //     const newErrMsg = { ...this.state.errorMessage, [key] : value.join('\n') };
    //     console.log(newErrMsg) 
    //     this.setState(prevState => ({ ...prevState, errorMessage : newErrMsg }));
    //   });      
        
    })
  }; 

  editStudent = e => {
    e.preventDefault();
    axios.put(LOGIN_API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
<>
<div className="crimson">
<Header/>
<Container>

<Row style={{ marginTop: `10%`}}>
 <Col className="just" sm="6" style={{paddingRight: `10%`,
paddingLeft: `10%`}}>


    <Card body style={{ marginTop: `5%`, backgroundColor: `#6c757d`}}>
      <CardTitle tag="h5" style={{ color:`white`}}>
        Data Feed
      </CardTitle>
      <CardText style={{ color:`white`}}>
         <span style={{ fontWeight: `bold` }}>98%</span> of shoppers HAVE BEEN DISSUADED from completing a purchase because of incomplete or incorrect content
      </CardText>
      <CardText style={{ color:`white`}}>
         <span style={{ fontWeight: `bold` }}>32%</span> of shoppers are dissuaded EVERY TIME they visit a 
      </CardText>

    </Card>


    </Col>

<Col className="just" sm="6" style={{paddingRight: `10%`, paddingLeft: `10%`}}>
<Card body style={{ backgroundColor: `currentColor`}}>
      <Form className="Auth-form" onSubmit={this.props.student ? this.editStudent : this.createStudent}>
      <div className="Auth-form-content">
        <div className="text-center">
     <h2>Welcome to AutoProd</h2>
     <br/>
     <br/>
      </div>
        <FormGroup>
          <Label for="Username">Username</Label>
          <Input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.username)}
          />
          
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.password)}
          />
        </FormGroup>
        { this.state.errorMessage &&
            <h6 style={{ color:`red`}}> { this.state.errorMessage } </h6> }
       
        
        <br/>
        <div className="d-grid gap-2">
        <Button color="danger" size="lg">Login</Button>
        </div>
        </div>
      </Form>
          </Card>

      </Col>
      </Row>
</Container>
</div>
</>
    );
  }
}

export default LoginForm;