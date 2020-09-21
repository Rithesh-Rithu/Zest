import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

var BASEDIR = process.env.REACT_APP_BASEDIR; 

class BlogUserslist extends React.Component{
    render(){
        var bloguserList = [];
        for (var i = 0; i < this.props.bloguser.length; i++) {
            bloguserList.push(


                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-12" key={i}>
                                                <div className="team-member">
                                                    <div className="row">
                                                        <div className="col-12 col-md-3">   
                                                            <div className="user-image">
                                                                <img className="img-fluid" src={this.props.bloguser[i].avatar} alt="" />
                                                            </div>
                                                        </div>
                                                <div className="col-12 col-md-9">

                                                    <div className="team-info">
                                                         <div className="float-right">
                                                            <a href={BASEDIR+'/user/edit-user'} className="btn btn-info btn-sm">Edit <i className="fa fa-edit" aria-hidden="true"></i></a>
                                                            <a href="/" className="btn btn-danger btn-sm">Delete <i className="fa fa-trash" aria-hidden="true"></i></a>
                                                        </div>
                                                        <h3><NavLink to={BASEDIR+"/blog/user-profile"}>{ this.props.bloguser[i].name }</NavLink><span className="badge badge-dark badge-pill text-dark p-1 ">{ this.props.bloguser[i].role }</span> </h3>
                                                        <p><i class="fa fa-envelope" aria-hidden="true"></i> { this.props.bloguser[i].email }</p> 
                                                        <p>{ this.props.bloguser[i].age } years old</p>
                                                        <p><i class="fa fa-phone" aria-hidden="true"></i> { this.props.bloguser[i].contact } </p>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>  
            );
        }
        return (
                                <div className="row">
                                       { bloguserList }
                                </div>
        );
    }
}

BlogUserslist.propTypes = {
    bloguser: PropTypes.arrayOf(PropTypes.object)
}

export default BlogUserslist;
