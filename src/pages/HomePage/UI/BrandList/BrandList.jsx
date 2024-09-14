import React from 'react'
import newBrand from "../../../../entities/UI/brand-img.png"
import "../NewItems/NewItems.css"
import "../../../../app/Fonts/typograhy.css"
import "./BrandList.css"

function brandList() {
    return (
        <div className='brand-list'>
            <div className='center'>
                <h3 className='Playfair white title'>НАШИ БРЕНДЫ</h3>
                <div className='line'></div>
            </div>
            <div className='brands'>
                <img className='img-large' src={newBrand} alt="Бренд" />
                <img className='img-large' src={newBrand} alt="Бренд" />
                <img className='img-large' src={newBrand} alt="Бренд" />
                <img className='img-large' src={newBrand} alt="Бренд" />
            </div>
        </div>
    )
}

export default brandList
