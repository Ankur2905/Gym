import { Check} from 'lucide-react'
import React from "react"
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      duration: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF-YEARLY",
      price: 34000,
      duration: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 67000,
      duration: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>ELITE EDGE PLANS</h1>
      <div className="wrapper">
        {
          pricing.map(element=>{
            return (
              <div className="card" key={element.title}>
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs {element.price}</h3>
                  <p>For {element.duration} Months</p>
                </div>
                <div className="description">
                  <p>
                    <Check /> Equipment
                  </p>
                  <p>
                    <Check /> All Day Free Training
                  </p>
                  <p>
                    <Check /> Free Restroom
                  </p>
                  <p>
                    <Check /> 24/7 Skilled Support
                  </p>
                  <p>
                    <Check /> 20 Days Freezing Option
                  </p>
                  <Link to={"/"}>Join 
                  now</Link>
                </div>
              </div>
            );
          })
        }
      </div>

    </section>
  )
}
export default Pricing