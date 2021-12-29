import React from 'react'
import './HomepageList.style.scss'
import  CustomButton from '../CustomButton/customButton.component'
import { Container,Row,Col } from 'react-bootstrap'


const HomepageList =({name,description,imageUrl,order,btntext})=>{

  return (
      <>
       <Container >
      {order % 2 == 0 ?
     
     
        <Row className='align-items-center'>
        
      <Col md={9}>
        <div className='middle'>
      <h1>{name}</h1>
      <p>{description}</p>
      <CustomButton type="submit"> Explore {btntext}</CustomButton>
      </div>
      </Col>
      <Col md={3} >
      <img src={imageUrl} className='image' alt={btntext}/>
      </Col>
      </Row>
     
       :
       <Row className='align-items-center'>
         
        <Col md={3}>
       <img src={imageUrl} className='image' alt={btntext}/>
      </Col>
      <Col md={9}>
      <div className='middle'>
      <h1>{name}</h1>
      <p>{description}</p>
      <CustomButton type="submit"> Explore {btntext}</CustomButton>
      </div>
      </Col>
      </Row> 
      
       }
     
     </Container>
      
      </>
  )  

}

export default HomepageList