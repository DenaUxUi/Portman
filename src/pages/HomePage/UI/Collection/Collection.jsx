import React from 'react'
import "./Collection.css"
import "../../../../app/Fonts/typograhy.css"
import Button from '../../../../shared/UI/Button/Button'

function Collection() {
    return (
        <div className='collection-block'>
            <div className="collection-img"></div>
            <div className="collection-space">
                <div className='center'>
                    <h3 className='Playfair white title'>СЕЗОН 2020/21</h3>
                    <div className='line'></div>
                </div>
                <p className='PT-sans post-text white limited-width'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
                <Button>ПОСМОТРЕТЬ КОЛЛЕКЦИЮ</Button>
            </div>
        </div>
    )
}

export default Collection
