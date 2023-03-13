import { CaretLeft, CaretRight } from "phosphor-react";
import { Button, TooltipContainer } from "./styles";


export function Tooltip() {
  return (
    <TooltipContainer>
      <Button>
        <CaretLeft size={20} weight="bold" />

      </Button>
      <Button>
        <CaretRight size={20} weight="bold" />

      </Button>
    </TooltipContainer>
  );
};

Tooltip.displayName = 'Tooltip';