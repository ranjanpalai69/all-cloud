import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import ImageCarousel from './ImageCarousel';
import { FaRegCirclePlay } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='w-100'>
      <div className='bgcolor'>
        <div className='d-flex justify-content-around align-items-center mx-4 px-4' >
          <div md={6}>
            <h1>Unified lending technology built to hyper-scale</h1>
            <br />
            <h6>Super secure and highly configurable technology that adds more power to your lending operations. Loan Origination, Management, and Collections are made extremely efficient.</h6>
            <br />
            <div className='w-100 d-flex gap-2' >
              <Button variant='primary' className='p-2'>See how it works</Button>
              <Button variant="outline-primary" className='p-2'>Talk to our experts <FaArrowRight /></Button>
            </div>
          </div>
          <div md={6} className='text-center'>
            <img src="https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif" alt="poster" className="img-fluid" style={{ height: "auto", width: "70%", borderRadius: "10px" }} />
          </div>
        </div>
        <div className=' pt-4 '>
          <h2 className='text-center mb-3'>Empowering the Core of Lending</h2>
          <h6 className='text-center mb-3'>Globally loved by teams that build lending products at speed and scale</h6>

        </div>
        <div className=' py-4' >
          <ImageCarousel />
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className="circle-cont">
        <br />
        <h1 style={{ color: "white", fontWeight: "normal" }} className='text-center py-4'>Fast-track customer acquisition with our <span style={{ color: "#51F92B" }}>Unified Lending</span> Technology</h1>
        <div className='p-4 d-flex gap-3 justify-content-center align-items-center' style={{ fontSize: "2rem", color: "whitesmoke" }}>
          <span style={{ fontSize: "4rem" }}><FaRegCirclePlay /></span> <span>Take a look behind the scenes</span>
        </div>
        <br />
        <br />
        <div className="service-cont">

          <div style={{backgroundColor:"#6096FF"}}>
            <img src="https://assets-global.website-files.com/63b435b50cf3c54c440003c3/64b7a278f12bc6fafbb3a3c2_Vector%20(87).webp" alt="service-1" />
            <div>
              <h1 style={{color:"#1D4DAB"}}>6+ Countries</h1>
              <p style={{color:"#3B6ED1"}}>Global Presence</p>
            </div>
          </div>
          <div style={{backgroundColor:"#FFDC60"}}><img src="https://assets-global.website-files.com/63b435b50cf3c54c440003c3/64b7a2780153a18640fe660c_Group%2036808.webp" alt="service-1" />
            <div>
              <h1 style={{color:"#8E720C"}}>530+</h1>
              <p style={{color:"#8E720C"}}>leading Businesses</p>
            </div></div>
          <div style={{backgroundColor:"#82CEFD"}}><img src="https://assets-global.website-files.com/63b435b50cf3c54c440003c3/64b7a278d4bc082efa00f000_001-clipboard.webp" alt="service-1" />
            <div>
              <h1 style={{color:"#136394"}}>45 Lakh</h1>
              <p  style={{color:"#136394"}}>Loans Empowered</p>
            </div></div>
          <div style={{backgroundColor:"#FFADAD"}}><img src="https://assets-global.website-files.com/63b435b50cf3c54c440003c3/64b7a278343999e752f8a347_Group%2036913.webp" alt="service-1" />
            <div>
              <h1 style={{color:"#A2433C"}}>135+</h1>
              <p style={{color:"#A2433C"}}>Expert team</p>
            </div></div>

        </div>
      </div>
      <div className="bgcolor py-4">
            <h1 className='text-center py-4'>Get unfair advantage in achieving seamless lending operations</h1>
            <br />
            <br />
            <div className='whyus-cont p-4'>
               <div>
                <img src="https://assets-global.website-files.com/63b435b50cf3c54c440003c3/63d24e86d30e66415cfe8749_Frame%2036874.webp" alt="" className='whyus-img'/>
                <div>
                  <h2>Quick go to market</h2>
                  <p>Align Business goals by configuring credit products with a few clicks and meet every customer need, made possible with numerous integrations and super solid Low Code platform.</p>
                </div>
               </div>
               <div> <img src="https://assets-global.website-files.com/63b435b50cf3c54c440003c3/63d24e93da49818efba8fd6e_Frame%2036885.webp" alt="" className='whyus-img'/>
                <div>
                  <h2>Quick go to market</h2>
                  <p>Align Business goals by configuring credit products with a few clicks and meet every customer need, made possible with numerous integrations and super solid Low Code platform.</p>
                </div></div>
               <div> <img src="https://assets-global.website-files.com/63b435b50cf3c54c440003c3/63d24e9336b8c4d9ea739411_Frame%2036886.webp" alt="" className='whyus-img' />
                <div>
                  <h2>Quick go to market</h2>
                  <p>Align Business goals by configuring credit products with a few clicks and meet every customer need, made possible with numerous integrations and super solid Low Code platform.</p>
                </div></div>
            </div>
      </div>
    </div>
  )
}

export default Home
