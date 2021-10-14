import tw from 'tailwind-styled-components';

const TheadStyled = tw.thead`
      ${(p) => {
        if(p.theme === "dark")
          return `
            bg-gray-800
            hover:bg-gray-900
            text-white
          `
          else if(p.theme === "tailwind") 
            return `
              bg-gray-50
              text-gray-500
              border-gray-200
            `
        else if(p.theme === "cyberpunk") 
          return `
            bg-purple-800
            text-green-200
            border-blue-400
            hover:bg-purple-900
          `
        else
          return `
            bg-gray-300
            border-black
            hover:bg-gray-400
          `
      }}
      items-center 
      border 
      border-solid
      border-2
      shadow-sm 
`;

export default TheadStyled;
