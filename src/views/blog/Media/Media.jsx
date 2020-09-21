import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    BlogMedialist
} from 'components';

import { media } from 'variables/blog/media.jsx';

var BASEDIR = process.env.REACT_APP_BASEDIR;


class Media extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">VIDEO</h1>
                        </div>
                    </div>


                            
           

                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Videos</h2>
                                <a href={BASEDIR+'/videos/upload-media'} className="btn btn-success btn-sm float-right px-3 m-3">Add <i className="fa fa-plus" aria-hidden="true"></i></a>

                                    <div className="float-right px-3 mr-4">
                                        <label for="cars">Filter by:</label>
                                        <select className="" name="cars" id="cars">
                                            <option value="volvo">Select</option>
                                            <option value="saab">Date</option>
                                            <option value="opel">Name</option>
                                            <option value="audi">User</option>
                                        </select>
                                        <a href="/">
                                        <i class="fa fa-search" aria-hidden="true"></i></a>

                                    </div>
                            </header>
                            <div className="content-body">    


                            <div className="row">
                                    <div className="col-12">


                                <BlogMedialist media={media} />

                                    </div>
                                </div>
                            </div>
                        </section></div>



           
                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Media;
