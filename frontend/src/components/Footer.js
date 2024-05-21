import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#FFB02E] mt-10">
      <div>
        <div className="md:flex justify-between md:mx-40 py-10">
          <h1 className="text-3xl text-white mx-10 md:mx-0 py-5 md:py-0">
            Astronautica
          </h1>
          <div className="md:flex mx-10 md:mx-0 gap-8 bg-white p-4 rounded-3xl">
            <h1 className="font-semibold text-lg">
              Do Call and Whatsapp on this Number{" "}
              <span className="font-bold text-xl">+91-98308697800</span>
            </h1>
          </div>
        </div>
        <div className="grid md:grid-cols-4 md:space-x-10 md:mx-40 mx-10 space-y-3 md:space-y-0 py-10 grid-cols-1">
          <div>
            <h1 className="font-medium">
              My expertise and knowledge in this field has helped more than
              10,000 of my clients for the last fifteen years. I have been
              awarded with several awards like Jyotish Ratna, Jyotish Bhushan &
              Others.
            </h1>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-5">CHANDIGARH OFFICE:</h1>
            <h1 className="font-medium">
              501 2nd Floor Near Syndicate Bank,Sector 70, Sahibzada Ajit Singh
              NagarChandigarh, 160059
            </h1>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-5">DELHI OFFICE</h1>
            <h1 className="font-medium">
              C-D Block, Shivaji Vihar , Raghubir NagarNew Delhi, Delhi, 110027
            </h1>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-5">DISCLAIMER</h1>
            <h1 className="font-medium">
              {" "}
              There are no guarantees that every person using this service will
              get their desired results for sure. Astrological results depend on
              a lot of factors and the results may vary from person to person.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
