import React from 'react'

import "./Home.css"
const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-content">
        <div className="home-para">
            <h1>DeliciousRestaurant: Where Flavor Finds Its Home</h1>
            <p>Discover a symphony of flavors expertly crafted by our passionate chefs, who blend tradition with innovation to create dishes that tantalize the senses and ignite the imagination. From the vibrant colors of farm-fresh produce to the rich aromas of carefully selected spices, each ingredient tells a story of authenticity and <br />
Embrace the warmth of our inviting ambiance, where sleek design meets cozy comfort, and every table is set for moments of connection and indulgence. Whether you're gathering with loved ones for a special occasion or simply seeking a respite from the everyday hustle, our doors are open, and our tables are set just for you</p>
        </div>
        <img src={require('../Images/background.jpg')} alt="Picture will be uploaded here" />
      </div>
      <div className="home-content">
        <img src={require('../Images/food.jpeg')} alt="Picture will be uploaded here" />
        <div className="home-para">
            <h1>Our Speciality</h1>
            <p>At our restaurant, we pride ourselves on curating a menu that blends the best of global culinary traditions with locally sourced ingredients, ensuring each dish is a harmonious symphony of taste and texture. From the first bite to the last, every morsel tells a story of craftsmanship and dedication to culinary excellence. <br />Join us and embark on a culinary journey unlike any other. Whether you're a seasoned food enthusiast or simply seeking a memorable dining experience, our restaurant invites you to savor the moment, indulge your senses, and create lasting memories with every visit. Welcome to a world of culinary delight—welcome to our restaurant.</p>
        </div>
      </div>
      <div className="AdditionalInfo">
        <div className="info">
          <h3>Location</h3>
          <p>12/24, Nirmal Road <br /> Main Bazaar, Durgapur <br />West Bengal-713214</p>
        </div>
        <div className="info">
          <h3>Opening Schedules</h3>
          <p>Monday - Friday : 4 P.M - 9 P.M <br /> Saturday - Sunday : 4 P.M - 11 P.M </p>
        </div>
        <div className="info">
          <h3>Contact Details</h3>
          <p>Email :- codingrestaurant@gmail.com <br />Mob : 3216549870 , 3216549870</p>
        </div>
      </div>
    </div>
  )
}

export default Home
