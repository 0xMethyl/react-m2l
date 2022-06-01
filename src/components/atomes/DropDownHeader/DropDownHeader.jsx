import React, { useEffect, useState } from "react";
import axios from '../../../config/axios';

const DropDownHeader = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
      }, []);
    
    const fetchCategories = () => {
    
        axios.get("/produits/categories")
            .then((res) => {
                console.log(res.data.success);
                setCategories(res.data.success);
            })
            .catch((err) => {
                console.log(err);
        });
    }

    return(
        <div className='sidebar-nav-dropdown-menu'>
            {categories.map((categorie) => (
                <div className="raw">
                    <a href={`/category/${categorie.categorie_id}`} className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label={categorie.categorie_nom}>◽</span><i className='me-2'></i> {categorie.categorie_nom.toUpperCase()}</a>
                </div>
            ))}
        </div>
    )
}
export default DropDownHeader;