import React, {Component } from  'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/header';
import Search from '../components/search';

export default class Home extends Component
{
    render()
        {
            return (
                <div>
                <Header />
                <Search />
                </div>
            );
        }
} 