import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';

import {
    
} from 'components';
var IMGDIR = process.env.REACT_APP_IMGDIR;

class SingleBlog extends React.Component{
   
    
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


                            
    

                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Review your article</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row">
                                    <div className="col-12">


                                        <div className="blog_post full_blog_post">
                                            <h3><NavLink to='#!'>Contrast and Similarity in Graphic Design</NavLink></h3>
                                            <h5>Written by <a href="#!">Me</a> on May 11, 2013.</h5>
                                            <p className="blog_info">
                                                <i className="i-bubble"></i> <a href="#comments">3 comments</a>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <i className="i-tag"></i> <a href="#!">responsive</a> <a href="#!">web</a> <a href="#!">mobile</a>
                                            </p>

                                            <div className="blog-content">

                                                <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>

                                                <img alt="" className="media-object" src={IMGDIR+"/images/blog/blogs/blog-1.jpg"} />

                                                <p>Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space). "Balance" is a concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance. A design composition does not have to be symmetrical or linear to be considered balanced, the balance is global to all elements even the absence of content. In this context perfectly symmetrical and linear compositions are not necessarily balanced and so asymmetrical or radial distributions of text and graphic elements can achieve balance in a composition.</p>

                                                <p>Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships. For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways. Another way to describe contrast, is to say "a small object next to a large object will look smaller". As contrast in size diminishes, monotony is approached.</p>

                                                <p>Making a specific element stand out or draw attention to the eye. Emphasis can be achieved in graphic design by placing elements on the page in positions where the eye is naturally drawn, by using other principles such as contrast, repetition, or movement. Bold and italic type provides emphasis for text. Graphic elements gain emphasis through size, visual weight, color, complexity, uniqueness, placement on the page, and other features.</p>

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

export default SingleBlog;
