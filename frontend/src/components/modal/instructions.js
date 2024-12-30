import React from "react";
import { Link } from "react-router-dom";
import "./instructions.css";
import "../forest/forest.css";
import noteIcon from "../../assets/Icons/note.png";

const Instructions = () => {
  return (
    <section className="instructions">
      <div className="instructions" id="introduction">
        <h1 className="title">What is Forest Library?</h1>
        <p className="p">
          Forest Library is a social network for everybody around the world who
          wants to create a good habit for their lives. We believe a better life
          comes with a better habit so let's start by reading some book!
        </p>
        <h1 className="title">A Sappling Once</h1>
        <p className="p">
          Here, you are a <span className="span-tree">tree</span> and you will
          start by adding a <span className="span-leaf">leaf</span> whenever you
          finish reading a book! After your account is created, check your
          profile. You will notice your <span className="span-tree">tree</span>{" "}
          has no <span className="span-leaf">leaf</span>. You can use the search
          bar to look for your book.{" "}
          <span className="span-example"> Ex: The Alchemist </span> Since you
          have found your book, click submit and voila! You have a{" "}
          <span className="span-leaf">leaf</span>! We encourage you to check the
          home page for other <span className="span-tree">trees</span> and read
          their <span className="span-leaf">leaves</span>. You may notice they
          have <span className="span-reviews">reviews</span>when you interact so
          why don't you go ahead and add yours now! On your profile click on the
          recent <span className="span-leaf">leaf</span> you just added. Go
          ahead and add what you think!{" "}
          <span className="span-example">
            Ex: Wow! What a book! I will commit myself to learn how to turn
            things into gold from now on. 5/5{" "}
          </span>
        </p>
        <h1 className="title">Get Inspired</h1>
        <p className="p">
          {" "}
          So you have finished your last book and trying to decide on your new
          journey, click
          <img src={noteIcon} className="music-icon" alt="music note" /> on the
          top right corner for some inspiration. Or just play it along while you
          read your new favorite book!
        </p>
      </div>
    </section>
  );
};

export default Instructions;
