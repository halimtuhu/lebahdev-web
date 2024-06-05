import type {
  BlogType,
  FaqType,
  PricingType,
  ProjectSlideType,
  ReviewType,
} from "./types";

import agency1 from "@/assets/images/landing/agency-2/img-1.jpg";
import agency2 from "@/assets/images/landing/agency-2/img-2.jpg";
import agency3 from "@/assets/images/landing/agency-2/img-3.jpg";

import avatar1 from "@/assets/images/avatars/img-1.jpg";
import avatar2 from "@/assets/images/avatars/img-2.jpg";
import avatar3 from "@/assets/images/avatars/img-3.jpg";
import avatar4 from "@/assets/images/avatars/img-4.jpg";
import avatar5 from "@/assets/images/avatars/img-5.jpg";

const faqContent: FaqType[] = [
  {
    title: "Siapa itu Lebah Dev",
    description:
      "Lebah Dev adalah tim IT profesional yang siap membantu para pengusaha dalam mengembangkan bisnisnya dari segi teknologi",
  },
  {
    title: "Apa saja layanan yang Anda tawarkan?",
    description:
      "Kami menawarkan berbagai layanan web development, termasuk desain website kustom, pengembangan aplikasi web, integrasi e-commerce, optimasi SEO, dan pemeliharaan website. Kami juga menyediakan layanan pengembangan backend dan frontend, serta pengembangan aplikasi mobile.",
  },
  {
    title:
      "Berapa lama waktu yang diperlukan untuk mengembangkan sebuah website?",
    description:
      "Waktu yang diperlukan untuk mengembangkan sebuah website bervariasi tergantung pada kompleksitas dan fitur yang diinginkan. Sebuah website sederhana biasanya dapat diselesaikan dalam 4-6 minggu, sementara proyek yang lebih kompleks mungkin memerlukan beberapa bulan.",
  },
  {
    title: "Berapa biaya yang dikenakan untuk pengembangan website?",
    description:
      "Biaya pengembangan website tergantung pada skala dan kompleksitas proyek. Kami menawarkan penawaran harga yang disesuaikan berdasarkan kebutuhan spesifik Anda setelah diskusi awal. Silakan hubungi kami untuk konsultasi dan penawaran harga gratis.",
  },
  {
    title:
      "Apakah Anda menawarkan layanan pemeliharaan website setelah peluncuran?",
    description:
      "Ya, kami menawarkan layanan pemeliharaan website untuk memastikan bahwa situs Anda tetap aman, up-to-date, dan berjalan dengan lancar. Layanan ini mencakup pembaruan keamanan, backup rutin, dan dukungan teknis.",
  },
  {
    title:
      "Apakah website saya akan responsif dan kompatibel dengan perangkat mobile?",
    description:
      "Ya, semua website yang kami kembangkan dirancang agar responsif dan kompatibel dengan berbagai perangkat, termasuk smartphone dan tablet. Kami memastikan bahwa situs Anda terlihat dan berfungsi dengan baik di semua layar.",
  },
  {
    title:
      "Apakah Anda bisa mengoptimalkan website saya untuk mesin pencari (SEO)?",
    description:
      "Tentu saja. Kami menyediakan layanan optimasi SEO untuk meningkatkan visibilitas website Anda di mesin pencari seperti Google. Layanan ini mencakup penelitian kata kunci, optimasi konten, dan teknik SEO on-page serta off-page.",
  },
  {
    title: "Bagaimana proses pengembangan website di perusahaan Anda?",
    description:
      "Proses pengembangan website kami meliputi beberapa tahap: konsultasi awal, perencanaan dan penentuan kebutuhan, desain dan prototipe, pengembangan dan pengujian, serta peluncuran dan pemeliharaan. Kami bekerja sama dengan Anda di setiap tahap untuk memastikan hasil akhir sesuai dengan visi dan kebutuhan Anda.",
  },
];

const projectSlides: ProjectSlideType[] = [
  {
    title: "Web Design",
    subTitle: "Branding Process",
    image: agency1,
  },
  {
    title: "Web Design",
    subTitle: "Digital Platform",
    image: agency2,
  },
  {
    title: "Web Design",
    subTitle: "Branding Studio",
    image: agency3,
  },
  {
    title: "Web Design",
    subTitle: "Branding Process",
    image: agency1,
  },
  {
    title: "Web Design",
    subTitle: "Branding Process",
    image: agency2,
  },
  {
    title: "Web Design",
    subTitle: "Branding Studio",
    image: agency3,
  },
];

const pricingPlans: PricingType[] = [
  {
    name: "Paket Starter",
    day: 7,
    price: 500,
    features: [
      "Desain Menarik",
      "1 Halaman Utama",
      "Optimasi SEO Dasar",
    ],
  },
  {
    name: "Paket Basic",
    day: 14,
    price: 1000,
    features: [
      "Desain Responsif",
      "Halaman Utama dan 3 Halaman Tambahan",
      "Optimasi SEO Dasar",
    ],
  },
  {
    name: "Paket Pro",
    day: 30,
    price: 5000,
    features: [
      "Desain Kustom Lengkap",
      "Sistem Manajemen Konten (CMS)",
      "Optimasi SEO Lanjutan",
    ],
  },
  {
    name: "Paket Premium",
    day: 30,
    price: 15000,
    features: [
      "Desain Kustom dan Animasi",
      "Pengembangan Aplikasi Web",
      "Integrasi API",
    ],
  },
];

const allReviews: ReviewType[] = [
  {
    name: "Leonard Heiser",
    description:
      "I have been hiring people in this space for and numbers of years and I have to be never seen this level of professionalism.",
    image: avatar1,
  },
  {
    name: "Leonard Heiser",
    description:
      "I have been hiring people in this space for and numbers of years and I have to be never seen this level of professionalism.",
    image: avatar2,
  },
  {
    name: "Leonard Heiser",
    description:
      "I have been hiring people in this space for and numbers of years and I have to be never seen this level of professionalism.",
    image: avatar3,
  },
  {
    name: "Leonard Heiser",
    description:
      "I have been hiring people in this space for and numbers of years and I have to be never seen this level of professionalism.",
    image: avatar4,
  },
  {
    name: "Leonard Heiser",
    description:
      "I have been hiring people in this space for and numbers of years and I have to be never seen this level of professionalism.",
    image: avatar5,
  },
];

const blogs: BlogType[] = [
  {
    title: "Free advertising you online business.",
    description: "Content king that means bringing and strategic approach.",
    image: agency1,
  },
  {
    title: "Investment monitor top 2023",
    description:
      "We are thrilled to the Investment Top 2023, recognizing the excellence and innovation.",
    image: agency2,
  },
  {
    title: "Advancing Innovation and Collaboration",
    description:
      "Join us for a transformative event focused on Advancing Innovation and Collaboration.",
    image: agency3,
  },
];

const waLink = "https://wa.link/xspq1k";

export { faqContent, projectSlides, pricingPlans, allReviews, blogs, waLink };
