import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import Modal from '../modal/modal'
import './navbar.css'
import song from '../../assets/audioFiles/Gotama - Inner Sanctuary.mp3'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false,
      playing: false,
      musicBgColor: '',
      audio: new Audio(song)
    };

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getLinks = this.getLinks.bind(this); 

    
  }
  
 playPause = () => {

    // Get state of song
    let playing = this.state.playing;

    if (playing) {
      // Pause the song if it is playing

      this.state.audio.pause();
      this.setState({
        musicBgColor: "transparent"
      })
    } else {

      // Play the song if it is paused
      this.state.audio.play();
      this.setState({
        musicBgColor: "orangered"
      })
    }

    // Change the state of song
    this.setState({ playing: !playing });
  };
  // componentDidMount() {
  // }

  // componentWillUnmount() {
  //   audio.removeEventListener('ended', () => this.setState({ play: false }));  
  // }

  // togglePlay = () => {
  //   this.setState({ play: !this.state.play }, () => {
  //     this.state.play ? this.audio.play() : this.audio.pause();
  //   });
  // }

  showModal(){
    this.setState({
      modal: true
    })
  }

  hideModal(){
    this.setState({
      modal: false
    })
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  handleClick(route){
    return (e) => this.props.history.push(route);
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className='links-container'>
                <div onClick={this.handleClick(`/users/${this.props.session.id}/profile`).bind(this)}>My Tree</div>
                {/* <Link to="/users/profile">My Tree</Link> */}
   
                <div onClick={this.handleClick('/').bind(this)}>Home</div>
                <div style={{borderColor: this.state.musicBgColor}}>
                  <img id="music-icon" src="https://image.flaticon.com/icons/png/16/898/898792.png" onClick={this.playPause}/>
                </div>
                <div onClick={this.logoutUser}>Logout</div>
            </div>
        );
      } else {
        return (
            <div className='links-container'>
                <div onClick={this.handleClick('/register').bind(this)}>Signup</div>
                <div onClick={this.handleClick('/login').bind(this)}>Login</div>
            </div>
        );
      }
  }

  render() {
      return (
        <div className='nav-bar-container'>
          
            <div className='nav-bar-logo' onClick={this.handleClick('/').bind(this)}>Forest Library</div>

              <Modal show={this.state.modal} handleClose={this.hideModal} />
                            <div 
                className="nav-icons" 
                id="instructions-icon"
                >
                      <img src="https://image.flaticon.com/icons/png/64/4293/4293075.png" id="img-instructions" onClick={this.showModal}/>
                </div>
            { this.getLinks() }
            
        </div>
      );
  }
}

export default withRouter(NavBar);