import { Link } from 'react-router-dom';

export const openInNewTab = () => {
  const newWindow = window.open( 'https://www.instagram.com/');
  if (newWindow) newWindow.opener = null;
};

function InstagramCard(props) {
  return (
      <div className="card">
         
        <section><Link className="u-email" to="https://www.instagram.com/" onClick = {() => openInNewTab(props.link)}>Instagram: Aurora</Link></section>
          
      </div>
  );
}
export default InstagramCard;