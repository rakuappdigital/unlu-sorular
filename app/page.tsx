"use client";

import { useState, useEffect, useCallback } from "react";
import {
  QUESTIONS,
  PERSONA,
  ALL_CATEGORIES,
  CATEGORY_COLORS,
  CATEGORY_EMOJIS,
  type Category,
  type Question,
} from "./data";

type Screen = "start" | "profile" | "quiz" | "done";

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
      {Array.from({ length: 45 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${3 + Math.random() * 4}s ${Math.random() * 4}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ── Profile Modal ──────────────────────────────────────────────────

function ProfileModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
    >
      <div
        className="w-full max-w-2xl rounded-2xl overflow-y-auto animate-fade-in-up"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          maxHeight: "90vh",
        }}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
                UYDURMA ÖZGEÇMIŞ
              </p>
              <h2
                className="text-3xl font-bold shimmer-text"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Kim olduğun
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                {PERSONA.tagline}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-2xl leading-none ml-4"
              style={{ color: "var(--muted)" }}
            >
              ✕
            </button>
          </div>

          {/* Fun Facts */}
          <div className="mb-8">
            <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              UNUTULMAZ ANLAR
            </h3>
            <div className="space-y-3">
              {PERSONA.funFacts.map((fact, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3 rounded-xl"
                  style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.12)" }}
                >
                  <span className="text-base mt-0.5 shrink-0">💥</span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                    {fact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Songs */}
          <div className="mb-8">
            <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              ŞARKILAR
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PERSONA.songs.map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-semibold" style={{ color: "var(--text)" }}>
                      🎵 {s.title}
                    </span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>
                      {s.year}
                    </span>
                  </div>
                  <p className="text-xs mb-1" style={{ color: "var(--accent)" }}>
                    {s.streams} dinlenme
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                    {s.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              DİZİ & FİLM
            </h3>
            <div className="space-y-3">
              {PERSONA.projects.map((p, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-baseline gap-2 flex-wrap mb-1">
                    <span className="font-semibold" style={{ color: "var(--text)" }}>
                      🎬 {p.title}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(201,168,76,0.12)", color: "var(--accent)" }}>
                      {p.type} · {p.year}
                    </span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>
                      Rol: {p.role}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                    {p.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Category Picker ────────────────────────────────────────────────

function CategoryPicker({
  selected,
  onChange,
}: {
  selected: Set<Category>;
  onChange: (c: Set<Category>) => void;
}) {
  const toggle = (cat: Category) => {
    const next = new Set(selected);
    if (next.has(cat)) {
      if (next.size === 1) return; // at least one
      next.delete(cat);
    } else {
      next.add(cat);
    }
    onChange(next);
  };

  const allOn = selected.size === ALL_CATEGORIES.length;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
          KATEGORİLER
        </p>
        <button
          onClick={() =>
            onChange(allOn ? new Set([ALL_CATEGORIES[0]]) : new Set(ALL_CATEGORIES))
          }
          className="text-xs underline"
          style={{ color: "var(--accent)" }}
        >
          {allOn ? "Hiçbirini seçme" : "Hepsini seç"}
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {ALL_CATEGORIES.map((cat) => {
          const on = selected.has(cat);
          return (
            <button
              key={cat}
              onClick={() => toggle(cat)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-150 ${
                on ? CATEGORY_COLORS[cat] : "border-[var(--border)] text-[var(--muted)]"
              }`}
            >
              {CATEGORY_EMOJIS[cat]} {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────

export default function Home() {
  const [screen, setScreen] = useState<Screen>("start");
  const [selectedCats, setSelectedCats] = useState<Set<Category>>(new Set(ALL_CATEGORIES));
  const [questions, setQuestions] = useState<Question[]>([]);
  const [history, setHistory] = useState<number[]>([]); // stack of indexes
  const [index, setIndex] = useState(0);
  const [animDir, setAnimDir] = useState<"forward" | "back">("forward");
  const [animating, setAnimating] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [skipped, setSkipped] = useState(0);

  const buildDeck = useCallback(() => {
    const filtered = QUESTIONS.filter((q) => selectedCats.has(q.category));
    return shuffle(filtered);
  }, [selectedCats]);

  const startQuiz = () => {
    const deck = buildDeck();
    setQuestions(deck);
    setIndex(0);
    setHistory([]);
    setSkipped(0);
    setScreen("quiz");
  };

  const go = useCallback(
    (isSkip: boolean, dir: "forward" | "back" = "forward") => {
      if (animating) return;
      setAnimDir(dir);
      setAnimating(true);

      setTimeout(() => {
        if (dir === "back") {
          setHistory((h) => {
            const prev = [...h];
            const prevIdx = prev.pop() ?? 0;
            setIndex(prevIdx);
            return prev;
          });
        } else {
          setHistory((h) => [...h, index]);
          if (isSkip) setSkipped((s) => s + 1);
          setIndex((i) => {
            const next = i + 1;
            if (next >= questions.length) {
              setScreen("done");
              return i;
            }
            return next;
          });
        }
        setAnimating(false);
      }, 260);
    },
    [animating, index, questions.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (screen !== "quiz" || showProfile) return;
      if (e.key === "ArrowRight" || e.key === "Enter") go(false, "forward");
      if (e.key === "Escape") go(true, "forward");
      if (e.key === "ArrowLeft" && history.length > 0) go(false, "back");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [screen, showProfile, go, history.length]);

  const current = questions[index];
  const progress = questions.length ? (index / questions.length) * 100 : 0;

  // ── START SCREEN ──
  if (screen === "start") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
        <Stars />
        {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}

        <div className="w-full max-w-lg relative z-10">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.35em] uppercase mb-5" style={{ color: "var(--accent)" }}>
              ÖZEL RÖPORTAJ
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold mb-4 leading-tight shimmer-text"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Seni Kim<br />Tanıyor?
            </h1>
            <p className="text-base mb-2" style={{ color: "var(--muted)" }}>
              {QUESTIONS.length} soru. Senin uydurma kariyerin. Gerçek cevaplar.
            </p>
            <button
              onClick={() => setShowProfile(true)}
              className="text-xs underline mt-1"
              style={{ color: "var(--accent)" }}
            >
              Uydurma özgeçmişini gör →
            </button>
          </div>

          <div
            className="rounded-2xl p-6 mb-6"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <CategoryPicker selected={selectedCats} onChange={setSelectedCats} />
            <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
              {QUESTIONS.filter((q) => selectedCats.has(q.category)).length} soru seçili
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <button onClick={startQuiz} className="btn-next w-full py-4 rounded-full text-base tracking-wide">
              Röportajı Başlat →
            </button>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              ← → ok tuşları · Enter = ilerle · Esc = geç
            </p>
          </div>
        </div>
      </main>
    );
  }

  // ── DONE ──
  if (screen === "done") {
    const answered = index - skipped;
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <Stars />
        <div className="text-center max-w-md relative z-10 animate-fade-in-up">
          <div className="text-6xl mb-6">🎬</div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--text)" }}
          >
            Röportaj Bitti!
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--muted)" }}>
            <span style={{ color: "var(--accent)" }}>{answered}</span> yanıtlandı ·{" "}
            <span style={{ color: "var(--muted)" }}>{skipped}</span> geçildi
          </p>
          <div className="flex flex-col gap-3">
            <button onClick={startQuiz} className="btn-next px-10 py-4 rounded-full text-base tracking-wide">
              Yeniden Başla
            </button>
            <button
              onClick={() => setScreen("start")}
              className="btn-skip px-10 py-4 rounded-full text-base"
            >
              Kategorileri Değiştir
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ── QUIZ ──
  if (!current) return null;

  const animClass =
    animating
      ? animDir === "forward"
        ? "animate-slide-out"
        : "animate-slide-out-back"
      : "animate-fade-in-up";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative">
      <Stars />
      {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <div className="h-1 w-full" style={{ background: "var(--border)" }}>
          <div className="progress-bar h-1" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowProfile(true)}
            className="text-xs tracking-widest uppercase transition-colors"
            style={{ color: "var(--accent)" }}
          >
            RÖPORTAJ ✦
          </button>
          <span className="text-sm" style={{ color: "var(--muted)" }}>
            {index + 1} / {questions.length}
          </span>
        </div>

        {/* Card */}
        <div
          key={index}
          className={`rounded-2xl p-8 md:p-12 mb-8 glow-border ${animClass}`}
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div className="mb-6">
            <span
              className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border font-medium tracking-wide ${CATEGORY_COLORS[current.category]}`}
            >
              {current.emoji} {current.category}
            </span>
          </div>

          <p
            className="text-2xl md:text-3xl leading-relaxed font-medium"
            style={{ color: "var(--text)", fontFamily: "'Playfair Display', serif" }}
          >
            {current.text}
          </p>

          <div className="mt-8 h-px" style={{ background: "var(--border)" }} />
          <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>
            Soru #{index + 1}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => go(false, "back")}
            disabled={history.length === 0}
            className="btn-skip px-6 py-3.5 rounded-full text-sm tracking-wide disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Geri
          </button>
          <button
            onClick={() => go(true, "forward")}
            className="btn-skip px-6 py-3.5 rounded-full text-sm tracking-wide"
          >
            Geç →
          </button>
          <button
            onClick={() => go(false, "forward")}
            className="btn-next px-8 py-3.5 rounded-full text-sm tracking-wide"
          >
            Sonraki ✦
          </button>
        </div>

        {/* Stats */}
        <p className="text-center mt-5 text-xs" style={{ color: "var(--muted)" }}>
          {index - skipped} yanıtlandı · {skipped} geçildi ·{" "}
          <button
            onClick={() => setShowProfile(true)}
            className="underline"
            style={{ color: "var(--accent)" }}
          >
            özgeçmiş
          </button>
        </p>
      </div>
    </main>
  );
}
