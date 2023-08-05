import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {Link} from 'react-router-dom'
import '../style/all.css'
function CategoryPage() {

const {categoryName} = useParams()
const [ products,Setproducts] =useState([])


useEffect(()=>{
axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json=> Setproducts(json.data.products))
},[categoryName])


return (
<div className="container">
<div className="my-5 text-center">
<h1> {categoryName.toUpperCase()} </h1>
<p className="pro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis non maiores sunt quibusdam molestias ratione deserunt, rerum voluptas enim quidem repellendus dolores accusamus unde nulla excepturi maxime officiis earum accusantium.</p>
</div>

<div className="d-flex justify-content-center">
  <div className="row">
    {products.map((val, key) => (
      <div className="col-md-6 my-4" key={key}>
        <Link className="text-decoration-none" to={`/products/${val.id}`}>
          <Card style={{ width: '80%', height: '500px', backgroundColor: 'black', color: 'white' }}>
            <Card.Img variant="top" src={val.thumbnail} style={{ height: '250px', objectFit: 'fill' }} />
            <Card.Body>
              <Card.Title>{val.title} - {val.price}$</Card.Title>
              <Card.Text>
                {val.description}
              </Card.Text>
              <Button variant="primary">View Product</Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
    ))}
  </div>
</div>


</div>
)
}

export default CategoryPage