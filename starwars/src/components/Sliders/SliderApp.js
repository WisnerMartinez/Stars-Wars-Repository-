import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../img/1.jpg'
import Image2 from '../img/2.jpg'
import Image3 from '../img/3.jpg'
import Image4 from '../img/4.jpg'
import Image5 from '../img/5.jpg'
import Image6 from '../img/6.jpg'
function SliderApp() {
  return (
   <Carousel>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={Image1}
       alt="First slide"
     />
     <Carousel.Caption>
       <h3>First slide label</h3>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={Image2}
       alt="Second slide"
     />

     <Carousel.Caption>
       <h3>Second slide label</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={Image3}
       alt="Third slide"
     />

     <Carousel.Caption>
       <h3>Third slide label</h3>
       <p>
         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
       </p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={Image4}
       alt="Third slide"
     />

     <Carousel.Caption>
       <h3>Third slide label</h3>
       <p>
         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
       </p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={Image5}
       alt="Third slide"
     />

     <Carousel.Caption>
       <h3>Third slide label</h3>
       <p>
         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
       </p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={Image6}
       alt="Third slide"
     />

     <Carousel.Caption>
       <h3>Third slide label</h3>
       <p>
         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
       </p>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>
  )
}

export default SliderApp