import React ,{ Component } from 'react';
import {Redirect} from 'react-router';
import axios from 'axios';

export default class Login extends Component
{
    constructor(props)
        {
            super(props);
            this.state ={
                userLogin : '',
                userPassword : '',
                loginStatus:false,
                userData : {}
            };
        }
        onClickHandler = () => {
            const userlogin = { username:this.state.userLogin,pwd : this.state.userPassword};
            axios.post('/users/validatelogin',userlogin
            ).then(res =>
            {
                console.log(res.data);
                this.setState({loginStatus : res.data.status,userData : res.data.userProfile});
                console.log('click success ' + this.state.loginStatus );
            });
        }
    handleChange = (e) =>
    {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
render()
    {
        if (this.state.loginStatus === true) {
            return <Redirect to='/Home'/>
          }
        return (
            <div class="container">
                <div class="search-block row">
                <div class="mr-auto mx-auto col col-md-10 col-lg-8">
                    <div class="text-center card">
                        <div class="card-body">
                                    <div class="form-group">
                                      <div>User Login : </div>  <input type="text" name="userLogin" id="userLogin" onChange = {this.handleChange} placeholder="Search for your favourite artists" class="form-control form-control" />
                                      <div>Password : </div><input type="password" name="userPassword" id="userPassword" onChange ={this.handleChange} placeholder="Search for your favourite artists" class="form-control form-control"  />
                                    </div>
                                    <button type="button" class="btn btn-secondary" onClick = {this.onClickHandler} >Sign in</button>
                         </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

