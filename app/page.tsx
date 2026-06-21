"use client";

import { useState, useEffect, useCallback } from "react";
import {
  QUESTIONS, PERSONA, ALL_CATEGORIES, CATEGORY_COLORS, CATEGORY_EMOJIS,
  ONEDIO_QUESTIONS, ROAST_ENTRIES, GALAKSI_SORULARI,
  type Category, type Question, type OnedioQuestion, type RoastEntry, type GalaksiSoru,
} from "./data";

type MainScreen = "start" | "quiz" | "done";
type OnedioScreen = "pick" | "question" | "done";
type Tab = "röportaj" | "onedio" | "roast" | "galaksi";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Stars background ───────────────────────────────────────────────
function Stars() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {Array.from({ length: 45 }).map((_, i) => (
        <div key={i} className="star" style={{
          width: `${Math.random() * 2 + 1}px`, height: `${Math.random() * 2 + 1}px`,
          top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
          animation: `twinkle ${3 + Math.random() * 4}s ${Math.random() * 4}s ease-in-out infinite`,
        }} />
      ))}
    </div>
  );
}

// ── Profile modal ──────────────────────────────────────────────────
function ProfileModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}>
      <div className="w-full max-w-2xl rounded-2xl overflow-y-auto animate-fade-in-up"
        style={{ background: "var(--card)", border: "1px solid var(--border)", maxHeight: "90vh" }}>
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>UYDURMA ÖZGEÇMIŞ</p>
              <h2 className="text-3xl font-bold shimmer-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                {PERSONA.name}
              </h2>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{PERSONA.tagline}</p>
            </div>
            <button onClick={onClose} className="text-2xl leading-none ml-4" style={{ color: "var(--muted)" }}>✕</button>
          </div>

          <div className="mb-7">
            <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>UNUTULMAZ ANLAR</h3>
            <div className="space-y-2">
              {PERSONA.funFacts.map((f, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-xl" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.12)" }}>
                  <span className="shrink-0 mt-0.5">💥</span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>{f}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-7">
            <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>ŞARKILAR</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PERSONA.songs.map((s, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}>
                  <div className="flex gap-2 items-baseline mb-1 flex-wrap">
                    <span className="font-semibold" style={{ color: "var(--text)" }}>🎵 {s.title}</span>
                    <span className="text-xs" style={{ color: "var(--accent)" }}>{s.album}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{s.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>DİZİ & FİLM</h3>
            <div className="space-y-3">
              {PERSONA.projects.map((p, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}>
                  <div className="flex gap-2 items-baseline flex-wrap mb-1">
                    <span className="font-semibold" style={{ color: "var(--text)" }}>🎬 {p.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(201,168,76,0.12)", color: "var(--accent)" }}>{p.type}</span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>Rol: {p.role}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Category picker ────────────────────────────────────────────────
function CategoryPicker({ selected, onChange }: { selected: Set<Category>; onChange: (c: Set<Category>) => void }) {
  const toggle = (cat: Category) => {
    const next = new Set(selected);
    if (next.has(cat)) { if (next.size === 1) return; next.delete(cat); } else next.add(cat);
    onChange(next);
  };
  const allOn = selected.size === ALL_CATEGORIES.length;
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>KATEGORİLER</p>
        <button onClick={() => onChange(allOn ? new Set([ALL_CATEGORIES[0]]) : new Set(ALL_CATEGORIES))}
          className="text-xs underline" style={{ color: "var(--accent)" }}>
          {allOn ? "Temizle" : "Hepsini seç"}
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {ALL_CATEGORIES.map(cat => (
          <button key={cat} onClick={() => toggle(cat)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-150 ${selected.has(cat) ? CATEGORY_COLORS[cat] : "border-[var(--border)] text-[var(--muted)]"}`}>
            {CATEGORY_EMOJIS[cat]} {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Question card ──────────────────────────────────────────────────
function QuestionCard({ q, index, total, animClass }: { q: Question; index: number; total: number; animClass: string }) {
  return (
    <div key={index} className={`rounded-2xl p-8 md:p-12 mb-8 glow-border ${animClass}`}
      style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border font-medium tracking-wide ${CATEGORY_COLORS[q.category]}`}>
          {q.emoji} {q.category}
        </span>
        {q.author && (
          <span className="text-xs italic" style={{ color: "var(--muted)" }}>
            — {q.author}
          </span>
        )}
      </div>
      <p className="text-2xl md:text-3xl leading-relaxed font-medium"
        style={{ color: "var(--text)", fontFamily: "'Playfair Display', serif" }}>
        {q.text}
      </p>
      <div className="mt-8 h-px" style={{ background: "var(--border)" }} />
      <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>Soru #{index + 1} / {total}</p>
    </div>
  );
}

// ── MAIN QUIZ ──────────────────────────────────────────────────────
function MainQuiz({ onBack }: { onBack: () => void }) {
  const [selectedCats, setSelectedCats] = useState<Set<Category>>(new Set(ALL_CATEGORIES));
  const [questions, setQuestions] = useState<Question[]>([]);
  const [history, setHistory] = useState<number[]>([]);
  const [index, setIndex] = useState(0);
  const [animDir, setAnimDir] = useState<"fwd" | "back">("fwd");
  const [animating, setAnimating] = useState(false);
  const [screen, setScreen] = useState<MainScreen>("start");
  const [showProfile, setShowProfile] = useState(false);
  const [skipped, setSkipped] = useState(0);
  const [started, setStarted] = useState(false);

  const buildDeck = useCallback(() =>
    shuffle(QUESTIONS.filter(q => selectedCats.has(q.category))),
    [selectedCats]);

  const startQuiz = () => {
    setQuestions(buildDeck());
    setIndex(0); setHistory([]); setSkipped(0); setScreen("quiz"); setStarted(true);
  };

  const go = useCallback((isSkip: boolean, dir: "fwd" | "back" = "fwd") => {
    if (animating) return;
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => {
      if (dir === "back") {
        setHistory(h => {
          const prev = [...h];
          const prevIdx = prev.pop() ?? 0;
          if (isSkip) setSkipped(s => Math.max(0, s - 1));
          setIndex(prevIdx);
          return prev;
        });
      } else {
        setHistory(h => [...h, index]);
        if (isSkip) setSkipped(s => s + 1);
        setIndex(i => {
          const next = i + 1;
          if (next >= questions.length) { setScreen("done"); return i; }
          return next;
        });
      }
      setAnimating(false);
    }, 260);
  }, [animating, index, questions.length]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (screen !== "quiz" || showProfile) return;
      if (e.key === "ArrowRight" || e.key === "Enter") go(false, "fwd");
      if (e.key === "Escape") go(true, "fwd");
      if (e.key === "ArrowLeft" && history.length > 0) go(false, "back");
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [screen, showProfile, go, history.length]);

  const progress = questions.length ? (index / questions.length) * 100 : 0;
  const current = questions[index];
  const animClass = animating
    ? (animDir === "fwd" ? "animate-slide-out" : "animate-slide-out-back")
    : "animate-fade-in-up";

  if (!started) {
    return (
      <div className="w-full max-w-lg mx-auto">
        {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "var(--accent)" }}>ÖZEL RÖPORTAJ</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight shimmer-text" style={{ fontFamily: "'Playfair Display', serif" }}>
            Seni Kim<br />Tanıyor?
          </h1>
          <p className="text-base mb-2" style={{ color: "var(--muted)" }}>
            {QUESTIONS.length} soru, {ALL_CATEGORIES.length} kategori.
          </p>
          <button onClick={() => setShowProfile(true)} className="text-xs underline" style={{ color: "var(--accent)" }}>
            Özgeçmiş / Profil →
          </button>
        </div>
        <div className="rounded-2xl p-6 mb-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <CategoryPicker selected={selectedCats} onChange={setSelectedCats} />
          <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
            {QUESTIONS.filter(q => selectedCats.has(q.category)).length} soru seçili
          </p>
        </div>
        <button onClick={startQuiz} className="btn-next w-full py-4 rounded-full text-base tracking-wide">
          Röportajı Başlat →
        </button>
        <p className="text-center mt-4 text-xs" style={{ color: "var(--muted)" }}>← → ok tuşları · Enter = ileri · Esc = geç</p>
      </div>
    );
  }

  if (screen === "done") {
    return (
      <div className="text-center max-w-md mx-auto animate-fade-in-up">
        {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}
        <div className="text-6xl mb-6">🎬</div>
        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--text)" }}>
          Röportaj Bitti!
        </h2>
        <p className="text-base mb-8" style={{ color: "var(--muted)" }}>
          <span style={{ color: "var(--accent)" }}>{index - skipped}</span> yanıtlandı ·{" "}
          <span style={{ color: "var(--muted)" }}>{skipped}</span> geçildi
        </p>
        <div className="flex flex-col gap-3">
          <button onClick={startQuiz} className="btn-next px-10 py-4 rounded-full text-base tracking-wide">Yeniden Başla</button>
          <button onClick={() => setStarted(false)} className="btn-skip px-10 py-4 rounded-full text-base">Kategorileri Değiştir</button>
        </div>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}
      <div className="fixed top-8 left-0 right-0 z-40">
        <div className="h-0.5 w-full" style={{ background: "var(--border)" }}>
          <div className="progress-bar h-0.5" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => setShowProfile(true)} className="text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
          RÖPORTAJ ✦
        </button>
        <span className="text-sm" style={{ color: "var(--muted)" }}>{index + 1} / {questions.length}</span>
      </div>

      <QuestionCard q={current} index={index} total={questions.length} animClass={animClass} />

      <div className="flex gap-3 justify-center flex-wrap">
        <button onClick={() => go(false, "back")} disabled={history.length === 0}
          className="btn-skip px-6 py-3.5 rounded-full text-sm tracking-wide disabled:opacity-30 disabled:cursor-not-allowed">
          ← Geri
        </button>
        <button onClick={() => go(true, "fwd")} className="btn-skip px-6 py-3.5 rounded-full text-sm tracking-wide">
          Geç →
        </button>
        <button onClick={() => go(false, "fwd")} className="btn-next px-8 py-3.5 rounded-full text-sm tracking-wide">
          Sonraki ✦
        </button>
      </div>
      <p className="text-center mt-5 text-xs" style={{ color: "var(--muted)" }}>
        {index - skipped} yanıtlandı · {skipped} geçildi ·{" "}
        <button onClick={() => setShowProfile(true)} className="underline" style={{ color: "var(--accent)" }}>özgeçmiş</button>
      </p>
    </div>
  );
}

// ── ONEDİO JAR GAME ───────────────────────────────────────────────
const ONEDIO_TOTAL = 10;

function OnedioGame({ onBack }: { onBack: () => void }) {
  const [screen, setScreen] = useState<OnedioScreen>("pick");
  const [positivePool, setPositivePool] = useState<OnedioQuestion[]>([]);
  const [negativePool, setNegativePool] = useState<OnedioQuestion[]>([]);
  const [drawnQuestions, setDrawnQuestions] = useState<OnedioQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState<OnedioQuestion | null>(null);
  const [lastJar, setLastJar] = useState<"positive" | "negative" | null>(null);
  const [historyStack, setHistoryStack] = useState<OnedioQuestion[]>([]);
  const [animating, setAnimating] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setPositivePool(shuffle(ONEDIO_QUESTIONS.filter(q => q.type === "positive")));
    setNegativePool(shuffle(ONEDIO_QUESTIONS.filter(q => q.type === "negative")));
  }, []);

  const draw = (type: "positive" | "negative") => {
    if (animating || type === lastJar) return;
    const pool = type === "positive" ? positivePool : negativePool;
    if (pool.length === 0) return;
    const [q, ...rest] = pool;
    if (type === "positive") setPositivePool(rest);
    else setNegativePool(rest);

    if (currentQ) setHistoryStack(h => [...h, currentQ]);
    setCurrentQ(q);
    setDrawnQuestions(d => [...d, q]);
    setLastJar(type);
    setCount(c => c + 1);
    setAnimating(true);
    setTimeout(() => { setAnimating(false); setScreen("question"); }, 50);
  };

  const goBack = () => {
    if (historyStack.length === 0) { setCurrentQ(null); setScreen("pick"); return; }
    // return drawn question to pool
    if (currentQ) {
      if (currentQ.type === "positive") setPositivePool(p => [currentQ, ...p]);
      else setNegativePool(p => [currentQ, ...p]);
      setDrawnQuestions(d => d.slice(0, -1));
      setCount(c => Math.max(0, c - 1));
    }
    const prev = historyStack[historyStack.length - 1];
    setHistoryStack(h => h.slice(0, -1));
    setCurrentQ(prev);
    setLastJar(prev.type);
  };

  const next = () => {
    if (count >= ONEDIO_TOTAL) { setScreen("done"); return; }
    setScreen("pick");
  };

  const restart = () => {
    setPositivePool(shuffle(ONEDIO_QUESTIONS.filter(q => q.type === "positive")));
    setNegativePool(shuffle(ONEDIO_QUESTIONS.filter(q => q.type === "negative")));
    setDrawnQuestions([]); setHistoryStack([]); setCurrentQ(null);
    setLastJar(null); setCount(0); setScreen("pick");
  };

  const posCount = ONEDIO_QUESTIONS.filter(q => q.type === "positive").length - (ONEDIO_QUESTIONS.filter(q => q.type === "positive").length - positivePool.length);
  const negCount = ONEDIO_QUESTIONS.filter(q => q.type === "negative").length - (ONEDIO_QUESTIONS.filter(q => q.type === "negative").length - negativePool.length);

  if (screen === "done") {
    const pos = drawnQuestions.filter(q => q.type === "positive").length;
    const neg = drawnQuestions.filter(q => q.type === "negative").length;
    return (
      <div className="text-center max-w-md mx-auto animate-fade-in-up">
        <div className="text-6xl mb-6">🫙</div>
        <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "var(--text)" }}>
          Bitti!
        </h2>
        <p className="mb-1 text-sm" style={{ color: "var(--muted)" }}>
          <span style={{ color: "#fbbf24" }}>✅ {pos}</span> olumlu · <span style={{ color: "#94a3b8" }}>❌ {neg}</span> olumsuz
        </p>
        <p className="mb-8 text-base" style={{ color: "var(--muted)" }}>10 soruyu tamamladın.</p>
        <div className="flex flex-col gap-3">
          <button onClick={restart} className="btn-next px-10 py-4 rounded-full text-base tracking-wide">Yeniden Başla</button>
          <button onClick={onBack} className="btn-skip px-10 py-4 rounded-full text-base">Ana Menü</button>
        </div>
      </div>
    );
  }

  if (screen === "question" && currentQ) {
    const isPos = currentQ.type === "positive";
    return (
      <div className="w-full max-w-2xl mx-auto animate-fade-in-up">
        {/* Progress */}
        <div className="fixed top-8 left-0 right-0 z-40">
          <div className="h-0.5 w-full" style={{ background: "var(--border)" }}>
            <div className="progress-bar h-0.5" style={{ width: `${(count / ONEDIO_TOTAL) * 100}%` }} />
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <span className="text-xs tracking-widest uppercase" style={{ color: isPos ? "#fbbf24" : "#94a3b8" }}>
            {isPos ? "✅ OLUMLU KAVANOZU" : "❌ OLUMSUZ KAVANOZU"}
          </span>
          <span className="text-sm" style={{ color: "var(--muted)" }}>{count} / {ONEDIO_TOTAL}</span>
        </div>

        <div className={`rounded-2xl p-8 md:p-12 mb-8`}
          style={{
            background: "var(--card)",
            border: `1px solid ${isPos ? "rgba(251,191,36,0.3)" : "rgba(148,163,184,0.3)"}`,
            boxShadow: isPos ? "0 0 30px rgba(251,191,36,0.1)" : "0 0 30px rgba(100,116,139,0.1)",
          }}>
          <div className="text-4xl mb-6">{isPos ? "🫙" : "🫙"}</div>
          <p className="text-2xl md:text-3xl leading-relaxed font-medium"
            style={{ color: "var(--text)", fontFamily: "'Playfair Display', serif" }}>
            {currentQ.text}
          </p>
          <div className="mt-8 h-px" style={{ background: "var(--border)" }} />
          <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>
            Soru {count} / {ONEDIO_TOTAL}
          </p>
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <button onClick={goBack} className="btn-skip px-6 py-3.5 rounded-full text-sm tracking-wide">
            ← Geri
          </button>
          {count < ONEDIO_TOTAL ? (
            <button onClick={next} className="btn-next px-8 py-3.5 rounded-full text-sm tracking-wide">
              Kavanoz Seç ✦
            </button>
          ) : (
            <button onClick={() => setScreen("done")} className="btn-next px-8 py-3.5 rounded-full text-sm tracking-wide">
              Bitir ✦
            </button>
          )}
        </div>
      </div>
    );
  }

  // JAR PICK SCREEN
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="fixed top-8 left-0 right-0 z-40">
        <div className="h-0.5 w-full" style={{ background: "var(--border)" }}>
          <div className="progress-bar h-0.5" style={{ width: `${(count / ONEDIO_TOTAL) * 100}%` }} />
        </div>
      </div>

      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "var(--accent)" }}>ONEDİO MOD</p>
        <h2 className="text-4xl font-bold mb-2 shimmer-text" style={{ fontFamily: "'Playfair Display', serif" }}>
          Kavanozunu Seç
        </h2>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          {count} / {ONEDIO_TOTAL} soru çekildi
          {lastJar && <span> · Üst üste aynı kavanozdan çekemezsin</span>}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* OLUMLU */}
        {(() => {
          const disabled = lastJar === "positive" || positivePool.length === 0;
          return (
            <button onClick={() => draw("positive")} disabled={disabled}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl transition-all duration-200 ${disabled ? "opacity-40 cursor-not-allowed" : "hover:scale-105 cursor-pointer"}`}
              style={{
                background: disabled ? "rgba(251,191,36,0.04)" : "rgba(251,191,36,0.08)",
                border: `2px solid ${disabled ? "rgba(251,191,36,0.15)" : "rgba(251,191,36,0.4)"}`,
                boxShadow: disabled ? "none" : "0 0 24px rgba(251,191,36,0.15)",
              }}>
              <div className="text-6xl mb-4">🫙</div>
              <p className="font-semibold text-sm mb-1" style={{ color: "#fbbf24" }}>OLUMLU</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>{posCount} soru kaldı</p>
              {lastJar === "positive" && (
                <p className="text-xs mt-2" style={{ color: "rgba(251,191,36,0.5)" }}>Yeni çekilemez</p>
              )}
            </button>
          );
        })()}

        {/* OLUMSUZ */}
        {(() => {
          const disabled = lastJar === "negative" || negativePool.length === 0;
          return (
            <button onClick={() => draw("negative")} disabled={disabled}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl transition-all duration-200 ${disabled ? "opacity-40 cursor-not-allowed" : "hover:scale-105 cursor-pointer"}`}
              style={{
                background: disabled ? "rgba(100,116,139,0.04)" : "rgba(100,116,139,0.08)",
                border: `2px solid ${disabled ? "rgba(100,116,139,0.15)" : "rgba(100,116,139,0.4)"}`,
                boxShadow: disabled ? "none" : "0 0 24px rgba(100,116,139,0.1)",
              }}>
              <div className="text-6xl mb-4" style={{ filter: "grayscale(0.3)" }}>🫙</div>
              <p className="font-semibold text-sm mb-1" style={{ color: "#94a3b8" }}>OLUMSUZ</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>{negCount} soru kaldı</p>
              {lastJar === "negative" && (
                <p className="text-xs mt-2" style={{ color: "rgba(148,163,184,0.5)" }}>Yeni çekilemez</p>
              )}
            </button>
          );
        })()}
      </div>

      {count > 0 && (
        <div className="text-center">
          <button onClick={goBack} className="btn-skip px-6 py-3 rounded-full text-sm">
            ← Son Soruya Dön
          </button>
        </div>
      )}
    </div>
  );
}

// ── ROAST ─────────────────────────────────────────────────────────
function RoastTab() {
  const [deck, setDeck] = useState<RoastEntry[]>([]);
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const [animating, setAnimating] = useState(false);
  const [animDir, setAnimDir] = useState<"fwd" | "back">("fwd");

  useEffect(() => { setDeck(shuffle(ROAST_ENTRIES)); }, []);

  const go = (dir: "fwd" | "back") => {
    if (animating) return;
    if (dir === "back" && history.length === 0) return;
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => {
      if (dir === "fwd") {
        setHistory(h => [...h, index]);
        setIndex(i => (i + 1) % deck.length);
      } else {
        const prev = history[history.length - 1];
        setHistory(h => h.slice(0, -1));
        setIndex(prev);
      }
      setAnimating(false);
    }, 260);
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Enter") go("fwd");
      if (e.key === "ArrowLeft" && history.length > 0) go("back");
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [animating, history, index, deck.length]);

  const current = deck[index];
  if (!current) return null;

  const animClass = animating
    ? (animDir === "fwd" ? "animate-slide-out" : "animate-slide-out-back")
    : "animate-fade-in-up";

  const seen = history.length + 1;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="fixed top-8 left-0 right-0 z-40">
        <div className="h-0.5 w-full" style={{ background: "var(--border)" }}>
          <div className="progress-bar h-0.5" style={{ width: `${(seen / deck.length) * 100}%` }} />
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <span className="text-xs tracking-widest uppercase" style={{ color: "#ef4444" }}>
          🔥 ROAST
        </span>
        <span className="text-sm" style={{ color: "var(--muted)" }}>{seen} / {deck.length}</span>
      </div>

      <div key={index} className={`rounded-2xl p-8 md:p-12 mb-8 ${animClass}`}
        style={{
          background: "var(--card)",
          border: "1px solid rgba(239,68,68,0.25)",
          boxShadow: "0 0 32px rgba(239,68,68,0.07)",
        }}>
        <p className="text-xs italic mb-6" style={{ color: "rgba(239,68,68,0.6)" }}>
          — {current.nick}
        </p>
        <p className="text-xl md:text-2xl leading-relaxed"
          style={{ color: "var(--text)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
          "{current.text}"
        </p>
      </div>

      <div className="flex gap-3 justify-center">
        <button onClick={() => go("back")} disabled={history.length === 0}
          className="btn-skip px-6 py-3.5 rounded-full text-sm disabled:opacity-30 disabled:cursor-not-allowed">
          ← Geri
        </button>
        <button onClick={() => go("fwd")}
          className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #ef4444, #f97316)", color: "#fff" }}>
          Sonraki 🔥
        </button>
      </div>
      <p className="text-center mt-5 text-xs" style={{ color: "var(--muted)" }}>← → ok tuşları da çalışır</p>
    </div>
  );
}

// ── GALAKSİ REHBERİ ───────────────────────────────────────────────
function GalaksiTab() {
  const [deck] = useState<GalaksiSoru[]>(() => shuffle(GALAKSI_SORULARI));
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const [animating, setAnimating] = useState(false);
  const [animDir, setAnimDir] = useState<"fwd" | "back">("fwd");

  const go = (dir: "fwd" | "back") => {
    if (animating) return;
    if (dir === "back" && history.length === 0) return;
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => {
      if (dir === "fwd") {
        setHistory(h => [...h, index]);
        setIndex(i => (i + 1) % deck.length);
      } else {
        const prev = history[history.length - 1];
        setHistory(h => h.slice(0, -1));
        setIndex(prev);
      }
      setAnimating(false);
    }, 260);
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Enter") go("fwd");
      if (e.key === "ArrowLeft" && history.length > 0) go("back");
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [animating, history, index, deck.length]);

  const current = deck[index];
  if (!current) return null;

  const animClass = animating
    ? (animDir === "fwd" ? "animate-slide-out" : "animate-slide-out-back")
    : "animate-fade-in-up";

  const seen = history.length + 1;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="fixed top-8 left-0 right-0 z-40">
        <div className="h-0.5 w-full" style={{ background: "var(--border)" }}>
          <div className="h-0.5 transition-all duration-500" style={{ width: `${(seen / deck.length) * 100}%`, background: "linear-gradient(90deg, #6366f1, #a78bfa)" }} />
        </div>
      </div>

      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#a78bfa" }}>GALAKSİ REHBERİ</p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>Demirkol tarzı</p>
        </div>
        <span className="text-sm" style={{ color: "var(--muted)" }}>{seen} / {deck.length}</span>
      </div>

      <div key={index} className={`rounded-2xl p-8 md:p-14 mb-10 ${animClass}`}
        style={{
          background: "var(--card)",
          border: "1px solid rgba(99,102,241,0.25)",
          boxShadow: "0 0 40px rgba(99,102,241,0.08)",
        }}>
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            style={{ background: "linear-gradient(135deg,#6366f1,#a78bfa)", color: "#fff" }}>
            M
          </div>
          <span className="text-xs font-medium tracking-wide" style={{ color: "#a78bfa" }}>
            {current.nick}
          </span>
        </div>
        <p className="text-2xl md:text-3xl leading-relaxed font-medium"
          style={{ color: "var(--text)", fontFamily: "'Playfair Display', serif" }}>
          {current.text}
        </p>
        <div className="mt-10 h-px" style={{ background: "rgba(99,102,241,0.2)" }} />
        <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>Soru {seen} / {deck.length}</p>
      </div>

      <div className="flex gap-3 justify-center">
        <button onClick={() => go("back")} disabled={history.length === 0}
          className="btn-skip px-6 py-3.5 rounded-full text-sm disabled:opacity-30 disabled:cursor-not-allowed">
          ← Geri
        </button>
        <button onClick={() => go("fwd")}
          className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg,#6366f1,#a78bfa)", color: "#fff" }}>
          Sonraki ✦
        </button>
      </div>
      <p className="text-center mt-5 text-xs" style={{ color: "var(--muted)" }}>← → ok tuşları da çalışır</p>
    </div>
  );
}

// ── ROOT ───────────────────────────────────────────────────────────
export default function Home() {
  const [tab, setTab] = useState<Tab>("röportaj");

  const TAB_LABELS: Record<Tab, string> = {
    "röportaj": "🎤 Röportaj",
    "onedio": "🫙 Onedio",
    "roast": "🔥 Roast",
    "galaksi": "🌌 Galaksi",
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      <Stars />

      {/* Tab bar */}
      <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-center gap-1 pt-3 pb-2"
        style={{ background: "rgba(10,10,15,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)" }}>
        {(["röportaj", "onedio", "roast", "galaksi"] as Tab[]).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all ${
              tab === t && t !== "roast" && t !== "galaksi" ? "btn-next" :
              tab === t ? "text-white" : "text-[var(--muted)] hover:text-[var(--text)]"
            }`}
            style={
              tab === t && t === "roast" ? { background: "linear-gradient(135deg,#ef4444,#f97316)" } :
              tab === t && t === "galaksi" ? { background: "linear-gradient(135deg,#6366f1,#a78bfa)" } :
              {}
            }>
            {TAB_LABELS[t]}
          </button>
        ))}
      </div>

      <div className="w-full flex justify-center mt-10 relative z-10">
        {tab === "röportaj" && <MainQuiz onBack={() => {}} />}
        {tab === "onedio" && <OnedioGame onBack={() => setTab("röportaj")} />}
        {tab === "roast" && <RoastTab />}
        {tab === "galaksi" && <GalaksiTab />}
      </div>
    </main>
  );
}
