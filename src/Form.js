import React, { useState } from 'react'
import Newdata from './Newdata';

const Form = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        password:"",
        phone:""

    });

    const [records, setRecords] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegistration({...userRegistration, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {...userRegistration, id:new Date().getTime().toString()}
        console.log(records);
        setRecords([ ...records, newRecord]);
        console.log(records);

        setUserRegistration({ username:"", email:"", password:"", phone:""})
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">FullName</label>
                    <input type="text" autoComplete="off" 
                    value={userRegistration.username}
                    onChange={handleInput}
                    name="username" id="username" />
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" autoComplete="off" 
                    value={userRegistration.email}
                    onChange={handleInput}
                    name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" autoComplete="off" 
                    value={userRegistration.password}
                    onChange={handleInput}
                    name="password" id="password" />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" autoComplete="off" 
                    value={userRegistration.phone}
                    onChange={handleInput}
                    name="phone" id="phone" />
                </div>

                
            </form>

            <div>
                {
                    records.map((curElem) => {
                        return(
                            <div className="showDataStyle">
                                <p>{curElem.username}</p>
                                <p>{curElem.email}</p>
                                <p>{curElem.password}</p>
                                <p>{curElem.phone}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div>
                <Newdata />
            </div>
        </>
    )
}

export default Form
