export type Category =
  | "Müzik"
  | "Oyunculuk"
  | "Aşk & İlişki"
  | "Hayat"
  | "Şöhret"
  | "Taraftar Sorusu"
  | "Komik"
  | "Galatasaray"
  | "Sosyal Medya";

export const ALL_CATEGORIES: Category[] = [
  "Müzik",
  "Oyunculuk",
  "Aşk & İlişki",
  "Hayat",
  "Şöhret",
  "Taraftar Sorusu",
  "Komik",
  "Galatasaray",
  "Sosyal Medya",
];

export const CATEGORY_COLORS: Record<Category, string> = {
  Müzik: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  Oyunculuk: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  "Aşk & İlişki": "bg-pink-500/10 text-pink-300 border-pink-500/30",
  Hayat: "bg-green-500/10 text-green-300 border-green-500/30",
  Şöhret: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
  "Taraftar Sorusu": "bg-orange-500/10 text-orange-300 border-orange-500/30",
  Komik: "bg-red-500/10 text-red-300 border-red-500/30",
  Galatasaray: "bg-red-600/15 text-red-200 border-red-500/40",
  "Sosyal Medya": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
};

export const CATEGORY_EMOJIS: Record<Category, string> = {
  Müzik: "🎵",
  Oyunculuk: "🎬",
  "Aşk & İlişki": "💘",
  Hayat: "🌿",
  Şöhret: "✨",
  "Taraftar Sorusu": "🙋",
  Komik: "😂",
  Galatasaray: "🔴🟡",
  "Sosyal Medya": "📱",
};

export interface Question {
  id: number;
  text: string;
  category: Category;
  emoji: string;
}

// ─── UYDURMA KİMLİK ────────────────────────────────────────────────
// Bu profil tamamen kurgusaldır.

export const PERSONA = {
  name: "Sen",
  tagline: "Türkiye'nin son 6 ayının en çok konuşulan ismi.",
  songs: [
    {
      title: "Çay Soğudu",
      year: "2024",
      streams: "240M",
      note: "TikTok'ta viral oldu. 'Çayım soğudu ama ben hâlâ buradayım' sözü meme'e dönüştü.",
    },
    {
      title: "Bodrum'da Hata",
      year: "2024",
      streams: "180M",
      note: "Yaz hiti. Klip çekimi sırasında tekne turunda 3 kez deniz tuttu. Kimseye söylemedin.",
    },
    {
      title: "3:47",
      year: "2025",
      streams: "310M",
      note: "Gecenin 3:47'sinde yazdığını söyledin. Gerçekte saat 14:47'ydi, cips yiyordun.",
    },
    {
      title: "Kibrit",
      year: "2025",
      streams: "95M",
      note: "İsmi yanlışlıkla autocorrect yüzünden değişti. Orijinal isim 'Küçük Kibrit'ti. Geri dönüş yok.",
    },
  ],
  projects: [
    {
      title: "Hüzün Mahallesi",
      type: "Dizi (Netflix)",
      year: "2024",
      role: "Rüzgar",
      note: "Kötü çocuk rolü. At sahnesi için 11 kez düştün. Hayranlar 'Rüzgar' dövmesi yaptırdı.",
    },
    {
      title: "Son Şans",
      type: "Film",
      year: "2025",
      role: "Mert",
      note: "Romantik komedi. Öpüşme sahnesi 14 kez çekildi çünkü her seferinde güldün.",
    },
    {
      title: "Gece Lambası",
      type: "Dizi",
      year: "2023",
      role: "Garson Ali",
      note: "İlk rol, 3 bölüm, tek replik: 'Kahveniz hazır efendim.' O replik viral oldu.",
    },
  ],
  funFacts: [
    "Hüzün Mahallesi galasına gömleğini ters giydin. Kırmızı halıdan döndükten sonra fark ettin.",
    "'Son Şans' galasında tam senaryoyu yazdığın eski sevgiliye çarptın. 45 dakika yan yana fotoğraf verdiniz.",
    "'Çay Soğudu'yu canlı söylerken ikinci kıtayı unutup 30 saniye sadece mırıldandın. İzleyiciler ağladı.",
    "Şampiyonluk tweeti atarken yanlış hesabı etiketledin. Parodi Galatasaray hesabı. 2 saat fark etmedin.",
  ],
};

// ─── SORULAR ────────────────────────────────────────────────────────

export const QUESTIONS: Question[] = [
  // MÜZİK — şarkılara atıfla
  {
    id: 1, category: "Müzik", emoji: "☕",
    text: "'Çay Soğudu'yu yazarken gerçekten kahve masasında mıydın, yoksa o sahneyi sonradan mı uydurup sattın bize?",
  },
  {
    id: 2, category: "Müzik", emoji: "🏝️",
    text: "'Bodrum'da Hata' klibinde tekne üstünde o kadar doğal görünüyordun — deniz tutması fotoğraflara yansıdı mı hiç?",
  },
  {
    id: 3, category: "Müzik", emoji: "🕓",
    text: "'3:47'nin saat 14:47'de cips yerken yazıldığını bir gün itiraf edecek misin?",
  },
  {
    id: 4, category: "Müzik", emoji: "🔥",
    text: "'Kibrit'in adı autocorrect yüzünden değişti diye bir iddia var. Doğru mu, yoksa bu da bir PR hamlesi mi?",
  },
  {
    id: 5, category: "Müzik", emoji: "🎤",
    text: "'Çay Soğudu' canlı performansında ikinci kıtayı unutunca seyirci ağladı. Sen ne hissettin o 30 saniyede?",
  },
  {
    id: 6, category: "Müzik", emoji: "📈",
    text: "240 milyon dinlenme. Çayın bu kadar üzücü olduğunu bilen senin miydin, yoksa Spotify algoritması mı karar verdi?",
  },
  {
    id: 7, category: "Müzik", emoji: "🎶",
    text: "Hangi şarkın seni en az temsil ediyor ama en çok sevildi?",
  },
  {
    id: 8, category: "Müzik", emoji: "🏆",
    text: "4 şarkınla bu kadar hızlı yükselmek mümkündü; bu hız seni korkuttu mu hiç?",
  },
  {
    id: 9, category: "Müzik", emoji: "🎼",
    text: "Bir sonraki şarkının adını şimdi söylemek zorunda olsaydın ne derdin?",
  },
  {
    id: 10, category: "Müzik", emoji: "🎧",
    text: "Sahnede şarkını söylerken seyirci sözleri senden daha iyi biliyor mu artık?",
  },
  {
    id: 11, category: "Komik", emoji: "😂",
    text: "'Çay Soğudu' TikTok trendi başladığında ilk tepkin ne oldu — utandın mı, yoksa mutfağa koşup çay mı koydun?",
  },
  {
    id: 12, category: "Komik", emoji: "🤢",
    text: "'Bodrum'da Hata' klibinde deniz tutmasına karşın 'tamam bir daha' diyebildin mi, yoksa yönetmeni tehdit ettin mi?",
  },

  // OYUNCULUK — projelere atıfla
  {
    id: 13, category: "Oyunculuk", emoji: "🐴",
    text: "Hüzün Mahallesi'nde at sahnesi için 11 kez düştüğünde yönetmen ne dedi? Sen ne dedin?",
  },
  {
    id: 14, category: "Oyunculuk", emoji: "😂",
    text: "Son Şans'ta öpüşme sahnesi 14 deneme sürdü çünkü gülüyordun. Karşı oyuncuyla bakışıp ikinci gülme de ondan mı başladı?",
  },
  {
    id: 15, category: "Oyunculuk", emoji: "☕",
    text: "'Kahveniz hazır efendim' repliğini viral yapan Gece Lambası rolü — o sahnede şansın mıydı, yoksa bir şeyler mi yaptın?",
  },
  {
    id: 16, category: "Oyunculuk", emoji: "🌟",
    text: "Hayranlar 'Rüzgar' dövmesi yaptırıyor. Bunu duyunca korkuyor musun, mutlu oluyorsun, yoksa her ikisi de mi?",
  },
  {
    id: 17, category: "Oyunculuk", emoji: "🎬",
    text: "Rüzgar ile sen arasında gerçekten ne kadar fark var? Kötü çocuk tarafın hiç var mı?",
  },
  {
    id: 18, category: "Oyunculuk", emoji: "🎭",
    text: "Son Şans'ta 'Mert' çaresiz bir romantik. Sen aynı hatayı gerçek hayatta yaptın mı?",
  },
  {
    id: 19, category: "Oyunculuk", emoji: "📺",
    text: "Netflix seni Hüzün Mahallesi için seçtiğinde aklından geçen ilk şey ne oldu?",
  },
  {
    id: 20, category: "Oyunculuk", emoji: "🎥",
    text: "Şarkıcı mısın oyuncu mu artık? Cevabında yalan söyleme.",
  },

  // AŞK & İLİŞKİ — olaylara atıf
  {
    id: 21, category: "Aşk & İlişki", emoji: "💔",
    text: "'Çay Soğudu'nun o kişi için yazıldığını herkes biliyor. O kişi şarkıyı ilk duyduğunda ne yaptı?",
  },
  {
    id: 22, category: "Aşk & İlişki", emoji: "😳",
    text: "Son Şans galasında eski sevgilinle 45 dakika yan yana fotoğraf verdiniz. O fotoğrafları sonradan gördün mü?",
  },
  {
    id: 23, category: "Aşk & İlişki", emoji: "🌹",
    text: "Bir kadın seni ilk kez 'şarkıcı olarak değil, insan olarak' gördüğü an nasıl oldu?",
  },
  {
    id: 24, category: "Aşk & İlişki", emoji: "📱",
    text: "Takıldığın biri 'Çay Soğudu'yu dinliyor mu diye profilini kontrol ettin mi hiç?",
  },
  {
    id: 25, category: "Aşk & İlişki", emoji: "💌",
    text: "Şarkı dışında birine yazdığın en romantik şey neydi? 'Kahveni ısıt' geçerli değil.",
  },
  {
    id: 26, category: "Aşk & İlişki", emoji: "🔥",
    text: "Seni tanımayan biri mi daha çok ilgini çekiyor, yoksa tüm şarkılarını ezberleyen mi?",
  },
  {
    id: 27, category: "Aşk & İlişki", emoji: "💬",
    text: "Bodrum'da hata yapılan kişi kim? Evet, gerçekten.",
  },
  {
    id: 28, category: "Aşk & İlişki", emoji: "🥂",
    text: "İlk randevuda müziğinden mi bahsedilmesini istiyorsun yoksa hiç bahsedilmemesini mi?",
  },
  {
    id: 29, category: "Aşk & İlişki", emoji: "💘",
    text: "Sana 'sen çok ünlüsün, ben sana yetişemem' diyen oldu mu? Ne dedin?",
  },

  // HAYAT
  {
    id: 30, category: "Hayat", emoji: "🌅",
    text: "6 ay önce neredeydin? O zamanki sen bugünkü sene ne derdi?",
  },
  {
    id: 31, category: "Hayat", emoji: "🪞",
    text: "Aynaya bakıp 'sen kimsin be?' dediğin oldu mu son zamanlarda?",
  },
  {
    id: 32, category: "Hayat", emoji: "🧠",
    text: "Bu kadar hızlı yükselişle başa çıkmak için ne yapıyorsun? Yoksa yapamıyor musun?",
  },
  {
    id: 33, category: "Hayat", emoji: "🌊",
    text: "Her şeyi bırakıp gidebilseydin nereye giderdin ve kim olurdun?",
  },
  {
    id: 34, category: "Hayat", emoji: "⏳",
    text: "Geçen 6 ayda geri alabildiğin bir şey olsa ne olurdu?",
  },
  {
    id: 35, category: "Hayat", emoji: "💫",
    text: "Şöhret sana ne kazandırdı, ne kaybettirdi — dürüstçe?",
  },
  {
    id: 36, category: "Hayat", emoji: "🌙",
    text: "En kötü gecelerin nasıl geçiyor? Sabah iyi geliyor mu?",
  },
  {
    id: 37, category: "Hayat", emoji: "🧩",
    text: "Hayatında hâlâ çözmediğin bir şey var mı?",
  },
  {
    id: 38, category: "Hayat", emoji: "💭",
    text: "Yalnız kalabildiğinde ne yapıyorsun, gerçekten?",
  },
  {
    id: 39, category: "Hayat", emoji: "🎯",
    text: "Başarılı olduğunu ilk hissettiğin an ne zamandı — kesin bir an vardır.",
  },

  // ŞÖHRET
  {
    id: 40, category: "Şöhret", emoji: "👗",
    text: "Hüzün Mahallesi galasına gömleğini ters giyip kırmızı halıdan çıktın. O fotoğrafı ilk gördüğünde ne hissettin?",
  },
  {
    id: 41, category: "Şöhret", emoji: "📰",
    text: "Hakkında çıkan en saçma haber hangisiydi?",
  },
  {
    id: 42, category: "Şöhret", emoji: "📸",
    text: "Paparazzi seni en kötü anında yakaladı — o an ne yapıyordun?",
  },
  {
    id: 43, category: "Şöhret", emoji: "🤳",
    text: "Hayranların seni yanlış anlayan en büyük şey ne?",
  },
  {
    id: 44, category: "Şöhret", emoji: "🏨",
    text: "5 yıldızlı otelde yalnız mı, sıradan evde birisiyle mi?",
  },
  {
    id: 45, category: "Şöhret", emoji: "🎪",
    text: "Tanınmamak için en son ne yaptın?",
  },

  // TARAFTAR SORUSU
  {
    id: 46, category: "Taraftar Sorusu", emoji: "🙋",
    text: "@caysogudu_fan: 'O şarkıyı yazarken çayın gerçekten soğudu mu, yoksa metafor muydu — çünkü bu çok önemli.'",
  },
  {
    id: 47, category: "Taraftar Sorusu", emoji: "💬",
    text: "@ruzgar_tattoo: 'Hüzün Mahallesi Rüzgar dövmemi gördün mü? Bilin ki hâlâ pişman değilim.'",
  },
  {
    id: 48, category: "Taraftar Sorusu", emoji: "🐴",
    text: "@setseyircisi: '11. düşüşte kameraman güldü mü? Çünkü görmek istiyorum.'",
  },
  {
    id: 49, category: "Taraftar Sorusu", emoji: "😅",
    text: "@secretfan_22: 'Son Şans'taki öpüşme sahnesini 14 kez çekmeniz kaç saatte bitti ve herkes nasıl yüzünüze bakabildi sonra?'",
  },
  {
    id: 50, category: "Taraftar Sorusu", emoji: "💘",
    text: "@meraklibiri: 'Çay Soğudu'yu sen için yazılan kişi hâlâ seni takip ediyor mu Instagram'da?'",
  },
  {
    id: 51, category: "Taraftar Sorusu", emoji: "🌙",
    text: "@gece3yarisi: '3:47'nin cips saatinde yazıldığını artık hepimiz biliyoruz. Hangi cipsti?'",
  },
  {
    id: 52, category: "Taraftar Sorusu", emoji: "🎤",
    text: "@konserdengeliyorum: 'Çay Soğudu'da 30 saniye mırıldandığında sahne ekibinden biri duraksadı mı, sana mesaj attı mı?'",
  },
  {
    id: 53, category: "Taraftar Sorusu", emoji: "👀",
    text: "@anonymgirl99: 'Hüzün Mahallesi'nde at üstünde düşüp kalkarken içten ne geçiyordu?'",
  },

  // KOMİK
  {
    id: 54, category: "Komik", emoji: "😂",
    text: "Garson Ali repliğini 'Kahveniz hazır efendim' 3 bölüm boyunca okuduğunda bu kadar işe yarayacağını tahmin eder miydin?",
  },
  {
    id: 55, category: "Komik", emoji: "🤦",
    text: "Kırmızı halıda gömleğin tersti. Bunu sana söyleyebilecek kimse mi yoktu, yoksa herkes söyleyemedi mi?",
  },
  {
    id: 56, category: "Komik", emoji: "🤡",
    text: "Autocorrect yüzünden şarkı adın 'Kibrit'e döndü. Yönetmenin tepkisi ne oldu?",
  },
  {
    id: 57, category: "Komik", emoji: "😴",
    text: "En son ne zaman gerçekten sıradan, sıkıcı bir gün geçirdin? 'Bilmiyorum' geçerli değil.",
  },
  {
    id: 58, category: "Komik", emoji: "🤦",
    text: "Deniz tutmasını klipte saklarken kullandığın teknik neydi? Yönetmen fark etti mi?",
  },
  {
    id: 59, category: "Komik", emoji: "😬",
    text: "Son Şans galasındaki o 45 dakika boyunca eski sevgilinle ne konuştunuz?",
  },
  {
    id: 60, category: "Komik", emoji: "🎭",
    text: "Kendi kendine rol yapıp ağlamayı denediğin oldu mu? İşe yaradı mı?",
  },

  // GALATASARAY
  {
    id: 61, category: "Galatasaray", emoji: "🔴🟡",
    text: "Şampiyonluk tweetinde yanlış hesabı etiketledin. 2 saat boyunca ne yapıyordun o sürede?",
  },
  {
    id: 62, category: "Galatasaray", emoji: "⚽",
    text: "Galatasaray kaybettiği gece stüdyo seansın var olsaydı ne yapardın?",
  },
  {
    id: 63, category: "Galatasaray", emoji: "😤",
    text: "Hakem kararından sonra Twitter'a yazdığın en çılgın tweet neydi? Sildin mi?",
  },
  {
    id: 64, category: "Galatasaray", emoji: "🏟️",
    text: "RAMS Park tribününde miydin son şampiyonlukta? O gece çekim yoktu, değil mi?",
  },
  {
    id: 65, category: "Galatasaray", emoji: "😭",
    text: "Galatasaray yüzünden gerçekten ağladın mı? Cevap: evet. Ama ne zaman?",
  },
  {
    id: 66, category: "Galatasaray", emoji: "🔴",
    text: "Bir Fenerbahçeli röportaj için gelirse yüzüne bakabilir misin?",
  },
  {
    id: 67, category: "Galatasaray", emoji: "🎤",
    text: "Galatasaray için şarkı yazmayı düşündün mü? Dürüst ol, bu olabilir.",
  },
  {
    id: 68, category: "Taraftar Sorusu", emoji: "🏅",
    text: "@galatasarayasla: 'Yanlış hesabı etiketlediğinde o hesabın sahibi sana DM attı mı?'",
  },

  // SOSYAL MEDYA
  {
    id: 69, category: "Sosyal Medya", emoji: "📸",
    text: "En çok beğeni alan fotoğrafın ne kadar filtreli gerçekte?",
  },
  {
    id: 70, category: "Sosyal Medya", emoji: "🤳",
    text: "'Spontane' gözüken o hikayen için kaç deneme çekimi yaptın?",
  },
  {
    id: 71, category: "Sosyal Medya", emoji: "💬",
    text: "DM'lerine bakan biri olsa ne tür mesajlarla karşılaşır?",
  },
  {
    id: 72, category: "Sosyal Medya", emoji: "🗑️",
    text: "Paylaşıp sildiğin en kötü içerik ne? Neden sildin?",
  },
  {
    id: 73, category: "Sosyal Medya", emoji: "😬",
    text: "Yanlış hesaptan bir şey beğendin mi ya da yanlış hesaptan paylaşım yaptın mı?",
  },
  {
    id: 74, category: "Sosyal Medya", emoji: "🔴",
    text: "Live yayında beklenmedik bir şey oldu mu? Ne yaptın?",
  },
  {
    id: 75, category: "Sosyal Medya", emoji: "👀",
    text: "Reels'te takılıp kaldığında en uzun ne kadar vakit geçirdin?",
  },
  {
    id: 76, category: "Sosyal Medya", emoji: "🔔",
    text: "Bildirimleri kapattığın dönemler daha mı mutlusun?",
  },
  {
    id: 77, category: "Sosyal Medya", emoji: "🌐",
    text: "Sosyal medyan olmasa bugün kim olurdun?",
  },
];
