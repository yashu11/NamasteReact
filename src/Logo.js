import { LOGO_IMG } from "./config";

const Logo = () => {
  return (
    <a href="/">
      <img className="logo" alt="Hunger box" src={LOGO_IMG} />
    </a>
  );
};

export default Logo;
