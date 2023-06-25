import React from 'react';
import './newsletter.css';
import maleTourist from '../assets/images/male-tourist.png';
import  {Container,Row,Col} from 'reactstrap';



const Newsletter=()=>
{
    return (<section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>Subscribe now to know more!</h2>
                <div className='newsletter__input'>
                    <input type="email" placeholder="Enter your mail"/>
                    <button className='btn newsletter_btn'>Subscribe</button> <br/><br/> 
                    </div>
                <p>
                The smooth takeoff and landing added to the <br/>
                overall pleasant experience.I highly recommend flight travel
                </p>
                </div>
            </Col>
            <Col lg='6'>
                <div className='newsletter_img'>
                    <img src={maleTourist} alt=""/>
                </div>

            </Col>
        </Row>
    </Container></section>
    );
};

export default Newsletter