import { SelectedPage } from "@/shared/types";
import Link from "./Link";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const MenuItems = ({ selectedPage, setSelectedPage }: Props) => {

    const pages = ["Home", "About", "Our Classes", "Contact Us"];

    return (
        <>
            {pages.map((page) => (
                <Link
                    key={page}
                    page={page}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            ))}
        </>
    )
}

export default MenuItems