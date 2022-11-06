import React, { useState, useEffect } from "react";

import { Map } from './components/Map';
// import LeafletLogo from './assets/leafletlogo.png';
// import ReactIcon from './assets/reacticon.png';
import './App.css';
import ImageHeader from './assets/img/image-header.png';
import Logo from './assets/img/logo.png';
import LogoFooter from './assets/img/logo_footer.png';
import contentOne from './assets/img/content-one.png';
import contentTwo from './assets/img/content-two.png';
import contentThree from './assets/img/content-three.png';
import contentFour from './assets/img/content-four.png';
import TentangOne from './assets/img/one.png';
import TentangTwo from './assets/img/two.png';
import TentangThree from './assets/img/three.png';
import TentangFour from './assets/img/four.png';
import TentangFive from './assets/img/five.png';
import TentangSix from './assets/img/six.png';
import TentangSeven from './assets/img/seven.png';
import TentangEight from './assets/img/eight.png';
import TentangNine from './assets/img/nine.png';
import LogoFooter1 from './assets/img/logo-footer1.png';
import LogoFooter2 from './assets/img/logo-footer2.png';
import LogoFooter3 from './assets/img/logo-footer3.png';
import ImageVisi from './assets/img/image-visi.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import { dataDigitalBestSeller } from './data';
function App() {
  const [navbar, setNavbar] = useState(false);
  const [ctaShow, setCtaShow] = useState(false);
  const [scrollLength, setScrollLength] = useState(0);
  useEffect(() => {
    // Window scroll
    const changeBackground = () => {
      // Navbar
      if (window.scrollY >= 10) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
      // Button CTA
      if (window.scrollY > 60) {
        setCtaShow(true);
      } else {
        setCtaShow(false);
      }
      // Parallax particle scroll
      setScrollLength(window.scrollY);
    };
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <div className="App">
      <div className='bg-nav'>
        <nav className="navbar navbar-expand-lg">
          <div className={navbar ? "container-fluid fixed-nav" : "container-fluid padding-content"}>
            <a className="navbar-brand" href="#">
              <img src={Logo} alt='' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link title-nav-white" href="#beranda">Beranda</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link title-nav-white" href="#fitur">Fitur</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link title-nav-white" href="#tentang">Tentang Kami</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link title-nav-white" href="#lokasi">Lokasi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link title-nav-white" href='#misi'>Visi & Misi</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='padding-content'>
          <div className='content-header' id='beranda'>
            <h1 className='title-header'>
              Kami adalah perusahaan <span className='title-header-tebal'>Kontraktor</span> Bisnis
            </h1>
            <p className='paraf-header'>
              badan usaha berpengalaman yang mengerjakan proyek nasional. PT. PATRINDA MITRA ABADI saat ini memiliki kualifikasi tinggi.
            </p>
            <a href='https://api.whatsapp.com/send/?phone=%2B6283863125919&text&type=phone_number&app_absent=0'>
              <button type="button" className="btn-header">Hubungi Kami</button>
            </a>
          </div>
          <div className='content-img'>
            <img src={ImageHeader} alt='' />
          </div>
          <div className="container text-center">
            <div className="row bolck-dis">
              <div className="col">
                <h1>
                  1,5k+
                </h1>
                <p>
                  Dukungan Mitra
                </p>
              </div>
              <div className="col">
                <h1>
                  8k+
                </h1>
                <p>
                  Ulasan Bagus
                </p>
              </div>
              <div className="col">
                <h1>
                  2k+
                </h1>
                <p>
                  Ulasan yang diberikan
                </p>
              </div>
            </div>
          </div>
          <div className='content-one' id='fitur'>
            <h1 className='title-one'>
              Kami Menyediakan Layanan
            </h1>
            <p className='paraf-one'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
            </p>
          </div>
          <div className="row gx-5 block-dis">
            <div className="col ">
              <img src={contentOne} alt='' />
            </div>
            <div className="col center-title">
              <p className='title-two'>
                Jasa Pelaksana instalasi Sistem Kontrol dan Instrumentasi
              </p>
              <a href='https://api.whatsapp.com/send/?phone=%2B6283863125919&text&type=phone_number&app_absent=0'>
                <button type="button" className="btn-hijau">Hubungi Kami</button>
              </a>
            </div>
          </div>
          <div className="row gx-5 top-margin direction-respon">
            <div className="col center-title">
              <p className='title-two'>
                Jasa Pelaksana instalasi Sistem Kontrol dan Instrumentasi
              </p>
              <a href='https://api.whatsapp.com/send/?phone=%2B6283863125919&text&type=phone_number&app_absent=0'>
                <button type="button" className="btn-red">Hubungi Kami</button>
              </a>
            </div>
            <div className="col">
              <img src={contentTwo} alt='' />
            </div>
          </div>
          <div className="row gx-5 top-margin block-dis">
            <div className="col ">
              <img src={contentThree} alt='' />
            </div>
            <div className="col center-title">
              <p className='title-two'>
                Jasa Pelaksana instalasi Sistem Kontrol dan Instrumentasi
              </p>
              <a href='https://api.whatsapp.com/send/?phone=%2B6283863125919&text&type=phone_number&app_absent=0'>
                <button type="button" className="btn-ungu">Hubungi Kami</button>
              </a>
            </div>
          </div>
          <div className="row gx-5 top-margin direction-respon">
            <div className="col center-title">
              <p className='title-two'>
                Jasa Pelaksana instalasi Sistem Kontrol dan Instrumentasi
              </p>
              <a href='https://api.whatsapp.com/send/?phone=%2B6283863125919&text&type=phone_number&app_absent=0'>
                <button type="button" className="btn-kuning">Hubungi Kami</button>
              </a>
            </div>
            <div className="col">
              <img src={contentFour} alt='' />
            </div>
          </div>
          <div className='content-three' id='tentang'>
            <h1 className='title-one'>
              Tentang Kami
            </h1>
            <div className="row top-margin-two">
              <div className="col">
                <div className='grid-one'>
                  <img src={TentangOne} alt='' />
                  <h1 className='title-three'>
                    Membantu membangun fasilitas masyarakat
                  </h1>
                  <p className='paraf-three'>
                    Perusahaan kontruksi kami membuat beberapa fasilitas untuk masyarakat, ini adalah dokumentasi seseorang sedang mengecek tempat pengeboran di dekat laut.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className='grid-one'>
                  <img src={TentangTwo} alt='' />
                  <h1 className='title-three'>
                    Membuat perlengkapan untuk membantu pembangunan
                  </h1>
                  <p className='paraf-three'>
                    Membuat perlengkapan pembangunan, perlengkapan kami sangat menunjang fasilitas pembangunan
                  </p>
                </div>
              </div>
              <div className="col">
                <div className='grid-one'>
                  <img src={TentangThree} alt='' />
                  <h1 className='title-three'>
                    Diskusi dengan tim untuk menjalin komunikasi
                  </h1>
                  <p className='paraf-three'>
                    Berdiskusi bersama tim agar tidak ada miss komunikasi saat pekerjaan sedang berjalan. dan menghasilkan kerja yang maksimal
                  </p>
                </div>
              </div>
            </div>
            <div className="row top-margin-two">
              <div className="col">
                <div className='grid-one'>
                  <img src={TentangFour} alt='' />
                  <h1 className='title-three'>
                    Beberapa peralatan untuk menunjang fasilitas kontruksi
                  </h1>
                  <p className='paraf-three'>
                    Peralatan yang kami miliki sangat banyak agar mempermudah pekerjaan kontruksi nanti
                  </p>
                </div>
              </div>
              <div className="col">
                <div className='grid-one'>
                  <img src={TentangFive} alt='' />
                  <h1 className='title-three'>
                    Fasilitas kontruksi yang cukup
                  </h1>
                  <p className='paraf-three'>
                    Cukupnya fasilitas yang kami sediakan akan sangat membantu untuk menngerjakan projek yang akan datang
                  </p>
                </div>
              </div>
              <div className="col">
                <div className='grid-one'>
                  <img src={TentangSix} alt='' />
                  <h1 className='title-three'>
                    Bekerja langsung di lapangan bersama dengan tim
                  </h1>
                  <p className='paraf-three'>
                    Bekerja di lapangan membangun pemasangan pita besar di dalam tanah.
                  </p>
                </div>
              </div>
            </div>
            <div className="row top-margin-two">
              <div className="col">
                <div className='grid-one'>
                  <img src={TentangSeven} alt='' />
                  <h1 className='title-three'>
                    Pengecekan fasilitas agar tidak ada yang kesalahan nantinya
                  </h1>
                  <p className='paraf-three'>
                    Pengecekan berkala agar tidak ada kecelakaan atau hal hal yang tidak diinginkan terjadi
                  </p>
                </div>
              </div>
              <div className="col">
                <div className='grid-one'>
                  <img src={TentangEight} alt='' />
                  <h1 className='title-three'>
                    Pengecekan dan perakitan kabel
                  </h1>
                  <p className='paraf-three'>
                    Kami juga mengecek kabel dan merakit kabel untuk pemasangan hal hal yang berbau kelistrikan
                  </p>
                </div>
              </div>
              <div className="col">
                <div className='grid-one'>
                  <img src={TentangNine} alt='' />
                  <h1 className='title-three'>
                    Membangun fasilitas yang di lakukan di tengah laut
                  </h1>
                  <p className='paraf-three'>
                    Pembangunan fasilitas di tengah laut sering terjadi, dan kami memiliki peralatan yang dapat menunjang aktifitas projek ini
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='content-four' id='lokasi'>
            <h1 className='title-one'>
              Lokasi
            </h1>
            <Map />
          </div>
          <div className='content-five' id='misi'>
            <div className="row gx-5 top-margin block-dis">
              <div className="col ">
                <img src={ImageVisi} alt='' />
              </div>
              <div className="col center-title top-misi">
                <h1 className="title-misi">Misi</h1>
                <p className='paraf-misi'>
                  Menjadi perusahaan terkemuka di Indonesia yang berkembang secara berkesinambungan serta mampu bersaing di Era Globalisasi
                </p>
              </div>
              <div className="visi-top">
                <h1 className='title-one'>
                  Visi
                </h1>
                <div className="row bolck-dis">
                  <div className="col box-shadow">
                    <p className="text-visi">
                      Ikut berperan aktif dalam pembangunan insfrastruktur di Indonesia
                    </p>
                  </div>
                  <div className="col box-shadow">
                    <p className="text-visi">
                      Memberikan pelayanan terbaik untuk meningkatkan kepuasan pelanggan
                    </p>
                  </div>
                  <div className="col box-shadow">
                    <p className="text-visi">
                      Meningkatkan kompetensi karyawan sehingga dapat bersaing dan bersinergi dengan perkembangan teknologi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="partner">
              <h1 className='title-one'>
                Kerja Sama
              </h1>
              <div className='logo-partner'>
                <img src={LogoFooter1} alt='' />
                <img src={LogoFooter2} alt='' />
                <img src={LogoFooter3} alt='' />
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-black text-white text-center text-lg-start">
          <div className="container p-4">
            <div className="row ">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <img src={Logo} alt='' />
                <p className='title-footer'>
                  Jl. Perintis Kemerdekaan <br />
                  no 100B Kebonmanis Cilacap
                </p>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase head-foot">Social</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">Instagram</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Twitter</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Facebook</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase head-foot">Fitur</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#beranda" className="text-white">Beranda</a>
                  </li>
                  <li>
                    <a href="#fitur" className="text-white">Fitur</a>
                  </li>
                  <li>
                    <a href="#tentang" className="text-white">Tentang Kami</a>
                  </li>
                  <li>
                    <a href="#lokasi" className="text-white">Lokasi</a>
                  </li>
                  <li>
                    <a href="#misi" className="text-white">Visi & Misi</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase head-foot">About</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white">083863125919</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">patrinda_clp@yahoo.co.id</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2020 Copyright:
            <a className="text-black" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div> */}
        </footer>
      </div>
    </div>
  );
}

export default App;
