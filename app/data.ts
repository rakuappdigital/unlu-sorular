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
    author: "bir türlü uykuya geçemeyen",
    text: "'Bi o yana bi bu yana' diyorsun ama hiç durmuyorsun — bu şarkıyı dinleyince o döngünün hâlâ devam ettiğini hissettiriyor. Gerçekten bitti mi o dönme dolap?",
  },
  {
    id: 2, category: "Müzik", emoji: "⛓️",
    author: "cevabı olmayan soruları seven",
    text: "'Esirim sanki, sebebim baki' — neyin esirisin? Şarkının hiçbir yerinde cevap vermedin, ve bu biraz da kasıtlı değil mi?",
  },
  {
    id: 3, category: "Komik", emoji: "🍺",
    author: "içecek kadar kalmış",
    text: "'Bitiyor mu biram, bitecek gibi' diye açılan bir şarkı var. O an gerçekten bira içiyor muydun, yoksa bu biraz fazla sinematik bir açılış mı oldu?",
  },
  {
    id: 4, category: "Müzik", emoji: "💿",
    author: "müziği ne yapacağını bilmeyen biri",
    text: "'Çatlak bi plaktan gelen sesler gibi / bu iş böyledir' — bu kabulleniş çok ağır. Bunu yazan biri o an neyi kabulleniyordu?",
  },
  {
    id: 5, category: "Müzik", emoji: "🚬",
    author: "mekânları hatırlayan",
    text: "'Kirli bi tavan, az hava çok duman' — bunu okuyunca somut bir yer hayal ediyorum. Gerçek bir mekân mıydı bu, yoksa zihinsel bir mekân mı?",
  },
  {
    id: 6, category: "Komik", emoji: "🤡",
    author: "soru sormadan önce düşünen",
    text: "'Sersefilin biri' diyorsun. Bunu bir aynaya bakarak mı yazdın, yoksa birine mi söyledin ve bu şarkı o kişinin cevabı mı?",
  },

  // ── KİRPİK ─────────────────────────────────────────────────────
  {
    id: 7, category: "Aşk & İlişki", emoji: "💘",
    author: "yanlış kişiye doğru zamanda sevdalanan",
    text: "'Ruhuma daldın bu nasıl bi soygun?' diyorsun — bu soygundan şikayetçi misin gerçekten, yoksa içten içe hoşuna mı gidiyor?",
  },
  {
    id: 8, category: "Müzik", emoji: "🎵",
    author: "plansızlığı seven biri",
    text: "'Bu işin cahili benim yalansız' — planın olmayışını neden bu kadar rahat söyleyebiliyorsun? Bu bir güç mü yoksa bir savunma mekanizması mı?",
  },
  {
    id: 9, category: "Aşk & İlişki", emoji: "⏳",
    author: "beklemeyi hiç öğrenememiş",
    text: "'Beklemenin ne faydası var? söyle bileyim' — bu soruya cevap geldi mi? Faydası var mıydı?",
  },
  {
    id: 10, category: "Aşk & İlişki", emoji: "❄️",
    author: "zemheri bilir",
    text: "'Gittin gideli bu zemheri' — zemheri kelimesini seçmek güçlü bir karardı, soğuğun en ağır hali bu. O gidiş gerçekten o kadar ağır mıydı?",
  },
  {
    id: 11, category: "Müzik", emoji: "🎶",
    author: "sesi dinleyen değil duyan",
    text: "Kirpik'teki dişi backing vocals şarkıyı başka bir boyuta taşıyor — onsuz hayal edemiyorum artık. O ses kimin ve bu kararı nasıl aldınız?",
  },

  // ── Bİ ŞEKİLDE ─────────────────────────────────────────────────
  {
    id: 12, category: "Müzik", emoji: "🍂",
    author: "mevsimleri hisseden biri",
    text: "'Bi zamanda, bi mekanda, sonbaharda / belki şubatta' — neden hep bu en kasvetli aylar? Hiç bir şarkında yaz ya da ilkbahar var mı?",
  },
  {
    id: 13, category: "Komik", emoji: "🐊",
    author: "timsah meraklısı",
    text: "'Gel bana yoksa kaparlar bak timsah gibi bi şey bu elin oğlu' — bu satır gerçekten bir aşk şarkısının içinde. Bunu yazan adam o an neyin kafasındaydı?",
  },
  {
    id: 14, category: "Hayat", emoji: "🔮",
    author: "bi şekilde devam eden",
    text: "'Ha elimde ha ilerde bi şekilde' — bu benim için çok şey ifade eden bir satır. Gerçekten oldu mu o bi şekilde? Şarkı kehanet mi çıktı?",
  },
  {
    id: 15, category: "Müzik", emoji: "🎹",
    author: "enstrümanları takip eden dinleyici",
    text: "Bi Şekilde'de elektro bağlama ve gitar birbirine cevap veriyor — bu fikir çok organik hissettiriyor. Kim buldu ve ilk duyduğunda ne düşündün?",
  },

  // ── ÇÖZEMEDİM ──────────────────────────────────────────────────
  {
    id: 16, category: "Hayat", emoji: "🧩",
    author: "aptalı da korkağı da seven",
    text: "'Aptal mıyım neyim çözemedim ah!' — şarkında kendi kendine iki seçenek sunuyorsun. Ama üçüncü bir ihtimal var mı, o ihtimali hiç düşündün mü?",
  },
  {
    id: 17, category: "Aşk & İlişki", emoji: "📄",
    author: "sayfaları saklayanlar kulübü",
    text: "'Koparmıyorum sakladım o sayfaları / gelirsin diye / e gelmedin niye?' — bu satır içime oturdu. O sayfalar fiziksel mi, dijital mi? Hâlâ duruyor mu bir yerde?",
  },
  {
    id: 18, category: "Aşk & İlişki", emoji: "🏃",
    author: "kaçarken düşen biri",
    text: "'Kaçtım ve kaçırdım seni' — ikisi aynı anda gerçekleşmiş, bu çok acı. Kaçarken kaçırdığını o an mı fark ettin, yoksa çok sonra mı?",
  },
  {
    id: 19, category: "Hayat", emoji: "🚶",
    author: "şehri hisseden yürüyüşçü",
    text: "'Şu kaldırımlar, o sokaklar, bu yasaklar' — bu şarkıda şehir çok somut. Hangi şehrin sokaklarıydı bu?",
  },

  // ── YAP BOZ ────────────────────────────────────────────────────
  {
    id: 20, category: "Aşk & İlişki", emoji: "🧩",
    author: "kalpleri parçalanan kooperatifi",
    text: "'Yap-boz gibi kalbim senin elinde' — bu kişi şarkıyı duydu mu? Duymuşsa tepkisi ne oldu? Meraktan soruyorum çünkü bu çok açık bir şey.",
  },
  {
    id: 21, category: "Müzik", emoji: "🎵",
    author: "şarkıları sayıp döken",
    text: "'Şarkılarımı hep sana yazıp uykularımı hep sana bölüp' — bu şarkıyla birlikte o kişi için kaç tane oldu? Bir noktada bitmesi gerekmez mi?",
  },
  {
    id: 22, category: "Aşk & İlişki", emoji: "🌧️",
    author: "koşmaktan yorulan",
    text: "'Koştukça koştum sana / ardından yorgun / biraz da kırgın' — o yorgunluğun içinde duraksadığın bir an oldu mu? Durmayı düşündün mü?",
  },
  {
    id: 23, category: "Aşk & İlişki", emoji: "💔",
    author: "dostluğun bedelini ödeyen",
    text: "'Dostlara küstüm, çok kavga ettim' — bir ilişki için bu bedeli ödemek pişmanlık mı yaratıyor, yoksa 'gerekti' mi hissediyorsun?",
  },

  // ── NE FARK EDER? ───────────────────────────────────────────────
  {
    id: 24, category: "Müzik", emoji: "🎸",
    author: "atmosferi hisseden dinleyici",
    text: "Ne Fark Eder heavy delay ve uzun sustain ile açılıyor — o gece atmosferi o kadar sarıyor ki seyirciye de geçiyor. Bu kasıtlı mı kuruldu?",
  },
  {
    id: 25, category: "Aşk & İlişki", emoji: "🤐",
    author: "sessizliğin ne anlama geldiğini bilen",
    text: "'Bazen susardık da çok iyi kotardık' — bu benim için en güçlü satırlardan biri. İki insan susarak ne kotarıyor olabilir?",
  },
  {
    id: 26, category: "Hayat", emoji: "🔑",
    author: "kapıları kapatan",
    text: "'Güzel günler mazide saklı ve kitli / ne ani!' — 'ne ani' kısmı nefes kesiyor. O kapıyı kim kitledi, sen mi yoksa zaman mı?",
  },
  {
    id: 27, category: "Aşk & İlişki", emoji: "❓",
    author: "tutarlılığa inanan biri",
    text: "'Tutarlı tutarsız ne fark eder artık?' — bu soruyu sormak zaten bir cevap. Ama gerçekten fark etmiyor mu sence?",
  },
  {
    id: 28, category: "Müzik", emoji: "🌍",
    author: "milyarcayı düşünen",
    text: "'Milyarcası orda biz hep baş başa kaldık' — bu satırda milyarcası kim ya da neydi? Dünya mı, insanlar mı, fırsatlar mı?",
  },

  // ── AYA GİDELİM ────────────────────────────────────────────────
  {
    id: 29, category: "Müzik", emoji: "🌙",
    author: "planın içine kavga koyan",
    text: "'Aya gidelim, bi ara kavga edelim, sonunu bilmeyelim' — kavgayı plana koyuyorsun. Bu dürüstlük mü romantizm mi, yoksa ikisi aynı şey mi?",
  },
  {
    id: 30, category: "Aşk & İlişki", emoji: "⚗️",
    author: "kimyayı anlamaya çalışan",
    text: "'Kimyamızı bozan aşk apansızın' — kimyayı sen mi bozdun, o mu bozdu, yoksa aşkın kendisi mi? Karar verdiremiyor bu satır.",
  },
  {
    id: 31, category: "Müzik", emoji: "🪘",
    author: "bağlamayı seven yabancı",
    text: "Modern kanun ve 80'ler retro synth yan yana duruyor Aya Gidelim'de — bu kombinasyonu duyunca 'nasıl aklına geldi bunu' dedim. Kim buldu?",
  },
  {
    id: 32, category: "Aşk & İlişki", emoji: "🚀",
    author: "imkânsızların hayranı",
    text: "'İmkansızın peşine düşen arsızım' — bu kariyer mi, aşk mı, yoksa genel bir kişilik özelliği mi? Kaç kez düştün imkânsızın peşine?",
  },
  {
    id: 33, category: "Aşk & İlişki", emoji: "🤝",
    author: "birlikte düşen ikisi",
    text: "'Bile bile biz düşebiliriz / kime neymiş kalkarız ikimiz' — bu kısım bende çok umut uyandırıyor. Kalktınız mı?",
  },
  {
    id: 34, category: "Komik", emoji: "🏊",
    author: "göl mü çöl mü diye soran",
    text: "'Bi ara gölde yüzelim sonra kavga edelim' — iki versiyonda 'çöl' ve 'göl' var. Hangisi orijinal? Bu önemli.",
  },

  // ── AKLIMIN BUCAKLARINDA ────────────────────────────────────────
  {
    id: 35, category: "Aşk & İlişki", emoji: "☕",
    author: "sabah kahvesini düşünen",
    text: "'Sabah içtiğim kahve sohbetimsin' — bu benim için çok büyük bir şey. O kişiyle gerçekten sabah kahvesi içildi mi hiç?",
  },
  {
    id: 36, category: "Müzik", emoji: "🏠",
    author: "evsizlikten anlayan",
    text: "'Senin olduğun yerler hayallerimdir / evimdir' — bir mekân gerçekten eve dönüştü mü birisinin varlığıyla? Bu metafor mu yoksa gerçek bir his mi?",
  },
  {
    id: 37, category: "Hayat", emoji: "🎯",
    author: "sahiplenmeyi öğrenen",
    text: "'Bu benim diyorum' — spoken word olarak söylemek çok güçlü. O kararı ne zaman aldın ve geri aldın mı?",
  },
  {
    id: 38, category: "Müzik", emoji: "🔥",
    author: "felaket görmüş biri",
    text: "'Ki yaşadım felaketinle' — birinin yanında felaketi yaşamak ile yalnız yaşamak arasında gerçekten fark var mı sence?",
  },
  {
    id: 39, category: "Komik", emoji: "🗺️",
    author: "aklın haritasını çizen",
    text: "'Aklımın bucaklarında' — kaç tane bucak var bu aklında ve birine saklamak için mi kullanıyorsun onu?",
  },

  // ── GENEL MÜZİK ────────────────────────────────────────────────
  {
    id: 40, category: "Müzik", emoji: "🔊",
    author: "albüm sırasına önem veren",
    text: "Son Disko, Aya Gidelim, Aklımın Bucakları — aynı yıl üç albüm çıkardın. Bunlar gerçekten farklı dönemler mi yoksa aynı sel birden mi taştı?",
  },
  {
    id: 41, category: "Müzik", emoji: "🎙️",
    author: "biyoları okuyan biri",
    text: "Krant'ın bio'su 'hâlâ yapılıyor' diyor. Bu alçakgönüllülük mü, gerçek bir his mi, yoksa 'eleştirme henüz bitmedi' şeklinde bir savunma mı?",
  },
  {
    id: 42, category: "Müzik", emoji: "🌊",
    author: "sonu merak eden",
    text: "Şarkıların çoğu belirsizlikle bitiyor — çözemedim, ne fark eder, bi şekilde. Kapanış yazmak neden bu kadar zor? Yoksa kasıtlı mı?",
  },
  {
    id: 43, category: "Hayat", emoji: "🪞",
    author: "bütün albümleri dinleyen",
    text: "Bu sekiz şarkıyı birden dinleyince hangi birinden kaçmak istiyorsun? Yani hangi soru rahatsız ediyor en çok?",
  },

  // ── OYUNCULUK — BİZ DE ÜNLÜYDÜK! ──────────────────────────────
  {
    id: 44, category: "Oyunculuk", emoji: "📺",
    author: "ilk sezonu tek nefeste izleyen",
    text: "Biz de Ünlüydük!'ün sezon finalinde izleyici Tarık'ın — ve diğer karakterlerin — kadın olduğunu öğreniyor. Sen bunu çekerken biliyordun. Bu iki gerçekliği aynı anda nasıl taşıdın?",
  },
  {
    id: 45, category: "Oyunculuk", emoji: "♀️",
    author: "bechdel testini asan türk izleyicisi",
    text: "Biz de Ünlüydük! Bechdel testini doğal yoldan geçen ender Türk yapımlarından. Bu bir manifesto muydu, yoksa hikaye öyle akıp gitti mi?",
  },
  {
    id: 46, category: "Oyunculuk", emoji: "🎭",
    author: "sektörü içeriden gören biri",
    text: "Dizi özellikle sektördeki kadınlar için çok şey ifade etti. Bunu sette hissettiniz mi, yoksa yayına çıkınca mı anladınız ne yaptığınızı?",
  },
  {
    id: 47, category: "Oyunculuk", emoji: "📺",
    author: "platform aboneliğini o dizi için alan",
    text: "Tarık 90'larda ünlüydü, şimdi AVM'lerde kimsenin ilgilenmediği açılışlar yapıyor. Bu karakter sende bir şeye dokundu mu, yoksa tamamen uzak mıydı?",
  },
  {
    id: 48, category: "Oyunculuk", emoji: "🎬",
    author: "nuri'yi seven seyirci",
    text: "Nuri peltek konuşan, aşırı pozitif, saf bir karakter — ama aslında kadın. Bu kontrast kasıtlıydı, öyle değil mi? Hangi stereotipi kırıyordunuz?",
  },
  {
    id: 49, category: "Oyunculuk", emoji: "🌟",
    author: "finalden sonra geri sarıp izleyen",
    text: "Twist ortaya çıkınca izleyici ilk sezonu yeniden izleyip farklı şeyler görüyor. Bunu bilerek mi çektiniz bazı sahneleri?",
  },
  {
    id: 50, category: "Oyunculuk", emoji: "📺",
    author: "rana'yı anlayan",
    text: "Rana oyuncu olmak ister ama sekreter olmuş. Yine de her ortamda ilgi odağı olmak ister. Bu karakter sana tanıdık geldi mi, ya da tanıdığın biri mi var böyle?",
  },
  {
    id: 51, category: "Komik", emoji: "😂",
    author: "sami'den koşarak kaçan",
    text: "Bakkal Sami pasif agresif biri — bu karakter sahnelerde ne kadar büyüdü? Seni en çok o mu yordu yoksa Kudret'in anlamsız sohbetleri mi?",
  },
  {
    id: 52, category: "Oyunculuk", emoji: "🎭",
    author: "deneysel işleri takip eden",
    text: "Biz de Ünlüydük!'ün deneysel yanı hem formatta hem içerikte belli. Bu riski almak nasıl bir karardı? Tereddüt etti mi ekip?",
  },

  // ── OYUNCULUK — HER ŞEY ÇOK GÜZEL OLACAK 2 + KUYU ────────────
  {
    id: 53, category: "Oyunculuk", emoji: "😂",
    author: "cem yılmaz'ı seven biri",
    text: "Her Şey Çok Güzel Olacak 2 setinde Cem Yılmaz varken kamera açık olan ve olmayan hallerin ikisi de var. Hangisinde daha zor konsantre oldun?",
  },
  {
    id: 54, category: "Oyunculuk", emoji: "🕳️",
    author: "kuyu'yu tek başına izleyen",
    text: "Haluk Bilginer ile Kuyu'da sahne yapıyorsun. O sahneye hazırlanırken ne düşündün, ne hissettin? Gerçekten hazır mıydın?",
  },
  {
    id: 55, category: "Oyunculuk", emoji: "🌑",
    author: "dram ve komedi arasında gidip gelen",
    text: "Kuyu'nun draması ile Cem Yılmaz'ın komedisi arasında geçiş yaptın. Hangisi daha zor? İkisi de kendine göre mü, yoksa biri gerçekten daha ağır mı?",
  },

  // ── FELSEFE & HAYAT ─────────────────────────────────────────────
  {
    id: 56, category: "Hayat", emoji: "💭",
    author: "felsefi ama üşengeç",
    text: "'Bi şekilde olur' mu gerçekten? Bu bir iyimserlik cümlesi mi yoksa tembellerin kendini rahatlatma yöntemi mi? İkisi aynı şey mi sence?",
  },
  {
    id: 57, category: "Hayat", emoji: "🌙",
    author: "mevsimleri sayıp döken",
    text: "Şarkılarında sonbahar, şubat, zemheri var. Hiç yaz yoktur, ilkbahar yoktur. Bu hayatındaki bir şeyi mi yansıtıyor?",
  },
  {
    id: 58, category: "Hayat", emoji: "🔇",
    author: "konuşmak yerine yazan",
    text: "Müzik yapmak seni çözüyor mu yoksa çözmediğin yere daha derinden mi sokuyor? İkisi de aynı anda olabilir mi?",
  },
  {
    id: 59, category: "Hayat", emoji: "🧠",
    author: "anlamı arayan sıradan biri",
    text: "'Ne fark eder artık' — bu özgürlük mü teslim mi? Bence ikisi de aynı kapıya çıkıyor ama sen ne düşünüyorsun?",
  },
  {
    id: 60, category: "Hayat", emoji: "🌅",
    author: "konuşmak yerine dinleyen",
    text: "Konuşmak yerine şarkı yazıyorsun. Bu bir seçim mi yoksa bir zorunluluk mu? Bir şeyi direkt söyleyemeyen biri misin?",
  },
  {
    id: 61, category: "Hayat", emoji: "🪐",
    author: "varoluş sorunları olan sıradan biri",
    text: "'Hâlâ yapılıyorum' deseydin kendin hakkında — hangi parçan eksik? Bunun cevabını gerçekten biliyor musun?",
  },

  // ── AŞK & İLİŞKİ (genel) ───────────────────────────────────────
  {
    id: 62, category: "Aşk & İlişki", emoji: "📝",
    author: "hesap soran",
    text: "Bu kadar şarkı, bu kadar kişi — tek kişi için mi bunlar, yoksa farklı insanlar mı? Dürüst ol, çünkü sözler o kadar spesifik ki hepsinin aynı kişi için olduğuna inanmak zor.",
  },
  {
    id: 63, category: "Aşk & İlişki", emoji: "💬",
    author: "kelimeleri tartan biri",
    text: "Şarkılarında hiç doğrudan 'seni seviyorum' demiyorsun. Bu bir edebî karar mı, yoksa o kelimeyi söylemekte gerçekten zorlanıyor musun?",
  },
  {
    id: 64, category: "Aşk & İlişki", emoji: "🔥",
    author: "korkusuzluğun ne kadar sürdüğünü bilen",
    text: "'Korkusuz vaziyetim ve de plansız' — bu his ne kadar sürdü? Çünkü şarkıların geri kalanında o korkusuzluktan eser yok.",
  },
  {
    id: 65, category: "Aşk & İlişki", emoji: "📱",
    author: "zamanlama uzmanı olmayan",
    text: "Bir ilişki bitmeden şarkı mı yazıyorsun, bittikten mi? Bu zamanlamayı sen seçiyor musun yoksa şarkı kendi kendine mi geliyor?",
  },
  {
    id: 66, category: "Aşk & İlişki", emoji: "💔",
    author: "pişmanlığın boyutunu soran",
    text: "Geçmişte pişman olduğun tek bir şey söyle. 'Her şey' değil, gerçekten bir şey.",
  },
  {
    id: 67, category: "Aşk & İlişki", emoji: "🤍",
    author: "müziği anlamayan âşık",
    text: "Seni seven biri müziğini hiç anlamasa bu sorun olur mu? Ya da tam tersine, sadece şarkıların için seven biri?",
  },

  // ── MOTOSİKLET ──────────────────────────────────────────────────
  {
    id: 68, category: "Motosiklet", emoji: "🏍️",
    author: "yolda kaybolmayı seçen",
    text: "Uzun yola çıkmadan önce hangi şarkıyı açıyorsun? Krant'tan mı, başka bir şeyden mi — yoksa tamamen sessiz mi gidiyorsun?",
  },
  {
    id: 69, category: "Motosiklet", emoji: "🛣️",
    author: "şehirden kaçan fakat geri dönen",
    text: "Motosikletle giderken şarkı fikirleri geliyor mu, yoksa o an sadece yol var mı? Müzikten kaçmak için mi biniyorsun?",
  },
  {
    id: 70, category: "Motosiklet", emoji: "🌄",
    author: "mesafeyi ölçen",
    text: "En uzun gittiğin rota nereye kadardı? Ve tek başına mıydın? Birini bırakıp gittiğin oldu mu?",
  },
  {
    id: 71, category: "Motosiklet", emoji: "🌧️",
    author: "yağmuru seven ama ıslanmaktan nefret eden",
    text: "Yağmurda motosikletle gitmek — macera mı, hata mı? Karar verdin mi henüz?",
  },
  {
    id: 72, category: "Motosiklet", emoji: "💨",
    author: "ikisi arasında sıkışan",
    text: "Motosiklet mi müzik mi — gerçekten birini bırakmak zorunda kalsaydın? Cevabı düşünmeden ver.",
  },
  {
    id: 73, category: "Motosiklet", emoji: "🏍️",
    author: "yolda ne düşünüldüğünü merak eden",
    text: "Yolda en çok ne düşünüyorsun? 'Hiçbir şey' geçerli değil, öyle bir şey yok.",
  },
  {
    id: 74, category: "Komik", emoji: "😅",
    author: "hataları seven dinleyici",
    text: "Motosikletle gittiğin en kötü rotayı anlat. Dönerken ne düşündün — ve bir daha yaptın mı aynı hatayı?",
  },

  // ── GALATASARAY ──────────────────────────────────────────────────
  {
    id: 75, category: "Galatasaray", emoji: "🔴🟡",
    author: "kalpten galatasaraylı",
    text: "Galatasaray kaybettiği bir akşam stüdyodaydın — o gece ne çıktı ortaya? Yenilginin şarkıya etkisi var mı?",
  },
  {
    id: 76, category: "Galatasaray", emoji: "⚽",
    author: "şampiyonlukta sahada olan",
    text: "Şampiyonluk gecesi için hangi Krant şarkısı o anı en iyi anlatır? Seç, açıkla.",
  },
  {
    id: 77, category: "Galatasaray", emoji: "😤",
    author: "hakem kararlarından bıkan",
    text: "Hakem kararından sonra atmak isteyip sildiğin tweet ne yazıyordu? Anlatabilirsin artık.",
  },
  {
    id: 78, category: "Galatasaray", emoji: "😭",
    author: "maçtan sonra ağlayan taraftar",
    text: "Galatasaray yüzünden ağladın mı? Cevap kesinlikle evet. Ama ne zaman, hangi maç?",
  },

  // ── MAGAZİN ──────────────────────────────────────────────────────
  {
    id: 79, category: "Magazin", emoji: "🎭",
    author: "sektörü dışarıdan gözlemleyen",
    text: "Türkiye'de şu an müzikte seni gerçekten etkileyen kim? Klişe bir isim verme, gerçekten dinlediğin biri.",
  },
  {
    id: 80, category: "Magazin", emoji: "🤝",
    author: "kolaborasyonu seven",
    text: "Hangi Türk sanatçıyla çalışmak isterdin? 'Herkesle' değil, bir isim. Ve o kişiyle ne yaparsınız?",
  },
  {
    id: 81, category: "Magazin", emoji: "🎬",
    author: "yönetmen filmografisi bilen",
    text: "Hangi Türk yönetmenin filminde yer almak isterdin? Ve o filmde kim olmak isterdin?",
  },
  {
    id: 82, category: "Magazin", emoji: "🌍",
    author: "hollywood hayalcisi",
    text: "Hollywood'dan ciddi bir teklif gelse kabul eder miydin? Koşulun ne olurdu?",
  },
  {
    id: 83, category: "Magazin", emoji: "🎤",
    author: "tarkan dinleyicisi",
    text: "Tarkan ya da Sezen Aksu'dan birini cover yapacak olsaydın hangi şarkı olurdu ve neden?",
  },
  {
    id: 84, category: "Magazin", emoji: "🎸",
    author: "yabancı sahneleri hayal eden",
    text: "Hangi yabancı sanatçıyla sahne paylaşmak isterdin? Ve o sahnede ne olurdu?",
  },
  {
    id: 85, category: "Magazin", emoji: "💼",
    author: "teklif değerlendiren",
    text: "Cem Yılmaz 'yeni filmde başrol' dese ne yaparsın? Kabul etmek için ne gerekir?",
  },
  {
    id: 86, category: "Magazin", emoji: "🌟",
    author: "ustadan öğrenen",
    text: "Haluk Bilginer senden bir genç oyuncuya tavsiye istemeni istese ne söylerdin?",
  },

  // ── ŞÖHRET ──────────────────────────────────────────────────────
  {
    id: 87, category: "Şöhret", emoji: "👂",
    author: "ilk kez dinleyip şaşıran",
    text: "Şarkını yabancı biri ilk kez duyup 'bu gerçekten güzelmiş' dediğinde ne hissediyorsun? Mutluluk mu, rahatsızlık mı, ikisi aynı anda mı?",
  },
  {
    id: 88, category: "Şöhret", emoji: "📱",
    author: "kafede yabancı şarkılar dinleyen",
    text: "Şarkını bir kafede rastgele duysaydın — açıklar mıydın kim olduğunu? Yoksa sessiz mi otururdun?",
  },
  {
    id: 89, category: "Şöhret", emoji: "✨",
    author: "şarkıyı kendine mal eden",
    text: "Şarkılarını dinleyip 'bu benim hakkımda' diyen biri çıksa ve tamamen yanılıyor olsa — düzeltir misin, yoksa bırakır mısın?",
  },
  {
    id: 90, category: "Şöhret", emoji: "🚪",
    author: "kapıları sayan",
    text: "Ünlü olmak sana ne kapısını açtı, ne kapısını kapattı? Hangi kapı kaybıydı?",
  },

  // ── SÖZLÜK SORUSU — Ekşi Sözlük nickleri + yorum ──────────────
  {
    id: 91, category: "Sözlük Sorusu", emoji: "📖",
    author: "gece yarısı felsefesi",
    text: "'Bi şekilde' diyorsun ve bu benim için hem en rahatlatıcı hem de en korkutucu cümle. O bi şekil geldiğinde tanıyor musun onu?",
  },
  {
    id: 92, category: "Sözlük Sorusu", emoji: "📖",
    author: "hayatı yanlış anlayan biri",
    text: "Dönme Dolap'ta 'bu iş böyledir' diyip kapatıyorsun — ama şarkı yapmış olmak, kapatmamış olmak değil mi?",
  },
  {
    id: 93, category: "Sözlük Sorusu", emoji: "📖",
    author: "çayı hep soğuyan",
    text: "'Çatlak bi plaktan gelen sesler gibi' — bu ses her zaman mı böyle miydi, yoksa bir şeyden sonra mı çatladı?",
  },
  {
    id: 94, category: "Sözlük Sorusu", emoji: "📖",
    author: "aklı başında değil",
    text: "'Amalar yok ama amansız' — ama kelimesini kaldırdın ama amansızlığı bıraktın. Bu çelişkiyi nasıl taşıyorsun?",
  },
  {
    id: 95, category: "Sözlük Sorusu", emoji: "📖",
    author: "varoluşu kabul eden biri",
    text: "'Ne fark eder artık?' — bunu söylerken gerçekten inanıyorsun, yoksa söyleyince inanılan bir cümle mi bu?",
  },
  {
    id: 96, category: "Sözlük Sorusu", emoji: "📖",
    author: "tamamen tesadüfen buraya geldim",
    text: "'Aptal mıyım neyim çözemedim' — bu soruyu gerçekten soruyor musun, yoksa cevabı bildiğin için sormak çok daha güvenli mi?",
  },
  {
    id: 97, category: "Sözlük Sorusu", emoji: "📖",
    author: "yorgun ama devam eden",
    text: "Aya Gidelim'de kavgayı plana koydun. Kavgasız bir ilişkiyi gerçek bulur musun? Yoksa kavga olmadan kimya var mı sence?",
  },
  {
    id: 98, category: "Sözlük Sorusu", emoji: "📖",
    author: "sabah beşte uyanan kullanıcı",
    text: "Kuyu'da Haluk Bilginer'le sahne yaparken o anda kim olduğunu bilmek zorunda mıydın, yoksa bilmemek daha mı iyiydi?",
  },
  {
    id: 99, category: "Sözlük Sorusu", emoji: "📖",
    author: "anlamsız işler kooperatifi",
    text: "Cem Yılmaz'la çalışmak bir onay gibi hissettiriyor insana. Sende de öyle miydi, yoksa 'sadece bir iş' miydi?",
  },
  {
    id: 100, category: "Sözlük Sorusu", emoji: "📖",
    author: "kedisi olan yazar",
    text: "Motosikletle uzun yola çıkınca 'dönmesem ne olur' diye düşündüğün oluyor mu? Bu korkutucu mu, yoksa hoş mu?",
  },
  {
    id: 101, category: "Sözlük Sorusu", emoji: "📖",
    author: "bir türlü bitmeyen melankoli",
    text: "'Milyarcası orda biz hep baş başa kaldık' — milyarcası görmezden gelmek kolay mı, yoksa onları görmemek için bir çaba mı gerekiyor?",
  },
  {
    id: 102, category: "Sözlük Sorusu", emoji: "📖",
    author: "sessizce izleyen biri",
    text: "'Bu benim diyorum' — öncesinde başkasının mıydın? Bu sahiplenme nereden geldi?",
  },
  {
    id: 103, category: "Sözlük Sorusu", emoji: "📖",
    author: "kırmızı şemsiyeli kadın",
    text: "Tanışmak istedim ama şarkıların beni yeterince tanıştırdı. Bu seni rahatlatıyor mu yoksa ürkütüyor mu?",
  },
  {
    id: 104, category: "Sözlük Sorusu", emoji: "📖",
    author: "geceleri uyku tutmayan biri",
    text: "'Ne Fark Eder' şarkısını yazarken 'gerçekten fark etmez' diye inanıyor muydun, yoksa o kadar fark ettiği için mi yazdın?",
  },
  {
    id: 105, category: "Sözlük Sorusu", emoji: "📖",
    author: "uzun yolda kaybolan",
    text: "Motosikletle yolda giderken müzikten mi kaçıyorsun, müziğe mi gidiyorsun? İkisi de aynı şey mi?",
  },
  {
    id: 106, category: "Sözlük Sorusu", emoji: "📖",
    author: "cafenin en sessiz köşesi",
    text: "Biz de Ünlüydük!'teki o twist — sezon boyunca izleyicide hiç şüphe uyandı mı, yoksa final gelince gerçekten şok mı yaşandı?",
  },
  {
    id: 107, category: "Sözlük Sorusu", emoji: "📖",
    author: "düşünmeyi seven aptal",
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
