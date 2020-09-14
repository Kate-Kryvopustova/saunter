import React from 'react';
import Button from 'react-bootstrap/Button';
import './MapInfo.css';

class MapInfo extends React.Component {
    render() {
        return (
            <div>
                <div className="title-map-info">
                    <div>Path Title</div>
                    <div>1.75km</div>
                </div>
                <div className="info-map">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</div>
                <div className="map">
                    <iframe 
                        title="myFrame" 
                        width="480" 
                        height="270" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.4373521010065!2d32.048979733891514!3d49.44461132522692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b866064977f%3A0xf8dce723a9cbb5d8!2z0KfQtdGA0LrQsNGB0YHRiywg0KfQtdGA0LrQsNGB0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDE4MDAw!5e1!3m2!1sru!2sua!4v1599729564188!5m2!1sru!2sua" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen=""
                    >
                    </iframe>
                </div>
                <div className="container-buttons">
                    <Button variant="link" className="add">Add to favorites</Button>
                    <Button variant="link" className="remove">Remove</Button>
                </div>
            </div>

        )
    }
}

export default MapInfo;