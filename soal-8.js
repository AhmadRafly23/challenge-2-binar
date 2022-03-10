const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 28,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  const totalKeuntungan = dataPenjualan.reduce((value, current) => {
    return (
      value + (current.hargaJual - current.hargaBeli) * current.totalTerjual
    );
  }, 0);

  const totalModal = dataPenjualan.reduce((value, current) => {
    return (
      value + current.hargaBeli * (current.totalTerjual + current.sisaStok)
    );
  }, 0);

  const bukuTerlaris = (dataPenjualan) => {
    const sortBukuTerlaris = dataPenjualan.sort(
      (a, b) => a.totalTerjual - b.totalTerjual
    );
    const buku = sortBukuTerlaris[sortBukuTerlaris.length - 1].namaProduk;
    return buku;
  };

  const penulisTerlaris = (dataPenjualan) => {
    const sortPenulisTerlaris = dataPenjualan.sort(
      (a, b) => a.totalTerjual - b.totalTerjual
    );
    const penulis = sortPenulisTerlaris[sortPenulisTerlaris.length - 1].penulis;
    return penulis;
  };

  const presentase = ((totalKeuntungan / totalModal) * 100).toFixed(2);

  const formater = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const total = formater.format(totalKeuntungan);
  const modal = formater.format(totalModal);

  return {
    TotalKeuntungan: total,
    TotalModal: modal,
    BukuTerlaris: bukuTerlaris(dataPenjualan),
    PenulisTerlaris: penulisTerlaris(dataPenjualan),
    Presentase: `${presentase}%`,
  };
}
console.log(getInfoPenjualan(dataPenjualanNovel));
