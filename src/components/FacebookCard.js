import { Link } from 'react-router-dom';

export const openInNewTab = (url) => {
  const newWindow = window.open( 'https://www.facebook.com/');
  if (newWindow) newWindow.opener = null;
};

function FacebookCard(props) {
  return (
      <div className="card">
    
        <section><Link className="facebook" to="https://www.facebook.com/" onClick = {() => openInNewTab(props.link)}>Facebook: Aurora</Link></section>
             
      </div>
  );
}
export default FacebookCard;