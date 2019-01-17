import React, { Component } from 'react'
import { Grid,Image,Form,Checkbox,Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/loginAction'


class Login extends Component {

  
  constructor(){
    super();
    this.state={
      
      email:'',
      password:'',
      
      
      errors:{}

    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
}

onSubmit(e){
  e.preventDefault();
  const user ={
   
    email: this.state.email,
    password:this.state.password,
   
    
  }

  this.props.loginUser(user)


}

  render() {
    return (
      <div className="register-container">
      <div className="container">
      <div className="container1">
  
          
      <div className="left">
      <Grid>
               <Grid.Row>
                 <Grid.Column> 
                 <Form onSubmit={this.onSubmit}>
                 <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email'
                        name="email"
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' 
                        type="password"
                        name="password"
                          placeholder='Password'
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                      </Form.Field>
                     
                        <Button fluid  type='submit'>Submit</Button>
                    </Form>
                   </Grid.Column>
                 
                </Grid.Row>

             </Grid>     
          
          <div className="forgot-password">
            <a>Forgot Password?</a>
          </div>

          <div className="Signup">
          
          <Button basic color='green'>
                Create Account
            </Button>      
          </div>
          </div>
          <div className="right">
          </div>
           
         </div>
         </div>
      </div>
      
    )
  }
}
const mapStateToProps=(state)=>({
  login:state.login
})

export default connect(mapStateToProps,{loginUser})(Login);