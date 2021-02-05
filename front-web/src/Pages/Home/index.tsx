import React from 'react'
import './styles.scss'
import {ReactComponent as MainImage} from '../../core/assets/images/main-image.svg';

const Home = () => (

    <div className="home-container">
        <div className="row home-content">
            <div className="col-6 home-text" >
                <h1 className="text-title">Conheça o melhor <br/> catalogo de produtos</h1>
                <p className="text-subtitle">
                    Ajurademos você a encontrar os melhores <br/> produtos disponiveis no mercado.
                </p>
            </div>
            <div className="col-6">
                <MainImage className="main-image"/>
            </div>
        </div>
    </div>
    
);

export default Home;