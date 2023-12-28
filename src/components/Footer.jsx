import logo from "../assets/coffee.png";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`flexCenter sm:pb-10 sm:pt-14 py-12 sm:px-14 px-6 flex-col bg-dark-coffee`}
  >
    <div
      className={`
    flexStart md:flex-row flex-col mb-8  w-full`}
    >
      <div className=" flex flex-col justify-start items-start max-sm:mx-auto gap-3">
        <img
          src={logo}
          alt="Street cafe"
          className="w-[166px] h-[72.14px] object-contain"
        />
        <div className="flex flex-row gap-2 justify-center w-full">
          <p className={`font-satisfy font-semibold  text-primary `}>Cafe</p>
          <p className="font-satisfy font-bold ">Street</p>
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex  flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-semibold text-[18px] leading-[27px] ttext-secondary">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-primary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-semibold text-center text-[18px] leading-[27px] text-black">
        Copyright Ⓒ 2024 CafeStreet. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
