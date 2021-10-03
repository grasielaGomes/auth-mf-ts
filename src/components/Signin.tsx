import React from "react";
import { Link } from "react-router-dom";
import { AuthProps } from "../types/types";
import {
  InputStyles,
  ButtonFormStyles,
  ContainerStyles,
  FormStyles,
  ContentStyles,
  ContentHeaderStyles,
  TitleHeaderStyles,
  TextHeaderStyles,
  TextLinkStyles,
} from "./styles";

export default function SignIn({ onSignIn }: AuthProps) {
  return (
    <main className={ContainerStyles}>
      <section className={ContentStyles}>
        <header className={ContentHeaderStyles}>
          <h1 className={TitleHeaderStyles}>Welcome to SignIn Page!</h1>
          <p className={TextHeaderStyles}>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </header>
        <form className={FormStyles} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Email" className={InputStyles} />
          <input
            type="password"
            placeholder="Password"
            className={InputStyles}
          />
          <button type="submit" className={ButtonFormStyles} onClick={onSignIn}>
            Sign In
          </button>
          <Link to="/auth/signup">
            <h3 className={TextLinkStyles}>
              Don't have an account? Sign up now!
            </h3>
          </Link>
        </form>
      </section>
    </main>
  );
}
