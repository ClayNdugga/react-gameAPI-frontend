import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //[] define index signature
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    androd: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((plat) => (
          <Icon key={plat.id} as={iconMap[plat.slug]} color='gray.500'/>
          // <CriticScore></>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
