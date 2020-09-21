import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

var BASEDIR = process.env.REACT_APP_BASEDIR;


class BlogMedialist extends React.Component{
    render(){
        var mediaList = [];
        for (var i = 0; i < this.props.media.length; i++) {
            mediaList.push(


                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" key={i}>
                                                <div className="team-member">
                                                <div className="row">
                                                    <div className="col-12 col-md-2">
                                                    <div className="team-img">
                                                    <img className="" src={this.props.media[i].avatar} alt="" />
                                                </div>
                                                    </div>
                                                    <div className="col-12 col-md-10">
                                                        <div className="team-info">
                                                        <div className="float-right">
                                                        <a href={BASEDIR+"/videos/edit-media"} className="btn btn-info btn-sm">Edit <i className="fa fa-edit" aria-hidden="true"></i></a>
                                                        <a href="/" className="btn btn-danger btn-sm">Delete <i className="fa fa-trash" aria-hidden="true"></i></a>
                                                    </div>
                                                        <h3><NavLink to="#!">{ this.props.media[i].title}</NavLink></h3>
                                                        <p className="">{ this.props.media[i].description}</p>
                                                        <p className="">#{ this.props.media[i].category}</p>
                                                        <p>By: { this.props.media[i].by } on { this.props.media[i].date }</p>
                                                    </div>
                                                    </div>
                                                </div>
                                                   
                                                    
                                                </div>
                                            </div>
            );
        }
        return (
                                <div className="row">
                                       { mediaList }
                                </div>
        );
    }
}

BlogMedialist.propTypes = {
    media: PropTypes.arrayOf(PropTypes.object)
}

export default BlogMedialist;
