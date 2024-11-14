

export default function Intro() {
  return (
    <>
      <div className="bg-gray-100 text-gray-800 font-sans p-6">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">What is Cybersecurity?
        </h1>

        {/* Tutorial Content Section */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl mb-4">Cybersecurity involves protecting computers,      servers, mobile devices, electronic systems, networks, and data from malicious attacks. It encompasses a range of defensive methods aimed at safeguarding data integrity, preventing unauthorized access, and countering online threats. Key aspects include:
            <br />

            <strong>Data Protection:</strong> Ensures the confidentiality, integrity, and availability of information. <br />
            <strong>Network Security:</strong> Secures a network’s infrastructure by protecting the usability, reliability, and integrity of data and network connections. <br />
           <strong>Endpoint Security:</strong> Protects individual devices (like laptops, desktops, and mobile devices) that are entry points to a network.
           </p>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-800 font-sans p-6">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">The Evolution of Cybersecurity
        </h1>

        {/* Tutorial Content Section */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl mb-4">Cybersecurity has grown alongside technological advancements, evolving from simple security measures to complex systems. Some key milestones include:
            <br />

            <strong>Early Days:</strong> Cybersecurity started with isolated systems that used basic firewalls and antivirus tools to prevent unauthorized access and virus infections. <br />
            <strong>Rise of the Internet:</strong> With the expansion of the internet, cyber threats grew in sophistication. Attacks became more organized, requiring new measures like intrusion detection systems and multi-layered firewalls. <br />
            <strong>IoT and Cloud Computing:</strong> As devices became interconnected and cloud computing spread, the need for more robust cybersecurity increased. Cybersecurity now extends to a wide range of devices, networks, and cloud services. <br />
            <strong>Modern Era:</strong> Today, cybersecurity focuses on protecting users and systems from organized cybercriminals, state-sponsored attacks, and hacktivists. Technologies like AI, machine learning, and blockchain are shaping the future of cybersecurity.
           </p>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-800 font-sans p-6">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Why Cybersecurity Matters in Today’s World?
        </h1>

        {/* Tutorial Content Section */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl mb-4">The digital world offers convenience, but it also increases exposure to cyber threats. Cybersecurity is critical for:
            <br />

         <strong>Securing Digital Transactions:</strong> Online banking and shopping rely on secure networks. A single breach can result in financial losses and damage trust. <br />
         <strong>Protecting Personal and Organizational Data:</strong> Cybersecurity prevents unauthorized access to sensitive information, like personal health records and intellectual property. <br />
         <strong>Ensuring National Security:</strong> Cyber attacks can target critical infrastructure, impacting essential services such as healthcare, finance, and government functions. <br />
           </p>
        </div>
      </div>
    </>
  )
}