import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Image
            src="/images/nextjs.svg"
            alt="Next.js Logo"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-bold mt-4">Next.js</h2>
          <p className="text-gray-600 mt-2">
            Next.js is a minimalistic framework for server-rendered React
            applications.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Image
            src="/images/tailwindcss.svg"
            alt="Tailwind CSS Logo"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-bold mt-4">Tailwind CSS</h2>
          <p className="text-gray-600 mt-2">
            Tailwind CSS is a utility-first CSS framework for quickly building
            custom designs.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Image
            src="/images/heroicons.svg"
            alt="Heroicons Logo"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-bold mt-4">Heroicons</h2>
          <p className="text-gray-600 mt-2">
            Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Image
            src="/images/headlessui.svg"
            alt="Headless UI Logo"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-bold mt-4">Headless UI</h2>
          <p className="text-gray-600 mt-2">
            Completely unstyled, fully accessible UI components, designed to
            integrate beautifully with Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
