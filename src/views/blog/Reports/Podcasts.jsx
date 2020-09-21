import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    Podcasts
} from 'components'; 

import { podcasts } from 'variables/blog/podcasts.jsx';
var BASEDIR = process.env.REACT_APP_BASEDIR;

class Pages extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Podcasts</h1>
                        </div>

                            <a href={BASEDIR+'/podcasts/add-podcast'} className="btn btn-success btn-sm float-right px-3 m-3">Add <i className="fa fa-plus" aria-hidden="true"></i></a>

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
                    </div>
    
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Podcasts Page</h2>
                            </header>
                            <div className="content-body">    

                                <Podcasts podcasts={podcasts} />

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

export default Pages;
