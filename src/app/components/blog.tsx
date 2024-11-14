import Image from "next/image";
import img1 from "../images/blog1.jpg";
import img2 from "../images/blog2.jpg";
import img3 from "../images/blog3.jpg";
import img4 from "../images/blog4.jpg";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4 p-6">
        
        {/* Card 1 */}
        <div className="mr-4 card card-side bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure className="w-full">
            <Image
              src={img1}
              alt="History of JavaScript"
              width={500}  
              height={300} 
              className="object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-yellow-600">Understanding Cybersecurity - Definition, Evolution, and Importance:</h2>
            <p>
            Cybersecurity involves protecting computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It encompasses a range of defensive methods aimed at safeguarding data integrity, preventing unauthorized access, and countering online threats.
            </p>
            <div className="card-actions justify-end">
              <Link href="/intro">
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="mr-4 card card-side bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure className="w-full">
            <Image
              src={img2}
              alt="Learn JavaScript"
              width={500}  
              height={300}  
              className="object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-yellow-600"> Understanding Cyber Threats - Types and Their Impact:</h2>
            <p>
            Cyber threats are an ever-present danger in our connected world, affecting individuals, organizations, and even national security. These threats come in many forms, including phishing scams, which trick users into revealing personal information; malware and ransomware.
            </p>
            <div className="card-actions justify-end">
              <Link href="/attack">
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="mr-4 card card-side bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure className="w-full">
            <Image
              src={img3}
              alt="Advanced JavaScript"
              width={500} 
              height={300}  
              className="object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-yellow-600">How to Protect Your Assets - Practical Cyber Defense Strategies:</h2>
            <p>
            Protecting your digital assets is crucial in today’s cyber landscape, where threats are constantly evolving. Practical cyber defense strategies include using strong, unique passwords, enabling two-factor authentication (2FA), and securing networks with firewalls and VPNs.
            </p>
            <div className="card-actions justify-end">
              <Link href="/defend">
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="mr-4 card card-side bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure className="w-full">
            <Image
              src={img4}
              alt="JavaScript Versions"
              width={500} 
              height={300}  
              className="object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-yellow-600">Building a Secure Future - Cybersecurity Awareness and Future Trends:</h2>
            <p>
            Creating a secure digital future requires a combination of awareness and adaptation to emerging trends. Cybersecurity awareness is now essential, empowering individuals and businesses to recognize threats and implement safe practices. Meanwhile, advanced technologies like AI and blockchain are shaping the future of cybersecurity.
            </p>
            <div className="card-actions justify-end">
              <Link href="/awar">
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
