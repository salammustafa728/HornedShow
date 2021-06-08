import React from 'react';

class Footer extends React.Component {
    
    render(){
        const name = 'Salam Mustafa';
        return(
            <footer>
                <span>
                   Author: {name}
                </span>
            
            </footer>
        )
    }
}

export default Footer;