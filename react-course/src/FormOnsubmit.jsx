import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormOnsubmit() {
    const [emails, setemails] = useState("")
    const [Pswd, setPswd] = useState("")
    const [opt1, setopt1] = useState("")
    const [check1, setcheck1] = useState(false)
    const [check2, setcheck2] = useState(false)
    const [check3, setcheck3] = useState(false)

    const checkboxx=(val)=>{
        setcheck1(val.target.checked)
        
    }
    const checkboxx2=(val)=>{
        setcheck2(val.target.checked)
        
    }
    const checkboxx3=(val)=>{
        setcheck3(val.target.checked)
        
    }
  

    const radiooption=(rad)=>{
        setopt1(rad.target.value)
    }
    const radiooption2=(rad)=>{
        setopt1(rad.target.value)
    }
    const radiooption3=(rad)=>{
        setopt1(rad.target.value)
    }
    const Getemail=(val)=>{
        setemails(val.target.value)
    }
    const Pswdo=(vale)=>{
        setPswd(vale.target.value)
    }

    const cons=(abc)=>{
        abc.preventDefault()
        console.log(emails)
        console.log(Pswd)
        console.log(opt1)
        console.log(check1)
        console.log(check2)
        console.log(check3)
    }

  return (
    <div>
        <Form onSubmit={cons} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={emails} onChange={Getemail}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={Pswd} onChange={Pswdo} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="radio" name='options' value="option1" label="option1" checked={opt1==="option1"} onChange={radiooption} />
      <Form.Check type="radio" name='options' value="option2" label="option2" checked={opt1==="option2"} onChange={radiooption2} />
        <Form.Check type="radio" name='options' value="option3" label="option3" checked={opt1==="option3"} onChange={radiooption3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type='checkbox' label="php" checked={check1} onChange={checkboxx}/>
        <Form.Check type='checkbox' label="Java" checked={check2} onChange={checkboxx2}/>
        <Form.Check type='checkbox' label="Python" checked={check3} onChange={checkboxx3}/>

      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
    </div>
  )
}

export default FormOnsubmit