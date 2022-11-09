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
import AOS from 'aos';
import 'aos/dist/aos.css';
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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <div className='bg-nav'>
        <nav className={navbar ? "navbar navbar-expand-lg fixed-nav" : "navbar navbar-expand-lg pad-tok"}>
          <div className="container-fluid ">
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
        <div className='padding-content' >
          <div className='content-header' id='beranda'>
            <h1 className='title-header' data-aos="fade-up">
              Kami Perusahaan <span className='title-header-tebal'>Kontraktor dan Supplier</span>
              {/* melayani dengan sepenuh hati mengutamakna kualitas dan kuantitas menjamin kepuasan pelanggan */}
            </h1>
            <p className='paraf-header' data-aos="fade-up">
              melayani dengan sepenuh hati mengutamakna kualitas dan kuantitas menjamin kepuasan pelanggan
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
              <div className="col" data-aos="fade-up">
                <h1>
                  1,5k+
                </h1>
                <p>
                  Dukungan Mitra
                </p>
              </div>
              <div className="col" data-aos="fade-up">
                <h1>
                  8k+
                </h1>
                <p>
                  Ulasan Bagus
                </p>
              </div>
              <div className="col" data-aos="fade-up">
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
            <h1 className='title-one' data-aos="fade-up">
              Kami Menyediakan Layanan <br/> Kontraktor dan Supplier
            </h1>
            <p className='paraf-one' data-aos="fade-up">
            melayani dengan sepenuh hati mengutamakna kualitas dan kuantitas menjamin kepuasan pelanggan
            </p>
          </div>
          <div className="row gx-5 block-dis" data-aos="fade-right">
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
          <div className="row gx-5 top-margin direction-respon" data-aos="fade-left">
            <div className="col center-title">
              <p className='title-two'>
                Jasa Pelaksana Pekerjaan Mekanikal dan Elektrikal
              </p>
              <a href='https://api.whatsapp.com/send/?phone=%2B6283863125919&text&type=phone_number&app_absent=0'>
                <button type="button" className="btn-red">Hubungi Kami</button>
              </a>
            </div>
            <div className="col">
              <img src={contentTwo} alt='' />
            </div>
          </div>
          <div className="row gx-5 top-margin block-dis" data-aos="fade-right">
            <div className="col ">
              <img src={contentThree} alt='' />
            </div>
            <div className="col center-title">
              <p className='title-two'>
                Jasa Pelaksana Instalasi Minyak dan Gas
              </p>
              <a href='https://api.whatsapp.com/send/?phone=%2B6283863125919&text&type=phone_number&app_absent=0'>
                <button type="button" className="btn-ungu">Hubungi Kami</button>
              </a>
            </div>
          </div>
          <div className="row gx-5 top-margin direction-respon" data-aos="fade-left">
            <div className="col center-title">
              <p className='title-two'>
                Pengadaan Material Mekanikal Dan Elektrikal
              </p>
              <a href='https://api.whatsapp.com/send/?phone=%2B6283863125919&text&type=phone_number&app_absent=0'>
                <button type="button" className="btn-kuning">Hubungi Kami</button>
              </a>
            </div>
            <div className="col">
              <img src={contentFour} alt='' />
            </div>
          </div>
          <div className='content-three' id='tentang' >
            <h1 className='title-one' data-aos="fade-up">
              Tentang Kami
            </h1>
            <div className="row top-margin-two">
              <div className="col" data-aos="fade-up">
                <div className='grid-one'>
                  <img src={TentangOne} alt='' />
                  <h1 className='title-three'>
                    Coring
                  </h1>
                  <p className='paraf-three'>
                    Coring beton adalah pekerjaan melubangi beton bertulang atau lantai plat beton dengan menggunakan mesin core drill digunakan untuk membuat jalur air , jalur pipa ,jalur kabel , ventilasi , pondasi tiang ,pemasangan angkur dan berbagai kebutuhan lainnya dalam kontruksi bangunan maupun pengambilan uji sampel material
                  </p>
                </div>
              </div>
              <div className="col" data-aos="fade-up">
                <div className='grid-one'>
                  <img src={TentangTwo} alt='' />
                  <h1 className='title-three'>
                    Fabrikasi
                  </h1>
                  <p className='paraf-three'>
                    sebagai salah satu kegiatan proses mengolah bahan baku material menjadi barang kontruksi dan juga perbaikan bangunan kontruksi yang rusak
                  </p>
                </div>
              </div>
              <div className="col" data-aos="fade-up">
                <div className='grid-one'>
                  <img src={TentangThree} alt='' />
                  <h1 className='title-three'>
                    Diskusi
                  </h1>
                  <p className='paraf-three'>
                  untuk menyelesaikan permasalahan permasalahan pekerjaan dan untuk membina kerjasama antar team kerja
                  </p>
                </div>
              </div>
            </div>
            <div className="row top-margin-two">
              <div className="col" data-aos="fade-up">
                <div className='grid-one'>
                  <img src={TentangFour} alt='' />
                  <h1 className='title-three'>
                  Perbaikan Peralatan Rotating 
                  </h1>
                  <p className='paraf-three'>
                  Untuk menunjang peforma kerja mesin mesin industri, pompa industri, kompressor dan lain lain
                  </p>
                </div>
              </div>
              <div className="col" data-aos="fade-up">
                <div className='grid-one'>
                  <img src={TentangFive} alt='' />
                  <h1 className='title-three'>
                  Quick Release Hook
                  </h1>
                  <p className='paraf-three'>
                    Penggatian dan perbaikan QRH untuk menunjang kehandalan operasional penyandaran kapal di dermaga
                  </p>
                </div>
              </div>
              <div className="col" data-aos="fade-up">
                <div className='grid-one'>
                  <img src={TentangSix} alt='' />
                  <h1 className='title-three'>
                    Pekerjaan di lapangan
                  </h1>
                  <p className='paraf-three'>
                    Pekerjaan di lapangan memerlukan kerjasama team yang baik untuk mencapai target sesuai kebutuhan klien
                  </p>
                </div>
              </div>
            </div>
            <div className="row top-margin-two">
              <div className="col" data-aos="fade-up">
                <div className='grid-one'>
                  <img src={TentangSeven} alt='' />
                  <h1 className='title-three'>
                    Final Check
                  </h1>
                  <p className='paraf-three'>
                    Pemeriksaan akhir terhadap setiap pekerjaan untuk memastikan hasil pekerjaan sesuai quality dan quantity
                  </p>
                </div>
              </div>
              <div className="col" data-aos="fade-up">
                <div className='grid-one'>
                  <img src={TentangEight} alt='' />
                  <h1 className='title-three'>
                    Ketelitian 
                  </h1>
                  <p className='paraf-three'>
                    Dibutuhkan ketelitian dan ketepatan dalam menyelesaikan permasalahan yang timbul dalam tiap pekerjaan
                  </p>
                </div>
              </div>
              <div className="col" data-aos="fade-up">
                <div className='grid-one'>
                  <img src={TentangNine} alt='' />
                  <h1 className='title-three'>
                    Peralatan
                  </h1>
                  <p className='paraf-three'>
                    Penggunaan peralatan yang tepat dan sesuai kebutuhan menunjang kelancaran pekerjaan baik di darat maupun di perairan
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='content-four' id='lokasi'>
            <h1 className='title-one' data-aos="fade-up">
              Lokasi
            </h1>
            <Map data-aos="fade-up" />
          </div>
          <div className='content-five' id='misi'>
            <div className="row gx-5 top-margin block-dis">
              <div className="col " data-aos="fade-right">
                <img src={ImageVisi} alt='' />
              </div>
              <div className="col center-title top-misi" data-aos="fade-left">
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
                  <div className="col box-shadow" data-aos="fade-right">
                    <p className="text-visi">
                      Ikut berperan aktif dalam pembangunan insfrastruktur di Indonesia
                    </p>
                  </div>
                  <div className="col box-shadow" data-aos="fade-up">
                    <p className="text-visi">
                      Memberikan pelayanan terbaik untuk meningkatkan kepuasan pelanggan
                    </p>
                  </div>
                  <div className="col box-shadow" data-aos="fade-left">
                    <p className="text-visi">
                      Meningkatkan kompetensi karyawan sehingga dapat bersaing dan bersinergi dengan perkembangan teknologi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="partner">
              <h1 className='title-one' data-aos="fade-up">
                Kerja Sama
              </h1>
              <div className='logo-partner' data-aos="fade-up">
                <img src={LogoFooter1} alt='' />
                <img src={LogoFooter2} alt='' />
                <img src={LogoFooter3} alt='' />
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-black text-white text-center text-lg-start">
          <div className="container p-4" data-aos="fade-up">
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
