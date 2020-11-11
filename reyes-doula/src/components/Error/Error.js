import React from 'react';
import { Container } from 'react-bootstrap';
import './Error.css';

const Error = () => {
    return (
        <Container>
            <body>
                <div id="notfound">
                    <div class="notfound">
                        <div class="notfound-404">
                            <h1>Oops!</h1>
                            <h2>404 - The Page cannot be found</h2>
                        </div>
                        <a href="/">Go TO Homepage</a>
                    </div>
                </div>
            </body>
        </Container>
    )
};

export default Error;