// eslint-disable-next-line no-unused-vars
import buttonStyle from '../buttonStyle.css';
import {useState} from 'react';


function Button() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1563409236249-20d249f24874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGR1Y2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1627329539752-cc823b1a7b12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGR1Y2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1578956919791-af7615c94b90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVja3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"  ];
  function Toggle(){
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log("helloo");
  }
  return(
    <div class="App">
    <img src={images[currentImageIndex]} alt="Duck" style={{width:"400px"}} />
    <button onClick={Toggle} className="normalButton">
      Click here
    </button>
    </div>
  );
}
export default Button;
