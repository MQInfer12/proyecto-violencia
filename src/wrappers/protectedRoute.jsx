import React, { useEffect } from 'react'
import { useUserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext(); 
  const navigate = useNavigate();
  
  useEffect(() => {
    if(Object.keys(user).length === 0) {
      navigate("/login");
    }
  }, []);

  return (
    children
  )
}

export default ProtectedRoute