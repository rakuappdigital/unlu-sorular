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
    { title: "Her Şey Çok Güzel Olacak 2", type: "Film", role: "Yan Rol", note: "Cem Yılmaz filmi. Kamera kapanınca kim güldü?" },
    { title: "Kuyu", type: "Film (Dram)", role: "Ortak Başrol", note: "Haluk Bilginer ile. İsim bile ağır." },
  ],
  funFacts: [
    '"Kirli bi tavan, az hava çok duman" — Dönme Dolap gerçek bir mekânda mı yazıldı?',
    '"Timsah gibi bi şey bu elin oğlu" — Bi Şekilde\'nin en absürd satırı.',
    '"Koparmıyorum sakladım o sayfaları / gelirsin diye / e gelmedin niye?"',
    'Her Şey Çok Güzel Olacak 2\'de Cem Yılmaz\'la aynı karedeydin.',
  ],
};

// ─── ANA QUIZ SORULARI ────────────────────────────────────────────
export const QUESTIONS: Question[] = [

  // DÖNME DOLAP
  { id: 1, category: "Müzik", emoji: "🎡", text: '"Bi o yana bi bu yana dönme dolap gibi / eviriyo çeviriyo benliğimi" — bu döngüden çıkmanın yolu var mıydı o dönemde?' },
  { id: 2, category: "Müzik", emoji: "⛓️", text: '"Esirim sanki, sebebim baki" — neyin esirisin? Şarkı bu soruya cevap vermiyor kasıtlı olarak.' },
  { id: 3, category: "Komik", emoji: "🍺", text: '"Bitiyor mu biram, bitecek gibi" — şarkı bitmeden bira biterse ne yapıyorsun?' },
  { id: 4, category: "Müzik", emoji: "💿", text: '"Çatlak bi plaktan gelen sesler gibi / bu iş böyledir" — bu kabullenişi nereden buldun?' },
  { id: 5, category: "Müzik", emoji: "🚬", text: '"Kirli bi tavan, az hava çok duman" — bu gerçek bir mekan mıydı? Hâlâ var mı?' },
  { id: 6, category: "Komik", emoji: "🤡", text: '"Sersefilin biri" kim? Kendin misin, başkası mı?' },

  // KİRPİK
  { id: 7, category: "Aşk & İlişki", emoji: "💘", text: '"Ruhuma daldın bu nasıl bi soygun?" — bu soygundan şikayetçi misin, yoksa razı mısın?' },
  { id: 8, category: "Müzik", emoji: "🎵", text: '"Bu işin cahili benim yalansız" — cahillik işe yaradı mı bu kez?' },
  { id: 9, category: "Aşk & İlişki", emoji: "⏳", text: '"Beklemenin ne faydası var? söyle bileyim" — cevap geldi mi hiç?' },
  { id: 10, category: "Aşk & İlişki", emoji: "❄️", text: '"Gittin gideli bu zemheri" — o kış gerçekten hissettirdi mi yoksa güzel bir kelime için mi girdi?' },
  { id: 11, category: "Müzik", emoji: "🎶", text: 'Kirpik\'te dişi backing vocals var. O ses kimin ve şarkı onsuz ne kaybederdi?' },

  // Bİ ŞEKİLDE
  { id: 12, category: "Müzik", emoji: "🍂", text: '"Bi zamanda, bi mekanda, sonbaharda / belki şubatta" — neden hep bu mevsimler? İlkbahar yok mu?' },
  { id: 13, category: "Komik", emoji: "🐊", text: '"Gel bana yoksa kaparlar bak timsah gibi bi şey bu elin oğlu" — bir aşk şarkısına timsah girdi. Nasıl?' },
  { id: 14, category: "Hayat", emoji: "🔮", text: '"Ha elimde ha ilerde bi şekilde" — gerçekten oldu mu o bi şekilde?' },
  { id: 15, category: "Müzik", emoji: "🎹", text: 'Bi Şekilde\'de elektro bağlama ve gitar arasında call-and-response var. Kim buldu?' },

  // ÇÖZEMEDİM
  { id: 16, category: "Hayat", emoji: "🧩", text: '"Aptal mıyım neyim çözemedim ah!" — aptal ya da korkak. Hangisi?' },
  { id: 17, category: "Aşk & İlişki", emoji: "📄", text: '"Koparmıyorum sakladım o sayfaları / gelirsin diye / e gelmedin niye?" — o sayfalar hâlâ duruyor mu?' },
  { id: 18, category: "Aşk & İlişki", emoji: "🏃", text: '"Kaçtım ve kaçırdım seni" — kaçarken kaçırdığını ne zaman fark ettin?' },
  { id: 19, category: "Hayat", emoji: "🚶", text: '"Şu kaldırımlar, o sokaklar, bu yasaklar" — hangi şehrin sokaklarıydı bu?' },

  // YAP BOZ
  { id: 20, category: "Aşk & İlişki", emoji: "🧩", text: '"Yap-boz gibi kalbim senin elinde" — o kişi bu şarkıyı duydu mu? Tepkisi ne oldu?' },
  { id: 21, category: "Müzik", emoji: "🎵", text: '"Şarkılarımı hep sana yazıp uykularımı hep sana bölüp" — bu şarkıyla kaç tane oldu?' },
  { id: 22, category: "Aşk & İlişki", emoji: "🌧️", text: '"Koştukça koştum sana / ardından yorgun / biraz da kırgın" — koşmayı bıraktığın an geldi mi?' },
  { id: 23, category: "Aşk & İlişki", emoji: "💔", text: '"Dostlara küstüm, çok kavga ettim" — o ilişki başkalarına da mal oldu mu?' },

  // NE FARK EDER?
  { id: 24, category: "Müzik", emoji: "🎸", text: 'Ne Fark Eder, heavy delay ve uzun sustain ile açılıyor. O gece havasını kasıtlı mı kurdunuz?' },
  { id: 25, category: "Aşk & İlişki", emoji: "🤐", text: '"Bazen susardık da çok iyi kotardık" — o sessizliğin içinde ne vardı?' },
  { id: 26, category: "Hayat", emoji: "🔑", text: '"Güzel günler mazide saklı ve kitli / ne ani!" — neden kitli? Kim kitledi?' },
  { id: 27, category: "Aşk & İlişki", emoji: "❓", text: '"Tutarlı tutarsız ne fark eder artık?" — şarkıyı yazdıktan sonra fark etmeye başladı mı?' },
  { id: 28, category: "Müzik", emoji: "🌍", text: '"Milyarcası orda biz hep baş başa kaldık" — milyarcası kim ya da neydi?' },

  // AYA GİDELİM
  { id: 29, category: "Müzik", emoji: "🌙", text: '"Aya gidelim, bi ara kavga edelim, sonunu bilmeyelim" — kavgayı plana neden koydun?' },
  { id: 30, category: "Aşk & İlişki", emoji: "⚗️", text: '"Kimyamızı bozan aşk apansızın" — kimyayı kim bozdu?' },
  { id: 31, category: "Müzik", emoji: "🪘", text: 'Modern kanun ve 80\'ler retro synth yan yana Aya Gidelim\'de. Kim buldu bunu?' },
  { id: 32, category: "Aşk & İlişki", emoji: "🚀", text: '"İmkansızın peşine düşen arsızım" — kaç kez düştün imkansızın peşine?' },
  { id: 33, category: "Aşk & İlişki", emoji: "🤝", text: '"Bile bile biz düşebiliriz / kime neymiş kalkarız ikimiz" — kalktınız mı?' },
  { id: 34, category: "Komik", emoji: "🏊", text: '"Bi ara gölde yüzelim sonra kavga edelim" — önce yüzme mi kavga mı? Sırasının önemi var mı?' },

  // AKLIMIN BUCAKLARINDA
  { id: 35, category: "Aşk & İlişki", emoji: "☕", text: '"Sabah içtiğim kahve sohbetimsin" — o kişiyle gerçekten sabah kahvesi içildi mi hiç?' },
  { id: 36, category: "Müzik", emoji: "🏠", text: '"Senin olduğun yerler hayallerimdir / evimdir" — bir yer gerçekten eve döndü mü birisinin yüzünden?' },
  { id: 37, category: "Hayat", emoji: "🎯", text: '"Bu benim diyorum" — spoken word olarak. O kararı ne zaman aldın?' },
  { id: 38, category: "Müzik", emoji: "🔥", text: '"Ki yaşadım felaketinle" — felaketi birinin yanında yaşamak mı, yalnız yaşamak mı ağır?' },
  { id: 39, category: "Komik", emoji: "🗺️", text: '"Aklımın bucaklarında" — kaç tane bucak var ve hiçbiri boş mu?' },

  // GENEL MÜZİK
  { id: 40, category: "Müzik", emoji: "🔊", text: 'Son Disko, Aya Gidelim, Aklımın Bucakları — aynı yıl üç albüm. Gerçekten farklı dönemler mi?' },
  { id: 41, category: "Müzik", emoji: "🎙️", text: 'Krant\'ın bio\'su "hâlâ yapılıyor". Bu alçakgönüllülük mü, gerçek bir his mi, savunma mı?' },
  { id: 42, category: "Müzik", emoji: "🌊", text: 'Şarkıların belirsizlikle bitiyor — çözemedim, ne fark eder, bi şekilde. Kapanış yazmak neden zor?' },
  { id: 43, category: "Müzik", emoji: "🎼", text: 'Acoustic Disco serisi — akustiğe çekmek şarkıları değiştiriyor mu, yoksa asıl onlar mı?' },
  { id: 44, category: "Hayat", emoji: "🪞", text: 'Bu şarkıların tümünü birden dinlediğinde seni en çok hangisi rahatsız ediyor? Neden?' },

  // OYUNCULUK — HER ŞEY ÇOK GÜZEL OLACAK 2
  { id: 45, category: "Oyunculuk", emoji: "🎬", text: 'Cem Yılmaz\'ın setinde kamera kapanınca kim daha çok güldürdü — o mu sen mi?' },
  { id: 46, category: "Oyunculuk", emoji: "😂", text: 'Her Şey Çok Güzel Olacak 2\'de sahne yaparken Cem Yılmaz yanındaysa konsantrasyonu nasıl korudun?' },
  { id: 47, category: "Komik", emoji: "🎭", text: 'Cem Yılmaz sete geç kaldı mı, erken mi geldi? Perde arkasında kim daha ciddiydi?' },
  { id: 48, category: "Oyunculuk", emoji: "🎥", text: 'Müzisyen olarak bir film setine girdiğinde kendini nasıl tanımlıyorsun?' },
  { id: 49, category: "Oyunculuk", emoji: "🌟", text: 'Her Şey Çok Güzel Olacak 2 için seni seçtiklerinde ilk tepkin ne oldu?' },

  // OYUNCULUK — KUYU
  { id: 50, category: "Oyunculuk", emoji: "🕳️", text: 'Haluk Bilginer ile Kuyu\'daydın. Set enerjisi nasıldı? Sahne aralarında konuştunuz mu?' },
  { id: 51, category: "Oyunculuk", emoji: "😶", text: '"Kuyu" adlı bir filmde oynamak psikolojik olarak ne bıraktı? Setten eve nasıl dönüyordun?' },
  { id: 52, category: "Oyunculuk", emoji: "🎭", text: 'Haluk Bilginer ile sahne yaparken gerçekten korktu mu bir parçan?' },
  { id: 53, category: "Oyunculuk", emoji: "🌑", text: 'Kuyu\'nun draması ile Cem Yılmaz\'ın komedisi arasında geçiş yaptın. Hangisi daha zordu?' },

  // FELSEFE & HAYAT
  { id: 54, category: "Hayat", emoji: "💭", text: '"Bi şekilde olur" mu gerçekten? Bu bir iyimserlik mi yoksa tembellerin mazereti mi?' },
  { id: 55, category: "Hayat", emoji: "🌙", text: 'Şarkılarında ilkbahar neredeyse hiç yok. Kasıtlı mı?' },
  { id: 56, category: "Hayat", emoji: "🔇", text: 'Müzik yapmak seni çözüyor mu yoksa çözmediğin yere daha derin mi sokuyor?' },
  { id: 57, category: "Hayat", emoji: "🧠", text: '"Ne fark eder artık" — özgürlük mü, teslim mi?' },
  { id: 58, category: "Hayat", emoji: "🌅", text: 'Konuşmak yerine şarkı yazıyorsun. Bu ne zaman daha kolay hale geldi?' },
  { id: 59, category: "Hayat", emoji: "🪐", text: '"Hâlâ yapılıyorum" deseydin kendin hakkında, hangi parçan eksik?' },
  { id: 60, category: "Hayat", emoji: "⚖️", text: '"Aptal mıyım korkak mıyım" diye soruyorsun. Üçüncü bir ihtimal var mı?' },

  // AŞK & İLİŞKİ (genel)
  { id: 61, category: "Aşk & İlişki", emoji: "📝", text: 'Bu kadar şarkı var. Tek kişi için mi, yoksa farklı kişiler mi? Dürüst ol.' },
  { id: 62, category: "Aşk & İlişki", emoji: "💬", text: 'Şarkılarında hiç "seni seviyorum" demiyorsun. Bu bir karar mı?' },
  { id: 63, category: "Aşk & İlişki", emoji: "🔥", text: 'Seni "plansız ve korkusuz" hissettiren biri varsa o his ne kadar sürdü?' },
  { id: 64, category: "Aşk & İlişki", emoji: "📱", text: 'Bir ilişki bittikten sonra mı şarkı yazmak kolay, bitmeden önce mi?' },
  { id: 65, category: "Aşk & İlişki", emoji: "💔", text: 'Geçmişte pişman olduğun şey ne? "Her şey" değil, spesifik bir şey.' },
  { id: 66, category: "Aşk & İlişki", emoji: "🤍", text: 'Seni seven biri müziğini hiç anlamasa sorun olur mu?' },

  // MOTOSİKLET
  { id: 67, category: "Motosiklet", emoji: "🏍️", text: 'Uzun yola çıkmadan önce hangi Krant şarkısını açıyorsun? Hiçbirini mi?' },
  { id: 68, category: "Motosiklet", emoji: "🛣️", text: 'Motosikletle giderken şarkı fikirleri geliyor mu, yoksa o an sadece yol var mı?' },
  { id: 69, category: "Motosiklet", emoji: "🌄", text: 'En uzun gittiğin rota nereye kadardı? Tek başına mıydın?' },
  { id: 70, category: "Motosiklet", emoji: "🌧️", text: 'Yağmurda motosikletle gitmek — macera mı, hata mı?' },
  { id: 71, category: "Motosiklet", emoji: "💨", text: 'Motosiklet mi müzik mi — birini bırakmak zorunda kalsaydın?' },
  { id: 72, category: "Motosiklet", emoji: "🏍️", text: 'Yolda en çok ne düşünüyorsun? "Hiçbir şey" geçerli değil.' },
  { id: 73, category: "Komik", emoji: "😅", text: 'Motosikletle gittiğin en kötü rotayı anlat. Ne düşündün dönerken?' },

  // GALATASARAY
  { id: 74, category: "Galatasaray", emoji: "🔴🟡", text: 'Galatasaray kaybettiği bir akşam stüdyoda mıydın? O gece ne çıktı ortaya?' },
  { id: 75, category: "Galatasaray", emoji: "⚽", text: 'Şampiyonluk gecesi için hangi Krant şarkısı o anı en iyi anlatır?' },
  { id: 76, category: "Galatasaray", emoji: "😤", text: 'Hakem kararından sonra atmak isteyip sildiğin tweet ne yazıyordu?' },
  { id: 77, category: "Galatasaray", emoji: "😭", text: 'Galatasaray yüzünden gerçekten ağladın mı? Cevap evet. Ama ne zaman?' },

  // MAGAZIN & DİĞER ÜNLÜLER
  { id: 78, category: "Magazin", emoji: "🎭", text: 'Türkiye\'de müzikte seni en çok etkileyen isim kim şu an? Klişe olmayan bir cevap ver.' },
  { id: 79, category: "Magazin", emoji: "🤝", text: 'Hangi Türk sanatçıyla çalışmak isterdin — gerçekçi bir isim ver, "herkesle" deme.' },
  { id: 80, category: "Magazin", emoji: "🎬", text: 'Hangi Türk yönetmenin filminde oynamak isterdin? Neymiş o film hakkında?' },
  { id: 81, category: "Magazin", emoji: "🌍", text: 'Hollywood\'dan teklif gelse kabul eder miydin? Koşulun ne olurdu?' },
  { id: 82, category: "Magazin", emoji: "🎤", text: 'Tarkan veya Sezen Aksu\'nun şarkılarından birini cover yapsaydın hangisi olurdu?' },
  { id: 83, category: "Magazin", emoji: "🏆", text: 'Türkiye\'de müzik ödülü alacak olsan hangi kategoride almak isterdin?' },
  { id: 84, category: "Magazin", emoji: "🎸", text: 'Yabancı sanatçılardan biriyle sahne paylaşma şansın olsa kim olurdu?' },
  { id: 85, category: "Magazin", emoji: "📺", text: 'Hangi Türk dizisinde rol almak isterdin — müzik değil, gerçek oyunculuk?' },
  { id: 86, category: "Magazin", emoji: "💼", text: 'Cem Yılmaz sana "yeni filmde başrol" dese ne yaparsın?' },
  { id: 87, category: "Magazin", emoji: "🎵", text: 'Müziğin seni götürmesini istediğin en büyük sahne neresi? Bir şehir, bir festival, bir mekan.' },
  { id: 88, category: "Magazin", emoji: "🌟", text: 'Haluk Bilginer senden bir öğrencisi için tavsiye istese ne derdin?' },

  // ŞÖHRET
  { id: 89, category: "Şöhret", emoji: "👂", text: 'Şarkını yabancı biri ilk kez duyup "bu gerçekten güzelmiş" dediğinde ne hissettin?' },
  { id: 90, category: "Şöhret", emoji: "📱", text: 'Şarkını bir kafede rastgele duysaydın — açıklar mıydın kim olduğunu?' },
  { id: 91, category: "Şöhret", emoji: "🎤", text: 'Hem müzisyen hem oyuncu olarak tanındığında hangisi daha çok yoruyor?' },
  { id: 92, category: "Şöhret", emoji: "✨", text: 'Şarkılarını dinleyip "bu benim hakkımda" diyen biri olsa ve tamamen yanılıyor olsa ne dersin?' },
  { id: 93, category: "Şöhret", emoji: "🚪", text: 'Ünlü olmak sana ne kapısını açtı, ne kapısını kapattı?' },

  // SÖZLÜK SORUSU — gerçekçi Ekşi Sözlük nickleri
  { id: 94, category: "Sözlük Sorusu", emoji: "📖", text: 'gece yarısı felsefesi: "\'Bi şekilde\' diyorsun. Ama o bi şekil geldiğinde tanıyor musun onu?"' },
  { id: 95, category: "Sözlük Sorusu", emoji: "📖", text: 'hayatı yanlış anlayan biri: "Dönme Dolap\'ta \'bu iş böyledir\' diyip kapatıyorsun. Peki nasıl olmalıydı?"' },
  { id: 96, category: "Sözlük Sorusu", emoji: "📖", text: 'çayı hep soğuyan: "\'Çatlak bi plaktan gelen sesler gibi\' — bu ses sende mi çıkıyor yoksa dışarıdan mı?"' },
  { id: 97, category: "Sözlük Sorusu", emoji: "📖", text: 'aklı başında değil: "Kirpik\'te \'amalar yok ama amansız\' diyorsun. Amanın olsaydı ne yapardın?"' },
  { id: 98, category: "Sözlük Sorusu", emoji: "📖", text: 'varoluşu kabul eden biri: "\'Ne fark eder artık?\' gerçek bir soru mu, yoksa cevabı bildiğin için mi soruyorsun?"' },
  { id: 99, category: "Sözlük Sorusu", emoji: "📖", text: 'tamamen tesadüfen buraya geldim: "\'Aptal mıyım neyim çözemedim\' — gerçekten mi çözemedin, yoksa çözünce ne olacağından mı korktun?"' },
  { id: 100, category: "Sözlük Sorusu", emoji: "📖", text: 'yorgun ama devam eden: "Aya Gidelim\'de kavgayı plana koydun. Kavgasız bir aşktan şüphe duyar mısın?"' },
  { id: 101, category: "Sözlük Sorusu", emoji: "📖", text: 'sabah beşte uyanan kullanıcı: "Kuyu\'da Haluk Bilginer\'le sahne yaparken o anda gerçekten kim olduğunu biliyor muydun?"' },
  { id: 102, category: "Sözlük Sorusu", emoji: "📖", text: 'anlamsız işler kooperatifi: "Cem Yılmaz\'ın setinde güldürmek için izin mi istedin, yoksa o mu senden?"' },
  { id: 103, category: "Sözlük Sorusu", emoji: "📖", text: 'kedisi olan yazar: "Motosikletle uzun yola çıktığında \'dönmesem ne olur\' diye düşündüğün oldu mu?"' },
  { id: 104, category: "Sözlük Sorusu", emoji: "📖", text: 'bir türlü bitmeyen melankoli: "\'Milyarcası orda biz hep baş başa kaldık\' — bu baş başa kalmak seçim miydi?"' },
  { id: 105, category: "Sözlük Sorusu", emoji: "📖", text: 'sessizce izleyen biri: "Aklımın Bucaklarında\'da \'bu benim diyorum\' diyorsun. Öncesinde başkasının mıydın?"' },
  { id: 106, category: "Sözlük Sorusu", emoji: "📖", text: 'kırmızı şemsiyeli kadın: "Tanışmak istedim ama şarkın beni yeterince tanıştırdı. Bu seni rahatlatıyor mu yoksa ürkütüyor mu?"' },
  { id: 107, category: "Sözlük Sorusu", emoji: "📖", text: 'geceleri uyku tutmayan biri: "\'Ne Fark Eder\' şarkısını yazarken gerçekten önemli olmadığına inandın mı, yoksa önemli olduğunu mu biliyordun?"' },
  { id: 108, category: "Sözlük Sorusu", emoji: "📖", text: 'uzun yolda kaybolan: "Motosikletle yolda giderken müzikten mi kaçıyorsun, müziğe mi gidiyorsun?"' },
  { id: 109, category: "Sözlük Sorusu", emoji: "📖", text: 'cafenin en sessiz köşesi: "Haluk Bilginer\'le tanışmadan önce ve tanıştıktan sonraki sen — arada fark var mı?"' },
  { id: 110, category: "Sözlük Sorusu", emoji: "📖", text: 'düşünmeyi seven aptal: "Galatasaray kaybedince şarkı yazıyor musun? Merak ettim."' },

  // SOSYAL MEDYA
  { id: 111, category: "Sosyal Medya", emoji: "📸", text: 'Şarkını birinin hikayesinde gördüğünde ne hissediyorsun?' },
  { id: 112, category: "Sosyal Medya", emoji: "💬", text: 'Krant için gelen ilk anlamlı DM\'i hatırlıyor musun?' },
  { id: 113, category: "Sosyal Medya", emoji: "🗑️", text: 'Paylaşmadan önce sildiğin en güçlü içerik ne?' },
  { id: 114, category: "Sosyal Medya", emoji: "🌐", text: 'Sosyal medya olmasa Krant bugün var olur muydu?' },
];

// ─── ONEDİO SORULARI ──────────────────────────────────────────────

export const ONEDIO_QUESTIONS: OnedioQuestion[] = [
  // ✅ OLUMLU (positive jar)
  { id: 1, type: "positive", text: "Aya Gidelim'i ilk duyduğumda ağladım. Sadece bunu bilmeni istedim. Ne hissediyorsun?" },
  { id: 2, type: "positive", text: "Kuyu'daki performansın Haluk Bilginer'i gölgede bıraktı diyenler var. Kabul edebiliyor musun bunu?" },
  { id: 3, type: "positive", text: "Dönme Dolap sabah rutinime girdi — her gün dinliyorum. Bu seni rahatsız eder mi?" },
  { id: 4, type: "positive", text: "Her Şey Çok Güzel Olacak 2'de en çok sen güldürdün. Haksız mıyım?" },
  { id: 5, type: "positive", text: "Krant'ın 'hâlâ yapılıyor' demesi bu sektörün en dürüst bio'su. Bunu sahici bir övgü olarak alıyor musun?" },
  { id: 6, type: "positive", text: "'Bu benim diyorum' satırından sonra ben de bir şeye sahip çıkabildim. Teşekkür etsem ne dersin?" },
  { id: 7, type: "positive", text: "Hem oyuncu hem müzisyen olman sektörü rahatsız ediyor. Bu yüzden seni takip ediyorum." },
  { id: 8, type: "positive", text: "Ne Fark Eder'de 'bazen susardık da çok iyi kotardık' — bu satır benim için çok şey ifade etti. Nereden geldi?" },
  { id: 9, type: "positive", text: "Aklımın Bucakları albümünü tek oturuşta bitirdim. Bu övgü mü eleştiri mi sence?" },
  { id: 10, type: "positive", text: "Motosikletle çekilen o fotoğraf ikonlaştı. İmza alabilir miyim?" },
  { id: 11, type: "positive", text: "Kirpik'teki gitar solosunu bir daha çalar mısın, bu sefer sadece benim için?" },
  { id: 12, type: "positive", text: "Galatasaray ve müzik aynı insanda bir arada durabiliyormuş. Mucize. Nasıl taşıyorsun ikisini?" },
  { id: 13, type: "positive", text: "Şarkılarını dinleyince 'bunu ben de yazabilirdim' diyorum. Bu iltifat mı gocunma mı sence?" },
  { id: 14, type: "positive", text: "Cem Yılmaz seninle çalışmış. Bu senin için bir onay mı, yoksa sadece bir iş mi?" },
  { id: 15, type: "positive", text: "Tanışmak istedim ama şarkıların beni yeterince tanıştırdı zaten. Bu seni rahatlatıyor mu?" },

  // ❌ OLUMSUZ (negative jar)
  { id: 16, type: "negative", text: "Her Şey Çok Güzel Olacak 2'ye katılman bir hataydı. Neden kabul ettin?" },
  { id: 17, type: "negative", text: "Şarkıların hep aynı konuda — biten ilişkiler, belirsizlik. Hayatında başka bir şey yok mu?" },
  { id: 18, type: "negative", text: "'Bi şekilde olur' felsefesi tembellerin mazereti. Bunu şarkıya yapmak ne kadar sorumlu?" },
  { id: 19, type: "negative", text: "Haluk Bilginer'le aynı filmde olmak büyük bir avantajdı. Bunu hak ettiğini düşünüyor musun?" },
  { id: 20, type: "negative", text: "Çözemedim, Ne Fark Eder, Bi Şekilde — şarkı adları mı bunlar, yoksa hayat planın mı?" },
  { id: 21, type: "negative", text: "'Esirim sanki' diyorsun ama aynı zamanda motosikletle özgürce dolaşıyorsun. Hangisi gerçek?" },
  { id: 22, type: "negative", text: "Galatasaray fanatiği bir sanatçı olarak tarafsız kalabiliyor musun hayatta?" },
  { id: 23, type: "negative", text: "Kuyu'da gerçekten iyi miydin, yoksa Haluk Bilginer mi kurtardı o filmi?" },
  { id: 24, type: "negative", text: "Krant 2026'da kuruldu ve 'hâlâ yapılıyor'. Bu ne zaman bitecek?" },
  { id: 25, type: "negative", text: "Sözlerin güzel ama melodiler yeterince özgün mü? Dürüst olmanı istiyorum." },
  { id: 26, type: "negative", text: "'Ne fark eder artık' demek çok kolay. Gerçekten hiçbir şeyin farkı yok mu sence?" },
  { id: 27, type: "negative", text: "Hem müzik hem sinema — ikisini aynı anda yapmaya çalışmak ikisini de yarım bırakmak değil mi?" },
  { id: 28, type: "negative", text: "Motosiklet sürmek güzel ama tehlikeli. Bu sorumsuzluğu nasıl savunuyorsun?" },
  { id: 29, type: "negative", text: "'Aya gidelim' diyorsun ama ayda kavga için yer yok, hava da yok. Gerçekçi misin?" },
  { id: 30, type: "negative", text: "Şarkılarında hep 'kaçtım, korkaktım, aptal mıyım' diyorsun. Bu özeleştiri mi yoksa sempatik görünme stratejisi mi?" },
];
