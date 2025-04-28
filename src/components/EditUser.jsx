import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
const [formData, setFormData] = useState({
  name: '',
  email: '',
  mobile: ''
});

useEffect(() => {
  axios.get(`http://localhost:8005/api/?id=${id}`)
    .then((response) => {
      const user = response.data;
      setFormData({
        name: user.name,
        email: user.email,
        mobile: user.mobile
      });
    })
    .catch(error => console.error(error));
}, [id]);

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8005/api/?id=${id}`, formData);
      alert('User updated successfully!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Failed to update user');
    }
  };
    return (
        <div>
            <div className="w-7xl mx-auto py-10">
            <h1 className="text-2xl py-3">Update user</h1>
            <form onSubmit={handleSubmit}>

            <div>
                <input
                    className="input input-neutral w-1/3 my-2"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                />

            </div>

            <div>
            <input
                    className="input input-neutral w-1/3 my-2"
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
            />
            </div>

            <div>
            <input
                    className="input input-neutral w-1/3 my-2"
                    type="text"
                    name="mobile"
                    placeholder="Your Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                />
            </div>

            <button className="btn btn-success text-amber-50 w-1/3">Submit</button>
            </form>
        </div>

        </div>
    );
};

export default EditUser;