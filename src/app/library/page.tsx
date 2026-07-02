"use client";

import { FileX } from "lucide-react";
import {Box} from '@/components/Section/fiturtest';
import { useState } from "react";

export default function Page() {
  const [Jurusan, pilJurusan] = useState("def");

  const materiData = [
    {
      id: 1,
      category: "FT",
      kode: "MA1101",
      image: "/materi/kalkulus.png",
      title: "Matematika Dasar I",
      subtitle: "Tahap Tahun Pertama FTI",
      button: "testlib/MA1101"
    },
    {
      id: 2,
      category: "FT",
      kode: "FI1101",
      image: "/materi/fisika.png",
      title: "Fisika Dasar I",
      subtitle: "Tahap Tahun Pertama FTI",
      button: "testlib/KI1101"
    },
    {
      id: 3,
      category: "FT",
      kode: "KI1101",
      image: "/materi/kimia.png",
      title: "Kimia Dasar I",
      subtitle: "Tahap Tahun Pertama FTI",
    },
    {
      id: 4,
      category: "FT",
      kode: "WI1101",
      image: "/materi/pancasila.png",
      title: "Pancasila",
      subtitle: "Tahap Tahun Pertama FTI",
    },
    {
      id: 5,
      category: "FT",
      kode: "WI1102",
      image: "/materi/berkom.png",
      title: "Berpikir Komputasional",
      subtitle: "Tahap Tahun Pertama FTI",
    },
    {
      id: 6,
      category: "FT",
      kode: "WI1103",
      image: "/materi/sustainibility.png",
      title: "Pengantar Prinsip Keberlanjutan",
      subtitle: "Tahap Tahun Pertama FTI",
    },
    {
      id: 7,
      category: ["TF","TK","TB","PG","TI","MR"],
      kode: "WI2001",
      image: "/materi/prd.png",
      title: "Pengantar Rekayasa dan Desain",
      subtitle: "Mata Kuliah Wajib ITB",
    },
    {
      id: 8,
      category: ["TF","PG","TI","MR"],
      kode: "WI2002",
      image: "/materi/lidia.png",
      title: "Literasi Data dan Inteligensi Artifisial",
      subtitle: "Mata Kuliah Wajib ITB",
    },
    {
      id: 9,
      category: ["TF","TK","TB"],
      kode: "WI2003",
      image: "/materi/olahraga.png",
      title: "Olahraga",
      subtitle: "Mata Kuliah Wajib ITB",
    },
    {
      id: 10,
      category: ["TK","PG"],
      kode: "WI2004",
      image: "/materi/Inggris.png",
      title: "Bahasa Inggris",
      subtitle: "Mata Kuliah Wajib ITB",
    },
    {
      id: 11,
      category: ["TF","TK","TB","PG","TI","MR"],
      kode: "WI2005",
      image: "/materi/Indonesia.png",
      title: "Bahasa Indonesia",
      subtitle: "Mata Kuliah Wajib ITB",
    },
    {
      id: 12,
      category: ["MR"],
      kode: "WI2021",
      image: "/materi/manajemen.png",
      title: "Manajemen Rekayasa Industri",
      subtitle: "Mata Kuliah Wajib ITB",
    },    
    {
      id: 13,
      category: ["TK","TB","TI","MR"],
      kode: "MA1201",
      image: "/materi/kalkulus.png",
      title: "Matematika Dasar 2A",
      subtitle: "Matematika",
    },
    {
      id: 14,
      category: ["TK","TI","MR"],
      kode: "FI1201",
      image: "/materi/fisika.png",
      title: "Fisika Dasar 2A",
      subtitle: "Fisika",
    },
    {
      id: 15,
      category: ["TK","PG","TB"],
      kode: "KI1201",
      image: "/materi/kimia.png",
      title: "Kimia Dasar 2A/B",
      subtitle: "Kimia",
    },
    {
      id: 21,
      category: "TF",
      kode: "TF1201",
      image: "/materi/dasfis.png",
      title: "Dasar Fisika Teknik",
      subtitle: "Teknik Fisika",
    },
    {
      id: 22,
      category: "TF",
      kode: "TF1202",
      image: "/materi/RL.png",
      title: "Rangkaian Listrik",
      subtitle: "Teknik Fisika",
    },
    {
      id: 23,
      category: "TF",
      kode: "TF1203",
      image: "/materi/Material.png",
      title: "Pengantar Struktur dan Sifat Material",
      subtitle: "Teknik Fisika",
    },
    {
      id: 24,
      category: "TF",
      kode: "MA2021",
      image: "/materi/Matriks.png",
      title: "Matriks dan Ruang Vektor",
      subtitle: "Teknik Fisika",
    },
    {
      id: 31,
      category: "TB",
      kode: "TB1201",
      image: "/materi/nabati.png",
      title: "Ilmu Kimia Bahan Nabati",
      subtitle: "Teknik Bioenergi dan Kemurgi",
    },
    {
      id: 41,
      category: "PG",
      kode: "PG1201",
      image: "/materi/analisis.png",
      title: "Analisis Matematik dan Numerik",
      subtitle: "Teknik Pangan",
    },
    {
      id: 42,
      category: "PG",
      kode: "PG1202",
      image: "/materi/pangan.png",
      title: "Mikrobiologi Pangan",
      subtitle: "Teknik Pangan",
    },
    {
      id: 51,
      category: "TI",
      kode: "TI1201",
      image: "/materi/biologi.png",
      title: "Biologi Dasar",
      subtitle: "Teknik Industri",
    },
    {
      id: 52,
      category: ["TI","MR"],
      kode: "TI1202",
      image: "/materi/gamtek.png",
      title: "Gambar Teknik",
      subtitle: "Teknik Industri",
    },
  ];

  const filteredData = materiData.filter((item) => {
    if (Jurusan === "def") return true; 
    return item.category.includes(Jurusan);
  });

  return (
    <>
      <div className = "min-h-screen pt-24 bg-gray-50 dark:bg-neutral-900">
        <h1 className="text-center text-5xl font-bold dark:text-white">Materi</h1>
        <div className = "bg-gray-300 dark:bg-gray-800 w-100% rounded-lg m-4 p-4">
            <h1 className = "dark:text-white">Filter</h1>
            <select className = "p-3 rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" name ="jurusan" id = "jurusan" value={Jurusan}
            onChange={(e) => pilJurusan(e.target.value)}>
            <option value = "def">Pilih jurusan</option>
            <option value = "FT">Tahap Tahun Pertama FTI</option>
            <option value = "TF">Teknik Fisika</option>
            <option value = "TK">Teknik Kimia</option>
            <option value = "TI">Teknik Industri</option>
            <option value = "MR">Manajemen Rekayasa</option>
            <option value = "TB">Teknik Bioenergi dan Kemurgi</option>
            <option value = "PG">Teknik Pangan</option>
            </select>
        </div>
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {filteredData.map((item) => (
           <Box
                kode = {item.kode}
                image = {item.image}
                title = {item.title}
                subtitle = {item.subtitle}
                button = {"library/" + item.kode}
                id = {item.id}
           />
        ))}  
        </div>
      </div>
    </>
  );
}

