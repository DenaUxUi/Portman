import React from 'react';
import "../../app/Fonts/typograhy.css";
import PrimaryButton from '../../shared/UI/Button/PrimaryButton';
import "./Footer.css";

function Footer() {
    return (
        <div className='Footer'>
            <div className='AboutUs'>
                <p className='title white Playfair'>О МАГАЗИНЕ</p>
                <p className='sub-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, asperiores suscipit. Fugit libero sed inventore voluptatem porro culpa voluptate nisi et amet fuga nulla consequuntur, reiciendis quia dolores corporis iure! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='Categories'>
                <p className='title white Playfair'>КАТЕГОРИИ</p>
                <PrimaryButton>Часы</PrimaryButton>
                <PrimaryButton>Браслеты</PrimaryButton>
                <PrimaryButton>Ремни</PrimaryButton>
                <PrimaryButton>Ювелирные изделия</PrimaryButton>
                <PrimaryButton>Запонки</PrimaryButton>
            </div>
            <div className='Links'>
                <p className='title white Playfair'>РАССЫЛКИ</p>
                <p className='sub-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, asperiores suscipit. Fugit libero sed inventore voluptatem porro culpa voluptate nisi et amet fuga nulla consequuntur, reiciendis quia dolores corporis iure!</p>
            </div>
        </div>
    );
}

export default Footer;
