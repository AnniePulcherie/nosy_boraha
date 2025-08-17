// src/Histoire.js

import React from 'react';
import '../style/Histoire.css'; // Créez ce fichier CSS
import ile_sainteM from '../images/ile_sainteM.png';
import pirate from '../images/pirates.jpeg';
import reineBetty from '../images/reineBetty.jpeg';
import eglise from '../images/eglise.jpeg';
import baleine from '../images/baleine4.jpeg';

const Histoire = () => {
    return (
        <div className="histoire-container">
            {/* Section bannière ou titre */}
            <header className="histoire-header">
                <div className="container text-center text-white">
                    <h1 className="histoire-title animate-fade-in">Histoire fascinante de Nosy Boraha</h1>
                    <p className="histoire-subtitle animate-fade-in delay-1">Plongez dans les légendes et les événements qui ont façonné l'île Sainte-Marie.</p>
                </div>
            </header>

            <main className="container py-5">
                {/* Section : L'histoire du nom */}
                <section className="row align-items-center mb-5">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img src={ile_sainteM} alt="Carte de l'île Sainte-Marie" className="img-fluid rounded-3 shadow-lg img-hover-scale" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="section-title">L'origine du nom : Nosy Boraha</h2>
                        <p>
                        En 1503, des navigateurs portugais découvrirent l'île, le jour de l'Assomption, après avoir échappé à un naufrage, et lui donnent le nom de Santa Maria, en l'honneur de la Vierge Marie, d'où le nom Sainte Marie.
Vers 1592, un navire Hollandais fait escale à Sainte Marie pour s'y ravitailler.
Le commandant du vaisseau nommera l'île, île d'Ibrahim, Nosin'Iborahimo en malgache, d'où plus tard « Nosy Boraha ».

Mais la légende raconte que son nom « Nosy Boraha » vient d'un homme dénommé Boraha, allant à la pêche, fut trainé au loin par une baleine. Il erra en mer pendant des heures mais fut sauvé par un poisson appelé « Sorokay » qui le ramena sur la terre ferme. Il donna son nom à l'île qu'il vient de découvrir Nosy Boraha qui signifie l'île de Boraha. Et depuis ce jour, il est interdit au « zafin-boraha » qui veut dire les descendants de Boraha, de manger le poisson « Sorokay ».
                        </p>
                    </div>
                </section>

                <hr className="my-5" />

                {/* Section : Le repaire des pirates */}
                <section className="row align-items-center mb-5">
                    <div className="col-md-6 order-md-2 mb-4 mb-md-0">
                        <img src={pirate} alt="Bateau pirate" className="img-fluid rounded-3 shadow-lg img-hover-scale" />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <h2 className="section-title">Le repaire des pirates de l'océan Indien</h2>
                        <p>
                            Entre le XVIIe et le XVIIIe siècle, l'île Sainte-Marie est devenue une véritable base pour les **pirates** et les flibustiers. Sa situation géographique idéale, avec ses baies et ses criques cachées, leur offrait un refuge parfait pour se ravitailler et cacher leurs trésors. Des figures légendaires comme le <strong>Capitaine Kidd</strong> et <strong>Thomas Tew</strong> auraient foulé ses terres. Le **cimetière des pirates**, unique au monde, est le dernier témoin de cette époque.
                        </p>
                    </div>
                </section>

                <hr className="my-5" />

                {/* Section : La Reine Bety */}
                <section className="row align-items-center mb-5">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img src={reineBetty} alt="Statue ou représentation de la Reine Bety" className="img-fluid rounded-3 shadow-lg img-hover-scale" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="section-title">L'ère de la Reine Bety</h2>
                        <p>
                        Fille du roi Ratsimilaho et petite-fille du pirate anglais Thomas Tew, Betty est une reine malgache née vers 1735 et morte le 14 octobre 1805 à Vacoas-Phœnix (Île Maurice).
Elle a eu une vie extraordinaire et des liens particuliers avec la France. En plus d'avoir épousé un Gascon, Jean Onésine Filet dit "La Bigorne", elle a cédé au gouvernement français Sainte Marie, une petite île située à l'est de Madagascar. Elle tomba follement amoureuse du caporal….
En effet, le 30 juillet 1750, Bétia cède officiellement l'île Sainte-Marie à la France. Selon la légende, son geste est motivé par son amour pour le Caporal français La Bigorne, chef de traite de la Compagnie des Indes.
Dans les faits, il semble que son père avait déjà entamé des pourparlers avec la Compagnie des Indes et que l'agent commercial français Gosse a achevé de convaincre Bétia de céder ses terres au roi de France.
Soupçonnée d'être à l'origine de la mort du gouverneur Gosse, Bétia est arrêtée pour rébellion et emprisonnée temporairement avant d'être reconnue non coupable. Vers 1750 ou 1751, elle part à l'Île-de-France, actuelle Île Maurice, où elle s'installe avec son entourage où elle s'investit dans le commerce et mène ses affaires avec succès.
En 1762, elle retourne à Sainte-Marie pour le compte de la Compagnie des Indes. Chargée d'assurer la reprise du commerce avec l'île malgache et avec le comptoir de Foulpointe, Bétia consent à céder son trône à Zanahary, son frère, en signe de paix. La France reconnaît ainsi la souveraineté de ce dernier sur l'île.
Betty est baptisée le 1er février 1775 par le père Delfolie à la cathédrale de Port-Louis. Le 19 mai 1780, elle est naturalisée française sous le nom de Marie Elisabeth Sabbabadie Betty "en reconnaissance des services rendus par son mari aux Français à Madagascar"...
                        </p>
                    </div>
                </section>

                <hr className="my-5" />

                {/* Section : L'Église catholique */}
                <section className="row align-items-center mb-5">
                    <div className="col-md-6 order-md-2 mb-4 mb-md-0">
                        <img src={eglise} alt="Vue de l'église catholique" className="img-fluid rounded-3 shadow-lg img-hover-scale" />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <h2 className="section-title">Les premiers pas de l'Église catholique</h2>
                        <p>
                            L'île Sainte-Marie possède l'une des plus anciennes églises catholiques de Madagascar, témoignant de l'arrivée des premiers missionnaires. L'église de <strong>Sainte-Marie d'Ambodifotatra</strong>, construite en 1857, est un monument historique qui a joué un rôle important dans la vie de la population locale et dans la diffusion du christianisme sur l'île.
                        </p>
                    </div>
                </section>

                <hr className="my-5" />

                {/* Section : Les baleines à bosse */}
                <section className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img src={baleine} alt="Baleines et leur saison d'apparition" className="img-fluid rounded-3 shadow-lg img-hover-scale" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="section-title">La migration des baleines : un spectacle de vie</h2>
                        <p>
                            Chaque année, de **juin à septembre**, les eaux chaudes et peu profondes qui entourent l'île deviennent le théâtre d'un spectacle naturel exceptionnel : la migration des <strong>baleines à bosse</strong>. Elles viennent de l'Antarctique pour se reproduire et mettre bas. Pour la population locale, ces baleines ne sont pas de simples animaux ; elles sont souvent perçues comme des **symboles de fertilité et de prospérité**. C'est un événement qui rythme la vie des habitants et attire de nombreux visiteurs chaque année.
                        </p>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default Histoire;