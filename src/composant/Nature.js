// src/Nature.js

import React, { useRef, useEffect, useState } from 'react';
import '../style/Nature.css';
import baleine from '../images/baleine2.jpeg';

const Nature = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Si la section est visible à 30% ou plus
                if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                    setIsVisible(true);
                }
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.3, // Déclenche l'événement lorsque 30% de la section est visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="nature-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Section de texte */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="section-title">Un sanctuaire naturel</h2>
                        <p>
                            L'île Sainte-Marie est un paradis pour les amoureux de la nature. Ses forêts tropicales abritent une flore rare, des lémuriens aux caméléons colorés. Mais l'événement le plus spectaculaire est sans doute la <strong>migration des baleines à bosse</strong>. Chaque année, de juin à septembre, des centaines de ces géants des mers viennent se reproduire et mettre bas dans les eaux chaudes et peu profondes qui entourent l'île. C'est un spectacle inoubliable que l'on peut admirer depuis le rivage ou lors d'une excursion en bateau.
                        </p>
                    </div>
                    {/* Section de l'animation */}
                    <div className="col-md-6 text-center">
                        <div className="ocean-container">
                            <div className={`whale ${isVisible ? 'jump-animation' : ''}`}>
                                <img src={baleine} alt="Baleine à bosse" className="img-fluid rounded-3 shadow-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nature;