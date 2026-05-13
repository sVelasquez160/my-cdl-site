"use client";

export default function Home() {
  const goTo = (url) => {
    window.location.assign(url);
  };

  return (
    <main className="bg-[#272727] text-white min-h-screen">

     
      {/* Hero Section */}
      <section className="bg-[#272727] py-16 border-t border-orange-500">
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
              Access Your Online CDL Classes, Zoom Sessions, and Study Materials
            </p>
          </div>

        </div>
      </section>

{/* Main Content Section: Video + Buttons Side by Side */}
<section className="py-12 bg-[#272727]">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    {/* LEFT COLUMN - VIDEO */}
    <div>
      <h2 className="text-3xl font-bold mb-3 text-orange-500 text-center">
        Start Here: Chromebook Login Help
      </h2>

      <div className="w-full rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://player.vimeo.com/video/1190255341?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
          className="w-full h-[400px] lg:h-[600px]"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          title="How to use the Chromebook"
        ></iframe>
      </div>
    </div>

    {/* RIGHT COLUMN - ACTION BUTTONS */}
    <div>
      <h2 className="text-3xl font-bold mb-6 text-orange-500 text-center lg:text-center">
        Student Resources
      </h2>

      <div className="flex flex-col gap-6">

        <button
          onClick={() => goTo("/Canvas-login-guide.pdf")}
          className="bg-[#272727] text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 border-2 border-orange-500"
        >
          Instructions on how to log into your Online Class (Canvas)
        </button>

        <button
          onClick={() => goTo("https://160drivingacademy.instructure.com/login/canvas")}
          className="bg-[#272727] text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 border-2 border-orange-500"
        >
          Join Live Class, Quizzes, and Assignments (Canvas)
        </button>
  {/* CDL Manuals Dropdown */}
        <div className="relative">
          <details className="relative">
            <summary className="list-none cursor-pointer bg-orange-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-orange-400 text-center">
              Study CDL Manuals & Permit Guides
            </summary>

            <div className="absolute mt-2 w-full bg-white text-black rounded-lg shadow-lg overflow-hidden z-10 max-h-96 overflow-y-auto">
              <button
        onClick={() => goTo("https://www.alea.gov/sites/default/files/inline-files/cdlmanual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Alabama CDL Manual
      </button>

       <button
        onClick={() => goTo("https://apps.azdot.gov/files/mvd/mvd-forms-lib/40-7802.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Arizona CDL Manual
      </button>

       <button
        onClick={() => goTo("/Arkansas-CDL-Manual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Arkansas CDL Manual
      </button>

       <button
        onClick={() => goTo("https://www.dmv.ca.gov/web/eng_pdf/comlhdbk.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        California CDL Manual
      </button>

       <button
        onClick={() => goTo("https://drive.google.com/file/d/15ORLuIKW9NRmbX731P6rQuc3y5A_Z9Ih/view")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Colorado CDL Manual
      </button>

       <button
        onClick={() => goTo("https://portal.ct.gov/-/media/DMV/20/29/CTCDLDriverManualFINAL122015pdf.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Connecticut CDL Manual
      </button>

      <button
        onClick={() => goTo("https://dmv.de.gov/forms/driver_serv_forms/pdfs/cdl_manual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Delaware CDL Manual
      </button>

      <button
        onClick={() => goTo("https://www.flhsmv.gov/pdf/handbooks/englishcdlhandbook.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Florida CDL Manual
      </button>
      
      <button
        onClick={() => goTo("https://www.edrivermanuals.com/wp-content/uploads/2018/07/19GACM_LR-1.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Georgia CDL Manual
      </button>

      <button
        onClick={() => goTo("https://www.ilsos.gov/content/dam/publications/pdf_publications/dsd_cdl10.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Illinois CDL Manual
      </button>

      <button
        onClick={() => goTo("https://www.in.gov/bmv/files/cdl-manual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Indiana CDL Manual
      </button>
      <button
        onClick={() => goTo("https://iowadot.gov/media/326/download?inline")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Iowa CDL Manual
      </button>
      <button
        onClick={() => goTo("https://www.ksrevenue.gov/pdf/cdlhandbook.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Kansas CDL Manual
      </button>
      <button
        onClick={() => goTo("https://wp.kentuckystatepolice.ky.gov/wp-content/uploads/2018/12/2019CDLDriverManual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Kentucky CDL Manual
      </button>
      <button
        onClick={() => goTo("https://dpsweb.dps.louisiana.gov/DPSForms.nsf/")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
      Louisiana CDL Manual
      </button>
      <button
        onClick={() => goTo("https://mva.maryland.gov/media/203/download?inline=")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
        Maryland CDL Manual
      </button>
      <button
        onClick={() => goTo("https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/CDL-Manual/cdlmanual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Michigan CDL Manual
      </button>
      <button
        onClick={() => goTo("https://assets.dps.mn.gov/files/dvs/Commercial-Drivers-License-Manual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Minnesota CDL Manual
      </button>
      <button
        onClick={() => goTo("https://driving-tests.org/mississippi/ms-cdl-handbook/")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Mississippi CDL Manual
      </button>
      <button
        onClick={() => goTo("https://driving-tests.org/mississippi/ms-cdl-handbook/")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Mississippi CDL Manual
      </button>
      <button
        onClick={() => goTo("/Missouri-CDL-Manual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Missouri CDL Manual
      </button>
      <button
        onClick={() => goTo("https://mvdmt.gov/wp-content/uploads/2026/03/Montana-CDL-Manual-2026.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Montana CDL Manual
      </button>
      <button
        onClick={() => goTo("/Nebraska-CDL-Manual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Nebraska CDL Manual
      </button>
      <button
        onClick={() => goTo("https://dmv.nv.gov/pdfforms/dlbookcomm.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Nevada CDL Manual
      </button>
      <button
        onClick={() => goTo("https://www.nj.gov/mvc/pdf/license/CDL_Manual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         New Jersey CDL Manual
      </button>
      <button
        onClick={() => goTo("https://www.mvd.newmexico.gov/wp-content/uploads/2025/08/000-Combined-CDL-Driver-Manual-with-Supp-3-2025.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         New Mexico CDL Manual
      </button>
      <button
        onClick={() => goTo("https://dmv.ny.gov/driver-license/commercial-drivers/new-york-state-commercial-drivers-manual")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         New York CDL Manual
      </button>
      <button
        onClick={() => goTo("https://www.ncdot.gov/dmv/license-id/driver-licenses/new-drivers/Documents/commercial-driver-manual.pdf#search=cdl%20manual")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         North Carolina CDL Manual
      </button>
      <button
        onClick={() => goTo("https://www.dot.nd.gov/sites/www/files/documents/Drivers%20-%20documents/commercial%20vehicles/CDL-manual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         North Dakota CDL Manual
      </button>
 <button
        onClick={() => goTo("https://dam.assets.ohio.gov/image/upload/publicsafety.ohio.gov/hsy7605.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Ohio CDL Manual
      </button>
       <button
        onClick={() => goTo("https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/docs/2005%20CDL%20Driver%20Manual%20-July%202014%20-%20FINAL.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Oklahoma CDL Manual
      </button>
       <button
        onClick={() => goTo("https://www.oregon.gov/odot/forms/dmv/36.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Oregon CDL Manual
      </button>
       <button
        onClick={() => goTo("https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/dvspubsforms/bdl/bdl-manuals/commercial-drivers-manual/comm-manual-english/pub%20223.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Pennsylvania CDL Manual
      </button>
       <button
        onClick={() => goTo("https://dmv.ri.gov/sites/g/files/xkgbur556/files/documents/manuals/CDL_Manual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Rhode Island CDL Manual
      </button>
       <button
        onClick={() => goTo("https://driving-tests.org/south-carolina/sc-cdl-handbook/")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         South Carolina CDL Manual
      </button>
       <button
        onClick={() => goTo("https://www.tn.gov/content/dam/tn/safety/documents/CDL_Manual_May2022.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Tennessee CDL Manual
      </button>
       <button
        onClick={() => goTo("https://www.dps.texas.gov/internetforms/getForm.ashx?id=DL-7C.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Texas CDL Manual
      </button>
       <button
        onClick={() => goTo("https://dld.utah.gov/wp-content/uploads/CDL-Manual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Utah CDL Manual
      </button>
       <button
        onClick={() => goTo("https://www.dmv.virginia.gov/sites/default/files/forms/dmv60a.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Virginia CDL Manual
      </button>
       <button
        onClick={() => goTo("https://dol.wa.gov/media/pdf/42/cdlguidepdf/download?inline")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Washington CDL Manual
      </button>
       <button
        onClick={() => goTo("https://transportation.wv.gov/highways/training/TrainingDocuments/WV-CDL-Manual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         West Virginia CDL Manual
      </button>
       <button
        onClick={() => goTo("https://wisconsindot.gov/Documents/dmv/shared/bds356-cdl-manual.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Wisconsin CDL Manual
      </button>
       <button
        onClick={() => goTo("https://www.dot.state.wy.us/files/live/sites/wydot/files/shared/Driver_Services/Help%20Documents%20and%20Manuals/Wyoming%20CDL%20Manual_Oct%202024_full.pdf")}
        className="w-full text-left px-4 py-3 hover:bg-gray-200"
      >
         Wyoming CDL Manual
      </button>
            </div>
          </details>
        </div>

      </div>
    </div>

  </div>
</section>
      {/* Footer */}
      <footer className="bg-[#272727] text-gray-300 py-6 text-center border-t border-orange-500">
        <p>&copy; 2026 160 Driving Academy. All rights reserved.</p>
      </footer>

    </main>
  );
}


