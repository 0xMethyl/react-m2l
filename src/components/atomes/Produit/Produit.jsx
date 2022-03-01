import React from "react";
// pour la boucle, faire chopper le num avec une variable i pour correspondre au nombre de la boucle
// mettre le texte dans une variable ou autre pour avoir le prix avec l'item
// avoir des nom d'image génériques pour la boucle
const Produit = () => {
    return(
        <div className="container">
            <div className="row">
                <div height="200px" className="rounded border border-dark pt-3 pb-1" style={{ backgroundColor: "white"}}>
                    <img style={{width :"70%", height:"auto",marginRight:"auto",marginLeft:"15%"}} src="images/CG1.jpg" alt="truc qui manque" />
                    <p title="GeForce RTX 3050 | 3.5/5" style={{display:"flex",justifyContent:"center",fontSize:"15px", marginTop:"10px"}}>Asus GeForce RTX 3050 ROG Strix OC</p>
                    <a className="btn btn-danger mb-3" style={{display:"flex",justifyContent:"center",fontSize:"18px"}}>649.96€</a>
                </div>
            </div>
        </div>
    )
}
export default Produit;