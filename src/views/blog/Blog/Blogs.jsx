
import React from 'react';
import {
    Row, Col
} from 'reactstrap';


import {
    BlogBlogPosts
} from 'components';

import { blogs } from 'variables/blog/blogs.jsx';

var BASEDIR = process.env.REACT_APP_BASEDIR;

class Blogs extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            
                        </div>
                    </div>
    
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Articles Posted</h2>
                                <a href={BASEDIR+'/article/add-article'} className="btn btn-success btn-sm float-right px-3 m-3">Add <i className="fa fa-plus" aria-hidden="true"></i></a>

                                    <div className="float-right px-3 mr-4">
                                        <label for="cars">Filter by:</label>
                                        <select className="" name="cars" id="cars">
                                            <option value="volvo">Select</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <a href="/">
                                        <i class="fa fa-search" aria-hidden="true"></i></a>

                                    </div>
                            </header>
                                                   
                            <div className="content-body">    

                                <BlogBlogPosts blogs={blogs} />

                            </div>
                        </section>
                    </div>
                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Blogs;
