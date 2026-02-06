import React, { useEffect } from 'react';

const HubSpotForm = ({ portalId, formId, region }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region
        });
      }
    });

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    }
  }, [portalId, formId, region]);

  return <div id={`hs-form-${formId}`}></div>;
};

export default HubSpotForm;
