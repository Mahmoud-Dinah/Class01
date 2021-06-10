import React from 'react';

class Footer extends React.Component{
    render(){
        const myName = 'Made by Mahmoud Al-dinah'
        return (
            <footer>
              <span style={{textAlign:'center' , backgroundColor: 'black' , width: '100%' , color: 'white' }}>{myName}</span>
            </footer>
        )
    }
}

export default Footer;