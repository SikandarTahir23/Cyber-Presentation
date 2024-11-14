

export default function Attack() {
  return (
    <>
      <div className="bg-gray-100 text-gray-800 font-sans p-6">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Understanding Cyber Threats - Types and Their Impact:</h1>

        {/* Tutorial Content Section */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl mb-4">Cyber threats are an ever-present danger in our connected world, affecting individuals, organizations, and even national security. These threats come in many forms, including phishing scams, which trick users into revealing personal information; malware and ransomware, which can lock users out of their data or disrupt business operations; and social engineering, which manipulates human behavior to gain access to sensitive information. The impact of these threats can be devastating, leading to significant financial loss, reputational damage, and operational disruptions. Addressing these challenges requires not only awareness but also robust defense mechanisms to mitigate the risks of a digital attack that includes:</p>


        </div>
      </div>

      <div className="bg-gray-100 text-gray-800 font-sans p-6">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6"> Phishing Attacks:</h1>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl mb-4">
            Phishing is a type of social engineering attack where attackers disguise themselves as trustworthy sources to obtain personal information. Common techniques include: <br />

            <strong>Email Phishing:</strong> Attackers send emails that look like they come from reputable sources, asking users to click on malicious links or provide sensitive information. <br />
            <strong>Spear Phishing:</strong>  A targeted form of phishing that customizes messages for specific individuals, making the attack more convincing and effective. <br />
            <strong>Example:</strong> A “bank” email might ask a user to verify their account details, but the link redirects to a fake site designed to steal their login credentials.
          </p>

        </div>

        {/* Exercise Section */}
      </div>

      <div className="bg-gray-100 text-gray-800 font-sans p-6">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Malware and Ransomware:</h1>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl mb-4">
            Malware is malicious software designed to damage or disable systems. Types include: <br />

            <strong>Viruses:</strong> Infect other programs and files, spreading within and across systems. <br />
            <strong>Ransomware:</strong> Locks users out of their data, demanding a ransom to restore access. <br />
            <strong>Impact of Ransomware:</strong> Many businesses and public institutions have faced ransomware attacks, where they were forced to pay large sums to regain access to their data.
          </p>

        </div>
      </div>
      <div className="bg-gray-100 text-gray-800 font-sans p-6">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Social Engineering:</h1>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl mb-4">
            Social engineering exploits human psychology rather than technical vulnerabilities. Attackers manipulate people into revealing sensitive information or granting access. <br />

            <strong>Pretexting:</strong> Attackers pose as someone else to gain information. For instance, they may pretend to be an IT technician asking for login details. <br />
            <strong>Baiting:</strong> Attackers leave infected devices (like USBs) in visible places, hoping users will insert them into their computers, unknowingly installing malware. <br />
          </p>

        </div>
      </div>
      <div className="bg-gray-100 text-gray-800 font-sans p-6">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Impact of Cyber Threats:</h1>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl mb-4">
           The consequences of cyber threats include: <br />

            <strong> Financial Damage:</strong> Cyber attacks cost organizations billions each year in damages, ransom payments, and operational disruptions. <br />
            <strong>Reputation Loss:</strong> Data breaches can erode customer trust and damage a company’s reputation. <br />
            <strong>Operational Downtime:</strong> Attacks such as ransomware can halt operations, causing significant productivity losses.
          </p>

        </div>
      </div>

    </>
  )
}