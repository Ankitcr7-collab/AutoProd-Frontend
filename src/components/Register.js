import React from "react";
import { Navbar, NavbarBrand, CardText, CardTitle, Container, Card, CardGroup, Col, Row, Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class RegisterForm extends React.Component {
  state = {
    pk: 0,
    Username: "",
    Email: "",
    Password: "",
    Password2:"",
    Firstname: "",
    Lastname:""
  };

  componentDidMount() {
    if (this.props.student) {
      const { pk, Username, Email, Password, Password2, Firstname, Lastname} = this.props.student;
      this.setState({ pk, Username, Email, Password, Password2, Firstname, Lastname});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStudent = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editStudent = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
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
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
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
        <FormGroup>
          <Label for="Password2">Confirm Password</Label>
          <Input
            type="password"
            name="password2"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.password2)}
          />
        </FormGroup>
        <br/>
        <div className="d-grid gap-2">
        <Button color="danger" size="lg">Sign up</Button>
        </div>
        </div>
      </Form>
          </Card>

      </Col>
      </Row>
</Container>
</>

    );
  }
}

export default RegisterForm;