import React from 'react'
import '../style/header.css'

function HeaderSection() {
  return (
   <>
  <div className='bg-dark '>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <img src="https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975922.jpg" alt="" className="img-fluid" />
          </div>
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