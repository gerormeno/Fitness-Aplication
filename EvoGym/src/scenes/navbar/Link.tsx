import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  // Es para usar el nombre de la pagina como id del href - con 'as' se forza un tipo
  const lowercasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isPageSelected = selectedPage === lowercasePage;

  const handleLinkClick = () => {
    setSelectedPage(lowercasePage);
  };

  return (
    <AnchorLink
      href={`#${lowercasePage}`}
      onClick={handleLinkClick}
      className={`
        transition duration-500 hover:text-primary-300
        ${isPageSelected ? "text-primary-500" : ""
      }`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
