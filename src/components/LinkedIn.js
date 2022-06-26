import { Link } from 'react-router-dom';

export const openInNewTab = () => {
  const newWindow = window.open( 'https://www.linkedin.com/');
  if (newWindow) newWindow.opener = null;
};

function LinkedInCard(props) {
  return (
      <div className="card">
    
      <section><Link className="facebook" to="https://www.linkedin.com/" onClick = {() => openInNewTab(props.link)}>LinkedIn: Aurora</Link></section>
           
      </div>
  );
}
export default LinkedInCard;