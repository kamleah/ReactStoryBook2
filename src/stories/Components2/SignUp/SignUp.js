import React from "react";
import Label from "../Label/Label";
import Linked from "../Link/Link";
import Input from "../Input/Input";
import LabelButton from "../LabelButton/LabelButton";
import Button2 from "../Button2/Button2";
import "./SignUp.css";
function SignUp() {
  return (
    <div className="signUp">
      <div className="topContent">
        <h1>
          <Label labelFor="Sign UP" text="Sign UP" />
        </h1>
        <span>
          <p>
            Already have account?
            <Linked to="abc.com" LinkLabel="Log In" />
          </p>
        </span>
      </div>
      <div className="middleContent">
        <div className="middleLeft">
          <Input type="email" placeholder="Email" />
          <Input type="email" placeholder="Type Your Email Again" />
          <Input type="password" placeholder="Enter Password" />
          <Input type="password" placeholder="Type Your Password Again" />
          <Button2 buttonText="Sign up" />
        </div>

        <div className="middleRight">
          <LabelButton
            LabelButtonImg="https://www.facebook.com/images/fb_icon_325x325.png"
            LabelButtonalt="FaceBookImg"
            LabelButtonText="Continue with FaceBook"
          />
          <br></br>
          <br></br>

          <LabelButton
            LabelButtonImg="https://stocknews.com/cdn-cgi/image/fit=scale-down,format=auto,q=50,onerror=redirect,height=540/https://stocknews.com/wp-content/uploads/2019/06/Google-logo-1.png"
            LabelButtonalt="GoogleImg"
            LabelButtonText="Continue with Google"
          />
        </div>
      </div>
      <div className="bottomContent">
        <p>
          *By signing up you are agree to our terms of Use and to <br></br>{" "}
          reciev emails and updates and acknowwleddge that you react our terms
          and policy.{" "}
        </p>
      </div>
    </div>
  );
}

SignUp.propTypes = {};

export default SignUp;
