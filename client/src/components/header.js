import React, {Component} from 'react';


export default class Header extends Component
{
    
    constructor(props)
    {
        super(props);
    }
    onClickHandler = () =>
    {
        console.log('logout hamdler');
    }
    render(){
        return (
            <div>
                  <div class="HeaderBlock">
                      <div class="container">
                      <nav class="navbar navbar-expand navbar-light">
                              <a class="navbar-brand"><img src="/images/m_logo.jpg" alt="myTunes Logo" /></a>
                              <span>
                                  Welcome to: {this.props.userData.profileName} <a href="javascript:onvoid()" onClick= {this.onClickHandler} >Logout</a>
                              </span>
                                <button type="button" class="navbar-toggler">
                                  <span class="navbar-toggler-icon">
                                  </span>
                                </button>
                                <ul class="ml-auto navbar-nav">
                                      <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                                      <li class="nav-item"><a href="/favourites" class="nav-link">Favourites</a></li>
                                </ul>
                          </nav>

                      </div>
                  </div>
                  
              <div>

            </div>
</div>
        );
    }
}
