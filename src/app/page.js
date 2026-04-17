"use client";

export default function Home() {
  const goTo = (url) => {
    window.location.assign(url);
  };

  return (
    <main className="bg-black text-white">

     
      {/* Hero Section */}
      <section className="bg-black py-16 border-t border-orange-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo Left */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="160 Driving Academy" className="h-24 md:h-32" />
          </div>

          {/* Text Right */}
          <div className="text-center md:text-left md:ml-[-100px]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
              Welcome to 160 Driving Academy
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Start Your CDL Career Today – Fast, Affordable, and Job-Ready Training
            </p>
          </div>

        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="py-12 bg-black text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
<button
            onClick={() => goTo("/Canvas-login-guide.pdf")}
            className="bg-orange-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-orange-400"
          >
            How to Log Into Canvas (PDF)
          </button>

          <button
            onClick={() => goTo("https://160drivingacademy.instructure.com/login/canvas")}
            className="bg-orange-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-orange-400"
          >
            Continue to Canvas
          </button>

          <button
            onClick={() => goTo("https://www.ilsos.gov/content/dam/publications/pdf_publications/dsd_cdl10.pdf")}
            className="bg-orange-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-orange-400"
          >
            IL CDL Manual
          </button>

          <button
            onClick={() => goTo("https://zoom.us/my/josh160?browser=chrome")}
            className="bg-orange-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-orange-400"
          >
            Enter Classroom
          </button>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-black text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-500">
          See What Life on the Road Looks Like
        </h2>
        <iframe
          className="w-full max-w-5xl mx-auto h-[400px] rounded-2xl shadow"
          src="https://www.youtube.com/embed/snbFN9mCwrk"
          title="Trucking Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 text-center border-t border-orange-500">
        <p>&copy; 2026 160 Driving Academy. All rights reserved.</p>
      </footer>

    </main>
  );
}


