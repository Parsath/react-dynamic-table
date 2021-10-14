import tw from 'tailwind-styled-components';

const SearchInput = tw.input`
      ${(p) => {
        if(p.theme === "tailwind")
          return `
            placeholder-gray-500
            text-gray-500
            border
            border-gray-300
          `
        else
          return `
            placeholder-gray-900 
            text-black 
          `
      }}
      px-6 
      py-3 
      rounded-lg 
      text-left 
      h-6 
      focus:outline-none 
      w-5/6
`;

export default SearchInput;
