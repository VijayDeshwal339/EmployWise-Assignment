import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../store/slice/usersSlice";
import EditUserForm from "../components/EditUserForm";

const EditUserPage = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const selectedUser = users.find((u) => u.id === parseInt(id));
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      navigate("/users"); 
    }
  }, [id, users, navigate]);

  const handleSave = (updatedUser) => {
    dispatch(updateUser(updatedUser));
    navigate("/users"); 
  };

  const handleCancel = () => {
    navigate("/users");
  };

  if (!user) return <p>Loading...</p>;

  return <EditUserForm user={user} onSave={handleSave} onCancel={handleCancel} />;
};

export default EditUserPage;
