import tw from 'tailwind-styled-components';

const Tr = tw.tr`
      ${(p) => {
        if(p.theme === "dark")
          return `
            bg-gray-600
            text-gray-300
            hover:bg-gray-700
            hover:text-gray-200
          `
        else if(p.theme === "cyberpunk") 
          return `
            bg-purple-600
            text-blue-200
            border-blue-400
            hover:bg-purple-700
            hover:text-blue-50
          `
        else
          return `
            bg-gray-100
            border-black
            hover:bg-gray-200
            hover:text-gray-800
          `
      }}
      items-center 
      border 
      border-solid
      border-2
      shadow-sm 
`;

export default Tr;
