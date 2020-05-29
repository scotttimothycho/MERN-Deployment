import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const NewPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});


    const handleSubmit = (event) => {
        event.preventDefault();

        const newPet = {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3,
        };

        axios.post("http://localhost:8000/api/exam", newPet)
            .then((res) => {
                navigate("/exam");
            })
            .catch((err) => {
                if (err.response.data.hasOwnProperty("errors")) {
                    setErrors(err.response.data.errors);
                }
                console.log(err.response);
            });
    };

    return <div>
        <form onSubmit={(event) => { handleSubmit(event); }}>
            <div>
                <label>Name</label>
                <input
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    type="text"
                    value={name}
                />
                {errors.name ? <span style={{ color: "red", marginLeft: 10 }}>{errors.name.properties.message}</span> : ""}
            </div>
            <div>
                <label>Type</label>
                <input
                    onChange={(event) => {
                        setType(event.target.value);
                    }}
                    type="text"
                    value={type}
                />
                {errors.type ? <span style={{ color: "red", marginLeft: 10 }}>{errors.type.properties.message}</span> : ""}
            </div>
            <div>
                <label>Description</label>
                <input
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                    type="text"
                    value={description}
                />
                {errors.description ? <span style={{ color: "red", marginLeft: 10 }}>{errors.description.properties.message}</span> : ""}
            </div>
            <div>
                <label>Skill 1</label>
                <input
                    onChange={(event) => {
                        setSkill1(event.target.value);
                    }}
                    type={""}
                    value={skill1}
                />
                {errors.skill1 ? <span style={{ color: "red", marginLeft: 10 }}>{errors.skill1.properties.message}</span> : ""}
            </div>
            <div>
                <label>Skill 2</label>
                <input
                    onChange={(event) => {
                        setSkill2(event.target.value);
                    }}
                    type={""}
                    value={skill2}
                />
                {errors.skill2 ? (<span style={{ color: "red", marginLeft: 10 }}>{errors.skill2.properties.message}</span>) : ("")}
            </div>
            <div>
                <label>Skill 3</label>
                <input
                    onChange={(event) => {
                        setSkill3(event.target.value);
                    }}
                    type={""}
                    value={skill3}
                />
                {errors.skill3 ? <span style={{ color: "red", marginLeft: 10 }}>{errors.skill3.properties.message}</span> : ""}
            </div>
            <button>Submit</button>
        </form>

    </div>;

};

export default NewPet;