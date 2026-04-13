export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* Logo */}
      <div className="flex justify-center py-8">
        <img src="/logo.png" alt="160 Driving Academy" className="h-32" />
      </div>

      {/* Hero Section */}
      <section className="bg-black text-white py-16 border-t border-orange-500">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
            Welcome to 160 Driving Academy
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Start Your CDL Career Today – Fast, Affordable, and Job-Ready Training
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-orange-500">
            See What Life on the Road Looks Like
          </h2>
          <iframe
            className="w-full h-[400px] rounded-2xl shadow"
            src="https://www.youtube.com/embed/snbFN9mCwrk"
            title="Trucking Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Canvas Link */}
      <section className="py-12 bg-orange-500 text-center">
        <a
          href="https://160drivingacademy.instructure.com/login/canvas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-xl font-bold underline"
        >
          Click here to continue to Canvas
        </a>
      </section>

      {/* CDL Manual Section */}
      <section className="py-16 bg-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <a
            href="https://www.ilsos.gov/content/dam/publications/pdf_publications/dsd_cdl10.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-orange-400 inline-block"
          >
            Click here to access IL CDL Manual
          </a>
        </div>
      </section>

      {/* Classroom CTA */}
      <section className="py-16 bg-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-gray-900 p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">Join the Classroom</h2>
            <p className="mb-6">Click below to enter your live CDL training session.</p>
            <a
              href="https://zoom.us/my/josh160"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-orange-400 inline-block"
            >
              Click here to enter the classroom
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 text-center border-t border-orange-500">
        <p>&copy; 2026 160 Driving Academy. All rights reserved.</p>
      </footer>

    </main>
  );
}

