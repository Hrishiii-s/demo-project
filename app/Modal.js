import React, { useEffect, useState, useRef } from 'react';

const Modal = ({ showModal, setShowModal, title, description, imageUrl, linkedInUrl }) => {
  useEffect(() => {
      const closeOnEscapeKey = e => e.key === 'Escape' && setShowModal(false);
      document.body.addEventListener('keydown', closeOnEscapeKey);
      return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
  }, [setShowModal]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!showModal) return null;

  return (
      <div className="fixed inset-0 z-50" onClick={() => setShowModal(false)} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div
              className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-start"
              style={{
                  position: 'absolute',
                  width: isMobile ? '95vw' : '80%',
                  height: isMobile ? '80vh' : '80vh',
                  left: '50%',
                  top: '56%',
                  transform: 'translate(-50%, -50%)',
              }}
              onClick={e => e.stopPropagation()}
          >
              <img src={imageUrl} alt="Profile" className={`md:w-1/3 md:h-auto object-cover rounded-lg ${isMobile ? 'w-full mt-3' : 'h-full'}`} />

              <div className='flex flex-col w-full mt-4 md:mt-0 md:ml-3 overflow-y-auto' style={{ maxHeight: '70vh' }}>
                  <h1 className="text-xl text-center sm:text-left sm:text-2xl font-bold">{title}</h1>
                  <p className="text-sm mt-2 md:mt-0 md:ml-4" style={{ textOverflow: 'ellipsis' }}>{description}</p>
                  <a href={linkedInUrl} className="text-blue-500 mt-2 md:ml-3" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/img/icon/linkedin.png" alt="LinkedIn" className="w-10 h-10" /> {/* Adjust the path and size as necessary */}

                  </a>
              </div>

              <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2 w-10 p-2"
                  aria-label="Close modal"
              >
                  <img src="/assets/img/icon/close.png" alt='' className=''/>
              </button>
          </div>
      </div>
  );
};

export default Modal;