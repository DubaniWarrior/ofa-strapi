import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Alert } from "reactstrap";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import Router from 'next/router';
import useForm from "../../../lib/useForm";
import TestContext from '../../../ContextAPI/TestContext';
import PropTypes from 'prop-types'
import useUser from "../../../lib/useUser";
import { useState } from "react";
import fetchJson from '../../../lib/fetchJson'
import { withIronSession } from "next-iron-session";
import Image from "next/image";
import Link from "next/link";
import SectionSignupStc from './SectionSignup.stc'



const CREATE_CLIENT=gql`
     mutation CREATE_CLIENT(
         $nom:String!
         $prenom:String!
         $email:String!
         $password:String!
     ){ 
        createEtudiant(input:{data:
     {nom:$nom,
     Prenom:$prenom,
     email:$email,
     password:$password,
     }})
     {
         etudiant
         { 
             nom
         }
     }
     }
 `;


const SectionSignup=()=>{

    const {inputs,handleChange,clearForm,resetForm}=useForm({
        nom:"",
        prenom:"",
        email:"",
        password:"",
       
      });

      const [create,{data,error,loading}]=useMutation(CREATE_CLIENT,{
        variables:inputs
    });
    
    
    const test=async (e)=>{
        e.preventDefault();

        if(inputs.nom.trim()!="" && 
        inputs.prenom.trim()!="" && 
        inputs.email.trim()!="" && 
        inputs.password.trim()!="") 
       {
            const res=await create();
            console.log(res);
            resetForm();


            alert("Compte créé avec succès")
        }
        else
        {
            alert("Erreur! Veuillez saisir tous les champs svp.")
        }
        

    }

    var response="";

    if(loading){
        response="En attente";
    }
    if(error){
        console.log(error)
        response="Erreur"
    }

    return (
        <SectionSignupStc >
            <div className="container">
                <div className="row max-mb-n50">
                    <div className="col-lg-4">
                    <div class="sidebar-widget-content">
                        <ul class="sidebar-widget-menu">
                            <li><Link href="/login"><a>Connexion</a></Link></li>
                            <li><Link href="/signup"><a>Inscription</a></Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-8" style={{paddingTop:"100px"}}>
                        <h5 class="title">Création de compte</h5>
                        <form onSubmit={test}>
                        <div className="row max-mb-n50">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Nom complet</label>
                                    <input 
                                    placeholder="Nom" 
                                    value={inputs.nom} 
                                    onChange={handleChange} name="nom" 
                                    type="text" 
                                    className="nom form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>&nbsp;</label>
                                    <input 
                                        placeholder="Prenom" 
                                        value={inputs.prenom} 
                                        onChange={handleChange} name="prenom" 
                                        type="text" 
                                        className="nom form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row max-mb-n50">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input placeholder="Email" 
                                    value={inputs.email} 
                                    onChange={handleChange} name="email" 
                                    type="text" 
                                    className="email form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row max-mb-n50">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Mot de passe</label>
                                    <input placeholder="password" 
                                    value={inputs.password} 
                                    onChange={handleChange} name="password" 
                                    type="password" 
                                    className="password form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>&nbsp;</label>
                                    <input placeholder="Confirm password" type="password" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row max-mb-n50">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <button className="btn btn-default">S'inscrire</button>
                                </div>
                            </div>

                        </div>

                        </form>

                    </div>
                </div>
            </div>
        
        </SectionSignupStc>

    )
}
export default SectionSignup;