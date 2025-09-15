import emailjs from 'emailjs-com';
import { useEffect } from 'react';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Projects from './components/Projects';
import cherryBlossomBg from './components/snow-tree.png';
import './App.css';

function App() {
  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_m9lvioj',
      'template_lq04hzd',
      e.target,
      '4Lk1JOVw_RUFKckzj' // OR public key (EmailJS dashboard > Account > API Keys)
    )
    .then(
      (result) => {
        alert('Message sent successfully!');
      },
      (error) => {
        alert('Failed to send message.');
        console.log(error.text);
      }
    );

  e.target.reset();
};
  useEffect(() => {
    // Canvas-based cherry blossom petals
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const petals = [];
    const petalColors = ['#f8c9d4', '#f3b0c3', '#f9d6e0', '#ffebee'];

    class Petal {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.size = Math.random() * 8 + 4;
        this.speed = Math.random() * 2 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.2 - 0.1;
        this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
        this.wave = Math.random() * 0.5 + 0.5;
      }

      update() {
        this.y += this.speed;
        this.angle += this.spin;
        this.x += Math.sin(this.y * 0.01 * this.wave) * 1.5;

        if (this.y > canvas.height) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create initial petals
    for (let i = 0; i < 80; i++) {
      petals.push(new Petal());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      petals.forEach(petal => {
        petal.update();
        petal.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.removeChild(canvas);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="cherry-blossom-container">
      {/* Right-aligned Cherry Blossom Background */}
      <div className="cherry-blossom-bg">
        <img 
          src={cherryBlossomBg} 
          alt="Cherry Blossom Background" 
          className="bg-image"
        />
      </div>

      {/* Content overlay */}
      <div className="content-overlay">
        <Navbar />

        <section id="name" className="h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-rose-900 mb-4">
            Hello, I'm <span className="text-rose-700">Sanskruti</span> 
          </h1>
          <p className="text-xl sm:text-2xl text-rose-800 font-medium mb-2">
            I'm a <span className="text-rose-600 font-semibold">Full Stack Developer</span>
          </p>
          <p className="text-md sm:text-lg text-rose-700 max-w-xl">
            Welcome to my portfolio! I like creating aesthetic and functional websites!
          </p>
        </section>

        <section
          id="about"
          className="min-h-screen flex flex-col sm:flex-row items-center justify-center px-6 py-12"
        >
          {/* Left Side - Profile Image & Buttons */}
          <div className="flex flex-col items-center sm:items-start sm:mr-16 mb-10 sm:mb-0">
            <img
              src="/your-photo.jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-rose-300 shadow-lg object-cover"
            />

            <div className="mt-6 flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <a
                  href="https://drive.google.com/file/d/1zVTpDZbByGH-69bEKQzA1YTQGxEMuy81/view?usp=drive_link"
                  className="bg-rose-600 text-white px-5 py-2 rounded-lg shadow hover:bg-rose-700 text-center"
                >
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/sanskruti-gadekar-b54667252/"
                  className="bg-rose-500 text-white px-5 py-2 rounded-lg shadow hover:bg-rose-600 text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <a
                href="https://github.com/sanskrutigadekar"
                className="bg-rose-800 text-white px-5 py-2 rounded-lg shadow hover:bg-rose-900 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="max-w-xl text-left">
            <p className="uppercase text-sm tracking-widest text-rose-500 mb-2">
              Introduction
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-rose-900">Overview.</h1>

            <ul className="space-y-4 text-lg text-rose-800 font-medium list-disc">
              <li>I'm a full-stack developer with a passion for building innovative and functional web applications!</li>
              <li>Currently pursuing a B.Tech in Computer Engineering, I have a strong foundation in both frontend and backend technologies.</li>
              <li>I love integrating cutting-edge tools like Google's Gemini AI to create intelligent, responsive user experiences.</li>
              <li>My skills span modern stacks, including Next.js, Node.js, Python/Flask, and databases like MongoDB and MySQL.</li>
              <li>Always curious, I enjoy tackling complex problems and bringing creative ideas to life through code.</li>
            </ul>
          </div>
        </section>

        <section id="education" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-rose-500 text-sm tracking-widest mb-2 py-5">WHAT I HAVE STUDIED SO FAR</h3>
            <h2 className="text-5xl font-extrabold text-rose-900 mb-12">Education.</h2>

            <div className="relative border-l-4 border-rose-400 pl-8">
              {/* College */}
              <div className="mb-12 relative">
        <div className="absolute -left-6 top-1 w-10 h-10 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-rose-500 font-bold shadow-md">
          S
        </div>
        <div className="bg-rose-100 p-6 rounded-lg shadow-md text-left">
          <h3 className="text-lg font-semibold text-rose-900 mb-1">Schooling </h3>
          <p className="text-sm text-rose-800 mb-1">St. Francis De Sales School, India</p>
          <p className="text-xs text-rose-600">2007 – 2020</p>
          <ul className="list-disc list-inside text-sm mt-2 text-rose-700">
            <li>Completed SSC Board with strong academic foundation</li>
          </ul>
        </div>
      </div>

      {/* Junior College */}
      <div className="mb-12 relative">
        <div className="absolute -left-6 top-1 w-10 h-10 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-rose-500 font-bold shadow-md">
          Jr
        </div>
        <div className="bg-rose-100 p-6 rounded-lg shadow-md text-left">
          <h3 className="text-lg font-semibold text-rose-900 mb-1">Junior College</h3>
          <p className="text-sm text-rose-800 mb-1">Fergusson College Pune, India</p>
          <p className="text-xs text-rose-600">2020 – 2022</p>
          <ul className="list-disc list-inside text-sm mt-2 text-rose-700">
          <li>Completed HSC Board with Computer Science as a Bifocal Subject.</li></ul>
        </div>
      </div>

      {/* B.E. */}
      <div className="mb-12 relative">
        <div className="absolute -left-6 top-1 w-10 h-10 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-rose-500 font-bold shadow-md">
          U
        </div>
        <div className="bg-rose-100 p-6 rounded-lg shadow-md text-left">
          <h3 className="text-lg font-semibold text-rose-900 mb-1">B.E in Computer Engineering</h3>
          <p className="text-sm text-rose-800 mb-1">JSPM Pune, India</p>
          <p className="text-xs text-rose-600">2022 – Present</p>
          <ul className="list-disc list-inside text-sm mt-2 text-rose-700">
            <li>Current CGPA: 8.3/10</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>

        <section id="experience" className="min-h-screen py-20 text-rose-900">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-rose-500 uppercase tracking-wide text-lg text-center mb-2">Where I've Worked</h3>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 pb-3">Experience</h2>

            {/* Experience Card */}
            <div className="bg-rose-50 rounded-xl shadow-md p-6">
              <h4 className="text-3xl font-semibold text-rose-700 mb-1">Web Development Intern</h4>
              <p className="text-base text-rose-800 mb-2">Vandan Bharat</p>
              <p className="text-base text-rose-600 mb-4">Jan 2025 – March 2025</p>
              <ul className="list-disc list-inside text-base text-rose-800 space-y-1">
                <li>Developed a AI gadget recommendation system</li>
                <li>Used Nextjs, Node.js, Express, and Gemini API.</li>
                <li>Participated in agile sprints and team meetings.</li>
                <li>Handled frontend and backend integration independently.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>

        {/* Projects Section */}
        <Projects />

        <section className="px-6 py-16 min-h-screen" id="contact">
          <h2 className="text-4xl font-bold text-center mb-12 text-rose-900">Contact.</h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Form */}
            <form onSubmit = {handleSubmit}className="bg-rose-50 p-8 rounded-xl shadow-md space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-2 text-rose-800">Name</label>
                  <input
                    type="text"
                    name='name'
                    required
                    placeholder="Your name"
                    className="w-full p-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-rose-900"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2 text-rose-800">Email</label>
                  <input
                    type="email"
                    name='email'
                    required
                    placeholder="Your email"
                    className="w-full p-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-rose-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2 text-rose-800">Message</label>
                <textarea
                  name='message'
                  required
                  rows="5"
                  placeholder="Hey Sanskruti! Would like to connect with you!"
                  className="w-full p-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-rose-900"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
                >
                  Send Message 
                </button>
              </div>
            </form>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/doll.png"
                alt="Earth Illustration"
                className="rounded-xl w-3/4 md:w-full"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
