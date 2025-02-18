import React from "react";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "./ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot onSelect={(details: { value: string }) => {
      const selected = data.find(platform => platform.name === details.value);
      if (selected) {
        onSelectPlatform(selected);
      }
    }}>
      <MenuTrigger asChild>
        <Button>
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown style={{ marginLeft: "8px" }} />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.name}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
