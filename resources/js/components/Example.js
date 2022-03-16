import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from './TopMenu';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <TopMenu/>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('rootApp')) {
    ReactDOM.render(<Example />, document.getElementById('rootApp'));
}
