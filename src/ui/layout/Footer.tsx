import React from 'react';

import '@css/layout/Footer.scss';

class Footer extends React.Component<any> {
    render() {
        return(
            <div className="footercontainer">
                <span style={{
                    fontSize: 30,
                    marginRight: 10
                }}>Github:</span><a href="https://github.com/K-Kocak/Shopping-Site-in-TypeScript" target="_blank"><i className="fa-brands fa-github" style={{
                    fontSize: 50,                 
                    color: 'black',
                    marginLeft: 10
                }}></i></a>
            </div>
        )
    }
}

export default Footer;