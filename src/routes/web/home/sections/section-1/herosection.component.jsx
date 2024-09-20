import "../section-1/herosection.style.scss";
import ReactPlayer from "react-player";
import { HiOutlineStar } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='hero-1'>
        <div className='video'>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=4yTVZNlkdJs'
            height='100%'
            width='100%'
            autoplay
          />
        </div>
        <div className='info'>
          <div className='he'>Become an #1 Alpha at Tech</div>
          <HiOutlineStar /> Instructors from tech companies.
          <br />
          <p></p>
          <HiOutlineStar /> Industry Standard Ciricullum.
          <br />
          <p></p>
          <HiOutlineStar /> 24/7 Support.
        </div>
      </div>
      <div className='hero-2'>
        <div className='formhead'>
          Experience Alphalhub with a Free Live Class
        </div>
        <div className='formholder'>
          <form>
            Alphalhub free demo session
            <input type='text' placeholder='Select a program' required />
            <input type='text' placeholder='Enter your Name' required />
            <input type='email' placeholder='Enter your Email' required />
            <input
              type='tel'
              placeholder='Enter your Number'
              pattern='[0-9]{10}'
              required
            />
            <input type='submit' value='Book your live class' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
