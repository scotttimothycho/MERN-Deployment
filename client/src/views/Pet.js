import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const handleDelete = (id) => { };

const Pet = (props) => {
    const [pet, setPet] = useState(null);

    useEffect(() => {
        fetchData();
    });

    const fetchData = () => {
        axios.get(`http://localhost:8000/api/exam/${props.id}`)
            .then((res) => {
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            })
    };

    const handleDelete = (delId) => {
        axios.delete("http://localhost:8000/api/exam/" + delId)
            .then((res) => {
                navigate("/exam");
            })
            .catch((err) => {
                console.log(err.response);
            })
    };

    if (pet === null) {
        return "Loading...";
    }
    return (
        <div>
            <table>
                <tr>
                    <td>Details about:</td>
                    <td> {pet.name}</td>
                </tr>
                <tr>
                    <td>Pet Type:</td>
                    <td> {pet.type}</td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td> {pet.description}</td>
                </tr>
                <tr>
                    <td>Skills:</td>
                    <td>{pet.skill1} <br />{pet.skill2}<br />{pet.skill3}  </td>
                    <td></td>

                </tr>
            </table>
            <button onClick={(event) => {
                handleDelete(pet._id)
            }}>Adopt {pet.name}</button>
        </div>

    )
};

export default Pet;