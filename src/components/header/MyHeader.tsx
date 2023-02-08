import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import "./MyHeaderStyles.css";

export const MyHeader = () => {
  return (
    <>
      <header className="myHeader flex p-3 items-center justify-around">
        <div className="leftHeaderContent">
          <h1 className="text-white text-3xl font-bold">TalIA</h1>
        </div>
        <div className="middleHeaderContent"></div>
        <div className="rigthHeaderContent md:hidden">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              colorScheme="green"
            />
            <MenuList>
              <MenuItem>Advantages</MenuItem>
              <MenuItem>Mobility</MenuItem>
              <MenuItem>Pricing</MenuItem>
              <MenuItem>Politics</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="rigthDesktioContent hidden md:flex">
          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <p className="text-white">Advantages</p>
              </li>
              <li>
                <p className="text-white">Mobility</p>
              </li>
              <li>
                <p className="text-white">Pricing</p>
              </li>
              <li>
                <Button size="xs" colorScheme="green" variant="outline">
                  Try Free
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
