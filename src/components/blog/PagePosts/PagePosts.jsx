import React from 'react';
import { NavLink } from 'react-router-dom';
// used for making the prop types of this component
import PropTypes from 'prop-types';
var BASEDIR = process.env.REACT_APP_BASEDIR;
 
class PagePosts extends React.Component{ 
    render(){
        var pagesList = [];
        for (var i = 0; i < this.props.pages.length; i++) {
            pagesList.push(

                        <div className="col-12 col-md-12 border border-info p-3" key={i}>
                                        <div className="blog_post">
                                            <div className="float-right">
                                                <a href={BASEDIR+'/activities/edit-activity'} className="btn btn-info btn-sm">Edit <i className="fa fa-edit" aria-hidden="true"></i></a>
                                                <a href="/" className="btn btn-danger btn-sm">Delete <i className="fa fa-trash" aria-hidden="true"></i></a>
                                            </div>
                                            <p><strong className="font-weight-bold">{this.props.pages[i].author}</strong> {this.props.pages[i].activity} a {this.props.pages[i].what} on {this.props.pages[i].date}.</p> 
                                            <a href="/" >Visit: <i class="fa fa-external-link" aria-hidden="true"></i>
                                            </a>
                                        </div>
                        </div>
            );
        }
        return (          
                                <div className="row">
                                       { pagesList }
                                </div>
        );
    }
}

PagePosts.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object)
}

export default PagePosts;
