import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Alert } from "reactstrap";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import Router from "next/router";
import useForm from "../../../lib/useForm";
import TestContext from "../../../ContextAPI/TestContext";
import PropTypes from "prop-types";
import useUser from "../../../lib/useUser";
import { useState } from "react";
import fetchJson from "../../../lib/fetchJson";
import { withIronSession } from "next-iron-session";
import Image from "next/image";
import Link from "next/link";
import SectionLoginStc from "./SectionLogin.stc";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        email
        role {
          name
        }
      }
    }
  }
`;
const SectionLogin = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    identifier: "",
    password: "",
  });

  const [login, { data, error, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
  });

  const { mutateUser } = useUser({
    // redirectTo: '/dashboard',
    // redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await login();
    console.log(inputs, res);

    if (res.data) {
      const body = {
        xPatsaId: res.data.login.user.id,
        xPatsaEmail: res.data.login.user.email,
        xPatsaUsername: res.data.login.user.username,
        xPatsaPassword: inputs.password,
        xPatsaToken: res.data.login.jwt,
        xPatsaRole: res.data.login.user.role.name,
      };

      try {
        Router.push({ pathname: "/dashboard" });
        await mutateUser(
          fetchJson("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          })
        );
      } catch (error) {
        console.error("An unexpected error happened:", error);
        setErrorMsg(error.data.message);
      }
    }
  }

  var response = "";

  if (loading) {
    response = "En attente";
  }
  if (error) {
    response = <Alert color="danger">Utilisateur introuvable</Alert>;
  }
  return (
    <SectionLoginStc>
      <div className="container">
        <div className="row max-mb-n50">
          <div className="col-lg-4">
            <div className="sidebar-widget-content">
              <ul className="sidebar-widget-menu">
                <li>
                  <Link href="/login">
                    <a>Connexion</a>
                  </Link>
                </li>
                <li>
                  <Link href="/signup">
                    <a>Inscription</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8" style={{ paddingTop: "100px" }}>
            <h5 className="title">Mon compte</h5>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="row max-mb-n50">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Identifiant ou adresse de messagerie *</label>
                    <input
                      name="identifier"
                      required
                      value={inputs.identifier}
                      type="texte"
                      onChange={handleChange}
                      placeholder="Identifiant"
                      className="identifier form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row max-mb-n50">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Mot de passe</label>
                    <input
                      placeholder="password"
                      type="password"
                      required
                      name="password"
                      value={inputs.password}
                      onChange={handleChange}
                      className="password form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row max-mb-n50">
                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn btn-default">Se connecter</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionLoginStc>
  );
};
export default SectionLogin;
