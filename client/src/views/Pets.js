import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Pets = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetchPets();
    }, []);

    for (let i = 0; i < pets.length; i++) {


    }

    const fetchPets = () => {
        axios.get("http://localhost:8000/api/exam")
            .then((res) => {
                console.log(res.data);
                setPets(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    const reorder = (a, b) => {
        const petA = a.type.toUpperCase();
        const petB = b.type.toUpperCase();
        let order = 0;
        if (petA > petB) {
            order = 1;
        }
        else if (petA < petB) {
            order = -1;
        }
        return order;
    }

    return (<div>
        <h1>Pet Shelter</h1>
        <p>These pets are looking for a good home</p>

        <table width="80%">
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
            {pets.sort(reorder).map((pet) => {
                return (<tr key={pet._id}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td> <Link to={`/exam/${pet._id}`}>Details</Link> | <Link to={`/exam/${pet._id}/edit`}>Edit</Link></td>
                </tr>
                );
            })

            }
        </table>
    </div >
    );
};

export default Pets;