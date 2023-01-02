import React from "react";
import { Helmet } from "react-helmet-async";
import udemyLogo from "../assets/udemy.svg";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>page2</title>
      </Helmet>
      <div className="avatar online">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            src={udemyLogo}
            style={{ objectFit: "contain" }}
            alt="Udemy Logo"
          />
        </div>
      </div>
      <h1 className="m-2">Udemy</h1>
      <label htmlFor="my-modal" className="btn">
        open modal
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations Udemy Clone User!
          </h3>
          <p className="py-4 ">
            You've been selected to be on the Team developing Udemy Clone
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
