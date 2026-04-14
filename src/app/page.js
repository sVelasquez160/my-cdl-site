"use client";

export default function Home() {
  const goTo = (url) => {
    window.location.assign(url);
  };

  return (
    <main className="bg-black text-white">

      {/* Logo */}
      <div className="flex justify-center py-8">
        <img src="/logo.png" alt="160 Driving Academy" className="h-32" />
      </div>

      {/* Hero Section */}
      <section className="bg-black py-16 border-t border-orange-500 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
          Welcome to 160 Driving Academy
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Start Your CDL Career Today – Fast, Affordable, and Job-Ready Training
        </p>
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

      {/* Canvas Link */}
      <section className="py-12 bg-orange-500 text-center">
        <button
          onClick={() => goTo("https://160drivingacademy.instructure.com/login/canvas")}
          className="text-black text-xl font-bold underline"
        >
          Click here to continue to Canvas
        </button>
      </section>

      {/* CDL Manual */}
      <section className="py-16 bg-black text-center">
        <button
          onClick={() => goTo("https://www.ilsos.gov/content/dam/publications/pdf_publications/dsd_cdl10.pdf")}
          className="bg-orange-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-orange-400"
        >
          Click here to access IL CDL Manual
        </button>
      </section>

      {/* Classroom CTA */}
      <section className="py-16 bg-black text-center">
        <div className="bg-gray-900 p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-orange-500">Join the Classroom</h2>
          <p className="mb-6">Click below to enter your live CDL training session.</p>
          <button
            onClick={() => goTo("https://zoom.us/my/josh160?browser=chrome")}
            className="bg-orange-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-orange-400"
          >
            Click here to enter the classroom
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 text-center border-t border-orange-500">
        <p>&copy; 2026 160 Driving Academy. All rights reserved.</p>
      </footer>

    </main>
  );
}
