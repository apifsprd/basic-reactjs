import logo from './logo.svg';
import './App.css';
import ReviewItems from './ReviewItems';
import propTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
      <Photo />
      <Desk name="LFC Home 21/22" category="JERSEY" isDiscount="yes" />
      <ReviewItems />
    </div>
  );
}

function Photo() {
  return (
    <div className="Photo">
      <img src="lfc-home-2122.jpg"/>
    </div>
  )
}

function Desk(props) {
  const {category, name, isDiscount} = props;
  const benefits = ['The Match day version is an Elite Performance Jersey with a slim fit for a tailored feel', 'Developed for athletes, it is the on-pitch choice', 'Nike Dri-FIT ADV technology helps you stay dry and comfortable', 'Raised knit in high-heat areas provides additional breathability and delivers a unique look', '100% recycled polyester fabric'];
  const listBenefits = benefits.map((itemBenefit) => <li key={itemBenefit}>{itemBenefit}</li>)
  return (
    <div className="Desk">
      <p className="Cate"><strong>{category}</strong></p>
      <h1 className="Title">{name}</h1>
      <p className="Price">IDR 987.000,00</p>
      <CheckDiscount isDiscount={isDiscount} discount={50} />
      <p className="Info">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
      <ul>{listBenefits}</ul>
      <a onClick={(e) => addCart(name, e)} href="#">Add to Cart</a>
    </div>
  )
}

function addCart(e){
 console.log('Membeli produk ' + e);
}

function CheckDiscount(props) {
  const {isDiscount, discount} = props;
  if (isDiscount){
    return (
      <p>Discount {discount}% off</p>
    )
  }else{
    return(
      <p>Belum ada discount</p>
    )
  }
}

CheckDiscount.propTypes = {
  discount: propTypes.number.isRequired
}


export default App;
