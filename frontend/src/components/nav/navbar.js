import React from "react";
import { withRouter } from "react-router-dom";
import Modal from "../modal/modal";
import "./navbar.css";
import song from "../../assets/audioFiles/Gotama - Inner Sanctuary.mp3";
import helpIcon from "../../assets/Icons/help_2.png";
import musicIcon from "../../assets/Icons/note.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      playing: false,
      musicBgColor: "",
      audio: new Audio(song),
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
        musicBgColor: "lightgray",
      });
    } else {
      // Play the song if it is paused
      this.state.audio.play();
      this.setState({
        musicBgColor: "orangered",
      });
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

  showModal() {
    this.setState({
      modal: true,
    });
  }

  hideModal() {
    this.setState({
      modal: false,
    });
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleClick(route) {
    return (e) => this.props.history.push(route);
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({ username: "demo", password: "123456" }); //.then(this.props.history.push('/users/6148f9737c929f02f3991ffe'));
  }
  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="links-container">
          <div
            onClick={this.handleClick(
              `/users/${this.props.session.user.id}/profile`
            ).bind(this)}
          >
            My Tree
          </div>

          <div onClick={this.handleClick("/").bind(this)}>Home</div>
          <div style={{ borderColor: this.state.musicBgColor }}>
            <img
              id="music-icon"
              src={musicIcon}
              onClick={this.playPause}
              alt="music"
            />
          </div>
          <div onClick={this.logoutUser}>Logout</div>
        </div>
      );
    } else {
      return (
        <div className="links-container">
          <div onClick={this.demoLogin.bind(this)}>Demo</div>
          <div onClick={this.handleClick("/register").bind(this)}>Signup</div>
          <div onClick={this.handleClick("/login").bind(this)}>Login</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar-container">
        <div
          className="nav-bar-logo"
          onClick={this.handleClick("/").bind(this)}
        >
          Forest Library
        </div>

        <Modal show={this.state.modal} handleClose={this.hideModal} />
        <div className="nav-icons" id="instructions-icon">
          <img
            src={helpIcon}
            id="img-instructions"
            onClick={this.showModal}
            alt="instructions"
          />
        </div>
        {this.getLinks()}
      </div>
    );
  }
}

export default withRouter(NavBar);
