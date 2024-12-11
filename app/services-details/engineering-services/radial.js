import React, { useState } from 'react';


const Card = ({ id, onClick, children, style }) => (
    <div className="flex justify-center items-center">
        <div className={`radial rounded-full p-6 w-24 h-24 flex items-center justify-center text-center shadow-lg ${style}`} onClick={() => onClick(id)}>
            {children}
        </div>
    </div>
);

const RadialCardGrid = () => {

    const iconData = [
        {
            id: 1,
            name: "Production & Advanced Manufacturing"
        },
        {
            id: 2,
            name: "Electronics & semiconductors"
        },
        {
            id: 3,
            name: "Hospitality"
        },
        {
            id: 4,
            name: "Information Technology"
        },
        {
            id: 5,
            name: "E-Commerce"
        },
        {
            id: 6,
            name: "Education"
        },
        {
            id: 7,
            name: "Retail"
        },
        {
            id: 8,
            name: "FMCG"
        },
    ]

    const [selectedCard, setSelectedCard] = useState(null);  // State to track the clicked card
    const cards = [];
    const radius = 175; // radius of the circle in pixels
    const numCards = 8;

    for (let i = 0; i < numCards; i++) {
        const angle = (i / numCards) * 360;
        const x = Math.cos(angle * Math.PI / 180) * radius;
        const y = Math.sin(angle * Math.PI / 180) * radius;

        const icon = iconData.find(icon => icon.id === i + 1);
        cards.push(
            <>
                <div>
                    <div key={i} className="absolute" style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) `,
                        
                    }}>
                        <Card
                            id={i}
                            onClick={setSelectedCard} // Pass the setSelectedCard function to handle click
                        >
                            <div className='flip-container'>
                            <img src='/assets/img/icon/chip.webp' className='w-20 h-20 flip-image' alt='chip' />

                            </div>
                        </Card>
                        <h5 className={`${(i === 2) ? "top-36" : (i === 6) ? "bottom-32 left-5" : (i > 2 && i < 6) ? "right-44 top-8 w-56 text-right" : "left-40 top-9 w-72 h-10"} absolute`}> {icon ? icon.name : 'Unknown'} </h5>

                    </div>
                    
                </div>

            </>
        );
    }

    return (
        <div className="flex justify-start items-center min-h-screen">
            <div className="relative w-[400px] h-[400px] mx-auto rounded-full flex items-center justify-center"
            >
                <h4 className='w-10 text-center flex justify-center'>
                    Industries we serve
                </h4>
                <div >
                    {cards}
                </div>

                {/* {selectedCard !== null && <p className="absolute bottom-0 text-xl">Card</p>} */}
            </div>
            {/* <div className="flex-grow relative" style={{ width: '635px', height: '450px', marginLeft: '300px' }}>
        <div className="rounded-2xl bg-slate-200 shadow-xl absolute right-0 top-0 w-full h-full">
          <p className="p-4">Right Side Box</p>
        </div>
      </div> */}
        </div>
    );
};

export default RadialCardGrid;
