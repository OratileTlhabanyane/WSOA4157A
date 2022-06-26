import { Link } from 'react-router-dom';

export const openInNewTab = () => {
  const newWindow = window.open( 'mailto:theconversationza@gmail.com')
  if (newWindow) newWindow.opener = null;
};

function GmailCard(props) {
  return (
      <div className="card">

        <section><Link className="u-email" to="mailto:theconversationza@gmail.com" onClick = {() => openInNewTab(props.link)}>Gmail: theconversationza@gmail.com</Link></section>
          
      </div>
  );
}
export default GmailCard;