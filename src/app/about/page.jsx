import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h2>About Us</h2>
            <Image src ="https://images.unsplash.com/photo-1788270083262-55c5df22ed45" width={300} height={300} alt="Campfire by Lake with Metal Mug" />
           <Image src="/React.png" width={300} height={300} alt="React Logo" />
            <Image src="/images/JavaScript.png" width={200} height={200} alt="JavaScript" />
        </div>
    );
};

export default AboutPage;