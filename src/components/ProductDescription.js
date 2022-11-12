import React from "react";
import {Button, FormGroup, Label, Input, FormText} from 'reactstrap';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { API_URL } from "../constants";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProductHeader from "./ProductHeader";
function ProductDescription() {
   
    return (
<>
<ProductHeader></ProductHeader>
    <div class="row">
        <div class="col">
        <Card style={{ width: '100%' }}>
        <Card.Body>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Product Type</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </Card.Body>
    </Card>
  </div>


  

  <div class="col-7"style={{marginRight:`18%`}}>
    <Card style={{ width: '130%' }}>
      <div class="row">
      <div class="col-6">
    <Card.Header>Quote</Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
      </blockquote>
    </Card.Body>
      </div>
      </div>
    </Card>

<br/>
    <Card style={{ width: '130%' }}>
      <div class="row">
      <div class="col-6">
    <Card.Header>Quote</Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
      </blockquote>
    </Card.Body>
      </div>
      </div>
    </Card>

  </div>
    
  
    
    
    </div>

        </>
    );
  }

export default ProductDescription;