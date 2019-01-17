import React, { Component } from 'react'
import { Grid,Image,Form,Checkbox,Button} from 'semantic-ui-react'

class ForgaotPassword extends Component {
  render() {
    return (
        <Grid centered columns={3}>
        <Grid.Column>
             
      <div>
        <div className="Logo">
        <h2>Logo</h2>
        </div>
        <div className="forgot-password-container">
        <h1>Forgot password</h1>
        </div>
        <div>
            <p>Enter your email we'll send you link to reset password</p>
        </div>
        
        <div className="form-container">
        <Form>
                 <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email' />
                      </Form.Field>
                     
                      <Button type='submit'>Cancle</Button>
                   
                        <Button type='submit'>Send Email</Button>
                    </Form>
        </div>
        </div>
        </Grid.Column>
        </Grid>
    
    )
  }
}

export default ForgaotPassword;