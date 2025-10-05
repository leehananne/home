import MobileNav from "../../components/MobileNav"
import { Footer } from "../../components/Footer"

export default function NestAssured() {
  return (
    <div>
      <MobileNav />
      <div className="px-10 py-7 flex flex-col justify-center items-center gap-7 w-full md:w-2/3 mx-auto">
        <h1 className="text-4xl font-bold text-center">Nest Assured</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300">
          A comprehensive project developed at Imperial College London during June - September 2024.
        </p>
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Nest Assured is an innovative solution that combines UI/UX design principles with physical computing 
            to create a user-friendly experience. This project demonstrates the intersection of digital design 
            and tangible technology.
          </p>
          <h3 className="text-xl font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Intuitive user interface design</li>
            <li>Physical computing integration</li>
            <li>Responsive design principles</li>
            <li>User-centered approach</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}
