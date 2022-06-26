import { Link } from 'react-router-dom';

export const openInNewTab = () => {
  const newWindow = window.open("https://www.google.com/maps/place/16+Jubilee+Pl,+Jukskei+Park,+Randburg,+2188/data=!4m2!3m1!1s0x1e957683cdf09103:0x775e7a3b81cd6389?sa=X&ved=2ahUKEwi0uKaqscrxAhU1QUEAHYnVBHEQ8gEwAHoECAMQAQ");
  if (newWindow) newWindow.opener = null;
};

function LocationCard(props) {
  return (
      <div className="card">
      
          <section> <Link className="p-street-address"  to="https://www.google.com/maps/place/16+Jubilee+Pl,+Jukskei+Park,+Randburg,+2188/data=!4m2!3m1!1s0x1e957683cdf09103:0x775e7a3b81cd6389?sa=X&ved=2ahUKEwi0uKaqscrxAhU1QUEAHYnVBHEQ8gEwAHoECAMQAQ"onClick = {() => openInNewTab(props.link)}>Address: 16 Jubilee street, Randburg</Link></section>
       
      </div>
  );
}
export default LocationCard;