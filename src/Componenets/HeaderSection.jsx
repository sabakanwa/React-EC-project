import React from 'react'
import '../style/header.css'
import { Carousel } from 'react-bootstrap';




function HeaderSection() {


  return (
   <>
  
<div className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <div>
              <h1 className="text-white">Clicky Online Shopping</h1>
              <p className="text">
                <i>One Stop Shop For everything <br />
                Explore our extensive catalog, add your favorite items to the cart, and enjoy a seamless checkout process. Our secure payment gateways ensure that your transactions are safe and protected. <br />
                Start your online shopping journey with Clicky today and discover the joy of convenient and reliable shopping at your fingertips.</i>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <Carousel interval={3000} fade controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975922.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images04.nicepage.com/feature/612016/ecommerce-websites.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2020-07/loaf.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://content.pymnts.com/wp-content/uploads/2020/04/ecommerce-online-shopping-retail.jpg"
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>








    
    <div>
      <img className='img-fluid' src="https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?w=2000" alt="" />
    </div>
   </>
  )
}

export default HeaderSection