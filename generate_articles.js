const fs = require('fs');
const path = require('path');

const dir = 'c:\\interactiveflatplanel\\';
const blogFile = fs.readFileSync(path.join(dir, 'blog.html'), 'utf8');

const headerMatch = blogFile.match(/<!-- Navigation -->[\s\S]*?<\/header>/);
const header = headerMatch ? headerMatch[0] : '';

const footerMatch = blogFile.match(/<footer[\s\S]*?<\/footer>/);
const footer = footerMatch ? footerMatch[0] : '';

const scriptsMatch = blogFile.match(/<script[\s\S]*?<\/script>/g);
const scripts = scriptsMatch ? scriptsMatch.join('\n') : '';

const css = `
        :root {
            --primary: #00bfff; 
            --charcoal: #171e19;
            --sage: #cce0ff;
            --dark: #272727;
            --star: #ffbc2e;
        }
        body { 
            font-family: 'Satoshi', sans-serif; 
            overflow-x: hidden;
            width: 100%;
        }
        h1, h2, h3, h4, h5, h6, .font-cabinet { 
            font-family: 'Cabinet Grotesk', sans-serif; 
        }
        .bg-primary-custom { background-color: var(--primary) !important; }
        .bg-charcoal { background-color: var(--charcoal) !important; color: white; }
        .bg-sage { background-color: var(--sage) !important; }
        .bg-dark-custom { background-color: var(--dark) !important; color: white; }
        .text-sage { color: var(--sage) !important; }
        
        .border-black-2 { border: 2px solid #000 !important; }
        .border-bottom-black-2 { border-bottom: 2px solid #000 !important; }
        .border-y-black-2 { border-top: 2px solid #000 !important; border-bottom: 2px solid #000 !important; }

        .shadow-neo-4 { box-shadow: 4px 4px 0px 0px #000 !important; }
        .shadow-neo-8 { box-shadow: 8px 8px 0px 0px #000 !important; }
        .shadow-neo-12 { box-shadow: 12px 12px 0px 0px #000 !important; }
        
        .neo-btn { transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .neo-btn:hover { transform: translate(4px, 4px); box-shadow: 0px 0px 0px 0px #000 !important; }

        .rounded-xl { border-radius: 0.75rem !important; }
        .rounded-2xl { border-radius: 1rem !important; }
        .rounded-3xl { border-radius: 1.5rem !important; }

        .bg-dots {
            background-image: radial-gradient(black 1px, transparent 1px);
            background-size: 32px 32px;
            background-position: 0 0;
            background-color: var(--primary);
            position: relative;
            z-index: 1;
        }
        .bg-dots::before {
            content: ''; position: absolute; inset: 0;
            background-color: rgba(0, 191, 255, 0.9);
            z-index: -1;
        }

        .neo-dropdown {
            border: 2px solid #000 !important;
            box-shadow: 4px 4px 0px 0px #000 !important;
            border-radius: 0.75rem !important;
            padding: 0.75rem !important;
            background-color: #fff !important;
            min-width: 260px;
        }
        .neo-dropdown .dropdown-header-custom {
            font-family: 'Satoshi', sans-serif;
            font-weight: 800;
            font-size: 0.85rem;
            color: #4a4a4a;
            padding: 0.25rem 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .neo-dropdown .dropdown-item {
            font-family: 'Satoshi', sans-serif;
            font-weight: 700;
            border-radius: 0.5rem;
            transition: all 0.2s;
            border: 2px solid transparent;
            padding: 0.5rem 1rem;
            color: #000;
            text-shadow: none;
        }
        .neo-dropdown .dropdown-item:hover {
            background-color: var(--primary) !important;
            color: #fff !important;
            border: 2px solid #000;
            box-shadow: 2px 2px 0px 0px #000;
        }
        .neo-dropdown hr {
            border-color: #000;
            opacity: 1;
            margin: 0.5rem 0;
            border-width: 2px;
        }
        .article-content p {
            font-size: 1.15rem;
            line-height: 1.8;
            color: #272727;
            margin-bottom: 1.5rem;
        }
        .article-content h2 {
            font-family: 'Cabinet Grotesk', sans-serif;
            font-weight: 800;
            font-size: 2rem;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            color: #000;
        }
        .article-content h3 {
            font-family: 'Cabinet Grotesk', sans-serif;
            font-weight: 700;
            font-size: 1.5rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #000;
        }
        .floating-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1050;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .floating-btn {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #000;
            box-shadow: 4px 4px 0px 0px #000;
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-decoration: none;
            cursor: pointer;
        }
        .floating-btn:hover {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px 0px #000;
        }
        .btn-wa { background-color: #25D366; color: white; }
        .btn-top { background-color: var(--primary); color: #fff; }
`;

function createPageTemplate(title, badge, image, articleContent) {
    return `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - PanelPro Blog</title>
    <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
${css}
    </style>
</head>
<body class="bg-white text-dark">
${header.replace('active', '')}

    <!-- Article Header -->
    <section class="bg-primary-custom bg-dots border-bottom-black-2 pt-5 pb-4 mt-5">
        <div class="container pt-5 pb-3 text-center">
            <span class="d-inline-block bg-white px-4 py-2 rounded-pill border-black-2 shadow-neo-4 fw-bold mb-4 fs-6 text-dark" style="transform: rotate(-2deg);">
                ${badge}
            </span>
            <h1 class="font-cabinet fw-bolder display-3 mb-4 text-white" style="letter-spacing: -1px; text-shadow: 3px 3px 0 #000; max-width: 900px; margin: 0 auto;">
                ${title}
            </h1>
        </div>
    </section>

    <!-- Article Content -->
    <section class="py-5 bg-white border-bottom-black-2">
        <div class="container py-4">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <!-- Featured Image -->
                    <div class="mb-5">
                        <img src="${image}" alt="${title}" class="img-fluid border-black-2 rounded-3xl shadow-neo-12 w-100" style="max-height: 500px; object-fit: cover;">
                    </div>
                    
                    <!-- Content -->
                    <div class="article-content font-satoshi fw-medium text-dark">
                        ${articleContent}
                    </div>

                    <!-- Share Section -->
                    <div class="mt-5 pt-4 border-top border-2 border-black d-flex align-items-center gap-3">
                        <span class="fw-bold fs-5">Bagikan Artikel Ini:</span>
                        <a href="#" class="bg-primary-custom text-white border-black-2 shadow-neo-4 px-3 py-2 rounded-3 text-decoration-none fw-bold neo-btn">Facebook</a>
                        <a href="#" class="bg-dark text-white border-black-2 shadow-neo-4 px-3 py-2 rounded-3 text-decoration-none fw-bold neo-btn">X / Twitter</a>
                        <a href="https://wa.me/6288989643555" target="_blank" class="bg-wa text-white border-black-2 shadow-neo-4 px-3 py-2 rounded-3 text-decoration-none fw-bold neo-btn" style="background-color: #25D366;">WhatsApp</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

${footer}

    <!-- Floating WhatsApp -->
    <div class="floating-container">
        <a href="https://wa.me/6288989643555" target="_blank" class="floating-btn btn-wa" title="Hubungi Kami via WhatsApp">
            <svg style="width: 32px; height: 32px;" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
    </div>

${scripts}
</body>
</html>`;
}

const articles = [
    {
        filename: 'artikel-memilih-panel.html',
        title: 'Cara Memilih Panel Datar Interaktif yang Tepat',
        badge: 'Tips & Trik',
        image: 'img/blog1.webp',
        content: `
            <p>Di era digital, kehadiran layar pintar cerdas atau Panel Datar Interaktif (Interactive Flat Panel/IFP) kini menjadi salah satu elemen krusial bagi ekosistem rapat modern dan fasilitas ruang kelas. Banyaknya ragam merek dan fitur seringkali membuat para pengambil keputusan kebingungan. Bagaimana sebenarnya cara merumuskan dan memilih panel datar interaktif yang tepat?</p>
            
            <h2>1. Perhatikan Ukuran Ruangan Anda</h2>
            <p>Memilih panel yang ukurannya sesuai dengan dimensi ruangan sangatlah penting demi visibilitas audiens. Sebagai pedoman praktis:</p>
            <ul>
                <li><strong>Ukuran 65 Inch:</strong> Sangat ideal untuk studio meeting berkapasitas 4 hingga 8 orang, atau ruang huddle kecil.</li>
                <li><strong>Ukuran 75 Inch:</strong> Menjadi standar industri untuk ruang rapat reguler atau ruang kelas berukuran menengah (10-20 orang).</li>
                <li><strong>Ukuran 86 Inch:</strong> Merupakan pilihan mutlak untuk ruang direksi tingkat eksekutif, aula besar, atau ruang seminar kelas atas.</li>
            </ul>

            <h2>2. Periksa Spesifikasi Layar dan Kecerahan</h2>
            <p>Selalu pilih panel interaktif yang menawarkan <strong>Resolusi 4K UHD</strong> demi mendapatkan teks yang tajam dan gambar yang tak pecah meski di zoom maksimal. Selain itu, pastikan layarnya telah dilapisi <em>Anti-Glare</em>. Fitur Anti-Glare ini mencegah pantulan cahaya lampu atau matahari pada layar yang kerap kali menyilaukan dan mengganggu kenyamanan mata peserta.</p>

            <h2>3. Uji Kemampuan Responsif Sentuhan (Touch Points)</h2>
            <p>IFP kelas premium saat ini harus mendukung minimum 20 hingga 40 titik sentuh (touch points) secara simultan tanpa ada penundaan (zero latency). Hal ini penting terutama saat beberapa anggota tim maju ke depan layar secara bersamaan untuk memberikan anotasi atau coretan ide pada sebuah dokumen.</p>

            <h2>4. Fleksibilitas Ekosistem OS (Android & Windows)</h2>
            <p>Pastikan IFP memiliki OS internal (biasanya OS Android bawaan) yang stabil dan intuitif agar dapat digunakan secara mandiri (standalone) tanpa perlu menghubungkan laptop. Jika perusahaan Anda sangat bergantung pada ekosistem Microsoft, maka keberadaan <strong>Slot Modul OPS</strong> untuk PC Windows sangatlah krusial agar IFP dapat disulap menjadi PC raksasa bertenaga tinggi dalam hitungan detik.</p>
        `
    },
    {
        filename: 'artikel-kolaborasi-tim.html',
        title: 'Tingkatkan Kolaborasi Tim dengan Panel Pintar',
        badge: 'Perusahaan',
        image: 'img/blog2.webp',
        content: `
            <p>Metode rapat konvensional yang menggunakan spidol, papan tulis fisik, dan proyektor lambat kini mulai ditinggalkan oleh perusahaan-perusahaan bervisi modern. Beralih ke <strong>Panel Pintar (Smart Panel)</strong> bukan sekadar tentang estetika, namun tentang efisiensi waktu, produktivitas, serta kecepatan tim dalam berinovasi.</p>

            <h2>Brainstorming Tanpa Batas</h2>
            <p>Papan tulis digital (Whiteboard) cerdas di dalam IFP memberikan sensasi menulis seperti pada kanvas fisik namun dengan segudang kelebihan. Anda bisa menambahkan ribuan halaman tanpa menghapus halaman sebelumnya, melampirkan gambar, PDF, hingga model 3D di tengah-tengah coretan. Setelah selesai, rapat tidak lagi diakhiri dengan ritual mengambil foto di HP—seluruh hasil coretan dapat langsung dikirim ke seluruh anggota tim via <em>QR Code</em> atau Email hanya dengan satu klik.</p>

            <h2>Presentasi Nirkabel (Wireless Casting)</h2>
            <p>Singkirkan kabel kusut dan dongle yang merepotkan. Dengan fitur <em>Wireless Screen Sharing</em>, peserta rapat bisa membagikan tampilan layar dari laptop (Windows/Mac) atau bahkan ponsel pintar (iOS/Android) mereka langsung ke IFP, bahkan hingga 4 sampai 9 layar secara bersamaan untuk perbandingan data yang lebih komprehensif.</p>

            <h2>Video Konferensi Kelas Profesional</h2>
            <p>Berkat mikrofon <em>array</em> pintar dengan peredam bising otomatis dan kamera 4K yang terpasang, interaksi jarak jauh via Zoom, Google Meet, atau Microsoft Teams kini terasa sangat natural seolah anggota tim saling bertatap muka dalam satu ruangan.</p>
        `
    },
    {
        filename: 'artikel-ruang-kelas.html',
        title: 'Masa Depan Ruang Kelas Interaktif Digital',
        badge: 'Pendidikan',
        image: 'img/blog3.webp',
        content: `
            <p>Generasi Z dan Alpha adalah generasi "Digital Natives" yang terlahir berdampingan dengan layar interaktif cerdas. Metode pembelajaran searah dengan mencatat di papan kapur tidak lagi mampu mempertahankan fokus dan atensi siswa secara optimal. Transisi menuju panel interaktif digital adalah masa depan yang tak bisa ditolak.</p>

            <h2>Pembelajaran yang Sangat Imersif</h2>
            <p>Alih-alih mendengarkan narasi monoton, siswa dapat berinteraksi langsung dengan model tata surya 3D, menyaksikan eksperimen fisika/kimia bersimulasi, atau membedah anatomi biologi langsung dari layar sentuh dengan jari-jemari mereka sendiri. Interaksi kinestetik ini terbukti ampuh dalam memperkuat ingatan otot serta mengasah rasa keingintahuan alami anak-anak.</p>

            <h2>Akses Materi yang Tak Terbatas</h2>
            <p>Berkat integrasi langsung dengan browser dan penyimpanan cloud, guru memiliki perpustakaan sumber daya dunia dalam genggaman. Menyisipkan video YouTube edukasi secara instan, menarik data referensi sejarah, hingga melakukan kuis trivia digital yang seru bersama murid via Kahoot, semuanya berjalan terintegrasi dalam satu layar besar.</p>

            <h2>Membangun Kepercayaan Diri Siswa</h2>
            <p>Pengalaman maju ke depan kelas tidak lagi terasa mengintimidasi melainkan layaknya bermain sebuah game interaktif. IFP memungkinkan lebih dari sekadar satu siswa untuk berpartisipasi dan mengerjakan pemecahan masalah (problem solving) bersama secara bersamaan di layar panel yang besar, membangun rasa kebersamaan (teamwork) yang sehat sejak dini.</p>
        `
    }
];

articles.forEach(article => {
    const html = createPageTemplate(article.title, article.badge, article.image, article.content);
    fs.writeFileSync(path.join(dir, article.filename), html);
    console.log('Generated ' + article.filename);
});

let blogContent = fs.readFileSync(path.join(dir, 'blog.html'), 'utf8');

blogContent = blogContent.replace(/<h3 class="font-cabinet fw-bold fs-3 mb-3">Cara Memilih Panel Datar Interaktif yang Tepat<\/h3>[\s\S]*?<a href="#"/m, 
    match => match.replace('href="#"', 'href="artikel-memilih-panel.html"'));

blogContent = blogContent.replace(/<h3 class="font-cabinet fw-bold fs-3 mb-3">Tingkatkan Kolaborasi Tim dengan Panel Pintar<\/h3>[\s\S]*?<a href="#"/m, 
    match => match.replace('href="#"', 'href="artikel-kolaborasi-tim.html"'));

blogContent = blogContent.replace(/<h3 class="font-cabinet fw-bold fs-3 mb-3">Masa Depan Ruang Kelas Interaktif Digital<\/h3>[\s\S]*?<a href="#"/m, 
    match => match.replace('href="#"', 'href="artikel-ruang-kelas.html"'));

fs.writeFileSync(path.join(dir, 'blog.html'), blogContent);
console.log('Updated links in blog.html');
