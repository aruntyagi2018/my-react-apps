import React , {Component} from 'react';

export default class SearchResults extends Component
{
    constructor(props)
    {
        super(props);
    }
render(){
return(
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col col-sm-4">
                    <img src={this.props.mdata.artworkUrl100} class="img-thumbnail" alt="Card cap" />
                    </div>
                    <div class="col col-sm-8">
                        <p class="price text-left text-truncate" title={this.props.mdata.artistName}>{this.props.mdata.artistName}</p>
                        <p class="name text-left">{this.props.mdata.currency} {this.props.mdata.collectionPrice}</p>
                    </div></div>
                    <div class="card-text text-truncate" title={this.props.mdata.collectionName}>{this.props.mdata.collectionName}</div>
                    <div class="row"><div class="col col-sm-4">
                      <a class="badge badge-primary" href={this.props.mdata.collectionViewUrl} target="_blank">View details</a>
                      </div>
                      <div class="add-favourites col col-sm-8"><a class="badge badge-success add-fav" href="/mtunes/addfav/" id={this.props.mdata.trackId} >Add to favourites</a>
                      </div>
                      <div class="remove-favourites col col-sm-8">
                          <a class="badge badge-danger" href="#814424794" id="814424794">
                              No more my favourite</a>
                              </div>
                              </div>
                              </div>
                              </div>
                              </div> 
);
}
}