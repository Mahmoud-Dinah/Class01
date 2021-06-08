import React from 'react';

class Footer extends React.Component{
    render(){
        const myName = 'Made by Mahmoud Al-dinah'
        return (
            <footer>
              <span>{myName}</span>
            </footer>
        )
    }
}

export default Footer;