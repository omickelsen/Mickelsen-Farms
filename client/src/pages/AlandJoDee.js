import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Parents from '../images/alandjodee.JPEG'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Footer from '../components/layout/Footer'







const AlandJodee = () => {
    return (

        <div>
            <Header />
            <div className="container">
                <div className='service-container'>
                    <h1 className="service-title">Alfred and JoDee Mickelsen</h1>
                </div>
            </div>
            <Container>
                <Row>
                    <Col > <div className="row">
                        <div className="photo-container">
                            <img src={Parents} className="familyphoto" />
                        </div>
                    </div>
                    </Col>
                    <Col>
                        {/* <div className="second-container"> */}
                        <div>
                            <div className="row">
                                <div className="about-farm-container">
                                    <h1 className="about-farm-title">About Us</h1>
                                    <p>
                                        <ul className="about-farm-list">
                                            <li>JoDee Mickelsen: I grew up on a farm/ranch in Southeastern Idaho and have been riding horses for over 50 years. I am a mother of 6 children and 10 grandchildren. I have taught all my children how to ride and am currently teaching my grandchildren how to ride. I want to help others learn to ride horses and love them as much as I do. I have been giving lessons off and on for the past 30 years here in Pleasant Grove. My past experience with horses includes: herding cattle, trail riding, barrel racing, 4-H instructor, competition showing -- bareback, Western and English equitation, Western Horsemanship, halter showmanship, jumping and training horses. I have trained horses and worked with a trainer in Texas for 3 weeks that trained under the trainer, Ray Hunt. One of my students, Olivia Lindstrom, recently won Pleasant Grove Rodeo Queen and also gives lessons here. I am an elementary education teacher and have always loved teaching and working with others. My philosophy for teaching horse lessons is to teach the rider to not just get on a horse and sit but teach the rider how to develop a trusting relationship between horse and rider that is more beneficial and lasting. I also teach horse training techniques to help the rider be able to master the skill of working with more difficult horses. I start the rider at the level that works best for him or her and then advance them to learn different skills to keep them progressing. I usually start western riding, advance to bareback, trail riding. When they are showing efficiency in Western riding, I usually introduce English riding and small jumps. I am not a dressage or larger jumping facility. I am equipped with lesson horses from beginner to advanced riding levels. My lesson horses ihclude: a beginner pony, a beginner quarter horse, an intermediate quarter horse, a more-advanced rider American Saddlebred horse, a Thoroughbred/Quarter horse cross, and access to other horses with varying degrees of difficulty for lesons too. I have two foals this year that I will be training for the next few years, if a student wants to learn how to do this. With my busy schedule of being a teacher, foring for my mom, and being a grandparent, I felt it was necessary to expand my teaching pool.</li>
                                            <li>Al Mickelsen: Al was born in the Islands of Tonga and migrated as a older boy to America. He was raised his teenage years on a farm in Idaho and learned all the skills needed to help sustain a farm. He met and married JoDee over 30 years ago and they started their farm together. Since that time Al is the main caretaker for all the animals and has become a proficient horse rider himself. He also went to Texas with JoDee and learned horse training skills working with Ben Quinters. All the horses have a genuine love for him being their caretaker. Whenever anyone can’t catch their horse in the field, Al can walk right up to them. He truly has learned to love working with animals on a daily basis and doesn’t even mind shoveling the waste.
</li>
                                        </ul>
                                    </p>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="aj-team-container">
                                    <h1 className="about-team-title">Contact Us</h1>
                                    <h1>
                                        <nav className="nav social-nav pull-center d-none d-lg-inline">
                                            <a href="https://twitter.com/mickelsen_s"><i className="fab fa-twitter"></i></a><a href="https://www.facebook.com/MickelsenFamilyFarms/"><i className="fab fa-facebook"></i></a> <i className="fa fa-envelope"> alandjodee@msn.com</i>
                                        </nav>
                                    </h1>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}



export default AlandJodee