import React, { Component } from 'react'
import { Grid,Image,Form,Checkbox,Button} from 'semantic-ui-react'
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import {registerUser} from '../../actions/registerAction'

const options = [
  { key: 'ca', text: 'CA', value: 'ca' },
  { key: 'cs', text: 'CS', value: 'cs' },
  { key: 'cms', text: 'CMS', value: 'cms' },
]
class Register extends Component {

  constructor(){
    super();
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      real_password:'',
      phone_number:'',
      pin_code:'',
      selectedCourse:'',
      term:false,
      
      errors:{}

    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
}

toggle=(e,{value})=>this.setState({term: !value})

handleChange=(e,{value})=>this.setState({selectedCourse:value})

onSubmit(e){
  e.preventDefault();
  const newUser ={
    first_name:this.state.first_name,
    last_name:this.state.last_name,
    email: this.state.email,
    password:this.state.password,
    real_password:this.state.real_password,
    pin_code:this.state.pin_code,
    phone_number:this.state.phone_number,
    course_id:this.state.selectedCourse
    
  }

  this.props.registerUser(newUser,this.props.history)


}
  render() {



    return (
    <div className="register-container">
       <div className="container">
          <div className="header">
            <h3>Simple step. No hassle.{this.props.reg.user.first_name}</h3>
          </div>
          <div className="header-text">
              <h6>Alreday have account? <a style={{color:"orange",cursor:"pointer"}}>Sign in</a></h6>
          </div>
          
          
          
              <Grid>
                <Grid.Row>
                  <Grid.Column width={10} padded="horizontally"> 
                  <Form onSubmit={this.onSubmit}>
                      <Form.Group widths='equal'>
                        <Form.Input
                          fluid
                          id='form-subcomponent-shorthand-input-first-name'
                          label='First name'
                          name="first_name"
                          placeholder='First name'
                          value={this.state.first_name}
                          onChange={this.onChange}
                        />
                        <Form.Input
                          fluid
                          id='form-subcomponent-shorthand-input-last-name'
                          label='Last name'
                          name="last_name"
                          placeholder='Last name'
                          value={this.state.last_name}
                          onChange={this.onChange}
                        />
                        
                      </Form.Group>
                      <Form.Group widths='equal'>
                        <Form.Input
                          fluid
                          id='form-subcomponent-shorthand-input-email'
                          label='Email'
                          name="email"
                          placeholder='Email'
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                        <Form.Input
                          fluid
                          id='form-subcomponent-shorthand-input-mobile'
                          label='Mobile'
                          name="phone_number"
                          placeholder='Mobile'
                          value={this.state.phone_number}
                          onChange={this.onChange}
                        />
                        
                      </Form.Group>
                      <Form.Group widths='equal'>
                        <Form.Input
                          fluid
                          id='form-subcomponent-shorthand-input-password'
                          label='password'
                          name="password"
                          placeholder='Password'
                          type="password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                        <Form.Input
                          fluid
                          type="password"
                          name="real_password"
                          id='form-subcomponent-shorthand-input-confirm-password'
                          label='Confirm password'
                          placeholder='Confirm password'
                          value={this.state.real_password}
                          onChange={this.onChange}
                        />
                        
                      </Form.Group>
                      <Form.Group widths='equal'>
                        <Form.Input
                          fluid
                          id='form-subcomponent-shorthand-input-pincode'
                          label='Pin Code'
                          name="pin_code"
                          placeholder='Pin Code'
                          value={this.state.pin_code}
                          onChange={this.onChange}
                        />
                         <Form.Select fluid 
                         label='Course' 
                         options={options } 
                         name="selectedCourse"
                         placeholder='Course'
                         value={this.state.selectedCourse}
                         onChange={this.handleChange}
                         />
                        
                      </Form.Group>
                      <Form.Field>
                          <Checkbox 
                          label='I agree to the Terms and Conditions' 
                          value={this.state.term}
                          name="term"
                          onChange={this.toggle}
                          />
                        </Form.Field>
                        <Button   type='submit'>Submit</Button>
                    </Form>
                   </Grid.Column>
                  <Grid.Column width={6}>
                    {/* <Image src= {signup} /> */}
                  </Grid.Column>
                </Grid.Row>

             </Grid>     
          
         </div>
         </div>
    )
  }
}

Register.propTypes={
  registerUser: PropTypes.func.isRequired,
  reg: PropTypes.object.isRequired
}


const mapStateToProps=(state)=>({
  reg:state.reg
})

export default connect(mapStateToProps,{registerUser})(Register);