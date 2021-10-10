import Button from '../src/Button.styled';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">This is a button demo</span>
          <span className="block">Using Tailwind Css and styled component</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow"></div>
          <div className="ml-3 inline-flex">
            {/* Buttons Section */}
            <Button $primary={true} $textColor="text-9azwardi">Primary</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
