// src/components/Fragments/PemesananContent.jsx
import React, { useState } from 'react';
import Step1_Rute from './pemesanan/Step1_Rute';

function PemesananContent() {
  // --- SEMUA STATE DAN FUNGSI FORMULIR PINDAH KE SINI ---
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    daerah_asal: '',
    daerah_tujuan: '',
    jenis_kendaraan: '', // 'mobil_kecil', 'truk_engkel', 'alat_mini'
    jenis_pengiriman: '', // 'single_towing', 'carcarrier'
    asuransi: '', // 'dengan', 'tanpa'
    nama_pemesan: '',
    alamat_pemesan: '',
    telpon_pemesan: '',
    email_pemesan: '',
    catatan: '',
    harga_final: 0
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  const resetForm = () => {
    setStep(1);
    setFormData({
      daerah_asal: '',
      daerah_tujuan: '',
      jenis_kendaraan: '',
      jenis_pengiriman: '',
      asuransi: '',
      nama_pemesan: '',
      alamat_pemesan: '',
      telpon_pemesan: '',
      email_pemesan: '',
      catatan: '',
      harga_final: 0
    });
  };

  const handleChange = (input) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [input]: value });
  };

  // --- Daftar Opsi ---
  const daerahList = [
    'Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Makassar', 'Semarang',
    'Yogyakarta', 'Bali', 'Palembang', 'Balikpapan', 'Manado', 'Pontianak'
  ];
  const kendaraanOptions = [
    { id: 'mobil_kecil', label: 'Mobil Kecil (Avanza, Xenia, dll)', icon: '🚗' },
    { id: 'truk_engkel', label: 'Truk / Engkel R4 & R6', icon: '🚚' },
    { id: 'alat_mini', label: 'ALAT MINI', icon: '🚜' },
  ];
  const pengirimanOptions = [
    { id: 'single_towing', label: 'Single Towing', icon: '🚛' },
    { id: 'carcarrier', label: 'Car Carrier Towing', icon: '🚚' },
  ];
  const asuransiOptions = [
    { id: 'dengan', label: 'Dengan Asuransi', icon: '🛡️' },
    { id: 'tanpa', label: 'Tanpa Asuransi', icon: '⚠️' },
  ];
  const stepLabels = [
    'Rute Pengiriman',
    'Jenis Kendaraan',
    'Jenis Pengiriman',
    'Asuransi',
    'Informasi Pemesan',
    'Konfirmasi'
  ];

  // --- FUNGSI UNTUK MERENDER KONTEN SETIAP LANGKAH ---
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Step1_Rute
            formData={formData}
            handleChange={handleChange}
            daerahList={daerahList}
          />
        );
      case 2:
        return (
          <div className="space-y-6 mt-8">
            <p className="text-gray-600 mb-4">Pilih jenis kendaraan yang akan diderek:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {kendaraanOptions.map((item) => (
                <div
                  key={item.id}
                  className={`p-6 border rounded-xl cursor-pointer transition ${
                    formData.jenis_kendaraan === item.id
                      ? 'border-orange-500 bg-orange-50 shadow-md'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                  onClick={() => handleChange('jenis_kendaraan')({ target: { value: item.id } })}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-center text-lg">{item.label}</h4>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 mt-8">
            <p className="text-gray-600 mb-4">Pilih jenis layanan pengiriman:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pengirimanOptions.map((item) => (
                <div
                  key={item.id}
                  className={`p-6 border rounded-xl cursor-pointer transition ${
                    formData.jenis_pengiriman === item.id
                      ? 'border-orange-500 bg-orange-50 shadow-md'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                  onClick={() => handleChange('jenis_pengiriman')({ target: { value: item.id } })}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-center text-lg">{item.label}</h4>
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 mt-8">
            <p className="text-gray-600 mb-4">Pilih opsi asuransi:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {asuransiOptions.map((item) => (
                <div
                  key={item.id}
                  className={`p-6 border rounded-xl cursor-pointer transition ${
                    formData.asuransi === item.id
                      ? 'border-orange-500 bg-orange-50 shadow-md'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                  onClick={() => handleChange('asuransi')({ target: { value: item.id } })}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-center text-lg">{item.label}</h4>
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 mt-8">
            <h3 className="text-xl font-semibold">Informasi Pemesan</h3>
            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="nama_pemesan" className="text-sm font-medium text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                id="nama_pemesan"
                value={formData.nama_pemesan}
                onChange={handleChange('nama_pemesan')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="alamat_pemesan" className="text-sm font-medium text-gray-700">Alamat Lengkap</label>
              <textarea
                id="alamat_pemesan"
                value={formData.alamat_pemesan}
                onChange={handleChange('alamat_pemesan')}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="Masukkan alamat lengkap penjemputan/pengantaran"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telpon_pemesan" className="text-sm font-medium text-gray-700">Nomor Telepon</label>
                <input
                  type="tel"
                  id="telpon_pemesan"
                  value={formData.telpon_pemesan}
                  onChange={handleChange('telpon_pemesan')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="Contoh: 081234567890"
                />
              </div>
              <div>
                <label htmlFor="email_pemesan" className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email_pemesan"
                  value={formData.email_pemesan}
                  onChange={handleChange('email_pemesan')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="Contoh: email@anda.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="catatan" className="text-sm font-medium text-gray-700">Catatan Tambahan (Opsional)</label>
              <textarea
                id="catatan"
                value={formData.catatan}
                onChange={handleChange('catatan')}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="Informasi tambahan terkait penjemputan atau kondisi kendaraan"
              ></textarea>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md mt-8">
            <h3 className="font-bold text-2xl text-gray-800 mb-6">Ringkasan Pemesanan Anda</h3>
            <div className="space-y-4 text-gray-700 border-b pb-6 mb-6">
              <div className="flex justify-between"><span className="font-medium text-gray-500">Rute Pengiriman:</span> <span className="font-semibold text-right">{formData.daerah_asal} → {formData.daerah_tujuan}</span></div>
              <div className="flex justify-between"><span className="font-medium text-gray-500">Jenis Kendaraan:</span> <span className="font-semibold text-right">{kendaraanOptions.find(k => k.id === formData.jenis_kendaraan)?.label || '-'}</span></div>
              <div className="flex justify-between"><span className="font-medium text-gray-500">Jenis Layanan:</span> <span className="font-semibold text-right">{pengirimanOptions.find(p => p.id === formData.jenis_pengiriman)?.label || '-'}</span></div>
              <div className="flex justify-between"><span className="font-medium text-gray-500">Opsi Asuransi:</span> <span className="font-semibold text-right">{asuransiOptions.find(a => a.id === formData.asuransi)?.label || '-'}</span></div>
            </div>
            <h4 className="font-bold text-xl text-gray-800 mb-4">Informasi Kontak Pemesan</h4>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-medium">Nama:</span> {formData.nama_pemesan || '-'}</p>
              <p><span className="font-medium">Telepon:</span> {formData.telpon_pemesan || '-'}</p>
              <p><span className="font-medium">Email:</span> {formData.email_pemesan || '-'}</p>
              <p><span className="font-medium">Alamat:</span> {formData.alamat_pemesan || '-'}</p>
              {formData.catatan && <p><span className="font-medium">Catatan:</span> {formData.catatan}</p>}
            </div>
          </div>
        );
      default:
        return (
          <Step1_Rute
            formData={formData}
            handleChange={handleChange}
            daerahList={daerahList}
          />
        );
    }
  };

  // --- Fungsi untuk mengecek apakah tombol Konfirmasi harus disable ---
  const isConfirmDisabled = () => {
    switch (step) {
      case 1: return !formData.daerah_asal || !formData.daerah_tujuan;
      case 2: return !formData.jenis_kendaraan;
      case 3: return !formData.jenis_pengiriman;
      case 4: return !formData.asuransi;
      case 5: return !formData.nama_pemesan || !formData.telpon_pemesan;
      default: return false;
    }
  };

  // --- Fungsi untuk mengirim data ke Backend ---
  const handleFinalSubmit = async () => {
    alert('Data Pesanan (lihat console):\n' + JSON.stringify(formData, null, 2));
    console.log('Data yang akan dikirim:', formData);
    // Setelah berhasil, arahkan ke halaman sukses atau tampilkan pesan
    // navigate('/pemesanan-sukses');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Progress Bar */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {stepLabels.map((label, index) => (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl ${
                    step >= index + 1
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index + 1}
                </div>
                <div className="mt-3 text-sm font-medium text-center max-w-[120px]">
                  {label}
                </div>
              </div>
              {index < stepLabels.length - 1 && (
                <div className="flex-1 mx-4">
                  <div
                    className={`h-2 rounded-full ${
                      step > index + 1 ? 'bg-orange-500' : 'bg-gray-200'
                    }`}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Konten Langkah */}
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
        {renderStepContent()}
      </div>

      {/* Tombol Navigasi Dinamis */}
      <div className="mt-8 flex justify-between">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition"
          >
            Kembali
          </button>
        )}

        {step < 6 && (
          <button
            onClick={nextStep}
            disabled={isConfirmDisabled()}
            className={`px-6 py-3 rounded-lg font-medium text-white text-lg ${
              isConfirmDisabled()
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-600'
            } transition`}
          >
            {step === 1
              ? 'Konfirmasi Rute Pengiriman'
              : step === 2
              ? 'Konfirmasi Jenis Kendaraan'
              : step === 3
              ? 'Konfirmasi Jenis Pengiriman'
              : step === 4
              ? 'Konfirmasi Asuransi'
              : 'Konfirmasi Informasi Pemesan'}
          </button>
        )}

        {step === 6 && (
          <div className="flex space-x-4">
            <button
              onClick={resetForm}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition"
            >
              Kembali ke Awal
            </button>
            <button
              onClick={handleFinalSubmit}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
            >
              Buat Pesanan Sekarang
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PemesananContent;