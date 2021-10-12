import Button from '../components/button/button.styled';

export default function Buttons() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">This is a button demo</span>
        </h2>
        <span className="block">Using Tailwind Css and styled component</span>

        <div className="mt-8 flex justify-center">
          {/* Buttons Section */}
          {/* Choose colors : red - blue - yellow - gray */}
          <div className="grid grid-cols-3 gap-4">
            <Button $color={'red'}>Primary</Button>
            <Button $color={'blue'}>Primary</Button>
            <Button $color={'green'}>Primary</Button>
            <Button $color={'yellow'}>Primary</Button>
            <Button $color={'grey'}>Primary</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
