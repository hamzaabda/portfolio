import React, { Component } from 'react'

class Footer extends Component {
  render() {
    let networks = null
    if (this.props.data && this.props.data.social) {
      networks = this.props.data.social.map((network) => (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      ))
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

           

            <ul className="copyright">
              <li>&copy; 2025 Hamza Abda. All rights reserved.</li>
              <li>
                Design by{' '}
                <a title="Hamza Abda Portfolio" href="https://github.com/hamzaabda" target="_blank" rel="noopener noreferrer">
                  Hamza Abda
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
