import React from "react";
import '../styles/home.css'
import '../App.css';

import {Container,Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from './../shared/Subtitle';
import worldImg from '../assets/images/world.png';
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import experienceImg from '../assets/images/experience.png'
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";



const Home=() =>{
    return(
    <>
    {/* hero section start*/}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={'Know Before you go'}/>
                    <img src={worldImg} alt="Hey"/>
                    </div>
                <h1>Traveling opens the door to creating
                    <span className="highlight" color="yellow"> memories</span></h1>
                    <p>
                    "Discover the wonders of the world and create unforgettable 
                    memories with us. Immerse yourself in captivating landscape,
                    indulge in vibrant cultures, and embrace thrilling experiences.
                    Let us guide you on a journey of exploration, making your travel dreams a reality."
                    </p>
                </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box">
                        <img src={heroImg} alt="Image"/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box mt-4" >
                        <video src={heroVideo} alt="Video" controls/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box mt-5">
                        <img src={heroImg02} alt="Image"/>
                    </div>
                </Col>
                  <SearchBar/>  
            </Row>
        </Container>
    </section>   
    {/* hero section end*/}
    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services__subtitle">What we serve</h5>
                    <h2 className="services__title">We offer our best services</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
    </section>

    {/* featured tour section start*/}
    <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-5">
                    <Subtitle subtitle={'Explore'}/>
                    <h2 className="featured_tour-title">Our Featured Tours</h2>
                </Col>
                <FeaturedTourList />
            </Row>
        </Container>
    </section>

    {/*experience section starts*/}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                <div className="experience__content">
                    <Subtitle subtitle={'Experience'}/>

                <h2>With all our experience <br/> we will serve you!</h2>
                <p>Throw worries to the wind <br/> and forget all your commitments and do something crazy.</p>
                </div>
                <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                        <span>12k+</span>
                        <h6>Successful trip</h6>
                    </div>
                    <div className="counter__box">
                        <span>2k+</span>
                        <h6>Regular clients</h6>
                    </div>
                    <div className="counter__box">
                        <span>15</span>
                        <h6>Years experience</h6>
                    </div>
                </div>
                </Col>
                <Col lg='6'>
                    <div className="experience__img">
                        <img src={experienceImg} alt=""/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    {/*gallery section start needs to add masonry */}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Gallery'} />
                    <h2 className="gallery__title">Visit our customers tour gallery</h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery />
                </Col>
            </Row>
        </Container>
    </section>

    {/*testimonial section*/}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Fans Love'}/>
                    <h2 className="testimonial__title
                    ">What our fans say about us</h2>
                </Col>
                <Col lg='12'>
                    <Testimonial/>
                </Col>
            </Row>
        </Container>
    </section>
    <Newsletter/>
    </>
    );
};

export default Home;
