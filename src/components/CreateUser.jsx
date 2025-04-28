import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});

    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values)=>({...values,[name]:value}))
      }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8005/api/',inputs);
        navigate('/');
    }
    return (
        <div className="w-7xl mx-auto py-10">
            <h1 className=" font-extrabold text-2xl py-3">Add User</h1>
            <form onSubmit={handleSubmit}>

            <div>
            <input className="input input-primary w-1/3" type="text" name="name" placeholder="Your Name" onChange={handleChange}  />
            </div>

            <div>
            <input type="email" name="email" placeholder="Your Email" className="input input-primary w-1/3 my-2" onChange={handleChange} />
            </div>

            <div>
            <input className="input input-primary w-1/3 my-2" type="number" name="mobile" placeholder="Phone"  onChange={handleChange} />
            </div>

            <button className="btn btn-success w-1/3 text-amber-50">Submit</button>
            </form>
        </div>
    );
};

export default CreateUser;