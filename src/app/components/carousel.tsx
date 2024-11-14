import Image from "next/image";
import img1 from "../images/cyber.jpg";
import img2 from "../images/bg.jpg";
import img3 from "../images/3038741.jpg";
import img4 from "../images/cyber4.jpg";

export default function Carousel() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="carousel relative w-full sm:w-[600px] md:w-[800px] lg:w-[1000px]">
          <div id="slide1" className="carousel-item relative w-full">
            <Image
              src={img1}
              alt="image"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <a href="#slide4" className="btn btn-circle bg-gray-800 text-white">
                ❮
              </a>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <a href="#slide2" className="btn btn-circle bg-gray-800 text-white">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Image
              src={img2}
              alt="image"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <a href="#slide1" className="btn btn-circle bg-gray-800 text-white">
                ❮
              </a>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <a href="#slide3" className="btn btn-circle bg-gray-800 text-white">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <Image
              src={img3}
              alt="image"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <a href="#slide2" className="btn btn-circle bg-gray-800 text-white">
                ❮
              </a>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <a href="#slide4" className="btn btn-circle bg-gray-800 text-white">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <Image
              src={img4}
              alt="image"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <a href="#slide3" className="btn btn-circle bg-gray-800 text-white">
                ❮
              </a>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <a href="#slide1" className="btn btn-circle bg-gray-800 text-white">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
