"use client";

import { useState, useEffect, useCallback } from "react";

type Category = "Müzik" | "Oyunculuk" | "Aşk & İlişki" | "Hayat" | "Şöhret" | "Taraftar Sorusu" | "Komik" | "Galatasaray" | "Sosyal Medya";

interface Question {
  id: number;
  text: string;
  category: Category;
  emoji: string;
}

const QUESTIONS: Question[] = [
  // --- MÜZİK ---
  { id: 1, category: "Müzik", emoji: "🎵", text: "En çok dinlenen şarkını ilk kez duyduğunda ne hissettin?" },
  { id: 2, category: "Müzik", emoji: "🎶", text: "Stüdyoda ağladığın bir şarkı oldu mu hiç?" },
  { id: 3, category: "Müzik", emoji: "🎤", text: "Sahneye çıkmadan önce kulaktan kulağa fısıldadığın bir ritüelin var mı?" },
  { id: 4, category: "Müzik", emoji: "🎸", text: "Hangi şarkını yazmayı keşke hiç bitirmeseydin?" },
  { id: 5, category: "Müzik", emoji: "🎼", text: "Şarkılarını duşta söyleyip kendinle utanç duyduğun oldu mu?" },
  { id: 6, category: "Müzik", emoji: "🏆", text: "Bir ödül töreni konuşması hazırladın mı hiç aklında? Ne söyledin?" },
  { id: 7, category: "Müzik", emoji: "🎹", text: "Plaform'da kendi şarkını shuffle'da bulup şarkıyı atlayan biri olur muydun?" },
  { id: 8, category: "Müzik", emoji: "💿", text: "Albüm yaparken 'bu çöp, siliyorum' dediğin ama sonradan pişman olduğun parça var mı?" },
  { id: 9, category: "Müzik", emoji: "🌙", text: "Sabah 3'te ağlayarak yazıldığı belli olan şarkın hangisi?" },
  { id: 10, category: "Müzik", emoji: "🎙️", text: "Konserinde seyirci yanlış sözleri bağırınca ne hissediyorsun?" },
  { id: 11, category: "Müzik", emoji: "🎧", text: "Başka bir sanatçının şarkısını gizlice dinleyip 'keşke ben yazsaydım' dediğin hangisi?" },
  { id: 12, category: "Müzik", emoji: "🎺", text: "Sahne performansında bugüne kadar yaşadığın en utanç verici kaza ne?" },
  { id: 13, category: "Müzik", emoji: "✨", text: "Müzik kariyerin boyunca seni en çok kim gerçekten sarstı?" },

  // --- OYUNCULUK ---
  { id: 14, category: "Oyunculuk", emoji: "🎬", text: "Oynadığın karakterin içinde ne kadar kaldın, setten sonra eve kim döndü?" },
  { id: 15, category: "Oyunculuk", emoji: "🎭", text: "Senaryo okurken 'bunu asla oynayamam' dediğin ama sonra en iyi yaptığın sahne hangisi?" },
  { id: 16, category: "Oyunculuk", emoji: "🌟", text: "Çekim setinde asistanın yoktu, en saçma şeyi kendin yapmak zorunda kaldığın an?" },
  { id: 17, category: "Oyunculuk", emoji: "🎥", text: "Yönetmenle gerçekten sinirlendiğin ama susup devam ettiğin bir sahne var mı?" },
  { id: 18, category: "Oyunculuk", emoji: "📺", text: "Oynadığın diziye başka biri seçilseydi kim olmasını isterdin?" },
  { id: 19, category: "Oyunculuk", emoji: "😭", text: "Setin dışında ağlamak zorunda kaldığın en zorlu sahne hangisiydi?" },
  { id: 20, category: "Oyunculuk", emoji: "🎬", text: "Karşı oyuncunla gerçekten anlaşamadın, ama izleyici 'inanılmaz kimya' dedi — böyle bir deneyim yaşadın mı?" },
  { id: 21, category: "Oyunculuk", emoji: "🎞️", text: "Sinema filmin vizyona girdiğinde sinemaya yalnız girip kendi filmine baktın mı?" },

  // --- AŞK & İLİŞKİ ---
  { id: 22, category: "Aşk & İlişki", emoji: "💘", text: "Bir kadın seni gerçekten şaşırtmak istese ne yapmalı?" },
  { id: 23, category: "Aşk & İlişki", emoji: "❤️", text: "Ünlü olduktan sonra birine âşık olmak nasıl bir şey? Seni görmüyorlar mı artık?" },
  { id: 24, category: "Aşk & İlişki", emoji: "💔", text: "Ayrılığı şarkıya dönüştürdüğün oldu mu? O kadın bunun farkında mı?" },
  { id: 25, category: "Aşk & İlişki", emoji: "🌹", text: "Seni terk eden birinin şarkını Spotify'da dinlediğini öğrenseydin ne hissederdin?" },
  { id: 26, category: "Aşk & İlişki", emoji: "💌", text: "Bir kadına yazdığın en romantik şey neydi — şarkı dışında?" },
  { id: 27, category: "Aşk & İlişki", emoji: "🥂", text: "İlk randevuda para ödemek mi gerekiyor hâlâ, yoksa şimdi farklı bir oyun mu var?" },
  { id: 28, category: "Aşk & İlişki", emoji: "📱", text: "Takıldığın biri Instagram'ını takip etti mi hiç? Ne hissettin?" },
  { id: 29, category: "Aşk & İlişki", emoji: "🎵", text: "Bir kadın sana 'ben senin şarkılarını tanımıyorum' dese bu seni daha mı çeker?" },
  { id: 30, category: "Aşk & İlişki", emoji: "🤍", text: "Sevişmeden önce mi kendi müziğini açardın yoksa asla mı?" },
  { id: 31, category: "Aşk & İlişki", emoji: "💬", text: "Hayatına giren kadınların ortak özelliği ne dersin, farkında mısın bile?" },
  { id: 32, category: "Aşk & İlişki", emoji: "🔥", text: "Sana 'sen çok ünlüsün, ben sana yetişemem' diyen biri oldu mu? Ne dedin?" },

  // --- HAYAT ---
  { id: 33, category: "Hayat", emoji: "🌅", text: "Sabah uyandığında ilk aklına gelen şey ne oluyor?" },
  { id: 34, category: "Hayat", emoji: "🪞", text: "Aynaya bakıp 'sen kimsin be?' dediğin oldu mu hiç?" },
  { id: 35, category: "Hayat", emoji: "🧠", text: "Terapi gördün mü? Ya da şöhret kendi başına yeterince terapi mi?" },
  { id: 36, category: "Hayat", emoji: "💭", text: "Yalnız kalabildiğinde ne yapıyorsun, gerçekten?" },
  { id: 37, category: "Hayat", emoji: "🌊", text: "Her şeyi bırakıp gidebilseydin nereye giderdin ve kim olurdun?" },
  { id: 38, category: "Hayat", emoji: "⏳", text: "Kariyerinde geri alabildiğin tek bir karar ne olurdu?" },
  { id: 39, category: "Hayat", emoji: "🎯", text: "Gerçekten başarılı olduğunu ilk hissettiğin an ne zaman oldu?" },
  { id: 40, category: "Hayat", emoji: "🌿", text: "Şöhretten önce kim olduğunu hatırlamakta zorlanıyor musun bazen?" },
  { id: 41, category: "Hayat", emoji: "🧩", text: "Hayatında hâlâ çözmediğin bir şey ne?" },
  { id: 42, category: "Hayat", emoji: "🌙", text: "En kötü gecelerin nasıl geçiyor? Sabah iyi geliyor mu?" },
  { id: 43, category: "Hayat", emoji: "💫", text: "Kendine verdiğin en önemli tavsiye neydi ve bunu kaç yaşında öğrendin?" },

  // --- ŞÖHRET ---
  { id: 44, category: "Şöhret", emoji: "📸", text: "Paparazzi seni en kötü anında yakaladı — o fotoğraf nerede, ne yapıyordun?" },
  { id: 45, category: "Şöhret", emoji: "📰", text: "Hakkında çıkan en saçma haber hangisiydi?" },
  { id: 46, category: "Şöhret", emoji: "🌍", text: "Ünlü olmak sana ne kazandırdı, ne kaybettirdi?" },
  { id: 47, category: "Şöhret", emoji: "🤳", text: "Hayranların sana dair en yanlış bildikleri şey ne?" },
  { id: 48, category: "Şöhret", emoji: "🏨", text: "5 yıldızlı otelde tek başına kalmak mı, yoksa sıradan bir evde birisiyle mi?" },
  { id: 49, category: "Şöhret", emoji: "🎪", text: "Kalabalık bir etkinlikte tanınmamak için ne kadar çaba harcıyorsun?" },
  { id: 50, category: "Şöhret", emoji: "💬", text: "Twitter/X'te hakkında çıkan bir tweet seni gerçekten üzdü mü?" },

  // --- TARAFTAN SORUSU ---
  { id: 51, category: "Taraftar Sorusu", emoji: "🙋", text: "@kullanici45: 'Yemek yiyor musun, yoksa o vücudu sadece karizmayla mı besliyorsun?'" },
  { id: 52, category: "Taraftar Sorusu", emoji: "👾", text: "@gecenin_sesi: 'En son ne zaman gerçekten sıkıcı bir gün geçirdin? Cevap: 'hiç' deme.'" },
  { id: 53, category: "Taraftar Sorusu", emoji: "💬", text: "@meraklican: 'Şarkı söylemesen, dizi oynamasan... ne işe yarardın?'" },
  { id: 54, category: "Taraftar Sorusu", emoji: "🎤", text: "@hayran_2019: 'Konserinde ön sırada ağlayan kızı fark ettim. Sen de fark ettin mi, ne hissettin?'" },
  { id: 55, category: "Taraftar Sorusu", emoji: "🤔", text: "@sualatik: 'Sabah kalktığında yüzün gerçekten o kadar mı iyi görünüyor, yoksa filtreli mi yaşıyorsun?'" },
  { id: 56, category: "Taraftar Sorusu", emoji: "🌙", text: "@gece3yarisinda: 'Gece 3'te ne yapıyorsun, ben bunu gerçekten bilmek istiyorum.'" },
  { id: 57, category: "Taraftar Sorusu", emoji: "😅", text: "@dürüstsoruyorum: 'Seni tanımayan biri severse mi daha çok memnun oluyorsun, yoksa şarkılarından bilen mi?'" },
  { id: 58, category: "Taraftar Sorusu", emoji: "🎬", text: "@filmli_can: 'Oynadığın dizideki o sahneyi kaç kez çektiniz, gerçekte ne kadar sürdü?'" },
  { id: 59, category: "Taraftar Sorusu", emoji: "🏃", text: "@koşucucan: 'Stalkerlıktan en uzak tuttuğun an ne oldu? Çünkü biz takıyoruz.'" },
  { id: 60, category: "Taraftar Sorusu", emoji: "💘", text: "@anonymgirl: 'Hayranın olduğunu bildiğin birine nasıl davranıyorsun — içten mi, yoksa profesyonel mi?'" },

  // --- KOMİK ---
  { id: 61, category: "Komik", emoji: "😂", text: "Kendi şarkını söylerken sözleri unuttuğun oldu mu?" },
  { id: 62, category: "Komik", emoji: "🤦", text: "Setde veya sahnede pantolonun yırtıldı mı, ne yaptın?" },
  { id: 63, category: "Komik", emoji: "🍕", text: "Çekimler arasında en absürd şekilde ne yemek yemek zorunda kaldın?" },
  { id: 64, category: "Komik", emoji: "😴", text: "Kamera karşısında uyuyakaldığın ya da neredeyse uyuyakaldığın oldu mu?" },
  { id: 65, category: "Komik", emoji: "🤡", text: "Kendin hakkında duyduğun en saçma dedikodu ne — gerçekten söyle?" },
  { id: 66, category: "Komik", emoji: "👗", text: "Stilitinizin sizi en çok mahvettiği kıyafet hangisiydi?" },
  { id: 67, category: "Komik", emoji: "🎭", text: "Ağlama sahnesi için soğan kokladın mı yoksa başka bir yöntem mi?" },
  { id: 68, category: "Komik", emoji: "🚕", text: "Tanınmamak için en garip kılığa girdiğin ya da en saçma şeyi yaptığın an?" },
  { id: 69, category: "Komik", emoji: "🌮", text: "Bir ödül töreninde sahneye çıkmadan önce ne yiyorsun? 'Sahnedeyken taco yesem?' dediğin oldu mu?" },

  // --- GALATASARAY ---
  { id: 70, category: "Galatasaray", emoji: "🔴🟡", text: "Galatasaray kaybettiğinde stüdyoda kayıt yapmaya çalışıp başaramadığın oldu mu?" },
  { id: 71, category: "Galatasaray", emoji: "⚽", text: "Maç günü için iptal ettiğin en önemli iş toplantısı veya çekim hangisiydi?" },
  { id: 72, category: "Galatasaray", emoji: "🏟️", text: "RAMS Park'ta tribünde olan biri olarak sahnedeki enerjiyle farkı nasıl tanımlarsın?" },
  { id: 73, category: "Galatasaray", emoji: "😤", text: "Hakem kararından sonra Twitter'da paylaştığın en ateşli tweetin ne oldu?" },
  { id: 74, category: "Galatasaray", emoji: "🔴", text: "Bir Fenerbahçeli röportaj için sana gelirse nasıl davranırsın, dürüst ol?" },
  { id: 75, category: "Galatasaray", emoji: "🏆", text: "Şampiyonluk kutlamasında hayatının en çılgın anı ne oldu?" },
  { id: 76, category: "Galatasaray", emoji: "😭", text: "Galatasaray yüzünden ağladın mı? Gerçekten?" },
  { id: 77, category: "Galatasaray", emoji: "📱", text: "Maç sırasında sosyal medyaya attığın ve sonra sildiğin bir şey var mı?" },
  { id: 78, category: "Galatasaray", emoji: "🎤", text: "Galatasaray şampiyonluk şarkısı yazmayı düşündün mü hiç?" },
  { id: 79, category: "Taraftar Sorusu", emoji: "🏅", text: "@galatasarayasla: 'Galatasaray kalecisi bir hata yaparsa sahneye çıkabilir misin o gece?'" },

  // --- SOSYAL MEDYA ---
  { id: 80, category: "Sosyal Medya", emoji: "📸", text: "En çok beğeni alan fotoğrafın ne kadar filtreli gerçekte?" },
  { id: 81, category: "Sosyal Medya", emoji: "🤳", text: "'Spontane' gözüken o hikayen için kaç deneme çekimi yaptın?" },
  { id: 82, category: "Sosyal Medya", emoji: "💬", text: "DM'lerine bakan biri olsa ne tür mesajlarla karşılaşır?" },
  { id: 83, category: "Sosyal Medya", emoji: "🔔", text: "Bildirim sesini kapattığın zamanlar mı daha mutlu oluyorsun, yoksa açık olduğunda mı?" },
  { id: 84, category: "Sosyal Medya", emoji: "😬", text: "Yanlış hesaptan bir şey paylaşma ya da yanlışlıkla bir şey beğenme oldu mu?" },
  { id: 85, category: "Sosyal Medya", emoji: "🗑️", text: "Paylaşıp sildiğin içerik için en saçma gerekçen ne?" },
  { id: 86, category: "Sosyal Medya", emoji: "👀", text: "Reels'te takılıp kaldığında en uzun ne kadar vakit geçirdin? Cevap: 'az' deme." },
  { id: 87, category: "Sosyal Medya", emoji: "🔴", text: "Live yayında beklenmedik bir şey oldu mu? Yayını kapattın mı kaçarak?" },
  { id: 88, category: "Sosyal Medya", emoji: "💀", text: "Takip etmek isteyip cesaret edemediğin biri var mı? Neden?" },
  { id: 89, category: "Sosyal Medya", emoji: "🌐", text: "Sosyal medyan olmasa bugün kim olurdun — hem gerçekten hem mecazi olarak?" },
];

const CATEGORY_COLORS: Record<Category, string> = {
  "Müzik": "bg-purple-500/10 text-purple-300 border-purple-500/30",
  "Oyunculuk": "bg-blue-500/10 text-blue-300 border-blue-500/30",
  "Aşk & İlişki": "bg-pink-500/10 text-pink-300 border-pink-500/30",
  "Hayat": "bg-green-500/10 text-green-300 border-green-500/30",
  "Şöhret": "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
  "Taraftar Sorusu": "bg-orange-500/10 text-orange-300 border-orange-500/30",
  "Komik": "bg-red-500/10 text-red-300 border-red-500/30",
  "Galatasaray": "bg-red-600/15 text-red-200 border-red-500/40",
  "Sosyal Medya": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Stars() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animation: `twinkle ${3 + Math.random() * 4}s ${Math.random() * 4}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [skipped, setSkipped] = useState(0);

  useEffect(() => {
    setQuestions(shuffle(QUESTIONS));
  }, []);

  const advance = useCallback((isSkip = false) => {
    if (animating) return;
    setAnimating(true);
    if (isSkip) setSkipped((s) => s + 1);
    setTimeout(() => {
      setIndex((i) => {
        const next = i + 1;
        if (next >= questions.length) {
          setFinished(true);
          return i;
        }
        return next;
      });
      setAnimating(false);
    }, 280);
  }, [animating, questions.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!started || finished) return;
      if (e.key === "ArrowRight" || e.key === "Enter") advance(false);
      if (e.key === "ArrowLeft" || e.key === "Escape") advance(true);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [started, finished, advance]);

  const current = questions[index];
  const progress = questions.length ? ((index) / questions.length) * 100 : 0;
  const answered = index - skipped;

  if (!started) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <Stars />
        <div className="text-center max-w-xl relative z-10">
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: "var(--accent)" }}>
            ÖZEL RÖPORTAJ
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--text)" }}
          >
            Seni Kim
            <br />
            <span className="shimmer-text">Tanıyor?</span>
          </h1>
          <p className="text-lg mb-10" style={{ color: "var(--muted)" }}>
            {QUESTIONS.length} soru hazır. Geçebilirsin, durabilirsin, dürüst olabilirsin.
            <br />
            Ya da hiçbiri.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="btn-next px-10 py-4 rounded-full text-base tracking-wide"
          >
            Başla →
          </button>
          <p className="mt-6 text-xs" style={{ color: "var(--muted)" }}>
            ← → tuşları veya butonlarla ilerle
          </p>
        </div>
      </main>
    );
  }

  if (finished) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <Stars />
        <div className="text-center max-w-lg relative z-10 animate-fade-in-up">
          <div className="text-6xl mb-6">🎬</div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--text)" }}
          >
            Röportaj Bitti!
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>
            <span style={{ color: "var(--accent)" }}>{answered}</span> soru yanıtlandı,{" "}
            <span style={{ color: "var(--muted)" }}>{skipped}</span> soru geçildi.
          </p>
          <button
            onClick={() => {
              setQuestions(shuffle(QUESTIONS));
              setIndex(0);
              setSkipped(0);
              setFinished(false);
              setAnimating(false);
            }}
            className="btn-next px-10 py-4 rounded-full text-base tracking-wide"
          >
            Yeniden Başla
          </button>
        </div>
      </main>
    );
  }

  if (!current) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative">
      <Stars />

      {/* Progress */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-1 w-full" style={{ background: "var(--border)" }}>
          <div className="progress-bar h-1" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            RÖPORTAJ
          </span>
          <span className="text-sm" style={{ color: "var(--muted)" }}>
            {index + 1} / {questions.length}
          </span>
        </div>

        {/* Card */}
        <div
          key={index}
          className={`rounded-2xl p-8 md:p-12 mb-8 glow-border ${animating ? "animate-slide-out" : "animate-fade-in-up"}`}
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          {/* Category */}
          <div className="mb-6">
            <span
              className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border font-medium tracking-wide ${CATEGORY_COLORS[current.category]}`}
            >
              {current.emoji} {current.category}
            </span>
          </div>

          {/* Question */}
          <p
            className="text-2xl md:text-3xl leading-relaxed font-medium"
            style={{ color: "var(--text)", fontFamily: "'Playfair Display', serif" }}
          >
            {current.text}
          </p>

          {/* Decorative line */}
          <div className="mt-8 h-px" style={{ background: "var(--border)" }} />
          <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>
            Soru #{index + 1}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => advance(true)}
            className="btn-skip px-8 py-3.5 rounded-full text-sm tracking-wide"
          >
            Geç →
          </button>
          <button
            onClick={() => advance(false)}
            className="btn-next px-8 py-3.5 rounded-full text-sm tracking-wide"
          >
            Sonraki Soru ✦
          </button>
        </div>

        {/* Stats */}
        <p className="text-center mt-6 text-xs" style={{ color: "var(--muted)" }}>
          {answered} yanıtlandı · {skipped} geçildi
        </p>
      </div>
    </main>
  );
}
