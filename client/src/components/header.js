import React, {Component} from 'react';


export default class Header extends Component
{
    render(){
        return (
            <div>
                  <div class="HeaderBlock">
                      <div class="container">
                      <nav class="navbar navbar-expand navbar-light">
                              <a class="navbar-brand"><img src="/images/m_logo.jpg" alt="myTunes Logo" /></a>
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
