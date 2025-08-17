// src/Accueil.js

import React, { useState, useEffect } from 'react';
import '../style/Accueil.css'; // On importe le nouveau fichier CSS

// Importation des images
import mer from '../images/mer.jpeg';
import mer2 from '../images/mer2.jpeg';
import plage from '../images/plage.jpeg';
import plan from '../images/plan_.jpeg';
import cimitiere from '../images/cimitierePirate.jpeg';
import baleine from '../images/baleine_dos.jpeg';

// Liste des images pour le carrousel
const images = [mer, mer2, plage, plan];

const Accueil = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % images.length
            );
        }, 5000); // Change d'image toutes les 5 secondes
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="accueil-container">
            {/* Bannière principale */}
            <header className="hero-section" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
                <div className="overlay"></div>
                <div className="container d-flex flex-column justify-content-center align-items-center h-100 text-white text-center">
                    <h1 className="hero-title animate-fade-in">Bienvenue à Nosy Boraha</h1>
                    <p className="hero-subtitle animate-fade-in delay-1">L'île aux trésors de Madagascar</p>
                    <a href="#decouvrir" className="btn-custom btn-hero animate-fade-in delay-2">Découvrir l'île</a>
                </div>
            </header>

            {/* Section du contenu */}
            <main id="decouvrir" className="py-5">
                <div className="container">
                    {/* Section Histoire */}
                    <section className="row align-items-center mb-5">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h2 className="section-title">Un passé de légende</h2>
                            <p>
                                Connue sous le nom de <strong>Nosy Boraha</strong> en malgache, l'île doit son nom à une histoire mystérieuse liée à un juif nommé Abraham. Mais c'est au XVIIe siècle qu'elle entre dans l'histoire pour de bon en devenant le refuge des plus grands <strong>pirates</strong> de l'océan Indien. Ils y trouvaient un abri sûr, et on raconte que leurs trésors sont encore enfouis quelque part sur l'île. Le <strong>cimetière des pirates</strong>, près de la ville principale, témoigne encore de cette époque révolue.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={cimitiere} alt="Cimetière des pirates" className="img-fluid rounded-3 shadow-lg img-hover-scale" />
                        </div>
                    </section>

                    <hr className="my-5" />

                    {/* Section Nature et biodiversité */}
                    <section className="row align-items-center mt-5">
                        <div className="col-md-6 order-md-2 mb-4 mb-md-0">
                            <h2 className="section-title">Un sanctuaire naturel</h2>
                            <p>
                                L'île Sainte-Marie est un paradis pour les amoureux de la nature. Ses forêts tropicales abritent une flore rare, des lémuriens aux caméléons colorés. Mais l'événement le plus spectaculaire est sans doute la <strong>migration des baleines à bosse</strong>. Chaque année, de juin à septembre, des centaines de ces géants des mers viennent se reproduire et mettre bas dans les eaux chaudes et peu profondes qui entourent l'île. C'est un spectacle inoubliable que l'on peut admirer depuis le rivage ou lors d'une excursion en bateau.
                            </p>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <img src={baleine} alt="Baleine à bosse" className="img-fluid rounded-3 shadow-lg img-hover-scale" />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Accueil;