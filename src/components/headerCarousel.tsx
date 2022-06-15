import React from "react";
import { Carousel } from "react-bootstrap";

export function HeaderCarousel(): JSX.Element {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <header className="App-header">
                        <div>Welcome to DEC's Media Contact Database!</div>
                    </header>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <header className="App-header">
                        <div>Powered by pure determination</div>
                    </header>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}