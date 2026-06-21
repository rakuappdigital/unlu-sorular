export type Category =
  | "Müzik"
  | "Oyunculuk"
  | "Aşk & İlişki"
  | "Hayat"
  | "Şöhret"
  | "Sözlük Sorusu"
  | "Komik"
  | "Galatasaray"
  | "Sosyal Medya"
  | "Motosiklet"
  | "Magazin";

export const ALL_CATEGORIES: Category[] = [
  "Müzik", "Oyunculuk", "Aşk & İlişki", "Hayat", "Şöhret",
  "Sözlük Sorusu", "Komik", "Galatasaray", "Sosyal Medya",
  "Motosiklet", "Magazin",
];

export const CATEGORY_COLORS: Record<Category, string> = {
  Müzik: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  Oyunculuk: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  "Aşk & İlişki": "bg-pink-500/10 text-pink-300 border-pink-500/30",
  Hayat: "bg-green-500/10 text-green-300 border-green-500/30",
  Şöhret: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
  "Sözlük Sorusu": "bg-orange-500/10 text-orange-300 border-orange-500/30",
  Komik: "bg-red-500/10 text-red-300 border-red-500/30",
  Galatasaray: "bg-red-600/15 text-red-200 border-red-500/40",
  "Sosyal Medya": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  Motosiklet: "bg-stone-500/10 text-stone-300 border-stone-500/30",
  Magazin: "bg-violet-500/10 text-violet-300 border-violet-500/30",
};

export const CATEGORY_EMOJIS: Record<Category, string> = {
  Müzik: "🎵", Oyunculuk: "🎬", "Aşk & İlişki": "💘", Hayat: "🌿",
  Şöhret: "✨", "Sözlük Sorusu": "📖", Komik: "😂", Galatasaray: "🔴🟡",
  "Sosyal Medya": "📱", Motosiklet: "🏍️", Magazin: "🎭",
};

export interface Question {
  id: number;
  text: string;
  category: Category;
  emoji: string;
  author: string;
}

export interface OnedioQuestion {
  id: number;
  text: string;
  type: "positive" | "negative";
}

// ─── PERSONA ──────────────────────────────────────────────────────
export const PERSONA = {
  name: "Krant The Band",
  tagline: "2026 kuruldu. Hâlâ yapılıyor. Kulaklığını tak.",
  description: "Yolda, evde, arabada ya da sıkıcı bir partide orada olmaya çalışan bir müzik.",
  songs: [
    { title: "Dönme Dolap", album: "Son Disko", note: '"Esirim sanki, sebebim baki." Neyin esiri?' },
    { title: "Kirpik", album: "Son Disko", note: '"Korkusuz ve plansız." Bu işin cahili.' },
    { title: "Bi Şekilde", album: "Son Disko", note: '"Ha elimde ha ilerde bi şekilde." Timsah da var.' },
    { title: "Ne Fark Eder?", album: "Son Disko", note: '"Bazen susardık da çok iyi kotardık."' },
    { title: "Yap Boz", album: "Aklımın Bucakları", note: '"Şarkılarımı hep sana yazıp." O biliyor mu?' },
    { title: "Çözemedim", album: "Aklımın Bucakları", note: '"Aptal mı korkak mı?" İkisi de değil deme.' },
    { title: "Aya Gidelim", album: "Aya Gidelim", note: '"Kavga edelim, sonunu bilmeyelim." Plana dahil.' },
    { title: "Aklımın Bucaklarında", album: "Aklımın Bucakları", note: '"Sabah kahven sohbetimsin."' },
  ],
  projects: [
    {
      title: "Her Şey Çok Güzel Olacak 2",
      type: "Film",
      role: "Yan Rol",
      note: "Cem Yılmaz filmi. Kamera kapanınca kim güldü?",
    },
    {
      title: "Kuyu",
      type: "Film (Dram)",
      role: "Ortak Başrol",
      note: "Haluk Bilginer ile. İsim bile ağır.",
    },
    {
      title: "Biz de Ünlüydük!",
      type: "Dizi (Dijital Platform)",
      role: "Tarık",
      note: "90'lı yılların kaybolan sunucusu. Sezon finalinde izleyici karakterlerin kadın olduğunu anlıyor. Bechdel testini doğal yoldan geçen ender Türk yapımı.",
    },
  ],
  funFacts: [
    '"Kirli bi tavan, az hava çok duman" — Dönme Dolap gerçek bir mekânda mı yazıldı?',
    '"Timsah gibi bi şey bu elin oğlu" — Bi Şekilde\'nin en absürd satırı.',
    'Biz de Ünlüydük! setinde karakterlerin kadın olduğunu sadece ekip biliyordu. İzleyici sezon finaliyle öğrendi.',
    'Her Şey Çok Güzel Olacak 2\'de Cem Yılmaz\'la aynı karedeydin.',
  ],
};

// ─── ANA QUIZ SORULARI ────────────────────────────────────────────
export const QUESTIONS: Question[] = [

  // ── DÖNME DOLAP ────────────────────────────────────────────────
  {
    id: 1, category: "Müzik", emoji: "🎡",
    author: "trenin son vagonunda giden",
    text: "Dönme Dolap'ı dinleyince o döngü hâlâ devam ediyormuş gibi hissettiriyor. Gerçekten bitti mi?",
  },
  {
    id: 2, category: "Müzik", emoji: "⛓️",
    author: "sinyal bekleyen",
    text: "Neyin esirisin, biliyor musun? Şarkıda hiç cevap vermedin.",
  },
  {
    id: 3, category: "Komik", emoji: "🍺",
    author: "ekmeği her zaman fazla yiyen",
    text: "Şarkı birayla açılıyor. Gerçekten o an bira içiyor muydun yoksa onu mu koydun çünkü güzel durdu?",
  },
  {
    id: 4, category: "Müzik", emoji: "💿",
    author: "sinemada hep ön sıraya geçen",
    text: "'Bu iş böyledir' deyip kapatan bir satır bu. O an ne kabulleniyordun?",
  },
  {
    id: 5, category: "Müzik", emoji: "🚬",
    author: "şemsiyesini evde unutan",
    text: "'Kirli bi tavan, az hava çok duman' — bu gerçek bir yerin tasviri mi? Hâlâ var mı o yer?",
  },
  {
    id: 6, category: "Komik", emoji: "🤡",
    author: "not defterini doldurup yeni alan",
    text: "'Sersefilin biri' diyorsun. Bunu bir aynaya bakarak mı yazdın, yoksa birine mi söyledin ve bu şarkı o kişinin cevabı mı?",
  },

  // ── KİRPİK ─────────────────────────────────────────────────────
  {
    id: 7, category: "Aşk & İlişki", emoji: "💘",
    author: "telefonu şarj etmeyi unutan",
    text: "Kirpik'te 'bu nasıl bi soygun' diyorsun. Soygundan şikayetçi misin, yoksa aslında hoşuna mı gitti?",
  },
  {
    id: 8, category: "Müzik", emoji: "🎵",
    author: "yanlış durakta inen",
    text: "'Bu işin cahili benim' diyorsun, plansız ve korkusuz. Bu tutum işe yaradı mı o kez?",
  },
  {
    id: 9, category: "Aşk & İlişki", emoji: "⏳",
    author: "çayını şekersiz içen",
    text: "'Beklemenin ne faydası var, söyle bileyim' — söyledi mi? Cevap geldi mi?",
  },
  {
    id: 10, category: "Aşk & İlişki", emoji: "❄️",
    author: "her şeyi mavi kalemle yazan",
    text: "Zemheri kelimesini seçmek büyük bir karardfı. O gidiş gerçekten o kadar soğuk muydu?",
  },
  {
    id: 11, category: "Müzik", emoji: "🎶",
    author: "kapı zilini duymayan",
    text: "Kirpik'teki dişi backing vocals şarkıyı başka bir boyuta taşıyor — onsuz hayal edemiyorum artık. O ses kimin ve bu kararı nasıl aldınız?",
  },

  // ── Bİ ŞEKİLDE ─────────────────────────────────────────────────
  {
    id: 12, category: "Müzik", emoji: "🍂",
    author: "kahvesini soğutup içen",
    text: "'Bi zamanda, bi mekanda, sonbaharda / belki şubatta' — neden hep bu en kasvetli aylar? Hiç bir şarkında yaz ya da ilkbahar var mı?",
  },
  {
    id: 13, category: "Komik", emoji: "🐊",
    author: "arka koltuğa oturan",
    text: "'Gel bana yoksa kaparlar bak timsah gibi bi şey bu elin oğlu' — bu satır gerçekten bir aşk şarkısının içinde. Bunu yazan adam o an neyin kafasındaydı?",
  },
  {
    id: 14, category: "Hayat", emoji: "🔮",
    author: "pencere kenarında uyuyan",
    text: "'Ha elimde ha ilerde bi şekilde' — bu benim için çok şey ifade eden bir satır. Gerçekten oldu mu o bi şekilde? Şarkı kehanet mi çıktı?",
  },
  {
    id: 15, category: "Müzik", emoji: "🎹",
    author: "son dilimi yiyen",
    text: "Bi Şekilde'de elektro bağlama ve gitar birbirine cevap veriyor — bu fikir çok organik hissettiriyor. Kim buldu ve ilk duyduğunda ne düşündün?",
  },

  // ── ÇÖZEMEDİM ──────────────────────────────────────────────────
  {
    id: 16, category: "Hayat", emoji: "🧩",
    author: "yağmurda şemsiye açmayan",
    text: "'Aptal mıyım, korkak mıyım' diye soruyorsun. Bunların dışında üçüncü bir ihtimal var mı?",
  },
  {
    id: 17, category: "Aşk & İlişki", emoji: "📄",
    author: "en uzun yoldan giden",
    text: "Sayfaları koparmayıp sakladın gelir diye. Geldi mi?",
  },
  {
    id: 18, category: "Aşk & İlişki", emoji: "🏃",
    author: "radyoyu kapatmayan",
    text: "Kaçarken kaçırdığını ne zaman anladın? O an mı, yoksa çok sonra mı?",
  },
  {
    id: 19, category: "Hayat", emoji: "🚶",
    author: "uyumadan önce kitap okuyan",
    text: "'Şu kaldırımlar, o sokaklar, bu yasaklar' — bu şarkıda şehir çok somut. Hangi şehrin sokaklarıydı bu?",
  },

  // ── YAP BOZ ────────────────────────────────────────────────────
  {
    id: 20, category: "Aşk & İlişki", emoji: "🧩",
    author: "asansörü bekleyemeyen",
    text: "Yap Boz'daki o kişi şarkıyı duydu mu ve tepkisi ne oldu?",
  },
  {
    id: 21, category: "Müzik", emoji: "🎵",
    author: "haritasız yolculuk yapan",
    text: "Bu şarkıyla birlikte o kişi için kaçıncı oldu? Bir sonu var mı bunun?",
  },
  {
    id: 22, category: "Aşk & İlişki", emoji: "🌧️",
    author: "şarkıyı yanlış bilen",
    text: "Koşarken yorulduğunu söylüyorsun. Gerçekten duraksadın mı hiç?",
  },
  {
    id: 23, category: "Aşk & İlişki", emoji: "💔",
    author: "menüden en son seçen",
    text: "'Dostlara küstüm, çok kavga ettim' — bir ilişki için bu bedeli ödemek pişmanlık mı yaratıyor, yoksa 'gerekti' mi hissediyorsun?",
  },

  // ── NE FARK EDER? ───────────────────────────────────────────────
  {
    id: 24, category: "Müzik", emoji: "🎸",
    author: "restoranda hep aynı yere oturan",
    text: "Ne Fark Eder heavy delay ve uzun sustain ile açılıyor — o gece atmosferi o kadar sarıyor ki seyirciye de geçiyor. Bu kasıtlı mı kuruldu?",
  },
  {
    id: 25, category: "Aşk & İlişki", emoji: "🤐",
    author: "sinemanın kapanışında çıkan",
    text: "'Bazen susardık da çok iyi kotardık' — o sessizlikte ne vardı?",
  },
  {
    id: 26, category: "Hayat", emoji: "🔑",
    author: "çöpü unutup geri dönen",
    text: "'Güzel günler mazide saklı ve kitli / ne ani!' — 'ne ani' kısmı nefes kesiyor. O kapıyı kim kitledi, sen mi yoksa zaman mı?",
  },
  {
    id: 27, category: "Aşk & İlişki", emoji: "❓",
    author: "sinyalini geç veren",
    text: "'Tutarlı tutarsız ne fark eder artık?' — bu soruyu sormak zaten bir cevap. Ama gerçekten fark etmiyor mu sence?",
  },
  {
    id: 28, category: "Müzik", emoji: "🌍",
    author: "hesabı başkası ödeyen",
    text: "'Milyarcası orda biz hep baş başa kaldık' — bu satırda milyarcası kim ya da neydi? Dünya mı, insanlar mı, fırsatlar mı?",
  },

  // ── AYA GİDELİM ────────────────────────────────────────────────
  {
    id: 29, category: "Müzik", emoji: "🌙",
    author: "konuşmayı yarıda bırakan",
    text: "Kavgayı plana koydun. Kavgasız bir ilişkiden şüphe eder misin?",
  },
  {
    id: 30, category: "Aşk & İlişki", emoji: "⚗️",
    author: "sorunun cevabını bilen",
    text: "'Kimyamızı bozan aşk apansızın' — kimyayı sen mi bozdun, o mu bozdu, yoksa aşkın kendisi mi? Karar verdiremiyor bu satır.",
  },
  {
    id: 31, category: "Müzik", emoji: "🪘",
    author: "otobüste yer bulan",
    text: "Modern kanun ve 80'ler retro synth yan yana duruyor Aya Gidelim'de — bu kombinasyonu duyunca 'nasıl aklına geldi bunu' dedim. Kim buldu?",
  },
  {
    id: 32, category: "Aşk & İlişki", emoji: "🚀",
    author: "tartışmada haklı çıkmayı seven",
    text: "'İmkansızın peşine düşen arsızım' — bu kariyer mi, aşk mı, yoksa genel bir kişilik özelliği mi? Kaç kez düştün imkânsızın peşine?",
  },
  {
    id: 33, category: "Aşk & İlişki", emoji: "🤝",
    author: "yabancı şehirde kaybolmayan",
    text: "'Bile bile düşebiliriz, kalkarız ikimiz' diyorsun. Kalktınız mı?",
  },
  {
    id: 34, category: "Komik", emoji: "🏊",
    author: "bagajsız seyahat eden",
    text: "'Bi ara gölde yüzelim sonra kavga edelim' — iki versiyonda 'çöl' ve 'göl' var. Hangisi orijinal? Bu önemli.",
  },

  // ── AKLIMIN BUCAKLARINDA ────────────────────────────────────────
  {
    id: 35, category: "Aşk & İlişki", emoji: "☕",
    author: "köprüden yavaş geçen",
    text: "'Sabah içtiğim kahve sohbetimsin' — bu benim için çok büyük bir şey. O kişiyle gerçekten sabah kahvesi içildi mi hiç?",
  },
  {
    id: 36, category: "Müzik", emoji: "🏠",
    author: "lokantada iki porsiyon isteyen",
    text: "'Senin olduğun yerler hayallerimdir / evimdir' — bir mekân gerçekten eve dönüştü mü birisinin varlığıyla? Bu metafor mu yoksa gerçek bir his mi?",
  },
  {
    id: 37, category: "Hayat", emoji: "🎯",
    author: "finali atlayan",
    text: "'Bu benim diyorum' — spoken word olarak söylemek çok güçlü. O kararı ne zaman aldın ve geri aldın mı?",
  },
  {
    id: 38, category: "Müzik", emoji: "🔥",
    author: "kartpostal gönderen",
    text: "'Ki yaşadım felaketinle' — birinin yanında felaketi yaşamak ile yalnız yaşamak arasında gerçekten fark var mı sence?",
  },
  {
    id: 39, category: "Komik", emoji: "🗺️",
    author: "fotoğraf yerine bakmayı seçen",
    text: "'Aklımın bucaklarında' — kaç tane bucak var bu aklında ve birine saklamak için mi kullanıyorsun onu?",
  },

  // ── GENEL MÜZİK ────────────────────────────────────────────────
  {
    id: 40, category: "Müzik", emoji: "🔊",
    author: "şehrin kenarında yaşayan",
    text: "Aynı yıl üç albüm çıkardın. Bunlar gerçekten farklı dönemler mi yoksa aynı dalga mıydı?",
  },
  {
    id: 41, category: "Müzik", emoji: "🎙️",
    author: "eski fotoğraflara bakan",
    text: "Krant'ın bio'su 'hâlâ yapılıyor' diyor. Bu alçakgönüllülük mü, gerçek bir his mi, yoksa 'eleştirme henüz bitmedi' şeklinde bir savunma mı?",
  },
  {
    id: 42, category: "Müzik", emoji: "🌊",
    author: "ekranda uyuya kalan",
    text: "Şarkıların çoğu belirsizlikle bitiyor — çözemedim, ne fark eder, bi şekilde. Kapanış yazmak neden bu kadar zor? Yoksa kasıtlı mı?",
  },
  {
    id: 43, category: "Hayat", emoji: "🪞",
    author: "notları bitmemiş bırakan",
    text: "Bu sekiz şarkıyı birden dinleyince hangi birinden kaçmak istiyorsun? Yani hangi soru rahatsız ediyor en çok?",
  },

  // ── OYUNCULUK — BİZ DE ÜNLÜYDÜK! ──────────────────────────────
  {
    id: 44, category: "Oyunculuk", emoji: "📺",
    author: "söz verip unutan",
    text: "Biz de Ünlüydük!'ün sezon finalinde izleyici Tarık'ın — ve diğer karakterlerin — kadın olduğunu öğreniyor. Sen bunu çekerken biliyordun. Bu iki gerçekliği aynı anda nasıl taşıdın?",
  },
  {
    id: 45, category: "Oyunculuk", emoji: "♀️",
    author: "geç özür dileyen",
    text: "Biz de Ünlüydük! Bechdel testini doğal yoldan geçen ender Türk yapımlarından. Bu bir manifesto muydu, yoksa hikaye öyle akıp gitti mi?",
  },
  {
    id: 46, category: "Oyunculuk", emoji: "🎭",
    author: "hediyeyi son güne bırakan",
    text: "Dizi özellikle sektördeki kadınlar için çok şey ifade etti. Bunu sette hissettiniz mi, yoksa yayına çıkınca mı anladınız ne yaptığınızı?",
  },
  {
    id: 47, category: "Oyunculuk", emoji: "📺",
    author: "randevuyu şaşıran",
    text: "Tarık sana ne kadar yakın bir karakter? Hiç tanıdık geldi mi?",
  },
  {
    id: 48, category: "Oyunculuk", emoji: "🎬",
    author: "sesi kapatmayı unutan",
    text: "Nuri peltek konuşan, aşırı pozitif, saf bir karakter — ama aslında kadın. Bu kontrast kasıtlıydı, öyle değil mi? Hangi stereotipi kırıyordunuz?",
  },
  {
    id: 49, category: "Oyunculuk", emoji: "🌟",
    author: "doğum gününü atlayan",
    text: "Twist ortaya çıkınca izleyici ilk sezonu yeniden izleyip farklı şeyler görüyor. Bunu bilerek mi çektiniz bazı sahneleri?",
  },
  {
    id: 50, category: "Oyunculuk", emoji: "📺",
    author: "toplantıyı unutup gelen",
    text: "Rana oyuncu olmak ister ama sekreter olmuş. Yine de her ortamda ilgi odağı olmak ister. Bu karakter sana tanıdık geldi mi, ya da tanıdığın biri mi var böyle?",
  },
  {
    id: 51, category: "Komik", emoji: "😂",
    author: "parçayı yarıda bırakan",
    text: "Bakkal Sami pasif agresif biri — bu karakter sahnelerde ne kadar büyüdü? Seni en çok o mu yordu yoksa Kudret'in anlamsız sohbetleri mi?",
  },
  {
    id: 52, category: "Oyunculuk", emoji: "🎭",
    author: "sezon finalinde uyuyan",
    text: "Biz de Ünlüydük!'ün deneysel yanı hem formatta hem içerikte belli. Bu riski almak nasıl bir karardı? Tereddüt etti mi ekip?",
  },

  // ── OYUNCULUK — HER ŞEY ÇOK GÜZEL OLACAK 2 + KUYU ────────────
  {
    id: 53, category: "Oyunculuk", emoji: "😂",
    author: "kanalı sürekli değiştiren",
    text: "Her Şey Çok Güzel Olacak 2 setinde Cem Yılmaz varken kamera açık olan ve olmayan hallerin ikisi de var. Hangisinde daha zor konsantre oldun?",
  },
  {
    id: 54, category: "Oyunculuk", emoji: "🕳️",
    author: "filmi ortasından başlayan",
    text: "Haluk Bilginer ile Kuyu'da sahne yapıyorsun. O sahneye hazırlanırken ne düşündün, ne hissettin? Gerçekten hazır mıydın?",
  },
  {
    id: 55, category: "Oyunculuk", emoji: "🌑",
    author: "yorumları okuyan",
    text: "Kuyu'nun draması ile Cem Yılmaz'ın komedisi arasında geçiş yaptın. Hangisi daha zor? İkisi de kendine göre mü, yoksa biri gerçekten daha ağır mı?",
  },

  // ── FELSEFE & HAYAT ─────────────────────────────────────────────
  {
    id: 56, category: "Hayat", emoji: "💭",
    author: "bildirimi kapatan",
    text: "'Bi şekilde olur' mu gerçekten? Bu bir iyimserlik mi yoksa sorumluluktan kaçmak mı?",
  },
  {
    id: 57, category: "Hayat", emoji: "🌙",
    author: "her yere geç kalan",
    text: "Şarkılarında sonbahar, şubat, zemheri var. Hiç yaz yoktur, ilkbahar yoktur. Bu hayatındaki bir şeyi mi yansıtıyor?",
  },
  {
    id: 58, category: "Hayat", emoji: "🔇",
    author: "son treni kaçıran",
    text: "Müzik yapmak seni çözüyor mu yoksa çözmediğin yere daha derinden mi sokuyor? İkisi de aynı anda olabilir mi?",
  },
  {
    id: 59, category: "Hayat", emoji: "🧠",
    author: "biletini kaybeden",
    text: "'Ne fark eder artık' — bu özgürlük mü teslim mi? Bence ikisi de aynı kapıya çıkıyor ama sen ne düşünüyorsun?",
  },
  {
    id: 60, category: "Hayat", emoji: "🌅",
    author: "uçuşu karıştıran",
    text: "Konuşmak yerine şarkı yazıyorsun. Bu bir seçim mi yoksa bir zorunluluk mu? Bir şeyi direkt söyleyemeyen biri misin?",
  },
  {
    id: 61, category: "Hayat", emoji: "🪐",
    author: "kapıya en son yetişen",
    text: "'Hâlâ yapılıyorum' deseydin kendin hakkında — hangi parçan eksik? Bunun cevabını gerçekten biliyor musun?",
  },

  // ── AŞK & İLİŞKİ (genel) ───────────────────────────────────────
  {
    id: 62, category: "Aşk & İlişki", emoji: "📝",
    author: "bavulunu en geç alan",
    text: "Bu kadar şarkı var. Hepsi aynı kişi için mi? Dürüst ol.",
  },
  {
    id: 63, category: "Aşk & İlişki", emoji: "💬",
    author: "tur rehberinden kopan",
    text: "Şarkılarında hiç doğrudan 'seni seviyorum' demiyorsun. Bu bir edebî karar mı, yoksa o kelimeyi söylemekte gerçekten zorlanıyor musun?",
  },
  {
    id: 64, category: "Aşk & İlişki", emoji: "🔥",
    author: "otel odasını yanlış anlayan",
    text: "'Korkusuz ve plansız' hissi ne kadar sürdü? Çünkü şarkıların geri kalanında o his yok.",
  },
  {
    id: 65, category: "Aşk & İlişki", emoji: "📱",
    author: "dövizini çarptıran",
    text: "Bir ilişki bitmeden şarkı mı yazıyorsun, bittikten mi? Bu zamanlamayı sen seçiyor musun yoksa şarkı kendi kendine mi geliyor?",
  },
  {
    id: 66, category: "Aşk & İlişki", emoji: "💔",
    author: "dönüş biletini almayan",
    text: "Geçmişte pişman olduğun bir şey var mı? Spesifik bir şey, 'her şey' değil.",
  },
  {
    id: 67, category: "Aşk & İlişki", emoji: "🤍",
    author: "treni son saniye yakalayan",
    text: "Seni seven biri müziğini hiç anlamasa bu sorun olur mu? Ya da tam tersine, sadece şarkıların için seven biri?",
  },

  // ── MOTOSİKLET ──────────────────────────────────────────────────
  {
    id: 68, category: "Motosiklet", emoji: "🏍️",
    author: "uyuyakalan yolcu",
    text: "Uzun yola çıkmadan önce hangi şarkıyı açıyorsun? Krant'tan mı, başka bir şeyden mi — yoksa tamamen sessiz mi gidiyorsun?",
  },
  {
    id: 69, category: "Motosiklet", emoji: "🛣️",
    author: "istasyonda bırakılan",
    text: "Motosikletle giderken şarkı fikirleri geliyor mu, yoksa o an sadece yol var mı? Müzikten kaçmak için mi biniyorsun?",
  },
  {
    id: 70, category: "Motosiklet", emoji: "🌄",
    author: "vagonun en önünde oturan",
    text: "En uzun gittiğin rota nereye kadardı? Ve tek başına mıydın? Birini bırakıp gittiğin oldu mu?",
  },
  {
    id: 71, category: "Motosiklet", emoji: "🌧️",
    author: "geceleri yürüyüşe çıkan",
    text: "Yağmurda motosikletle gitmek — macera mı, hata mı? Karar verdin mi henüz?",
  },
  {
    id: 72, category: "Motosiklet", emoji: "💨",
    author: "sabah gazete okuyan",
    text: "Motosiklet mi müzik mi — gerçekten birini bırakmak zorunda kalsaydın? Cevabı düşünmeden ver.",
  },
  {
    id: 73, category: "Motosiklet", emoji: "🏍️",
    author: "kaldırımda yavaş yürüyen",
    text: "Yolda en çok ne düşünüyorsun? 'Hiçbir şey' geçerli değil, öyle bir şey yok.",
  },
  {
    id: 74, category: "Komik", emoji: "😅",
    author: "taksi beklerken yağmura yakalanan",
    text: "Motosikletle gittiğin en kötü rotayı anlat. Dönerken ne düşündün — ve bir daha yaptın mı aynı hatayı?",
  },

  // ── GALATASARAY ──────────────────────────────────────────────────
  {
    id: 75, category: "Galatasaray", emoji: "🔴🟡",
    author: "şemsiyesiz çıkan",
    text: "Galatasaray kaybettiği bir akşam stüdyodaydın — o gece ne çıktı ortaya? Yenilginin şarkıya etkisi var mı?",
  },
  {
    id: 76, category: "Galatasaray", emoji: "⚽",
    author: "kapıyı arkada açık bırakan",
    text: "Şampiyonluk gecesi için hangi Krant şarkısı o anı en iyi anlatır? Seç, açıkla.",
  },
  {
    id: 77, category: "Galatasaray", emoji: "😤",
    author: "ışığı söndürmeyen",
    text: "Hakem kararından sonra atmak isteyip sildiğin tweet ne yazıyordu? Anlatabilirsin artık.",
  },
  {
    id: 78, category: "Galatasaray", emoji: "😭",
    author: "çıkarken geri dönen",
    text: "Galatasaray yüzünden ağladın mı? Cevap kesinlikle evet. Ama ne zaman, hangi maç?",
  },

  // ── MAGAZİN ──────────────────────────────────────────────────────
  {
    id: 79, category: "Magazin", emoji: "🎭",
    author: "mektup yazıp gönderemeyen",
    text: "Türkiye'de şu an müzikte seni gerçekten etkileyen kim? Klişe bir isim verme, gerçekten dinlediğin biri.",
  },
  {
    id: 80, category: "Magazin", emoji: "🤝",
    author: "gece yarısı yemek sipariş eden",
    text: "Hangi Türk sanatçıyla çalışmak isterdin? 'Herkesle' değil, bir isim. Ve o kişiyle ne yaparsınız?",
  },
  {
    id: 81, category: "Magazin", emoji: "🎬",
    author: "alarmı kapatıp uyuyan",
    text: "Hangi Türk yönetmenin filminde yer almak isterdin? Ve o filmde kim olmak isterdin?",
  },
  {
    id: 82, category: "Magazin", emoji: "🌍",
    author: "buzdolabını açıp kapatan",
    text: "Hollywood'dan ciddi bir teklif gelse kabul eder miydin? Koşulun ne olurdu?",
  },
  {
    id: 83, category: "Magazin", emoji: "🎤",
    author: "anahtarını her yere unutan",
    text: "Tarkan ya da Sezen Aksu'dan birini cover yapacak olsaydın hangi şarkı olurdu ve neden?",
  },
  {
    id: 84, category: "Magazin", emoji: "🎸",
    author: "şifreyi yanlış giren",
    text: "Hangi yabancı sanatçıyla sahne paylaşmak isterdin? Ve o sahnede ne olurdu?",
  },
  {
    id: 85, category: "Magazin", emoji: "💼",
    author: "köşe masasına oturan",
    text: "Cem Yılmaz 'yeni filmde başrol' dese ne yaparsın? Kabul etmek için ne gerekir?",
  },
  {
    id: 86, category: "Magazin", emoji: "🌟",
    author: "son otobüsü kaçıran",
    text: "Haluk Bilginer senden bir genç oyuncuya tavsiye istemeni istese ne söylerdin?",
  },

  // ── ŞÖHRET ──────────────────────────────────────────────────────
  {
    id: 87, category: "Şöhret", emoji: "👂",
    author: "fişi çekmeden uyuyan",
    text: "Şarkını yabancı biri ilk kez duyup 'bu gerçekten güzelmiş' dediğinde ne hissediyorsun? Mutluluk mu, rahatsızlık mı, ikisi aynı anda mı?",
  },
  {
    id: 88, category: "Şöhret", emoji: "📱",
    author: "kitabı yarıda bırakan",
    text: "Şarkını bir kafede rastgele duysaydın — açıklar mıydın kim olduğunu? Yoksa sessiz mi otururdun?",
  },
  {
    id: 89, category: "Şöhret", emoji: "✨",
    author: "soruyu en son soran",
    text: "Şarkılarını dinleyip 'bu benim hakkımda' diyen biri çıksa ve tamamen yanılıyor olsa — düzeltir misin, yoksa bırakır mısın?",
  },
  {
    id: 90, category: "Şöhret", emoji: "🚪",
    author: "toplantıda en az konuşan",
    text: "Ünlü olmak sana ne kapısını açtı, ne kapısını kapattı? Hangi kapı kaybıydı?",
  },

  // ── SÖZLÜK SORUSU — Ekşi Sözlük nickleri + yorum ──────────────
  {
    id: 91, category: "Sözlük Sorusu", emoji: "📖",
    author: "asansör butonuna iki kez basan",
    text: "'Bi şekilde' diyorsun ve bu benim için hem en rahatlatıcı hem de en korkutucu cümle. O bi şekil geldiğinde tanıyor musun onu?",
  },
  {
    id: 92, category: "Sözlük Sorusu", emoji: "📖",
    author: "merdivenden inip yorulan",
    text: "Dönme Dolap'ta 'bu iş böyledir' diyip kapatıyorsun — ama şarkı yapmış olmak, kapatmamış olmak değil mi?",
  },
  {
    id: 93, category: "Sözlük Sorusu", emoji: "📖",
    author: "kuyrukta yanlış sıraya giren",
    text: "'Çatlak bi plaktan gelen sesler gibi' — bu ses her zaman mı böyle miydi, yoksa bir şeyden sonra mı çatladı?",
  },
  {
    id: 94, category: "Sözlük Sorusu", emoji: "📖",
    author: "kafede en uzun oturan",
    text: "'Amalar yok ama amansız' — ama kelimesini kaldırdın ama amansızlığı bıraktın. Bu çelişkiyi nasıl taşıyorsun?",
  },
  {
    id: 95, category: "Sözlük Sorusu", emoji: "📖",
    author: "siparişi son anda değiştiren",
    text: "'Ne fark eder artık?' — bunu söylerken gerçekten inanıyorsun, yoksa söyleyince inanılan bir cümle mi bu?",
  },
  {
    id: 96, category: "Sözlük Sorusu", emoji: "📖",
    author: "garsonla dalga geçen",
    text: "'Aptal mıyım neyim çözemedim' — bu soruyu gerçekten soruyor musun, yoksa cevabı bildiğin için sormak çok daha güvenli mi?",
  },
  {
    id: 97, category: "Sözlük Sorusu", emoji: "📖",
    author: "hesabı bekleyen",
    text: "Aya Gidelim'de kavgayı plana koydun. Kavgasız bir ilişkiyi gerçek bulur musun? Yoksa kavga olmadan kimya var mı sence?",
  },
  {
    id: 98, category: "Sözlük Sorusu", emoji: "📖",
    author: "en son çıkan",
    text: "Kuyu'da Haluk Bilginer'le sahne yaparken o anda kim olduğunu bilmek zorunda mıydın, yoksa bilmemek daha mı iyiydi?",
  },
  {
    id: 99, category: "Sözlük Sorusu", emoji: "📖",
    author: "en geç uyuyan",
    text: "Cem Yılmaz'la çalışmak bir onay gibi hissettiriyor insana. Sende de öyle miydi, yoksa 'sadece bir iş' miydi?",
  },
  {
    id: 100, category: "Sözlük Sorusu", emoji: "📖",
    author: "sabah en erken kalkan",
    text: "Motosikletle uzun yola çıkınca 'dönmesem ne olur' diye düşündüğün oluyor mu? Bu korkutucu mu, yoksa hoş mu?",
  },
  {
    id: 101, category: "Sözlük Sorusu", emoji: "📖",
    author: "yağmuru pencereden izleyen",
    text: "'Milyarcası orda biz hep baş başa kaldık' — milyarcası görmezden gelmek kolay mı, yoksa onları görmemek için bir çaba mı gerekiyor?",
  },
  {
    id: 102, category: "Sözlük Sorusu", emoji: "📖",
    author: "balon kıran",
    text: "'Bu benim diyorum' — öncesinde başkasının mıydın? Bu sahiplenme nereden geldi?",
  },
  {
    id: 103, category: "Sözlük Sorusu", emoji: "📖",
    author: "güz yapraklarını saklayan",
    text: "Tanışmak istedim ama şarkıların beni yeterince tanıştırdı. Bu seni rahatlatıyor mu yoksa ürkütüyor mu?",
  },
  {
    id: 104, category: "Sözlük Sorusu", emoji: "📖",
    author: "kışın üşümeyi seven",
    text: "'Ne Fark Eder' şarkısını yazarken 'gerçekten fark etmez' diye inanıyor muydun, yoksa o kadar fark ettiği için mi yazdın?",
  },
  {
    id: 105, category: "Sözlük Sorusu", emoji: "📖",
    author: "kapıyı çalmadan giren",
    text: "Motosikletle yolda giderken müzikten mi kaçıyorsun, müziğe mi gidiyorsun? İkisi de aynı şey mi?",
  },
  {
    id: 106, category: "Sözlük Sorusu", emoji: "📖",
    author: "hep pencere kenarına oturan",
    text: "Biz de Ünlüydük!'teki o twist — sezon boyunca izleyicide hiç şüphe uyandı mı, yoksa final gelince gerçekten şok mı yaşandı?",
  },
  {
    id: 107, category: "Sözlük Sorusu", emoji: "📖",
    author: "çantasında ne olduğunu bilmeyen",
    text: "Galatasaray kaybedince şarkı yazıyor musun, yoksa o gece hiçbir şey yapamıyor musun?",
  },

  // ── SOSYAL MEDYA ────────────────────────────────────────────────
  {
    id: 108, category: "Sosyal Medya", emoji: "📸",
    author: "algoritmayı anlayan biri",
    text: "Şarkını birinin hikayesinde gördüğünde ne hissediyorsun — mutluluk mu, garip bir his mi, yoksa 'bunu böyle yaymamalıydım' diye düşünüyor musun?",
  },
  {
    id: 109, category: "Sosyal Medya", emoji: "💬",
    author: "ilk mesajı hatırlayan",
    text: "Krant için gelen ilk anlamlı DM'i hatırlıyor musun? Ne yazıyordu ve ne hissettin?",
  },
  {
    id: 110, category: "Sosyal Medya", emoji: "🗑️",
    author: "silmeden önce düşünen",
    text: "Paylaşmadan önce sildiğin en güçlü içerik ne? Ve neden sildin, pişman mısın?",
  },
  {
    id: 111, category: "Sosyal Medya", emoji: "🌐",
    author: "platformsuz dünyayı hayal eden",
    text: "Sosyal medya olmasa Krant bugün var olur muydu? Dürüst cevap.",
  },

  // ── GÜNLÜK HAYAT & KİŞİLİK ─────────────────────────────────────
  {
    id: 112, category: "Hayat", emoji: "🌅",
    author: "yataktan zor kalkan",
    text: "Sabah uyandığında ilk ne yapıyorsun? Telefona mı bakıyorsun, yoksa biraz öylece yatıyor musun?",
  },
  {
    id: 113, category: "Komik", emoji: "😐",
    author: "garip soruları seven",
    text: "Arkadaşların seni nasıl anlatıyor sence? 'O şöyle biridir' deseler ne söylerler?",
  },
  {
    id: 114, category: "Hayat", emoji: "🔄",
    author: "değişimi fark eden",
    text: "Son birkaç yılda sende en çok ne değişti? Fark ettin mi yoksa başkaları mı söyledi?",
  },
  {
    id: 115, category: "Aşk & İlişki", emoji: "💬",
    author: "çevre dolaşmayı bilen",
    text: "Birine yaklaşmak istediğinde ne yapıyorsun? Direkt mi gidiyorsun yoksa etrafı mı dolaşıyorsun?",
  },
  {
    id: 116, category: "Komik", emoji: "🙃",
    author: "yanlış yerde yanlış zamanda",
    text: "Tanındığın bir yerde biri seni tanıyıp 'söylesem garip olur' deyip uzaklaşsa — ne hissederdin?",
  },
  {
    id: 117, category: "Hayat", emoji: "🪫",
    author: "enerjisi biten biri",
    text: "Ne zaman gerçekten bitik hissediyorsun? Ve o an ne yapıyorsun?",
  },
  {
    id: 118, category: "Hayat", emoji: "⚡",
    author: "iyi ve kötüyü dengeleyen",
    text: "Şu an çok iyi gittiğini düşündüğün bir şeyle, berbat gittiğini düşündüğün bir şeyi söyle.",
  },
  {
    id: 119, category: "Komik", emoji: "🤔",
    author: "karar veremeyen",
    text: "Canının en çok çektiği yemek ne ama hiçbir zaman tam istediğin gibi çıkmıyor?",
  },
  {
    id: 120, category: "Hayat", emoji: "🗺️",
    author: "yanlış yerde hisseden",
    text: "Hayatında 'yanlış yerdeyim' dediğin oldu mu? Ne yaptın o an?",
  },
  {
    id: 121, category: "Magazin", emoji: "🎭",
    author: "başka biri olmayı deneyen",
    text: "Bir günlüğüne başka biri olsan kim olurdun? Ve o gün ne yapardın?",
  },
  {
    id: 122, category: "Aşk & İlişki", emoji: "😶",
    author: "lafı dolandıran",
    text: "Bir şeyi söylemek isteyip söyleyemediğin oldu mu son zamanlarda? O şeyle ne oldu?",
  },
  {
    id: 123, category: "Hayat", emoji: "🌙",
    author: "gece geç uyuyan",
    text: "Gece uykun gelmediğinde ne yapıyorsun? Telefona mı dalıyorsun, yoksa başka bir şey mi?",
  },
  {
    id: 124, category: "Komik", emoji: "😳",
    author: "utanma anını unutamayan",
    text: "Son zamanlarda yaşadığın en utanç verici an ne? Anlat, geçer.",
  },
  {
    id: 125, category: "Hayat", emoji: "👥",
    author: "kalabalıktan kaçan",
    text: "Kalabalık bir ortamda uzun süre kalmak seni yoruyor mu? Bundan nasıl çıkıyorsun?",
  },
  {
    id: 126, category: "Komik", emoji: "📵",
    author: "telefon bağımlısı olmayan",
    text: "Telefonunu kaybettin, tam 24 saat yok. Ne hissedersin, ne yaparsın?",
  },
  {
    id: 127, category: "Hayat", emoji: "🧳",
    author: "aniden gidebilen",
    text: "Şu an biri sana 'yarın bir haftaya gidiyoruz, hazır mısın' dese — gider miydin?",
  },
  {
    id: 128, category: "Aşk & İlişki", emoji: "🚪",
    author: "kapıyı açmayı bilen",
    text: "Birini hayatına sokmak ne kadar sürüyor senin için? Hızlı mısın, yavaş mısın?",
  },
  {
    id: 129, category: "Hayat", emoji: "💤",
    author: "uyku düzeni bozuk",
    text: "En iyi uyuduğun an ne zamandı? Ve en kötü uyuduğun dönem hangisiydi?",
  },
  {
    id: 130, category: "Komik", emoji: "🍽️",
    author: "yemek saatini kaçıran",
    text: "Boş bir günün olsa, sabahtan akşama kadar ne yaparsın? Planlanmamış, sadece ne gelirse.",
  },
];

// ─── ONEDİO SORULARI ──────────────────────────────────────────────
export const ONEDIO_QUESTIONS: OnedioQuestion[] = [
  // ✅ OLUMLU
  { id: 1, type: "positive", text: "Aya Gidelim'i ilk duyduğumda ağladım — kavga planlanmış olan kısmında. Bu beni çok şaşırttı. Ne hissediyorsun bunu duyunca?" },
  { id: 2, type: "positive", text: "Kuyu'daki performansın Haluk Bilginer'i gölgede bıraktı diyenler var — bunun farkında mısın ve bu seni tedirgin ediyor mu?" },
  { id: 3, type: "positive", text: "Dönme Dolap her sabah açıyor biri bunu. O kişi benim. Bu seni mutlu ediyor mu yoksa biraz ağır geliyor mu?" },
  { id: 4, type: "positive", text: "Her Şey Çok Güzel Olacak 2'de sahnen çok doğaldı. Öyle mi hissettiydin, yoksa dışarıdan mı öyle görünüyor?" },
  { id: 5, type: "positive", text: "Krant'ın 'hâlâ yapılıyor' demesi bu sektörde duyduğum en dürüst şey. Bunu nasıl aldın?" },
  { id: 6, type: "positive", text: "'Bu benim diyorum' satırından sonra ben de bir şeye sahip çıkabildim. Bunu sana söylemek istedim. Ne dersin?" },
  { id: 7, type: "positive", text: "Biz de Ünlüydük!'teki twist bana 'sektör kadınları nasıl görünmez kılıyor' sorusunu sordurdu. Bu etki kasıtlıydı değil mi?" },
  { id: 8, type: "positive", text: "Ne Fark Eder'de 'bazen susardık da çok iyi kotardık' — bu satır bende çok şey açıkladı. Sana da bir şeyi açıkladı mı?" },
  { id: 9, type: "positive", text: "Aklımın Bucakları albümünü tek oturuşta bitirdim, üçüncü dinleyişimde. Övgü mü bu, yoksa bir uyarı mı?" },
  { id: 10, type: "positive", text: "Hem oyuncu hem müzisyen olman sektörde rahatsızlık yaratıyor. Bu yüzden tam olarak seni takip ediyorum." },
  { id: 11, type: "positive", text: "Kirpik'teki gitar solosu beni her seferinde duraksatıyor. Bunu çalarken ne düşünüyordun?" },
  { id: 12, type: "positive", text: "Galatasaray ve müzik aynı insanda bu kadar güçlü yaşanabiliyormuş. Bu çelişki gibi görünüyor ama değil, öyle değil mi?" },
  { id: 13, type: "positive", text: "Şarkılarını dinleyince 'bunu ben de yazabilirdim' diyorum. Bu seni rahatsız ediyor mu, yoksa tam istediğin etki bu mu?" },
  { id: 14, type: "positive", text: "Tanışmak istiyorum — ama bu cümleyi kurmak zor. Böyle bir isteği nasıl karşılıyorsun?" },
  { id: 15, type: "positive", text: "Motosikletle yola çıkan biri olarak 'Çözemedim'i anlamak çok kolay. Bu bağlantı kasıtlı mıydı?" },

  // ❌ OLUMSUZ
  { id: 16, type: "negative", text: "Her Şey Çok Güzel Olacak 2 için seçilmek büyük bir avantajdı. Bu avantajı hak ettiğini düşünüyor musun, gerçekten?" },
  { id: 17, type: "negative", text: "Şarkıların hep aynı konuda — biten ilişkiler, kaçmak, çözememek. Hayatında başka bir şey yok mu gerçekten?" },
  { id: 18, type: "negative", text: "'Bi şekilde olur' diyorsun şarkında. Bu felsefeyle ciddi bir iş yapılabilir mi? Yoksa bu bir teselli mi sadece?" },
  { id: 19, type: "negative", text: "Haluk Bilginer'le aynı sahnede olmak büyük bir fırsat. Ama o fırsatı tam kullandın mı? Kendi kendine dürüst ol." },
  { id: 20, type: "negative", text: "Çözemedim, Ne Fark Eder, Bi Şekilde — bu şarkı adları bir müzisyenin eserlerinin isimleri mi, yoksa hayatının bir özeti mi?" },
  { id: 21, type: "negative", text: "'Esirim sanki' diyorsun ama motosikletle serbestçe dolaşıyorsun. Bu çelişkiyi nasıl savunursun?" },
  { id: 22, type: "negative", text: "Galatasaray fanatiği olarak tarafsız kalabiliyor musun herhangi bir konuda? Gerçekten?" },
  { id: 23, type: "negative", text: "Kuyu'da gerçekten güçlü müydün, yoksa Haluk Bilginer'in varlığı seni taşıdı mı? İkisi de ihtimal." },
  { id: 24, type: "negative", text: "Krant 2026'da kuruldu ve 'hâlâ yapılıyor'. Bu ne zaman bitecek? Yoksa bitmeyecek mi?" },
  { id: 25, type: "negative", text: "Sözlerin güzel ama melodiler özgün mü gerçekten? Bunu duymazdan geliyorum ama bir sormak istedim." },
  { id: 26, type: "negative", text: "'Ne fark eder artık' — bu kolay bir cümle. Onu söyleyen insan gerçekten öylece geçebiliyor mu her şeyin üzerinden?" },
  { id: 27, type: "negative", text: "Hem müzik hem oyunculuk yapıyorsun. İkisi de yarım kalmıyor mu? Hangisi gerçekten senin?" },
  { id: 28, type: "negative", text: "Motosiklet sürüyorsun, uzun yollara çıkıyorsun. Bu sorumsuzluğu nasıl savunursun?" },
  { id: 29, type: "negative", text: "Biz de Ünlüydük! çok konuşuldu ama o twist gerçekten organik mi hissettirdi, yoksa bir trick miydi?" },
  { id: 30, type: "negative", text: "Şarkılarında hep 'kaçtım, korkaktım, aptal mıyım' diyorsun. Bu dürüstlük mü, yoksa sempati toplamak için mi?" },
];

// ─── ROAST ────────────────────────────────────────────────────────
export interface RoastEntry {
  id: number;
  nick: string;
  text: string;
}

export const ROAST_ENTRIES: RoastEntry[] = [
  {
    id: 1,
    nick: "akustik disko meraklısı",
    text: "yap boz şarkısında o kadar duygudan bahsetmiş ama hiçbiri insana geçmiyor. bi kere yapboz duygusal bir olay değil, o bir oyuncak. bence uydurma sözler yazan biri.",
  },
  {
    id: 2,
    nick: "şarkı sözü analisti olmayan biri",
    text: "çözemedim şarkısında aptal mıyım korkak mıyım diye soruyor. ikisi de değilsin kardeşim, sadece karar veremiyorsun. bunun şarkısı yapılmaz normalde.",
  },
  {
    id: 3,
    nick: "spotify istatistiklerini seven",
    text: "krant the band 28 aylık dinleyicisi var. 28. bu bir başarı değil bu bir tablo. ama 'hâlâ yapılıyor' yazmasında da bir dürüstlük var, en azından kendi durumunu biliyor.",
  },
  {
    id: 4,
    nick: "kuyu'yu beklentisiz izleyen",
    text: "haluk bilginer'le aynı filmde oynuyor ve bunu her fırsatta söylüyor. haluk bilginer'in aynı filmde olması senin başarın değil, senin şansın. bu ikisini karıştırıyor gibi.",
  },
  {
    id: 5,
    nick: "biz de ünlüydük ikinci sezon beklentisi olan",
    text: "biz de ünlüydük'teki o twist'i çok geç açıkladılar. final bölümüne kadar izledim, o zamana kadar zaten anlamıştım ama kimseye söylememiştim çünkü sürprizi bozmak istemedim. kendimi fazla iyi hissettim.",
  },
  {
    id: 6,
    nick: "aya gidemeyecek olan",
    text: "aya gidelim demiş şarkıda. aya gitmek için para, teknoloji ve oksijen lazım. bunların hiçbirinden bahsetmemiş. kavgayı plana koymuş ama lojistiği unutmuş. bu çok tipik.",
  },
  {
    id: 7,
    nick: "motosiklet sürücüsü olmayan",
    text: "motosikletle uzun yol yapıyor ve derin adam imajı çiziyor. ama şarkılarında tek bir kez bile yol metaforu yok. yani ya motosikleti şarkıya taşımıyor ya da motosiklet aslında o kadar da önemli değil.",
  },
  {
    id: 8,
    nick: "galatasaray'ı kurtaran biri",
    text: "galatasaray kaybedince stüdyoya giriyor ve şarkı yazıyor. galatasaray kazanınca ne yapıyor? bunu sormak lazım çünkü o şarkılar hiç çıkmıyor.",
  },
  {
    id: 9,
    nick: "bi şekilde geçen biri",
    text: "bi şekilde şarkısında 'ha elimde ha ilerde bi şekilde' diyor. bu cümle aslında hiçbir şey söylemiyor. çok güzel hissettiriyor ama içine bakınca bomboş. bunu yapabilmek de bir yetenek sayılır.",
  },
  {
    id: 10,
    nick: "cem yılmaz filmlerini sayan",
    text: "cem yılmaz filminde yan rol oynamış ve bunu özgeçmişinin en üstüne koymuş. yan rol. cem yılmaz'ın filminde yan rol oynamak, bir arkadaşının düğününde nikah şahidi olmak gibi bir şey. oradaydın ama sen değildin konu.",
  },
  {
    id: 11,
    nick: "dönme dolap binmekten korkan",
    text: "dönme dolap şarkısında metafor olarak dönme dolabı seçmiş. lunapark metaforları 2015'te bitti sanıyordum ama görünüşe göre devam ediyor. en azından atlıkarınca dememesi iyi.",
  },
  {
    id: 12,
    nick: "kirpik saydıran biri",
    text: "kirpik şarkısında 'kirpiklerin dudakların gözlerin' demiş. bunlar zaten birbirinin yanında olan şeyler. yüzün tamamını saymış, bunu romantik yapmış. teknik olarak doğru ama yaratıcılık puanı düşük.",
  },
  {
    id: 13,
    nick: "ne fark eder diyen biri",
    text: "ne fark eder şarkısı var. bu şarkıyı yapacak kadar önem vermiş ama şarkının adı ne fark eder. bu ironi kasıtlı olsaydı akıllıca olurdu. kasıtlı mıydı emin değilim.",
  },
  {
    id: 14,
    nick: "aklımın bucaklarını sayan",
    text: "aklımın bucaklarında şarkısında 'sabah içtiğim kahve sohbetimsin' demiş. sabah kahvesi artık her şeyin metaforu oldu. eski sevgili, yeni sevgili, memleket, anne. biri dur desin.",
  },
  {
    id: 15,
    nick: "tarık'ı seven seyirci",
    text: "biz de ünlüydük'te 90'larda ünlü olmuş bir karakteri oynamış. hayatının bir döneminde de ünlü olmak istemiş olmalı ki bu rolü seçmiş. bu tür örtüşmeler tesadüf değildir.",
  },
  {
    id: 16,
    nick: "bechdel testini geçmeye çalışan yapım",
    text: "biz de ünlüydük bechdel testini geçiyor diye çok konuşuldu. bechdel testi çok düşük bir beklenti. iki kadın karakterin birbirleriyle erkek dışında bir şey konuşması yeterli. bu 2026'da hâlâ haber oluyorsa sorun dizide değil.",
  },
  {
    id: 17,
    nick: "zemheri nedir bilen",
    text: "kirpik şarkısında zemheri kelimesini kullanmış. zemheri ocak ayının en soğuk günleri demek. bunu kullanan şarkı sözü yazarı ya çok iyi bir kelime bilgisi var ya da sözlükte takılı kalmış. ikisi de mümkün.",
  },
  {
    id: 18,
    nick: "timsah olan",
    text: "bi şekilde şarkısında 'timsah gibi bi şey bu elin oğlu' demiş. bir aşk şarkısında timsah metaforu. bunu yazan adam o an çok kafası karışık bir yerdeydi ya da çok açıktı. ikisinden biri.",
  },
  {
    id: 19,
    nick: "dizi adını sorgulayan",
    text: "biz de ünlüydük dizi adı. geçmiş zamanda. yani zaten bitti. bu adı koyan kişi biraz fazla pesimist ya da çok gerçekçi. ya da ikisi aynı şey bu durumda.",
  },
  {
    id: 20,
    nick: "aya gidelim turisti",
    text: "aya gidelim şarkısında 'çölde gezelim gölde yüzelim kavga edelim' demiş. aya gitmek için çıkmışlar ama çöle, göle ve kavgaya sapıtmışlar. bu bir rota planlaması değil, bu bir felaket.",
  },
  {
    id: 21,
    nick: "krant bio'sunu okuyan",
    text: "krant the band'in bio'su 'hâlâ yapılıyor' diyor. bu çok alçakgönüllü görünüyor ama aynı zamanda sorumluluğu da sıfırlıyor. 'henüz bitmedi' demek 'eleştirme daha hazır değil' demek.",
  },
  {
    id: 22,
    nick: "acoustic disco dinleyicisi",
    text: "acoustic disco diye bir şey çıkarmış. yani normal şarkılarını akustiğe çevirmiş ve bunu ayrı bir proje gibi sunmuş. bu yeni içerik değil, bu tembelliğe isim koymak.",
  },
  {
    id: 23,
    nick: "şarkı adlarını listeleyen",
    text: "şarkılarının adları: çözemedim, ne fark eder, bi şekilde, yap boz. bunları arka arkaya okuyunca bir listeyi değil, bir insanın pazar günü sabahını okuyorsunuz gibi hissettiriyor.",
  },
  {
    id: 24,
    nick: "sosyal medya fenomeni olmayan",
    text: "galatasaray maçlarında çok aktif oluyor sosyal medyada. ama o enerjiyi şarkılarına hiç yansıtmıyor. galatasaray şarkısı yazmış olması gerekirdi. yazmamış. bu bir kayıp.",
  },
  {
    id: 25,
    nick: "kuyu adını düşünen",
    text: "kuyu adlı bir filmde oynamış. kuyu. en karanlık, en kapalı, en çıkışsız yer. bu role hazırlanmak için ne yaptı bilmiyorum ama adı bile bunaltıcı olan bir yere gönüllü girilmiyor.",
  },
  {
    id: 26,
    nick: "son disko'yu arayan",
    text: "son disko diye bir albümü var. 'son' kelimesi hem bitişi hem de en son olanı anlatır. yani bu son mu yoksa en büyük mü belli değil. bu bir pazarlama hatası ya da çok akıllıca bir muğlaklık.",
  },
  {
    id: 27,
    nick: "3:47'de uyanan",
    text: "3:47 şarkısını gece yarısı ağlarken yazdığını söylüyor. ama saat 3:47 değil, 14:47'ymiş ve cips yiyormuş. bu itirafı önceden yapmak yerine sonradan söylüyor. yani romantik hikayeyi önce kurmuş, sonra gerçeği söylemiş. bu bir strateji.",
  },
  {
    id: 28,
    nick: "her yere geç kalan",
    text: "hem müzisyen hem oyuncu olmaya çalışıyor. bu iki şeyi aynı anda yapanlar ya dehadır ya da ikisini de yarım yapıyordur. hangisi olduğunu anlamak için biraz daha beklememiz gerekiyor.",
  },
  {
    id: 29,
    nick: "sözleri ezberleyen fan",
    text: "dönme dolap şarkısında 'sallaa nıyo' diye hece hece kırıyor kelimeyi. bu ya çok özenli bir ritim çalışması ya da zaman doldurmak için yapılmış bir şey. ikisi de aynı sonuca çıkıyor ama biri daha iyi görünüyor.",
  },
  {
    id: 30,
    nick: "imkânsızı seven ama bulamayan",
    text: "aya gidelim'de 'imkânsızın peşine düşen arsızım' demiş. arsızlığı kabul etmek cesaret ister. ama bu cesaret ona çok kolay gelmiş, şarkıda söylemek hesap sormak değil.",
  },
  {
    id: 31,
    nick: "yan roldeki biri",
    text: "her şey çok güzel olacak 2'de yan rol oynamış. ikinci film. yan rol. bu cümleyi kurarken bile bir şeyler eksiliyor.",
  },
  {
    id: 32,
    nick: "sessiz sahneleri izleyen",
    text: "'bazen susardık da çok iyi kotardık' demiş ne fark eder şarkısında. bu satır çok güçlü ama hemen ardından şarkı devam ediyor. susmanın ne kadar iyi olduğunu anlatan şarkı susmaya devam ediyor.",
  },
  {
    id: 33,
    nick: "bucak bilen coğrafyacı",
    text: "aklımın bucaklarında demek için önce aklının kaç bucak olduğunu bilmek lazım. büyük ihtimalle bilmiyor. bu metafor çalışıyor çünkü kimse soruşturmuyor.",
  },
  {
    id: 34,
    nick: "yağmur seven motosikletçi",
    text: "motosikletle yağmurda yolculuk yapıyor ve bunu romantik bir şey gibi sunuyor. yağmurda motosiklet kullanmak romantik değil, tehlikeli. ama tehlikeliyi romantik görmek de ayrı bir kişilik özelliği.",
  },
  {
    id: 35,
    nick: "eski şarkıları seven biri",
    text: "krant the band 2026'da kurulmuş ve aynı yıl üç albüm çıkarmış. bu ya çok verimli bir yaratıcılık ya da hazır bekleyen bir sürü malzeme vardı demek. ikisi de iyi bir hikaye ama farklı hikayeler.",
  },

  // ── UYDURMA OLAYLAR ────────────────────────────────────────────
  {
    id: 36,
    nick: "dedikodu takipçisi",
    text: "bir kafede oturmuş, garson şarkılarını tanımış ve 'sizi tanıdım' demiş. 'hayır ben değilim' deyip çıkmış. o gün öğleden sonra instagram'da o kafenin önünde fotoğraf çekmiş. garson muhtemelen görmüş.",
  },
  {
    id: 37,
    nick: "stüdyo muhbiri",
    text: "bi şekilde şarkısını kaydederken stüdyodan erken çıkmış. galatasaray maçı varmış, kulaklıkla izliyormuş, bas gitaristi fark etmiş. 'dur bir dakika' deyip çıkmış. o gün bir daha girmemiş stüdyoya.",
  },
  {
    id: 38,
    nick: "set habercisi",
    text: "kuyu setinde haluk bilginer'in aracına yanlışlıkla binmiş. şoför hareket etmiş. 10 dakika sonra haluk bilginer telefon açmış. o zaman anlamış nerede olduğunu. bu olayı kim anlattıysa çok güldü.",
  },
  {
    id: 39,
    nick: "backstage gözlemcisi",
    text: "cem yılmaz'ın setinde bir sahne 14 kez çekilmiş. 12. çekimde güldüğü için değil, 12. çekimde telefonunu çekim alanında unuttuğunu hatırladığı için sahneyi bırakmış. yönetmen saatlerce beklemiş.",
  },
  {
    id: 40,
    nick: "konser kulisi",
    text: "bir sahnede kendi şarkısının sözünü yanlış söylemiş. izleyici doğrusunu bağırmış. 'biliyorum ya' deyip geçmiş ama devam etmiş yanlış söylemeye. o konser kaydı hâlâ bir yerde duruyormuş.",
  },
  {
    id: 41,
    nick: "stadyum vakası araştırmacısı",
    text: "galatasaray maçında tribünde kameralar yakalamış: tam yanında fenerbahçe atkısı takmış biri oturuyormuş. maç boyunca ikisi de hiçbir şey söylememiş. bu sıradan bir tesadüf mü yoksa büyük bir uzlaşma mı, bilinmiyor.",
  },
  {
    id: 42,
    nick: "motosiklet görgü tanığı",
    text: "motosikletle uzun yola çıkmış ama ilk şehirde benzin bitmiş. 3 saat kenarda beklemiş. o 3 saatte çözemedim şarkısını yazmış olabileceği iddia ediliyor ama bu kanıtlanmamış.",
  },
  {
    id: 43,
    nick: "sosyal medya arkeoloji ekibi",
    text: "2023'te attığı bir tweet var: 'hayatta hiç galatasaray'ı desteklemekten pişman olmadım.' altına biri 'galatasaray 0-3 fenerbahçe' diye yazmış. o tweeti silmiş. ama internet unutmuyor, ekran görüntüsü dolaşıyor.",
  },
  {
    id: 44,
    nick: "kayıp ses dosyası vakası",
    text: "ankara gecesi şarkısının ilk demosunda farklı bir kıta varmış. o kıtayı çıkarmışlar çünkü çok spesifik bir kişiyi işaret ediyormuş. o kişinin hâlâ bilip bilmediği bilinmiyor ama bazıları biliyor.",
  },
  {
    id: 45,
    nick: "yakın çevre muhabiri",
    text: "bir yemekte kendi şarkısı çalmış arka planda. fark etmemiş. yanındaki 'bu senin şarkın değil mi' deyince 'öyle mi, güzelmiş' demiş. bu hikayeyi anlatan birden fazla kişi var.",
  },
  {
    id: 46,
    nick: "biz de ünlüydük set analisti",
    text: "biz de ünlüydük çekimlerinde o twist sahnesi 7 kez çekilmiş. 5. çekimde twist'i atlayıp normal devam etmiş. kimse söyleyememiş çünkü yönetmen o an telefonundaymış. 6. çekimde hatırlatılmış.",
  },
  {
    id: 47,
    nick: "spotify çalma listesi dedektifi",
    text: "spotify dinleme geçmişi bir yerden sızdırılmış. en çok dinlediği sanatçılar arasında krant the band yok. kendi müziğini en az dinleyen krant the band üyesidir bu durumda.",
  },
  {
    id: 48,
    nick: "röportaj arşivleri",
    text: "bir röportajda 'asla fenerbahçeyle ilgili bir şey yapmam' demiş. bir ay sonra aklımın bucaklarında çıkmış. kimse bağlantı kurmamış ama kuranlar var ve susuyorlar.",
  },
  {
    id: 49,
    nick: "yayın akışı araştırmacısı",
    text: "her şey çok güzel olacak 2 vizyona girdiğinde tanıtım röportajlarına katılmamış. sebebi olarak 'stüdyo çalışması' demiş. o hafta motosikletle izmir-ankara yolunda görülmüş. stüdyo arabada mı bilmiyorum.",
  },
  {
    id: 50,
    nick: "demo kaseti bulan",
    text: "yap boz şarkısının ilk adının 'dikdörtgen' olduğu söyleniyor. ekip reddetmiş. 'yapboz daha romantik' demişler. buna nasıl itiraz edebilirsin ki.",
  },
];

// ─── GALAKSİ REHBERİ SORULARI ────────────────────────────────────
// Demirkol tarzı: derin, kişisel, kariyer + kimlik + dürüstlük
export interface GalaksiSoru {
  id: number;
  text: string;
  nick: string;
}

export const GALAKSI_SORULARI: GalaksiSoru[] = [
  {
    id: 1,
    nick: "M. Demirkol",
    text: "Bu işe düştün mü, yoksa seçtin mi? Farkı büyük çünkü.",
  },
  {
    id: 2,
    nick: "M. Demirkol",
    text: "Krant olmadan bir hayat kursaydın ne yapardın? Gerçekten düşün, 'bilmiyorum' deme.",
  },
  {
    id: 3,
    nick: "M. Demirkol",
    text: "Kariyerinde ilk kez 'bunu yapabiliyorum' dediğin an hangisiydi?",
  },
  {
    id: 4,
    nick: "M. Demirkol",
    text: "Seni en çok kim şekillendirdi? Bir isim.",
  },
  {
    id: 5,
    nick: "M. Demirkol",
    text: "Hayatında geri alacağın tek bir karar olsa — ve sadece bir tane — hangisi?",
  },
  {
    id: 6,
    nick: "M. Demirkol",
    text: "Başarı ve şans arasındaki sınırı nerede çiziyorsun? Kendin için.",
  },
  {
    id: 7,
    nick: "M. Demirkol",
    text: "Seni eleştirenlerin haklı olduğu bir şey var mı? Söyleyebilir misin?",
  },
  {
    id: 8,
    nick: "M. Demirkol",
    text: "En kötü döneminde sana biri bir şey söyledi ve tutunmana yardım etti. Ne söyledi o?",
  },
  {
    id: 9,
    nick: "M. Demirkol",
    text: "Bu işin sana verdiği en büyük şey ne, en büyük bedeli ne? İkisini birden söyle.",
  },
  {
    id: 10,
    nick: "M. Demirkol",
    text: "Hiç 'yanlış yoldasın' dedin mi kendine? O an ne yaptın?",
  },
  {
    id: 11,
    nick: "M. Demirkol",
    text: "Birine 'sen olmasaydın ben bu noktada olmazdım' diyebilir misin? Kim o?",
  },
  {
    id: 12,
    nick: "M. Demirkol",
    text: "Bu kariyerde en çok ne zaman yalnız hissettin?",
  },
  {
    id: 13,
    nick: "M. Demirkol",
    text: "Başkalarının seni nasıl gördüğünü gerçekten bilmek ister miydin?",
  },
  {
    id: 14,
    nick: "M. Demirkol",
    text: "Hayatını bir albüm olarak kursaydın, şu an kaçıncı şarkıdasın?",
  },
  {
    id: 15,
    nick: "M. Demirkol",
    text: "Seni en iyi anlayan insan kim? O kişi bunun farkında mı?",
  },
  {
    id: 16,
    nick: "M. Demirkol",
    text: "Bir gün bu işi bırakmak zorunda kalsaydın, son olarak ne yapmak isterdin?",
  },
  {
    id: 17,
    nick: "M. Demirkol",
    text: "Bir başarısızlığını kime anlattın? O kişi nasıl karşıladı?",
  },
  {
    id: 18,
    nick: "M. Demirkol",
    text: "Kendinle dürüst olabildiğin anlar var mı gerçekten? Bu ne kadar zor?",
  },
  {
    id: 19,
    nick: "M. Demirkol",
    text: "Bu işi yaparken hiç korktuğun oldu mu? Neyin korkusu?",
  },
  {
    id: 20,
    nick: "M. Demirkol",
    text: "İyi bir eser yaratmak mı, çok izlenip dinlenilmek mi — gerçekten hangisi?",
  },
  {
    id: 21,
    nick: "M. Demirkol",
    text: "Müzik mi oyunculuk mu — biri olmak zorunda kalsaydın?",
  },
  {
    id: 22,
    nick: "M. Demirkol",
    text: "Seni seven biri seni nasıl tanımlar, sevmeyen biri nasıl? İkisi de doğru mu?",
  },
  {
    id: 23,
    nick: "M. Demirkol",
    text: "Bir şeyde başarısız olduktan sonra ne kadar süre geçiyor tekrar denemene kadar?",
  },
  {
    id: 24,
    nick: "M. Demirkol",
    text: "Bu galakside nereye gidiyorsun? Bir yer söyle.",
  },
  {
    id: 25,
    nick: "M. Demirkol",
    text: "Hayatında hiç 'bu şansa layık mıyım' diye düşündün mü?",
  },
  {
    id: 26,
    nick: "M. Demirkol",
    text: "Sana çok kolay geldiği için suçluluk duyduğun bir şey var mı?",
  },
  {
    id: 27,
    nick: "M. Demirkol",
    text: "On yıl sonra nerede olmak istiyorsun? Gerçek cevap.",
  },
  {
    id: 28,
    nick: "M. Demirkol",
    text: "Kimse izlemese, dinlemese, bilmese — yine de yapıyor muydin?",
  },
  {
    id: 29,
    nick: "M. Demirkol",
    text: "En büyük pişmanlığın ne — ama bunu ilk kez söylüyorsun gibi söyle.",
  },
  {
    id: 30,
    nick: "M. Demirkol",
    text: "Bu konuşmada söylemek isteyip söyleyemediğin bir şey var mıydı?",
  },
];
