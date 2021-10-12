import Button from '../components/button/button.styled';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Index page</span>
        </h2>
        <span className="block">Please navigate to the appropriate page</span>

        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <Link href="/buttons">
              <Button>
                Buttons Component
              </Button>
            </Link>
            <Link href="/table">
              <Button>
                Table Component
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
