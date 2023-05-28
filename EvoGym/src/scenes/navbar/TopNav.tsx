import Logo from "@/assets/Logo.png";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { Bars3Icon } from "@heroicons/react/20/solid";
import MenuItems from "./MenuItems";

type Props = {
  isTopOfPage: boolean;
  isMediumScreenOrAvove: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

const TopNav = (props:Props) => {
  const {
    isTopOfPage,
    isMediumScreenOrAvove,
    selectedPage,
    setSelectedPage,
    isMenuToggled,
    setIsMenuToggled,
  } = props;

  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <div
      className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
    >
      {/* SECCION DEL CONTENIDO */}
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* LADO IZQUIERDO */}
          <img src={Logo} alt="logo" />

          {/* LADO DERECHO */}
          {isMediumScreenOrAvove ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <MenuItems
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sing In</p>
                <ActionButton
                  setSelectedPage={setSelectedPage}
                >
                  {" "}
                  Become a Member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
