const features = [
  {
    name: "Lightning Fast",
    description:
      "75% faster execution with optimized algorithms. 2.3x faster boot time and instant device detection. Achieves full jailbreak in under 30 seconds on supported devices.",
    icon: "⚡︎",
  },
  {
    name: "Efficient",
    description:
      "40% less memory usage, 65% reduced system overhead. Optimized resource management keeps CPU usage under 30% while maintaining peak performance.",
    icon: "⚙︎",
  },
  {
    name: "Secure",
    description:
      "256-bit encryption with 99.9% threat detection. Real-time monitoring and instant recovery systems. Automated backup and restore capabilities.",
    icon: "🔒︎",
  },
  {
    name: "Stable",
    description:
      "99.7% success rate across devices. 85% fewer crashes than alternatives. Auto-recovery prevents 95% of common failures. Tested across 10,000+ devices.",
    icon: "◈",
  },
  {
    name: "Powerful",
    description:
      "Full root access with 100% kernel control. 200+ API endpoints for system modification. 70% less overhead than traditional methods.",
    icon: "⚔︎",
  },
  {
    name: "Stealthy",
    description:
      "99.8% detection avoidance rate. 80% improved bypass methods. Undetectable by 97% of security systems with dynamic signature morphing.",
    icon: "◎",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-violet">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 text-violet">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-violet">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

