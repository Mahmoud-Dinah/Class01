import React from 'react';

class Main extends React.Component {
    render () {
        const imageOne ='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg';

        const imageOneTitle = 'UniWhal'

        const imageOneDescription = 'A unicorn and a narwhal nuzzling their horns'

        const imageTwo ='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80';

        const imageTwoTitle = 'Rhino Family'

        const imageTwoDescription = 'Mother (or father) rhino with two babies'

        const imageThree ='https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg';

        const imageThreeTitle = 'Unicorn Head'

        const imageThreeDescription = 'Someone wearing a creepy unicorn head mask'

        return (
            <main>
                <div>
            <h2>{imageOneTitle}</h2>
            <img src={imageOne} alt="" />
           <p> {imageOneDescription} </p>

           <h2>{imageTwoTitle}</h2>
            <img src={imageTwo} alt="" />
           <p> {imageTwoDescription} </p>

           <h2>{imageThreeTitle}</h2>
            <img src={imageThree} alt="" />
           <p> {imageThreeDescription} </p>
           </div>
           </main>
        )
    }
}

export default Main;