import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../DashboardPage.css'; // Import file CSS

function DashboardPage() {
  // --- (LOGIKA STATE ANDA SEMUA SAMA PERSIS) ---
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  // --- (SEMUA FUNGSI CRUD ANDA SAMA PERSIS) ---
  const getToken = () => localStorage.getItem('token');

  const fetchContacts = async () => {
    // ... (fungsi fetchContacts sama)
    const token = getToken();
    if (!token) {
      setError('Anda harus login dulu.');
      setLoading(false);
      navigate('/login');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/contacts', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setContacts(data.data);
      } else {
        setError(data.message || 'Gagal mengambil data.');
      }
    } catch (err) {
      setError('Tidak dapat terhubung ke server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleSubmit = async (event) => {
    // ... (fungsi handleSubmit sama)
    event.preventDefault();
    setError('');
    const token = getToken();
    if (!name || !phoneNumber) {
      setError('Nama dan Nomor Telepon tidak boleh kosong.');
      return;
    }
    const isEditing = editingId !== null;
    const url = isEditing
      ? `http://localhost:3000/contacts/${editingId}`
      : 'http://localhost:3000/contacts';
    const method = isEditing ? 'PUT' : 'POST';
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name: name, phone_number: phoneNumber })
      });
      const data = await response.json();
      if ((isEditing && response.ok) || (!isEditing && response.status === 201)) {
        if (isEditing) {
          setContacts(contacts.map(c => (c.id === editingId ? data.data : c)));
          alert('Kontak berhasil diperbarui!');
        } else {
          setContacts([data.data, ...contacts]);
          alert('Kontak baru berhasil disimpan!');
        }
        setName('');
        setPhoneNumber('');
        setEditingId(null);
      } else {
        setError(data.message || 'Gagal menyimpan kontak.');
      }
    } catch (err) {
      setError('Tidak dapat terhubung ke server.');
    }
  };

  const handleDelete = async (contactId) => {
    // ... (fungsi handleDelete sama)
    if (!window.confirm('Apakah Anda yakin ingin menghapus kontak ini?')) {
      return;
    }
    setError('');
    const token = getToken();
    try {
      const response = await fetch(`http://localhost:3000/contacts/${contactId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setContacts(contacts.filter(contact => contact.id !== contactId));
        alert('Kontak berhasil dihapus.');
      } else {
        setError(data.message || 'Gagal menghapus kontak.');
      }
    } catch (err) {
      setError('Tidak dapat terhubung ke server.');
    }
  };

  const handleEditClick = (contact) => {
    // ... (fungsi handleEditClick sama)
    setName(contact.name);
    setPhoneNumber(contact.phone_number);
    setEditingId(contact.id);
  };
  
  const handleCancelEdit = () => {
    // ... (fungsi handleCancelEdit sama)
    setName('');
    setPhoneNumber('');
    setEditingId(null);
  };
  
  // --- 👇 1. TAMBAHKAN FUNGSI BARU INI UNTUK LOGOUT ---
  const handleLogout = () => {
    // Tampilkan konfirmasi
    if (window.confirm('Apakah Anda yakin ingin logout?')) {
      // 1. Hapus token dari penyimpanan browser
      localStorage.removeItem('token');
      // 2. Arahkan pengguna kembali ke halaman utama
      navigate('/');
    }
  };
  // --- (AKHIR FUNGSI BARU) ---


  // --- TAMPILAN (JSX) ---
  
  if (loading) {
    return <div className="loadingText">Memuat data...</div>;
  }

  return (
    <div className="page">
      
      {/* Kolom Kiri: Formulir Input */}
      <div className="container">
        {/* ... (Isi formulir sama persis) ... */}
        <h2>{editingId ? 'Edit Kontak' : 'Tambah Kontak Baru'}</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label htmlFor="name" className="label">Nama</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              placeholder="Masukkan nama..."
            />
          </div>
          <div className="formGroup">
            <label htmlFor="phone" className="label">Nomor Telepon</label>
            <input
              type="text"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="input"
              placeholder="Contoh: 08123456789"
            />
          </div>
          <div className="buttonGroup">
            <button type="submit" className="button">
              {editingId ? 'Update Kontak' : 'Simpan Kontak'}
            </button>
            {editingId && (
              <button type="button" onClick={handleCancelEdit} className="buttonSecondary">
                Batal
              </button>
            )}
          </div>
        </form>
        {error && <p className="errorText">{error}</p>}
      </div>

      {/* Kolom Kanan: Daftar Kontak */}
      <div className="listContainer">
        
        {/* 👇 2. TAMBAHKAN PEMBUNGKUS DAN TOMBOL LOGOUT INI --- */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2>Daftar Kontak Anda</h2>
          <button onClick={handleLogout} className="buttonDelete">
            Logout
          </button>
        </div>
        {/* --- (AKHIR BAGIAN BARU) --- */}

        {contacts.length === 0 ? (
          <p>Anda belum memiliki kontak.</p>
        ) : (
          <ul className="list">
            {contacts.map((contact) => (
              <li key={contact.id} className="listItem">
                <div>
                  <div className="contactInfo">{contact.name}</div>
                  <div className="contactPhone">{contact.phone_number}</div>
                </div>
                <div className="buttonGroup">
                  <button onClick={() => handleEditClick(contact)} className="buttonEdit">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(contact.id)} className="buttonDelete">
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}

export default DashboardPage;