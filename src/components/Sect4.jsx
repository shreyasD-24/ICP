import Carousel from "./Carousel";

function Sect4() {
  const carouselCards = [
    {
      developerName: "Kenneth Allen",
      profilePic:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      description:
        "I will design and develop a responsive website with modern UI/UX principles and clean code architecture.",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/kenneth-portfolio",
      rating: 4.8,
      reviewCount: 120,
      price: 100,
    },
    {
      developerName: "Sarah Johnson",
      profilePic:
        "https://images.unsplash.com/photo-1494790108755-2616b612b0a4?w=100&h=100&fit=crop&crop=face",
      description:
        "I will create smart contracts and DeFi protocols with security audits and comprehensive testing.",
      images: [
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/sarah-portfolio",
      rating: 4.9,
      reviewCount: 85,
      price: 250,
    },
    {
      developerName: "Marcus Chen",
      profilePic:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      description:
        "I will build AI agents and machine learning models with custom training and deployment solutions.",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/marcus-portfolio",
      rating: 4.7,
      reviewCount: 95,
      price: 180,
    },
    {
      developerName: "Elena Rodriguez",
      profilePic:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      description:
        "I will set up blockchain infrastructure and DevOps pipelines with monitoring and security best practices.",
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/elena-portfolio",
      rating: 4.6,
      reviewCount: 67,
      price: 150,
    },
    {
      developerName: "Alex Thompson",
      profilePic:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      description:
        "I will develop NFT marketplaces and gaming platforms with blockchain integration and tokenomics.",
      images: [
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1606103819203-2377d57aa33a?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/alex-portfolio",
      rating: 4.5,
      reviewCount: 142,
      price: 200,
    },
    {
      developerName: "Maya Patel",
      profilePic:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      description:
        "I will analyze blockchain data and create custom dashboards with real-time insights and predictions.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/maya-portfolio",
      rating: 4.8,
      reviewCount: 73,
      price: 130,
    },
    {
      developerName: "David Kim",
      profilePic:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
      description:
        "I will conduct security audits for smart contracts and dApps with comprehensive vulnerability assessments.",
      images: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/david-portfolio",
      rating: 4.9,
      reviewCount: 156,
      price: 300,
    },
  ];

  return (
    <div className="px-[16rem] py-16">
      <div>
        <div className="mb-2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore our Freelancers Services
          </h2>
        </div>
        <Carousel
          cards={carouselCards}
          autoSlide={true}
          slideInterval={10000}
          cardsPerView={3}
        />
      </div>
    </div>
  );
}

export default Sect4;
