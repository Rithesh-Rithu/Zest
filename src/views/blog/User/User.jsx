import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    BlogUserslist
} from 'components';

import { bloguser } from 'variables/blog/bloguser.jsx';

var BASEDIR = process.env.REACT_APP_BASEDIR;

class User extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">User</h1>
                                
                        </div>
                    </div>


                            
           

                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Users</h2>
                                <a href={BASEDIR+'/user/add-user'} className="btn btn-success btn-sm float-right px-3 m-3">Add <i className="fa fa-plus" aria-hidden="true"></i></a>

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


                            <div className="row">
                            
                                    <div className="col-12 col-md-9">

                                <BlogUserslist bloguser={bloguser} />

                                    </div>
                                
                                    <div className="col-12 col-md-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title text-center"><b>Active Users</b></h5>
                                                <div className="">
                                                    <ul className=""><span className="dot mx-2"></span> Colin Taylor</ul>
                                                    <ul className=""><span className="dot mx-2"></span> Grace Turner</ul>
                                                    <ul className=""><span className="dot mx-2"></span> Irene Smith</ul>
                                                    <ul className=""><span className="dot mx-2"></span> Evan Short</ul>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="card">

                                    <div class="card-body">
                                        <h5 class="card-title text-center"><b>In-active Users</b></h5>
                                            <div className="">
                                                    <ul className=""><i className="fa fa-user mx-2" aria-hidden="true"></i> Colin Taylor</ul>
                                                    <ul className=""><i className="fa fa-user mx-2" aria-hidden="true"></i> Grace Turner</ul>
                                                    <ul className=""><i className="fa fa-user mx-2" aria-hidden="true"></i> Irene Smith</ul>
                                                    <ul className=""><i className="fa fa-user mx-2" aria-hidden="true"></i> Evan Short</ul>
                                            </div>
                                            </div>
                                    </div>
                                    <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title text-center"><b>Blocked Users</b></h5>
                                            <div className="">
                                                <ul className=""><i className="fa fa-ban mx-2" aria-hidden="true"></i> Colin Taylor</ul>
                                                <ul className=""><i className="fa fa-ban mx-2" aria-hidden="true"></i> Grace Turner</ul>
                                                <ul className=""><i className="fa fa-ban mx-2" aria-hidden="true"></i> Irene Smith</ul>
                                                <ul className=""><i className="fa fa-ban mx-2" aria-hidden="true"></i> Evan Short</ul>
                                            </div>
                                    </div>
                                </div>
                                <div class="card">

                                <div class="card-body">
                                    <h5 class="card-title text-center"><b>Deleted Users</b></h5>
                                        <div className="">
                                                <ul className=""><i className="fa fa-trash mx-2" aria-hidden="true"></i> Colin Taylor</ul>
                                                <ul className=""><i className="fa fa-trash mx-2" aria-hidden="true"></i> Grace Turner</ul>
                                                <ul className=""><i className="fa fa-trash mx-2" aria-hidden="true"></i> Irene Smith</ul>
                                                <ul className=""><i className="fa fa-trash mx-2" aria-hidden="true"></i> Evan Short</ul>
                                        </div>
                                </div>
</div>


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

export default User;
