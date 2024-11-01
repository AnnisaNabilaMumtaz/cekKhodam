// Fungsi untuk menampilkan modal dengan animasi dan suara bersamaan
function showModal() {
    const modal = document.getElementById('khodamModal');
    const modalContent = modal.querySelector('.modal-content');
    const fartSound = document.getElementById('popUpMusic');

    // Persiapkan audio sebelum menampilkan modal
    fartSound.muted = false;
    fartSound.volume = 1.0;
    fartSound.currentTime = -0.5;

    // Tampilkan modal dan mainkan suara secara bersamaan
    modal.style.display = 'flex';
    fartSound.play().catch(error => {
        console.error("Error memutar fart sound:", error);
    });

    // Trigger reflow dan animasi
    void modal.offsetWidth;
    modal.classList.add('fade-in');
    modalContent.classList.add('slide-in');
}

// Fungsi cekKhodam
function cekKhodam(event) {
    event.preventDefault();
    let nama = document.getElementById('search').value;

    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
        return;
    }

    let status = ['isi', 'kosong'];
    const randomStatus = Math.floor(Math.random() * status.length);

    let namaUser = document.getElementById('namaUser');
    let khodamImage = document.getElementById('khodamImage');
    let khodamResult = document.getElementById('khodamResult');

    if (randomStatus === 0) {
        let khodam = ['Jinn', 'Kuda', 'Blob Fish', 'Peri', 'Naga', 'Kucing', 'Titan', 'Wajah Sigma', 'Eren', 'Dora Puber', 'Alucard Dingin', 'Mahasiswa Lupa Absen', 'Windah Melet', 'Kucing Dakwah', 'Bocil Kebelet Dewasa', 'Gojo Mewing'];
        let khodamImages = [
            'jin.png',
            'kuda.png',
            'blobFish.png',
            'peri.png',
            'naga.png',
            'kucing.png',
            'titan.png',
            'wajahSigma.png',
            'eren.png',
            'doraPuber.jpg',
            'alucardDingin.jpg',
            'mahasiswaLupaAbsen.jpg',
            'windahMelet.jpg',
            'kucingDakwah.jpg',
            'bocilKebeletDewasa.jpg',
            'gojoMewing.jpg'
        ];

        const randomKhodam = Math.floor(Math.random() * khodam.length);
        let selectedKhodam = khodam[randomKhodam];
        let selectedKhodamImage = khodamImages[randomKhodam];

        namaUser.textContent = nama;
        khodamImage.src = selectedKhodamImage;
        khodamResult.textContent = selectedKhodam;
    } else {
        namaUser.textContent = nama;
        khodamImage.src = 'kotakKosong.png';
        khodamResult.textContent = 'KOSONG';
    }

    playClickAudio();
    showModal(); // Langsung tampilkan modal tanpa delay
}

// Fungsi untuk menutup modal dengan animasi
function closeModal() {
    const modal = document.getElementById('khodamModal');
    const modalContent = modal.querySelector('.modal-content');

    modal.classList.add('fade-out');
    modalContent.classList.add('slide-out');

    playClickAudio();

    setTimeout(() => {
        modal.style.display = 'none';
        document.getElementById('search').value = '';
        modal.classList.remove('fade-in', 'fade-out');
        modalContent.classList.remove('slide-in', 'slide-out');
    }, 300);
}

// Fungsi untuk mengatur background music
function setupBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.2;
    bgMusic.loop = true;
    return bgMusic;
}

// Fungsi untuk sound effect click
function playClickAudio() {
    const clickAudio = new Audio("ClickSE.MP3");
    clickAudio.volume = 0.3;
    clickAudio.play().catch(function (error) {
        console.error("Click sound effect tidak dapat diputar:", error);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    const bgMusic = setupBackgroundMusic();
    const btnSearch = document.getElementById('btn-search');
    const closeBtn = document.getElementById('closeModal');

    // Praload fart sound
    const fartSound = document.getElementById('popUpMusic');
    fartSound.load();

    btnSearch.addEventListener('click', cekKhodam);
    closeBtn.addEventListener('click', closeModal);

    // Event listener untuk memulai background music
    document.addEventListener('click', function initAudio() {
        bgMusic.muted = false;
        bgMusic.play().catch(function (error) {
            console.error("Background music tidak dapat diputar:", error);
        });
        document.removeEventListener('click', initAudio);
    });
});