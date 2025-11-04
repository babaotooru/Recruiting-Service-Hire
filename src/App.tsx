import { useState } from "react";
import { ProgramCard } from "./components/ProgramCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { GraduationCap, Search, BookOpen, Target } from "lucide-react";
import { Input } from "./components/ui/input";

const programs = [
  {
    id: 1,
    category: "Full Stack",
    title: "Full Stack Development with MERN",
    description: "Master MongoDB, Express.js, React, and Node.js to build modern web applications",
    duration: "6 Months",
    fee: "₹32,000",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML/CSS"],
    mode: "Online & Offline",
    batchSize: "Max 25",
    level: "Beginner to Advanced",
    popular: true
  },
  {
    id: 2,
    category: "Full Stack",
    title: "Full Stack Java Development",
    description: "Comprehensive Java development with Spring Boot, Hibernate, and modern frameworks",
    duration: "7 Months",
    fee: "₹35,000",
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "REST API", "Microservices"],
    mode: "Online & Offline",
    batchSize: "Max 25",
    level: "Intermediate",
    popular: false
  },
  {
    id: 3,
    category: "Frontend",
    title: "Advanced React & Next.js",
    description: "Build production-ready applications with React, Next.js, and modern frontend tools",
    duration: "4 Months",
    fee: "₹28,000",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL"],
    mode: "Online",
    batchSize: "Max 30",
    level: "Intermediate to Advanced",
    popular: false
  },
  {
    id: 4,
    category: "Backend",
    title: "Backend Development with Node.js",
    description: "Master server-side development with Node.js, databases, and API design",
    duration: "5 Months",
    fee: "₹30,000",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Docker", "AWS"],
    mode: "Online & Offline",
    batchSize: "Max 20",
    level: "Intermediate",
    popular: false
  },
  {
    id: 5,
    category: "Cloud",
    title: "AWS Cloud Engineering",
    description: "Learn cloud architecture, deployment, and DevOps practices with AWS",
    duration: "4 Months",
    fee: "₹33,000",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux"],
    mode: "Online",
    batchSize: "Max 20",
    level: "Intermediate to Advanced",
    popular: true
  },
  {
    id: 6,
    category: "Data",
    title: "Data Science & Machine Learning",
    description: "Comprehensive program covering data analysis, ML algorithms, and AI fundamentals",
    duration: "6 Months",
    fee: "₹35,000",
    technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "SQL"],
    mode: "Online & Offline",
    batchSize: "Max 25",
    level: "Beginner to Advanced",
    popular: true
  },
  {
    id: 7,
    category: "Mobile",
    title: "React Native Mobile Development",
    description: "Build cross-platform mobile apps for iOS and Android with React Native",
    duration: "5 Months",
    fee: "₹30,000",
    technologies: ["React Native", "JavaScript", "Redux", "Firebase", "Expo", "REST API"],
    mode: "Online",
    batchSize: "Max 25",
    level: "Intermediate",
    popular: false
  },
  {
    id: 8,
    category: "Frontend",
    title: "Angular Enterprise Development",
    description: "Build scalable enterprise applications with Angular and TypeScript",
    duration: "5 Months",
    fee: "₹29,000",
    technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "Material UI", "REST API"],
    mode: "Online & Offline",
    batchSize: "Max 20",
    level: "Intermediate",
    popular: false
  },
  {
    id: 9,
    category: "Backend",
    title: "Python Backend Development",
    description: "Master Python web development with Django and Flask frameworks",
    duration: "5 Months",
    fee: "₹29,000",
    technologies: ["Python", "Django", "Flask", "PostgreSQL", "REST API", "Redis"],
    mode: "Online & Offline",
    batchSize: "Max 25",
    level: "Beginner to Intermediate",
    popular: false
  },
  {
    id: 10,
    category: "Cloud",
    title: "Azure Cloud Solutions",
    description: "Comprehensive Azure cloud services, architecture, and DevOps automation",
    duration: "4 Months",
    fee: "₹32,000",
    technologies: ["Azure", "Docker", "Kubernetes", "Azure DevOps", "PowerShell", "ARM Templates"],
    mode: "Online",
    batchSize: "Max 20",
    level: "Intermediate",
    popular: false
  },
  {
    id: 11,
    category: "Data",
    title: "Big Data & Analytics",
    description: "Learn Hadoop, Spark, and data engineering for large-scale data processing",
    duration: "6 Months",
    fee: "₹34,000",
    technologies: ["Hadoop", "Spark", "Kafka", "Python", "SQL", "Hive"],
    mode: "Online & Offline",
    batchSize: "Max 20",
    level: "Advanced",
    popular: false
  },
  {
    id: 12,
    category: "Mobile",
    title: "Flutter Mobile Development",
    description: "Create beautiful native apps with Flutter and Dart",
    duration: "4 Months",
    fee: "₹25,000",
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "SQLite", "State Management"],
    mode: "Online",
    batchSize: "Max 25",
    level: "Beginner to Intermediate",
    popular: false
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = programs.filter(program => {
    const matchesCategory = activeTab === "all" || program.category === activeTab;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-700 to-red-600 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white text-red-600 p-2 rounded-lg">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-xl text-white">HIRE CAMP</h1>
                <p className="text-sm text-red-100">RECRUITING SERVICES</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#programs" className="text-white hover:text-red-100 transition-colors">Programs</a>
              <a href="#about" className="text-white hover:text-red-100 transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-red-100 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
                  TALENT <span className="text-red-600">HAS NO BORDERS!</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Why limit your search to one location? Access top global talent and build a borderless workforce with our expert training and recruitment services.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-md border-l-4 border-red-600">
                  <BookOpen className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-sm text-gray-500">Programs</p>
                    <p className="text-gray-900">12+ Courses</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-md border-l-4 border-red-600">
                  <Target className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-sm text-gray-500">Success Rate</p>
                    <p className="text-gray-900">95%+ Placement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib290Y2FtcCUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjI1NjA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Training Program"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of technology training programs designed for various skill levels
            </p>
          </div>

          {/* Search */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search programs or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto">
              <TabsTrigger value="all" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                All Programs
              </TabsTrigger>
              <TabsTrigger value="Full Stack" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Full Stack
              </TabsTrigger>
              <TabsTrigger value="Frontend" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="Backend" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Backend
              </TabsTrigger>
              <TabsTrigger value="Cloud" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Cloud
              </TabsTrigger>
              <TabsTrigger value="Data" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Data Science
              </TabsTrigger>
              <TabsTrigger value="Mobile" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Mobile
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-8">
              {filteredPrograms.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPrograms.map((program) => (
                    <ProgramCard key={program.id} {...program} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No programs found matching your search.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">💼</div>
              <h3 className="text-xl mb-2">100% Job Assistance</h3>
              <p className="text-red-100">Dedicated placement support with top tech companies</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎓</div>
              <h3 className="text-xl mb-2">Industry Experts</h3>
              <p className="text-red-100">Learn from professionals with 10+ years of experience</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="text-xl mb-2">Real Projects</h3>
              <p className="text-red-100">Build portfolio-worthy projects during training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to start your tech career journey? Contact us today!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-red-100 text-sm mb-1">Phone</p>
                  <a href="tel:9063166195" className="text-xl hover:text-red-100 transition-colors">+91 9063166195</a>
                </div>
                <div>
                  <p className="text-red-100 text-sm mb-1">Email</p>
                  <a href="mailto:info@hirecamp.in" className="hover:text-red-100 transition-colors">info@hirecamp.in</a>
                  <br />
                  <a href="mailto:hirecamp.info@gmail.com" className="hover:text-red-100 transition-colors">hirecamp.info@gmail.com</a>
                </div>
                <div>
                  <p className="text-red-100 text-sm mb-1">Address</p>
                  <p className="text-white">
                    Plot No 38&39/1 Jyothipuram colony,<br />
                    Thattiannaram, Opposite Sreyas Engineering College,<br />
                    Nagole Bandlaguda, GSI Post,<br />
                    Hyderabad, Rangareddy, Telangana - 500068
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl mb-6 text-gray-900">Why Choose Hire Camp?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-red-600 text-white p-1 rounded-full mt-1">✓</div>
                  <div>
                    <p className="text-gray-800">Affordable fee structure starting from ₹25,000</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-600 text-white p-1 rounded-full mt-1">✓</div>
                  <div>
                    <p className="text-gray-800">Expert trainers with industry experience</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-600 text-white p-1 rounded-full mt-1">✓</div>
                  <div>
                    <p className="text-gray-800">Both online and offline training modes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-600 text-white p-1 rounded-full mt-1">✓</div>
                  <div>
                    <p className="text-gray-800">100% job assistance and placement support</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-600 text-white p-1 rounded-full mt-1">✓</div>
                  <div>
                    <p className="text-gray-800">Hands-on projects and real-world applications</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-600 text-white p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl block">HIRE CAMP</span>
                  <span className="text-sm text-gray-400">RECRUITING SERVICES</span>
                </div>
              </div>
              <p className="text-gray-400">
                Transforming careers through quality tech education and comprehensive job placement support.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:info@hirecamp.in" className="hover:text-white transition-colors">info@hirecamp.in</a></li>
                <li><a href="tel:9063166195" className="hover:text-white transition-colors">+91 9063166195</a></li>
                <li>Hyderabad, Telangana</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hire Camp Recruiting Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
