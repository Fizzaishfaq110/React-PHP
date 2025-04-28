
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ListUser() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost:8005/api/')
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error.message);
      });
  }

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
  
    try {
      const response = await axios.delete(`http://localhost:8005/api/?id=${id}`);
      if (response.data.status === 1) {
        // Either:
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        // Or:
        // getUsers(); 
      } else {
        alert("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error.response?.data || error.message);
      alert("Something went wrong!");
    }
  };
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-7xl mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                {/* need to work at Edit button */}
                <button
  className='bg-amber-300 cursor-pointer px-5 py-2 rounded-2xl'
  onClick={() => navigate(`/user/edit/${user.id}`)}
>
  Edit
</button>
                <button className= 'bg-red-800 cursor-pointer px-5 py-2 rounded-2xl text-amber-50' onClick={() => deleteUser(user.id)} style={{ marginLeft: "10px" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
  </table>
</div>

    
  );
}

export default ListUser;
