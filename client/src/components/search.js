import React, {Component} from 'react';
import ReactDom from 'react-dom';
import  {Link} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import axios from 'axios';
import SearchResults from './searchResults';

export default class Search extends Component
{
    constructor()
    {
        super();
        this.state = {
            mtunesData : {},
            showContent :false,
            searchText : ''
        };

    }
    setSearch(e)
    {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
       // console.log(e.target.name);
        //console.log(e.target.value);
       // console.log(this.state);
        //this.setState({searchText : e.target});
    }
    searchClick = () => {
        console.log('search click');
        axios.get('/mtunes/' + this.state.searchText
        //axios.get('https://itunes.apple.com/search?term=' + this.state.searchText

        // ,{
        //     method: 'GET',
        //     mode : 'no-cors',
        //     headers:{
        //         'Access-Control-Allow-Origin' : 'http://localhost:3000',
        //         'Content-Type' : 'application/json'
        //     },
        //     withCredentials : true,
        //     credentials : 'same-origin',
        //  }
        ).then (res => {
            //console.log('search data :' + response.data);
            //console.log(' m :' + response.data.resultCount);
            //console.log(' count :' + response.data.searchData.count);
            //console.log(' resulta :' + response.data.searchData.results);
             this.setState({
                mtunesData : res.data,
                showContent:true
            }); 
        });
        console.log('search click set state');
      }

    render(){
        return (
<div class="container">
                        <div class="search-block row">
                            <div class="mr-auto mx-auto col col-md-10 col-lg-8">
                                <div class="text-center card">
                                    <div class="card-body">
                                        <img src="/images/my_tunes_logo.jpg" alt="logo" />
                                                <div class="label-animation  form-group">
                                                    <input type="text" name="searchText" id="searchText" placeholder="Search for your favourite artists" value={this.state.searchText} class="form-control form-control" onChange={this.setSearch.bind(this)} />
                                                    <label for="searchText" class="font-italic helper-label  form-control-label">Search for your favourite artists</label>
                                                </div>
                                                <button type="button" class="btn btn-secondary" onClick = {this.searchClick} >Get albums</button>
                                     </div>
                                </div>
                            </div>
                        </div>
    <div id="resultsBlock" class="row">
        {this.state.showContent ? this.state.mtunesData.results.map( (item) =>  <SearchResults  mdata = {item} />
         ) : null}
   </div>
</div>
        );
    }
}
