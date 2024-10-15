import Marquee from 'react-fast-marquee';
import LazyLoad from 'react-lazyload';


export default function Marquee2() {
    return (
        <LazyLoad height={100} offset={100} once>
            <div className="marquee__area-two">

                <Marquee className="marquee__wrap max-h-40 overflow-hidden" gradient={false} speed={100}>
                    <h3 className={`text-3xl text-left mb-2 mr-9`} >
                        <span className='text-blue-400'>Evolve.</span>
                        <span className='text-pink-400'>Transform.</span>
                        <span>Grow.</span>
                    </h3>

                </Marquee>

            </div>
        </LazyLoad>
    );
}
