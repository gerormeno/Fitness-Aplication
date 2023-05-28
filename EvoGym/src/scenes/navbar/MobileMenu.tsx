import { SelectedPage } from "@/shared/types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import MenuItems from "./MenuItems";

type Props = {
  setIsMenuToggled: (value: boolean) => void;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const MobileMenu = ({
  setIsMenuToggled,
  selectedPage,
  setSelectedPage,
}: Props) => {
  return (
    <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
      {/* ICONO DE CERRAR */}
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(false)}>
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>

      {/* ITEMS DEL MENU */}
      <div className="ml-[33%] flex flex-col gap-10 text-2xl">
        <MenuItems
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
