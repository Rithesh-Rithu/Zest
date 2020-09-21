import React from 'react';
// import { NavLink } from 'react-router-dom';
// used for making the prop types of this component
import PropTypes from 'prop-types';
var BASEDIR = process.env.REACT_APP_BASEDIR;
 
class Podcasts extends React.Component{ 
    render(){
        var podcasts = [];
        for (var i = 0; i < this.props.podcasts.length; i++) {
            podcasts.push(

                        <div className="border p-2 m-1 col-12 col-md-12" key={i}>
                                        <div className="blog_post">
                                            <div className="row">
                                                <div className="col-12 col-md-3">
                                                    <img src={this.props.podcasts[i].image} alt="" className="podcast_image"/>
                                                </div>
                                                <div className="col-12 col-md-9 mt-3">
                                                    <div className="float-right">
                                                        <a href={BASEDIR+'/podcasts/edit-podcast'} className="btn btn-info btn-sm">Edit <i className="fa fa-edit" aria-hidden="true"></i></a>
                                                        <a href="/" className="btn btn-danger btn-sm">Delete <i className="fa fa-trash" aria-hidden="true"></i></a>
                                                    </div>
                                                    <p><strong className="podcast_text">{this.props.podcasts[i].title}</strong></p>
                                                    <p className="">By: {this.props.podcasts[i].author}</p> 
                                                    <p className="">{this.props.podcasts[i].description}</p> 
                                                    <p className="">{this.props.podcasts[i].category}</p> 
                                                    <p className="">Posted on {this.props.podcasts[i].date}</p> 
                                                    <a href="/" >Play: <i class="fa fa-external-link" aria-hidden="true"></i>
                                                    </a>
                                                    <span className="p-2">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="p-2">
                                                        <i className="fa fa-bars" aria-hidden="true"></i>
                                                    </span>

                                                </div>
                                            </div>
                                           
                                        </div>
                        </div>
            );
        }
        return (          
                                <div className="row">
                                       { podcasts }
                                </div>
        );
    }
}

Podcasts.propTypes = {
    podcasts: PropTypes.arrayOf(PropTypes.object)
}

export default Podcasts;
