import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import TopNav from "./TopNav";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  // Si el ancho de la pantalla es menor al 1060 la variable se seteara en false
  const isMediumScreenOrAvove = useMediaQuery("(min-width: 1060px)");
  const navbarProps = {
    selectedPage,
    setSelectedPage,
    setIsMenuToggled,
  };

  return (
    <nav>
      <TopNav
        {...navbarProps}
        isTopOfPage={isTopOfPage}
        isMediumScreenOrAvove={isMediumScreenOrAvove}
        isMenuToggled={isMenuToggled} />

      {!isMediumScreenOrAvove && isMenuToggled && (
        <MobileMenu {...navbarProps} />
      )}
    </nav>
  );
};

export default Navbar;