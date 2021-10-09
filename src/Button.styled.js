import tw from "tailwind-styled-components"

export const StyledButton = tw.button`
    ${(props) => props.rounded && `rounded-full`} 
    ${(props) => (props.$color ? `bg-`+props.$color+`-500` : `bg-purple-500`)} 
    ${(props) => (props.$color ? `text-`+props.$color+`-600` : `text-purple-600`)} 
    ${(props) => (props.$color ? `border-`+props.$color+`-200` : `border-purple-200`)} 
    border 
    px-9 
    py-6 
`