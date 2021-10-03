import React from "react";
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
} from "./styles";

export default function SignUp({ onSignIn }: AuthProps) {
  return (
    <main className={ContainerStyles}>
      <section className={ContentStyles}>
        <header className={ContentHeaderStyles}>
          <h1 className={TitleHeaderStyles}>Welcome to SignUp page!</h1>
          <p className={TextHeaderStyles}>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </header>
        <form className={FormStyles} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" className={InputStyles} />
          <input type="text" placeholder="Email" className={InputStyles} />
          <input
            type="password"
            placeholder="Password"
            className={InputStyles}
          />
          <input
            type="password"
            placeholder="Repeat password"
            className={InputStyles}
          />
          <button type="submit" className={ButtonFormStyles} onClick={onSignIn}>
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
}
