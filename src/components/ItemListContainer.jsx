import React from 'react';


const ItemListConteiner = ({ title }) => {
    return (
        <section className="ItemListConteiner conteiner-slide-1">
            <div className="ItemListConteiner-conteiner">
                <article className="ItemListConteiner__text-box">
                    <h1>{title}</h1>
                    <p>
                        
                    </p>
                    <button className="button-primary">Comprar</button>
                </article>
            </div>
        </section>
    );
};

export default ItemListConteiner;
