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
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        
        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">📂 Categories</h3>
          <ul className="space-y-2">
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
              <li key={i} className="hover:text-green-600 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* For Clients */}
        <div>
          <h3 className="font-semibold mb-4">🤝 For Clients</h3>
          <ul className="space-y-2">
            {[
              "How ICPWork Works",
              "Client Onboarding Guide",
              "Trust & Dispute Resolution (DAO)",
              "Hiring Decentralized Teams",
              "ICPWork Client Help Center",
              "Browse Talent Pools",
              "Integration with ICP dApps",
            ].map((item, i) => (
              <li key={i} className="hover:text-green-600 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* For Freelancers */}
        <div>
          <h3 className="font-semibold mb-4">👨‍💻 For Freelancers</h3>
          <ul className="space-y-2">
            {[
              "Become an ICPWork Freelancer",
              "Contributor DAO & Voting Rights",
              "On-chain Reputation System",
              "Freelancer Knowledge Hub",
              "Events & Bounties",
              "Token Rewards & Staking",
              "Wallet & Identity Setup (II)",
            ].map((item, i) => (
              <li key={i} className="hover:text-green-600 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Business Solutions */}
        <div>
          <h3 className="font-semibold mb-4">🏢 Business Solutions</h3>
          <ul className="space-y-2">
            {[
              "Hire via DAO",
              "Enterprise Smart Contract Deployment",
              "Decentralized Workforce Solutions",
              "Custom ICP Canister Builds",
              "API Access & SDKs",
              "ICP Identity Management",
              "Request Enterprise Demo",
            ].map((item, i) => (
              <li key={i} className="hover:text-green-600 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">🏛 Company</h3>
          <ul className="space-y-2">
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
              <li key={i} className="hover:text-green-600 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-600 text-center md:text-left mb-3 md:mb-0">
            © ICPWork Protocol 2025 • Built fully on-chain with ❤️ by the Internet Computer community.
          </p>

          <div className="flex space-x-5 text-lg">
            <FaTwitter className="hover:text-green-600 cursor-pointer" />
            <FaGithub className="hover:text-green-600 cursor-pointer" />
            <FaLinkedin className="hover:text-green-600 cursor-pointer" />
            <FaDiscord className="hover:text-green-600 cursor-pointer" />
            <FaTelegramPlane className="hover:text-green-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
