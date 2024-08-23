import React from 'react';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-section">
      <div className="aboutAuthor">
        <img src={require('../Images/author.jpeg')} alt="" />
        <h1>Sonu Mahata</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In harum necessitatibus distinctio odio et qui, molestiae vel voluptatem iusto? Doloremque hic aliquam possimus ipsam, non atque at corrupti quos consequatur officiis, ducimus id eius porro ullam maiores earum iure Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dicta soluta. Error aspernatur voluptas minima ad. Libero odit quidem error aut fuga pariatur sit quos ipsum, exercitationem perspiciatis reprehenderit nisi rem natus nulla voluptatibus dignissimos praesentium, quas possimus consequatur in magnam maxime aperiam. Eius, autem cupiditate veniam illo mollitia, ducimus blanditiis officiis saepe nihil nam nemo corporis iusto! Consequuntur magni dolore eligendi ratione dolorem ullam voluptatibus ea nam sit esse aspernatur, optio illo reprehenderit totam facilis, labore in animi placeat velit unde exercitationem. Adipisci debitis omnis expedita non doloribus repellat iure sed, voluptate sit aut tempore optio at! Dolores, accusantium?</p>
      </div>
      <div className="otherInfo">
        <div className="aboutInfo">
          <h2>Mission</h2>
          <p>"To delight our guests with exceptional culinary experiences, where every dish tells a story of quality, creativity, and passion. We are committed to sourcing the finest ingredients, showcasing innovative techniques, and providing impeccable service in an atmosphere of warmth and hospitality. Our mission is to create moments of joy, connection, and celebration for all who walk through our doors."</p>
        </div>
        <div className="aboutInfo">
          <h2>Vision</h2>
          <p>"Our vision is to be recognized as a culinary destination of choice, where discerning diners come to indulge their senses and create lasting memories. We aspire to elevate the art of dining by continually pushing the boundaries of gastronomic excellence, fostering a culture of creativity and innovation, and embracing sustainability practices that honor both the environment and the communities we serve. Through our dedication to culinary mastery and genuine hospitality, we aim to inspire, delight, and exceed the expectations of our guests, making our restaurant a cherished part of their lives."</p>
        </div>
        <div className="aboutInfo">
          <h2>Food Policy</h2>
          <p>At our restaurant, the safety and well-being of our guests are our top priorities. We are committed to upholding the highest standards of food safety and hygiene to ensure that every meal served is not only delicious but also safe for consumption. To achieve this, we have implemented proper food safety policy.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
