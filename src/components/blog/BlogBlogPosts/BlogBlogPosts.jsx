import React from 'react';
import { NavLink } from 'react-router-dom';
// used for making the prop types of this component
import PropTypes from 'prop-types';

var BASEDIR = process.env.REACT_APP_BASEDIR;

class BlogBlogPosts extends React.Component{ 
    render(){
        var blogsList = [];
        for (var i = 0; i < this.props.blogs.length; i++) {
            blogsList.push(
                                    <div className="col-12" key={i}>
                                        <div className="blog_post card shadow rounded">
                                            <div className="row">
                                                <div className="col-12 col-md-3">
                                                    <img className="media-object" src={this.props.blogs[i].image} alt="" />
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <div className="card-body">
                                                        <div className="float-right">
                                                            <a href={BASEDIR+'/article/edit-article'} className="btn btn-info btn-sm">Edit <i className="fa fa-edit" aria-hidden="true"></i></a>
                                                            <a href="/" className="btn btn-danger btn-sm">Delete <i className="fa fa-trash" aria-hidden="true"></i></a>
                                                        </div>
                                                        <h3 className="blogtitle"><NavLink to={BASEDIR+'/article/article-view'}>{this.props.blogs[i].title}</NavLink></h3>
                                                        <p className="post-by">Written by <a href="#!">{this.props.blogs[i].author}</a> on {this.props.blogs[i].date}.</p>
                                                        <p className="blog-content">{this.props.blogs[i].description}</p>
                                                        <span>url:</span> <a href="/" >https://www.google.com/</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            );
        }
        return (          
                                <div className="row">
                                       { blogsList }
                                </div>
        );
    }
}

BlogBlogPosts.propTypes = {
    blogs: PropTypes.arrayOf(PropTypes.object)
}

export default BlogBlogPosts;
