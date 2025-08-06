import React, { Component } from 'react'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLangOptions: false
    }
    this.handleDownloadClick = this.handleDownloadClick.bind(this)
    this.downloadCV = this.downloadCV.bind(this)
  }

  convertDriveLinkToDirectDownload(url) {
    const regex = /https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view.*/
    const match = url.match(regex)
    if (match && match[1]) {
      const fileId = match[1]
      return `https://drive.google.com/uc?export=download&id=${fileId}`
    }
    return url
  }

  handleDownloadClick() {
    this.setState({ showLangOptions: true })
  }

  downloadCV(lang) {
    const { resumedownload } = this.props.data || {}

    if (!resumedownload || !resumedownload[lang]) {
      alert('Download link not available for selected language.')
      return
    }

    const url = this.convertDriveLinkToDirectDownload(resumedownload[lang])
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `CV_Hamza_Abda_${lang}.pdf`)
    link.setAttribute('target', '_blank')
    link.setAttribute('rel', 'noopener noreferrer')

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    this.setState({ showLangOptions: false }) // Fermer les options
  }

  render() {
    if (!this.props.data) return <div>Loading...</div>

    const { name, image, bio, address, email } = this.props.data
    const profilepic = 'images/' + image

    const { showLangOptions } = this.state

    return (
      <section id='about'>
        <div className='row'>
          <div className='three columns'>
            <img className='profile-pic' src={profilepic} alt='Profile' />
          </div>
          <div className='nine columns main-col'>
            <h2>About Me</h2>
            <p>{bio}</p>

            <div className='row'>
              <div className='columns contact-details'>
                <h2>Contact Details</h2>
                <p className='address'>
                  <span>{name}</span>
                  <span>
                    {address.street}<br />
                    {address.city} {address.state}, {address.zip}
                  </span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>

              <div className='columns download'>
                <p>
                  <button
                    onClick={this.handleDownloadClick}
                    className='button'
                    style={{ cursor: 'pointer' }}
                  >
                    <i className='fa fa-download'></i> Download Resume
                  </button>
                </p>

                {/* Langue options */}
                {showLangOptions && (
                  <div style={{ marginTop: '10px' }}>
                    <p style={{ marginBottom: '5px' }}>Choose a language:</p>
                    <button
                      className='button'
                      style={{ marginRight: '10px' }}
                      onClick={() => this.downloadCV('en')}
                    >
                      English
                    </button>
                    <button
                      className='button'
                      onClick={() => this.downloadCV('fr')}
                    >
                      Français
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
