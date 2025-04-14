import "../../App.css"
import "./SpecialOffers.css"

import pic1 from "../../assets/img_1.jpg"
import pic2 from "../../assets/img_2.jpg"
import pic3 from "../../assets/img_3.jpg"
import pic4 from "../../assets/img_4.jpg"
import pic5 from "../../assets/spring.webp"
import pic6 from "../../assets/city.jpg"
import pic7 from "../../assets/boat.jpg"
import pic8 from "../../assets/JackPicture/china.jpg"

const destinations = [
  { id: 1, name: "Hallstatt Village", location: "Austria", price: 610, image: pic1 },
  { id: 2, name: "Santorini Cliffs", location: "Greece", price: 720, image: pic2 },
  { id: 3, name: "Arashiyama Bamboo Grove", location: "Japan", price: 680, image: pic3 },
  { id: 4, name: "Desert Safari", location: "UAE", price: 530, image: pic4 },
  { id: 5, name: "Banff National Park", location: "Canada", price: 590, image: pic5 },
  { id: 6, name: "Plitvice Lakes", location: "Croatia", price: 640, image: pic6 },
  { id: 7, name: "Table Mountain", location: "South Africa", price: 570, image: pic7 },
  { id: 8, name: "Cinque Terre", location: "China", price: 700, image: pic8 },
]


const DestinationCard = ({ name, location, price, image }) => {
  return (
    <div className="destination-card">
      <img src={image || "/placeholder.svg"} alt={name} className="destination-img" />
      <div className="card-content">
        <div className="card-info">
          <div>
            <h5 className="destination-title">{name}</h5>
            <p className="destination-location">
              <i className="fa-solid fa-location-dot"></i> {location}
            </p>
          </div>
          <div className="price-tag">
            <span className="dollar-sign">$</span>
            <span className="price-value">{price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SpecialOffers() {
  return (
    <section className="special-offers">
      <div className="offers-container">
        <div data-aos="fade-up" data-aos-duration="1300" className="offers-header">
          <h2 className="section-title">SPECIAL OFFERS & DISCOUNTS</h2>
          <p className="section-description">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
            ocean.
          </p>
        </div>

        {/* First row */}
        <div data-aos="fade-up" data-aos-duration="1300" className="card-row">
          {destinations.slice(0, 4).map((destination) => (
            <div key={destination.id} className="card-col">
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>

        {/* Second row */}
        <div data-aos="fade-up" data-aos-duration="1300" className="card-row">
          {destinations.slice(4, 8).map((destination) => (
            <div key={destination.id} className="card-col">
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
