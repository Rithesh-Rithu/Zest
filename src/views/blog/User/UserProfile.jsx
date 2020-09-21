import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';
var IMGDIR = process.env.REACT_APP_IMGDIR;

class UserProfile extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">User Profile</h1>
                        </div>
                    </div>


                            



                    <div className="col-xl-12">
                        <section className="box profile-page">
                            <div className="content-body">
                                    <div className="col-12">
                                    <div className="row uprofile">
                                        <div className="uprofile-image col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12">
                                            <img alt="" src={IMGDIR+"/images/blog/users/user-6.jpg"} className="img-fluid" />
                                        </div>
                                        <div className="uprofile-name col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                                            <h3 className="uprofile-owner">
                                                <a href="#!">Eric Nelson</a>
                                            </h3>
                                            
                                            <div className="clearfix"></div>
                                            <p className="uprofile-title"><span className="badge badge-dark text-dark">Admin</span></p>
                                            <div className="clearfix"></div>
                                            <p>Humans can evaluate these visual elements in several situations to find a sense of balance. Humans can evaluate these visual elements in several situations to find a sense of balance.</p>
                                            <p>DOB: 26-10-1990</p>
                                            <p>Gender: Male</p>
                                            <p><a href="/">https://www.ericnelson.github.io</a></p>
                                            <p>Address: 777 Brockton Avenue, Abington MA 2351</p>
                                            <p>City: Los Angeles</p>
                                            <p>State: Califonrnia</p>
                                            <p>Zip: 90001</p>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="col-12">

                                        <hr/>

                                        <h4>Biography:</h4>
                                        <p>
                                            Blog is an art form, blog activity or cultural activity whose medium is sound and silence. The common elements of blog are pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics (loudness and softness), and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a blogal sound). Different styles or types of blog may emphasize, de-emphasize or omit some of these elements. Blog is performed with a vast range of instruments and with vocal techniques ranging from singing to rapping, and there are solely instrumental pieces, solely vocal pieces and pieces that combine singing and instruments.
                                        </p>
                                        
                                        <div className="clearfix"></div>
                                        <hr/>

                                       

                                       




                                    </div>
                                    <div className="col-12">
                                    <h4>Contact:</h4>

                                        <p><i className="fa fa-envelope" aria-hidden="true"></i> ericnelson@gmail.com</p>
                                        <p><i className="fa fa-phone" aria-hidden="true"></i> +1 45234423</p>
                                    <div className="clearfix"></div>
                                    <hr/>

                                    </div>
                                    <div className="row" style={{"marginLeft": "0px"}}>
                                    <div className="col-12">
                                <h4>Social:  </h4>
                                       <p><a><i className="fa fa-facebook-square" aria-hidden="true"></i> https://www.facebook.com/ericnelson</a></p>
                                       <p><a><i className="fa fa-twitter-square" aria-hidden="true"></i> https://www.twitter.com/ericnelson</a></p>
                                       <p><a><i className="fa fa-linkedin-square" aria-hidden="true"></i> https://www.linkedin.com/ericnelson</a></p>

                                    </div>
                                    </div>
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

export default UserProfile;
