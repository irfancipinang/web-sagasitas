import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-800 text-white py-12 mt-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Section 1: About SaveLife */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold font-signika mb-4 ">SaveLife</h2>
            <p className="text-sm font-roboto">
              SaveLife adalah platform yang didedikasikan untuk memberikan informasi tentang kesehatan, nutrisi, dan gaya hidup sehat. Kami berkomitmen untuk membantu Anda mencapai hidup yang lebih sehat dan berkualitas.
            </p>
            <div className="mt-6 flex space-x-5">
              <a href="#" className="text-white hover:text-sky-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-sky-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-sky-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-sky-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="lg:w-2/3 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Konten</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#beranda" className="text-white hover:text-sky-300">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#temasehat" className="text-white hover:text-sky-300">
                    Tema Sehat
                  </a>
                </li>
                <li>
                  <a href="#conkas" className="text-white hover:text-sky-300">
                    Kasus
                  </a>
                </li>
                <li>
                  <a href="#tentangkami" className="text-white hover:text-sky-300">
                    Tentang kami
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Sumbar informasi</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://ditpsd.kemdikbud.go.id/kss/sehat-fisik/" className="text-white hover:text-sky-300">
                    kemdikbut.go.id
                  </a>
                </li>
                <li>
                  <a href="https://p2ptm.kemkes.go.id/infographic-p2ptm/hipertensi-penyakit-jantung-dan-pembuluh-darah/apa-yang-dimaksud-sehat-dan-bugar" className="text-white hover:text-sky-300">
                    kemkes.go.id
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">kredit</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://id.pinterest.com/" className="text-white hover:text-sky-300">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="https://www.canva.com/" className="text-white hover:text-sky-300">
                    Canva
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-sky-700 pt-6 text-center">
          <p className="text-sm font-roboto">
            © {new Date().getFullYear()} SaveLife. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
