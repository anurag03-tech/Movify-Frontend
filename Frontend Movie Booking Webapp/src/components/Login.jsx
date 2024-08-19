import React, { useState, useRef } from "react";
import styled from "styled-components";
import LoginSlider from "./LoginSlider";
import { Link, useLocation } from "react-router-dom";

// Styled-components with Tailwind classes
const FormDiv = styled.div.attrs({
  className:
    "mx-10 my-5 w-auto h-auto py-5 px-7 rounded-2xl border-2 border-gray-200",
})``;

const FormHeading = styled.h2.attrs({
  className: "my-5 text-3xl font-semibold",
})``;

const Input = styled.input.attrs({
  className:
    "my-1 p-2 border border-gray-500 bg-slate-100 rounded-lg text-black",
})``;

const SignInBtn = styled.button.attrs({
  className:
    "w-full my-2 p-2 font-semibold text-center text-white bg-blue-700 cursor-pointer rounded-lg",
})``;

const AuthOption = styled.div.attrs({
  className:
    "flex items-center px-3 py-2 border-[1px] border-gray-500 bg-white rounded-lg cursor-pointer",
})``;

const Divider = styled.div.attrs({
  className: "relative flex items-center my-1",
})``;

const DividerLine = styled.div.attrs({
  className: "flex-grow border-t border-gray-800",
})``;

const Login = () => {
  const location = useLocation();

  const [isSignInForm, setIsSignInForm] = useState(
    location.pathname === "/login"
  );
  const toggleForm = () => setIsSignInForm((prevState) => !prevState);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className="w-full h-[700px] flex p-16 pb-0">
      <LoginSlider></LoginSlider>
      <div className="w-5/12 h-full">
        <FormDiv>
          <FormHeading>{isSignInForm ? "Welcome back" : "Sign Up"}</FormHeading>
          <div className="flex justify-between py-2">
            <AuthOption>
              <i className="fab fa-google mr-2"></i>
              <span>Login via Google</span>
            </AuthOption>
            <AuthOption>
              <i className="fab fa-apple mr-2"></i>
              <span>Login via Apple ID</span>
            </AuthOption>
          </div>
          <Divider>
            <DividerLine />
            <span className="mx-4 text-gray-800">or</span>
            <DividerLine />
          </Divider>
          <form
            className="flex flex-col py-2 font-semibold"
            onSubmit={(e) => e.preventDefault()}
          >
            {!isSignInForm && (
              <>
                <label htmlFor="name">Name</label>
                <Input id="name" placeholder="Name" ref={nameRef} />
              </>
            )}
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              placeholder="Enter your Email Id"
              ref={emailRef}
            />
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              placeholder="Enter your Password"
              ref={passwordRef}
            />
            <SignInBtn>{isSignInForm ? "Sign In" : "Sign Up"}</SignInBtn>
            <span className="my-5">
              {isSignInForm ? "New to Movify? " : "Already Registered? "}
              <Link to={isSignInForm ? "/signup" : "/login"}>
                <button
                  type="button"
                  className="font-semibold cursor-pointer hover:underline"
                  onClick={toggleForm}
                >
                  {isSignInForm ? " Sign up now." : " Sign In."}
                </button>
              </Link>
            </span>
          </form>
        </FormDiv>
      </div>
    </div>
  );
};

export default Login;
