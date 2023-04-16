import { LOGO_IMG } from "./config";

const Logo = () => {
  return (
    <a href="/">
      <img className="h-24  pl-2" alt="Hunger box" src={LOGO_IMG} />
    </a>
  );
};

export default Logo;
