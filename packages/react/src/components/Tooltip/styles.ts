import { styled } from "../../styles";

export const TooltipContainer = styled('div', {
  width: '$12',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const Button = styled('button', {
  border: 'none',
  display: 'flex',
  color: '$gray200',
  cursor: 'pointer',
  alignItems: 'center',
  background: 'transparent',
  
  '&:hover': {
    color: '$ignite300',
  },
});