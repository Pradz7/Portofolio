import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import ChatRoom from "./components/ChatRoom";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [_isVisible, setIsVisible] = useState(false);

  // Project modal state
  const [selectedProject, setSelectedProject] = useState(null);

  // Showcase switch state
  const [activeShowcase, setActiveShowcase] = useState("project");

  // Organization modal and image slider state
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Organization data
  const listOrganization = [
    {
      id: 1,
      title: "PUMA Informatics",
      role: "Head of Relations and Communication Division",
      year: "2025 - Present",
      images: [
        "./assets/organization/puma1.png",
      ],
      description:
        "Led the department by supervising division members, coordinating communication strategies, and ensuring all events and work plans were executed effectively and professionally. This role enhanced my leadership, communication, organizational, and problem-solving skills while contributing to the success of various events and initiatives within the organization.",
    },
    {
      id: 2,
      title: "PUMA Informatics",
      role: "Member of External Relations Division",
      year: "2024 - 2025",
      images: [
        "./assets/organization/puma2.png",
      ],
      description:
        "Served as the Vice Project Manager for the Informatics Connect event and took responsibility as a Person in Charge in more than four various events. This experience strengthened my leadership, team coordination, communication, responsibility, and problem solving skills.",
    },
  ];

  // Project modal handler
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Organization modal handler
  const handleOrganizationClick = (org) => {
    setSelectedOrg(org);
    setSelectedImageIndex(0);
  };

  const handleCloseOrganizationModal = () => {
    setSelectedOrg(null);
    setSelectedImageIndex(0);
  };

  // Organization image slider handler
  const handlePreviousImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? selectedOrg.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === selectedOrg.images.length - 1 ? 0 : prev + 1
    );
  };

  // Reset to base URL when page reloads
  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = window.location.origin + "/";
      window.location.replace(baseUrl);
    }
  }, []);

  // About section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Home */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <q>Start now, perfect later.</q>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              <ShinyText
                text="Hi I'm Made Mas Pradnya Prabawa"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>

            <BlurText
              text="A passionate application and web developer dedicated to crafting modern, high performance digital experiences through innovative and user friendly solutions."
              delay={150}
              animateBy="words"
              direction="top"
              className="mb-6"
            />

            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="./assets/CV_Made Mas Pradnya Prabawa.pdf"
                download="CV_Made Mas Pradnya Prabawa.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Download CV"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>

              <a
                href="#project"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Explore My Experience"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>

          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Pradnya P"
              title="Web Developer"
              handle="pradz7"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/Prad.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            />
          </div>
        </div>

        {/* About */}
        <div
          className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
          id="about"
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I’m a second year Informatics student specializing in Artificial Intelligence, passionate about developing modern, efficient, and user friendly digital solutions. I enjoy working with technologies such as Artificial Intelligence, Machine Learning, full stack web development, and database systems while continuously improving my problem solving and technical skills. I have experience building web based applications, working with computer vision and object detection projects, as well as integrating AI models into interactive systems. With strong adaptability, creativity, and a passion for learning new technologies, I’m currently seeking internship opportunities to gain hands on industry experience, contribute to impactful projects, and grow as an AI focused developer in the digital era. "
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      10<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>

                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Learning</p>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                    data-aos-once="true"
                  >
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.67<span className="text-violet-500">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>

                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools & Technologies
          </h1>

          <p
            className="w-2/5 text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            My Profesional Skills
          </p>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />

                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>

                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Showcase */}
        <div className="showcase mt-32 py-10" id="project">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Showcase
          </h1>

          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Showcasing my projects, organizational experience, creativity, and
            growth in technology.
          </p>

          {/* Showcase Buttons */}
          <div
            className="flex justify-center gap-4 mt-10"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <button
              onClick={() => setActiveShowcase("project")}
              className={`font-semibold p-4 px-8 rounded-full border transition-all duration-300 cursor-pointer ${
                activeShowcase === "project"
                  ? "bg-violet-500 border-violet-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  : "bg-[#1a1a1a] border-gray-700 hover:bg-[#222]"
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setActiveShowcase("organization")}
              className={`font-semibold p-4 px-8 rounded-full border transition-all duration-300 cursor-pointer ${
                activeShowcase === "organization"
                  ? "bg-violet-500 border-violet-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  : "bg-[#1a1a1a] border-gray-700 hover:bg-[#222]"
              }`}
            >
              Organization
            </button>
          </div>

          {/* Project Content */}
          {activeShowcase === "project" && (
            <div className="proyek-box mt-14">
              <div
                style={{ height: "auto", position: "relative" }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <ChromaGrid
                  items={listProyek}
                  onItemClick={handleProjectClick}
                  radius={500}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>
            </div>
          )}

          {/* Organization Content */}
          {activeShowcase === "organization" && (
            <div className="organization-box mt-14 max-w-4xl mx-auto flex flex-col gap-6">
              {listOrganization.map((org, index) => (
                <div
                  key={org.id}
                  onClick={() => handleOrganizationClick(org)}
                  className="relative cursor-pointer p-6 rounded-2xl border border-violet-500/40 bg-zinc-900/70 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] hover:-translate-y-1 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={400 + index * 100}
                  data-aos-once="true"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-violet-500 rounded-l-2xl"></div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {org.title}
                      </h2>

                      <p className="text-violet-400 font-semibold mb-2">
                        {org.role}
                      </p>

                      <p className="text-sm text-zinc-400 mb-4">{org.year}</p>

                      <p className="text-zinc-300 leading-relaxed">
                        {org.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>

          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div
              className="flex-1 bg-zinc-800 p-6 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <ChatRoom />
            </div>

            <div className="flex-1">
              <form
                action="https://formsubmit.co/pradprbw@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText
                        text="Send"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Organization Detail Modal */}
      {selectedOrg && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-2xl rounded-3xl border border-violet-500/40 bg-zinc-900 p-6 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
            <button
              onClick={handleCloseOrganizationModal}
              className="absolute top-4 right-5 z-20 text-zinc-400 hover:text-white text-2xl cursor-pointer"
            >
              ×
            </button>

            {/* Organization Image Slider */}
            <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden bg-zinc-800">
              <img
                src={selectedOrg.images[selectedImageIndex]}
                alt={selectedOrg.title}
                className="w-full h-full object-cover"
              />

              {selectedOrg.images.length > 1 && (
                <>
                  <button
                    onClick={handlePreviousImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-violet-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  >
                    ‹
                  </button>

                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-violet-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  >
                    ›
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedOrg.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          selectedImageIndex === index
                            ? "bg-violet-500 w-6"
                            : "bg-white/50"
                        }`}
                      ></button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <h2 className="text-3xl font-bold text-white mb-2">
              {selectedOrg.title}
            </h2>

            <p className="text-violet-400 font-semibold mb-2">
              {selectedOrg.role}
            </p>

            <p className="text-sm text-zinc-400 mb-5">{selectedOrg.year}</p>

            <p className="text-zinc-300 leading-relaxed">
              {selectedOrg.description}
            </p>
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;