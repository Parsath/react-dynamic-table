import tw from 'tailwind-styled-components';

const Button = tw.div`
    ${(p) => (p.$primary ? 'bg-indigo-600' : 'bg-indigo-300')}
    ${(p) => (p.$textColor ? p.$textColor : 'text-white')}
      inline-flex 
      items-center 
      px-3.5 
      py-2.5 
      border 
      border-transparent 
      text-xs 
      font-medium 
      rounded 
      shadow-sm 
      bg-indigo-600 
      hover:bg-indigo-700 
      focus:outline-none 
      focus:ring-2 
      focus:ring-offset-2 
      focus:ring-indigo-500
`;

export default Button;