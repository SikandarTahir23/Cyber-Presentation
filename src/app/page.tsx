import Link from "next/link";
import Blog from "./components/blog";
import Carousel from "./components/carousel";


export default function Home() {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/abstract-secure-technology-background_52683-28464.jpg?uid=R84026487&ga=GA1.1.856866157.1723926195&semt=ais_hybrid")',
        }}
      >
        <div className="flex flex-col items-center bg-gradient-to-r from-blue-900 to-gray-900 p-8 shadow-lg">
          <h1 className="text-4xl font-bold font-mono text-center text-white relative">
            Cybersecurity: Protecting Yourself in the Digital Age
            <span className="absolute inset-0 -z-10 h-16 w-full rounded-lg blur-xl opacity-75 bg-blue-500/70 shadow-xl"></span>
          </h1>
        </div>

        {/* Carousel component */}
        <div className="w-full flex justify-center my-8">
          <Carousel />
        </div>

        {/* Blog component */}
        <div className="w-full flex justify-center mt-8">
          <Blog />
        </div>
        <div className="card-actions justify-center">
  <Link href="https://drive.google.com/file/d/1B33THt2-Y4a8uD6c9nr5_ClbG2TICdLF/view?usp=drive_link">
    <button className="btn btn-primary text-lg py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
      Click for PPT
    </button>
  </Link>
</div>
      </div>

    </>
  );
}
