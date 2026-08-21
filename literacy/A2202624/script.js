// =========================================================
// 1. スクロールで要素をふわっと出現させる（kokuyo風の動き）
// =========================================================
const revealTargets = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
);

revealTargets.forEach((el) => revealObserver.observe(el));

// =========================================================
// 2. 背景に漂うキラキラ粒子を生成
// =========================================================
const sparkleField = document.getElementById("sparkleField");
const SPARKLE_COUNT = 28;

for (let i = 0; i < SPARKLE_COUNT; i++) {
  const dot = document.createElement("span");
  dot.className = "sparkle";
  dot.style.left = `${Math.random() * 100}%`;
  dot.style.top = `${Math.random() * 100}%`;
  dot.style.animationDelay = `${Math.random() * 3}s`;
  dot.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
  sparkleField.appendChild(dot);
}

// =========================================================
// 3. マウスを動かすとキラキラが追いかけてくる
// =========================================================
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lastSparkleTime = 0;

if (!reduceMotion) {
  window.addEventListener("pointermove", (e) => {
    const now = Date.now();
    if (now - lastSparkleTime < 60) return; // 生成頻度を間引く
    lastSparkleTime = now;

    const spark = document.createElement("span");
    spark.className = "mouse-sparkle";
    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;
    document.body.appendChild(spark);

    spark.addEventListener("animationend", () => spark.remove());
  });
}
