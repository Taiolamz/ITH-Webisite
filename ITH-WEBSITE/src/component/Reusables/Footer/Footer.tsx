import { Link } from "react-router-dom";
import { footer, socials } from "./lists";

const Footer = () => {
  return (
    <section className="w-full   bg-[#020E2A]">
      <div
        className="border-b pb-8 pt-16"
        style={{ borderBottom: ".1rem solid rgba(251, 251, 251, 0.1)" }}
      >
        <div className=" grid place-items-center">
          <div className="grid grid-cols-5 place-items-center gap-10 justify-center ">
            {footer.map((chi, idx) => {
              const { label, path } = chi;
              return (
                <div key={idx} className="w-full grid place-items-center">
                  <Link to={path} className="text-white   font-light">
                    {label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" grid place-items-center py-10">
        <div className="flex gap-14 items-center">
          <p className="text-white text-sm font-light">
            Copyrights@2024 IT Horizons Holdings{" "}
          </p>
          <Link to="#" className="text-white text-sm font-light">
            Privacy Policy
          </Link>
          <Link to="#" className="text-white text-sm font-light">
            Terms and Conditions
          </Link>
        </div>
        <div className="flex gap-3 items-center my-10">
          {socials.map((chi, idx) => {
            const { icon, path, label } = chi;
            return (
              <Link to={path} key={idx}>
                <img src={icon} alt={label} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
