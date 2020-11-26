import './App.css';
import Navbar from './Navbar/Navbar';
import facebook from './images/facebook.webp';
import tripAdvisor from './images/tripadvisor.webp';
import instagram from './images/instagram.webp';
import Availability from './Availability/Availability';
import Gallery from './Gallery/Gallery';
import GoogleMapReact from 'google-map-react';

function App() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
  return (
    <div id='home' className="app">
      <Navbar />
      <div className='app__logo'>
        <img src={tripAdvisor} alt='tripAdvisor' />
        <img src={facebook} alt='facebook' />
        <img src={instagram} alt='instagram' />
      </div>
      <h1>Ferofly</h1>
      <h3><hr/>Magnify your Journey<hr/></h3>
      <div className='img-1'></div>
      <Availability />
      <div className='app__about'>
          <h2>ABOUT</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​
          </p>
      </div>
      <div className='img-2' id='rooms'>
        <div>
          <h2>OUR ROOMS</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
          </p>
          <button>Book a Room</button>
        </div>
      </div>
      <div id='todo' className='app__todo'>
        <h2>THINGS TO DO</h2>
        <div>
          {todos.map(t => (
            <div key={t.header}>
              <h4>{t.header}</h4>
              <p>{t.para}</p>
            </div>
          ))}
        </div>
      </div>
      <Gallery />

      <div id='contact' className='app__contact'>
          <h2>CONTACT US</h2>
          <p>
            <span>info@mysite.com</span> / <span>500 Terry Francois Street, San Francisco, CA 94158</span> / <span>Tel: 123-456-7890 </span>
          </p>
          <form>
            <div>
              <input type='text' placeholder='Name*' />
              <input type='text' placeholder='Email*' />  
            </div>            
            <input type='text' placeholder='Subject' />  
            <textarea placeholder='Message' />
            <button>Send</button>
          </form>
      </div>
      
      <div className='app__maps' style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={{lat: 19.076090, lng: 72.877426}}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={19.076090}
            lng={72.877426}
            text={'Mumbai'}
          />
        </GoogleMapReact>
      </div>
      <section className='app__footer'>
        <p>© 2023 by Anton & Lily. Proudly</p>
      </section>
    </div>
  );
}

const todos = [
  {header: 'Wineries Tour', para: "I'm a paragraph. Click here to add your own text and edit me."},
  {header: 'Cultural Sites', para: "I'm a paragraph. Click here to add your own text and edit me."},
  {header: 'Market Tour ', para: "I'm a paragraph. Click here to add your own text and edit me."},
  {header: 'Leisure Activities', para: "I'm a paragraph. Click here to add your own text and edit me."},
  {header: 'Birds Safari', para: "I'm a paragraph. Click here to add your own text and edit me."},
  {header: 'Horse Riding ', para: "I'm a paragraph. Click here to add your own text and edit me."},
];

export default App;
