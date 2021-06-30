import CardActivityWidgetStc from './CardActivityWidget.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import { BsPencilSquare,BsEye } from "react-icons/bs";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

 
const LISTE_TRANSACTION=gql`
query
{ 
	etudiants
  { 
  	id
    Prenom
    nom
  }
}
`;


const Etudiants =()=>{

    const {data,error,loading}=useQuery(LISTE_TRANSACTION);

    if(loading){
        return <p>Loading</p>
    }
    if(error){
        return <p>Erreur</p>
    }

    var etudiants=data.etudiants;
    return(
        <CardActivityWidgetStc>
            <h2 className="cardTitre">Activités</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Date de l'operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        etudiants.map((etudiant,index)=><tr key={index}><td>{etudiant.nom}</td></tr>)
                    }
                
                </tbody>
            </Table>
               
        </CardActivityWidgetStc>
    )
}
export default Etudiants;