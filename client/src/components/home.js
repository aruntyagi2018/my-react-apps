import React, {Component } from  'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/header';
import Search from '../components/search';

export default class Home extends Component
{
    constructor(props)
    {
        console.log('status ' + props.location.state.loginStatus);
        console.log('user data ' + props.location.state.userData);
        super(props);
       // console.log('status after ' + props.loginStatus);
    }
    render()
        {
            return (
                <div>
                <Header userData = {this.props.location.state.userData} />
                <Search />
                </div>
            );
        }
} 