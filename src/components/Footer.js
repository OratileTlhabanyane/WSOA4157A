import React, { Component } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <div className="socialMedia">
              <p>&copy; 2020 Ocean Live </p>
              <TwitterIcon/><InstagramIcon/><FacebookIcon/><LinkedInIcon/>

          </div>
         
      </div>
    )
  }
}
