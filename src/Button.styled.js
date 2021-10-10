import tw from 'tailwind-styled-components';

const getClassColor = (color) => {
  let bucket;
  switch (color) {
    case 'blue':
      bucket = 'bg-blue-400';
      break;

    case 'green':
      bucket = 'bg-green-400';
      break;

    case 'red':
      bucket = 'bg-red-400';
      break;

    case 'yellow':
      bucket = 'bg-yellow-400';
      break;

    default:
      bucket = 'bg-gray-400';
      break;
  }
  return bucket;
};

const getHoverClass = (color) => `hover:bg-${color}-500`;
const getFocusClass = (color) => `focus:ring-${color}-500`;

const Button = tw.button`
    ${(p) => getClassColor(p.$color)}
    ${(p) => getHoverClass(p.$color)}
    ${(p) => getFocusClass(p.$color)}
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
      text-white 
      focus:outline-none 
      focus:ring-2 
      focus:ring-offset-2 
`;

export default Button;
