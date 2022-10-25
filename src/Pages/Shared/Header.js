import React, { useContext, useState } from 'react';
import { FaFacebook, FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
       <div>
      <h3>header</h3>
       </div>
    );
};

export default Header;