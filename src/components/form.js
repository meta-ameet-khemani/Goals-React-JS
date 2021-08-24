import Avatar from "@material-ui/core/Avatar"
import React, { useState } from "react";

function Form(props) {

    let users = [];

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [image, setImage] = useState("");

    const changeName = (event) => {
        setName(event.target.value);
    }

    const changeAge = (event) => {
        setAge(event.target.value);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePhone = (event) => {
        setPhone(event.target.value);
    }

    const changeAddress = (event) => {
        setAddress(event.target.value);
    }

    const changeGender = (event) => {
        setGender(event.target.value);
    }

    const getImage = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    }

    const checkUser = () => {
        return name.length > 0 ||
               age.length > 0 ||
               email.length > 0 ||
               phone.length > 0 ||
               address.length > 0 ||
               gender.length > 0 ||
               image.length > 0;
    }

    const handleSubmit = (form) => {
        form.preventDefault();
        if (checkUser()) {
            users = [...users, {
                name: name,
                age: age,
                email: email,
                phone: phone,
                address: address,
                gender: gender,
                image: image,
            }];
            props.history.push({
                pathname: '/users',
                users
            });
            cancelHandler();
        }
    }

    const cancelHandler = (form) => {
        // form.preventDefault();
        setName("");
        setAge("");
        setEmail("");
        setPhone("");
        setAddress("");
        setGender("");
        setImage(null);
        document.getElementById("fileInput").value = "";
    }

    return (
        <center>
            <form action="">
                <div>
                    <label htmlFor="name" />Name
                    <input type="text" name="name" value={name} onChange={changeName} />
                </div>
                <div>
                    <label htmlFor="age" />Age
                    <input type="number" name="age" min="18" max="99" value={age} onChange={changeAge} />
                </div>
                <div>
                    <label htmlFor="email" />Email
                    <input type="email" name="email" value={email} onChange={changeEmail} />
                </div>
                <div>
                    <label htmlFor="phone" />Phone
                    <input type="number" name="phone" value={phone} onChange={changePhone} />
                </div>
                <div>
                    <label htmlFor="address" />Address
                    <textarea name="address" value={address} onChange={changeAddress} />
                </div>
                <div onChange={changeGender}>
                    <label />Gender
                    <input type="radio" value="Male" name="gender" checked={gender === "Male"} onChange={changeGender} /> Male
                    <input type="radio" value="Female" name="gender" checked={gender === "Female"} onChange={changeGender} /> Female
                    <input type="radio" value="Other" name="gender" checked={gender === "Other"} onChange={changeGender} /> Other
                </div>
                {/* <div>
                    <Avatar src="data:image/jpeg;base64,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" />
                </div> */}
                <div>
                    <label name="profile" />Profile Photo
                    <input type="file" id="fileInput" name="profile" onChange={getImage} />
                    { image && <Avatar src={image.toString()} /> }
                </div>
                <input type="submit" onClick={handleSubmit} />
                <button onClick={cancelHandler}>Cancel</button>
            </form>
        </center>
    );
}

export default Form;