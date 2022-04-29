import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const ProdDesc = () => {
    const { id } = useParams();
    const [produits, setProduits] = useState([]);

    let [num, setNum]= useState(0);

    const getStock = async () => {

        let data = await axios.get("http://localhost:3001/produits/stock/" + id)
        
        console.log(data.data.success[0].produit_quantite);
        return data.data.success[0].produit_quantite;
    }

    let incNum = async () => {
        const stock = await getStock();
        console.log(stock);
        
        if(num < stock){
            setNum(Number(num)+1);
        }
    }

    let decNum = () => {
        if(num>0){
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    useEffect(() => {
        fetchProduits();
    }, []);

    const fetchProduits = () => {

        axios.get("http://localhost:3001/produits/" + id)
            .then((res) => {
                setProduits(res.data.success);
            })
            .catch((err) => {
                console.log(err);
        });
    }



    return (   
        <div>
        {produits.map((produit) => (
            <div className="prodDesc">
            <div className="row">
                <img className="col-7 mb-5 imgDesc" style={{width: "auto",height: "21em",margin: "auto"}} src={`/images/${produit.produit_nom}.jpg`.split(' ').join('_')} alt="missing" />
                <div className="col-5">
                    <h4>{produit.produit_nom}</h4>
                    <h4 className="prisque">{produit.produit_prix} €</h4>
                    <div style={{marginTop: "25px",textAlign: "right"}} className="col-12 alert alert-success">Stock disponible : {produit.produit_quantite}</div>
                    <div style={{textAlign:"center",marginBottom: "5px",display: "flex",justifyContent: "right"}}>
                        <input className="btn btn-outline-danger" onClick={decNum} type="button" value="-" style={{fontSize:"10px"}} />
                        <input className="btn btn-danger" type="button" id="text" onChange={handleChange} value={num} readonly="true" style={{fontSize:"10px"}} />
                        <input className="btn btn-outline-danger" type="button" value="+" onClick={incNum} style={{fontSize:"10px"}} /> 
                    </div>
                    <div style={{marginTop: "25px",display: "flex",justifyContent: "right"}}>
                    <p className="btn btn-danger">
                    Ajouter au panier <i className="fas fa-shopping-cart"></i>
                    </p>
                    </div>
                </div>
            </div>
            <div className="row descproduit">
                <h5>Description produit</h5>
            </div>
        </div>
        ))}
        </div>
    
    )
}

export default ProdDesc;