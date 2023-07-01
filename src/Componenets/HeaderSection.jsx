import React from 'react'


function HeaderSection() {
  return (
   <>
   <div className='bg-dark' >
   <div style={{width:'95vw' , height:'90vh'}} className="d-flex justify-content-center align-items-center">
   <div><img  style={{width:'95vw'}} className='img-fluid ' src="https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975922.jpg" alt="" /></div>
   <div className="container">
    <h1 className="text-white" >Clicky</h1>
    <p className="text-white">One Stop Shop For everything <br />Explore our extensive catalog, add your favorite items to the cart, and enjoy a seamless checkout process. Our secure payment gateways ensure that your transactions are safe and protected. <br />Start your online shopping journey with Clicky today and discover the joy of convenient and reliable shopping at your fingertips.</p>
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