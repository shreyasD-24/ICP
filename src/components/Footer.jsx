import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTelegramPlane,
} from "react-icons/fa";

export default function ICPWorkFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 text-gray-700">
      {/* Main Footer Content */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12">
        
        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 text-sm">
          
          {/* Categories */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-gray-900 text-base flex items-center gap-2">
              <span className="text-lg">📂</span> Categories
            </h3>
            <ul className="space-y-3">
              {[
                "Development & Smart Contracts",
                "Web3 & Blockchain Consulting",
                "UI/UX & Frontend Design",
                "DAO Governance & Operations",
                "Identity & Authentication (II)",
                "Canister Development",
                "Tokenomics & DeFi",
                "AI & Autonomous Agents",
                "Growth & Community Building",
                "Content & Translation",
                "Security Audits & Testing",
                "NFT & Gaming Assets",
                "Data & Analytics",
                "Educational Services",
                "On-chain Marketing",
                "Open Bounties Directory",
              ].map((item, i) => (
                <li key={i} className="hover:text-green-600 cursor-pointer transition-colors duration-200 hover:translate-x-1 transform">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For Clients */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-gray-900 text-base flex items-center gap-2">
              <span className="text-lg">🤝</span> For Clients
            </h3>
            <ul className="space-y-3">
              {[
                "How ICPWork Works",
                "Client Onboarding Guide",
                "Trust & Dispute Resolution (DAO)",
                "Hiring Decentralized Teams",
                "ICPWork Client Help Center",
                "Browse Talent Pools",
                "Integration with ICP dApps",
              ].map((item, i) => (
                <li key={i} className="hover:text-green-600 cursor-pointer transition-colors duration-200 hover:translate-x-1 transform">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For Freelancers */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-gray-900 text-base flex items-center gap-2">
              <span className="text-lg">👨‍💻</span> For Freelancers
            </h3>
            <ul className="space-y-3">
              {[
                "Become an ICPWork Freelancer",
                "Contributor DAO & Voting Rights",
                "On-chain Reputation System",
                "Freelancer Knowledge Hub",
                "Events & Bounties",
                "Token Rewards & Staking",
                "Wallet & Identity Setup (II)",
              ].map((item, i) => (
                <li key={i} className="hover:text-green-600 cursor-pointer transition-colors duration-200 hover:translate-x-1 transform">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Solutions */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-gray-900 text-base flex items-center gap-2">
              <span className="text-lg">🏢</span> Business Solutions
            </h3>
            <ul className="space-y-3">
              {[
                "Hire via DAO",
                "Enterprise Smart Contract Deployment",
                "Decentralized Workforce Solutions",
                "Custom ICP Canister Builds",
                "API Access & SDKs",
                "ICP Identity Management",
                "Request Enterprise Demo",
              ].map((item, i) => (
                <li key={i} className="hover:text-green-600 cursor-pointer transition-colors duration-200 hover:translate-x-1 transform">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 text-gray-900 text-base flex items-center gap-2">
              <span className="text-lg">🏛</span> Company
            </h3>
            <ul className="space-y-3">
              {[
                "About ICPWork",
                "Roadmap & Whitepaper",
                "Community DAO",
                "Ecosystem Partnerships",
                "Terms of Use",
                "Privacy & Data Policy",
                "Bug Bounty Program",
                "Creator Ambassadors",
                "Careers",
                "Press & Newsroom",
                "Contact Team",
                "Investor Deck",
              ].map((item, i) => (
                <li key={i} className="hover:text-green-600 cursor-pointer transition-colors duration-200 hover:translate-x-1 transform">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 bg-gray-100">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-gray-900">
                ICPWork
              </div>
              <p className="text-gray-600 text-center sm:text-left text-sm">
                © ICPWork Protocol 2025 • Built fully on-chain with{" "}
                <span className="text-red-500">❤️</span> by the Internet Computer community.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 text-xl">
                <FaTwitter className="hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-125" />
                <FaGithub className="hover:text-gray-900 cursor-pointer transition-all duration-300 hover:scale-125" />
                <FaLinkedin className="hover:text-blue-600 cursor-pointer transition-all duration-300 hover:scale-125" />
                <FaDiscord className="hover:text-indigo-600 cursor-pointer transition-all duration-300 hover:scale-125" />
                <FaTelegramPlane className="hover:text-blue-500 cursor-pointer transition-all duration-300 hover:scale-125" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}