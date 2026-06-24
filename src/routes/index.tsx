import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Code2,
  Layout,
  Briefcase,
  Rocket,
  Gauge,
  Smartphone,
  Search,
  Sparkles,
  LifeBuoy,
  Check,
  Star,
  ArrowDown,
  Server,
  Database,
  Layers,
  TabletSmartphone,
  Terminal,
  GitBranch,
  Cpu,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import projectSalon from "@/assets/project-salon.jpg";
import projectRealestate from "@/assets/project-realestate.jpg";
import projectFashion from "@/assets/project-fashion.jpg";
import projectClinic from "@/assets/project-clinic.jpg";
import projectSaas from "@/assets/project-saas.jpg";
import projectFoodApp from "@/assets/project-food-app.jpg";
import workspace from "@/assets/workspace.jpg";
import accentGold from "@/assets/accent-gold.jpg";
import aniketPhoto from "@/assets/aniket.png.asset.json";
import poojaPhoto from "@/assets/pooja.png.asset.json";
import atharvaPhoto from "@/assets/atharva.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
      meta: [
        {
          title:
            "BitCraft Studio — Premium Websites, Mobile Apps & Custom Software",
        },
        {
          name: "description",
          content:
            "BitCraft Studio builds premium websites, mobile apps, and custom software solutions. Three minds. One vision. Exceptional software for ambitious businesses.",
        },
        {
          property: "og:title",
          content:
            "BitCraft Studio — Premium Websites, Mobile Apps & Custom Software",
        },
      {
        property: "og:description",
        content: "Building premium websites, mobile apps & custom software solutions. View our work.",
      },
    ],
  }),
  component: PortfolioPage,
});

/* -------------------------------------------------------------- */

function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <Hero />
      <Marquee />
      <SystemStatus />
      <About />
      <CodeShowcase />
      <Team />
      <Skills />
      <Projects />
      <Services />
      <TechStack />
      <WhyMe />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

/* -------------------------------------------------------------- */

function Nav() {
  return <NavImpl />;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gold-gradient"
    />
  );
}

function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);
  return (
    <motion.div
      aria-hidden
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--gold) 35%, transparent) 0%, transparent 70%)",
      }}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[420px] w-[420px] rounded-full blur-3xl opacity-60 mix-blend-screen hidden md:block"
    />
  );
}

function NavImpl() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["About", "#about"],
    ["Team", "#team"],
    ["Work", "#work"],
    ["Services", "#services"],
    ["Process", "#process"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-9 w-9 rounded-full bg-gold-gradient grid place-items-center text-ink font-display text-lg shadow-gold">
            BC
          </span>
          <span className="font-display text-xl tracking-tight">
            BitCraft Studio<span className="text-gold">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-5 py-2 text-sm text-foreground hover:bg-gold hover:text-ink transition-all duration-300"
        >
          Collaborate <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------- */

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* parallax bg */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_color-mix(in_oklab,var(--gold)_18%,transparent),_transparent_60%)]" />
      </motion.div>

      {/* Aurora blobs */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl animate-aurora" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-gold-soft/10 blur-3xl animate-aurora [animation-delay:-6s]" />
      </div>

      {/* Code rain + grid + scanlines — the "real developer" backdrop */}
      <MatrixRain />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--gold) 35%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--gold) 35%, transparent) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <FloatingTokens />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none mix-blend-overlay opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.6) 0 1px, transparent 1px 3px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Three Minds. One Vision. Exceptional Software.
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-5 font-mono text-xs text-muted-foreground/80"
            >
              <span className="text-gold">$</span> whoami{" "}
              <span className="text-muted-foreground/50">—role</span>{" "}
              <span className="text-foreground">software.studio</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tighter"
            >
              We are <span className="text-gold-gradient italic">BitCraft Studio</span>.
              <br />
              Building Premium
              <br />
              Websites, Mobile Apps & <span className="text-shimmer">Custom Software</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Transforming ideas into powerful digital experiences through modern web development, mobile engineering, and thoughtful product design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-gold-gradient text-ink px-7 py-3.5 text-sm font-medium shadow-gold hover:scale-[1.02] transition-transform"
              >
                View Our Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/50 backdrop-blur px-7 py-3.5 text-sm hover:border-gold/60 hover:bg-surface transition-all"
              >
                Contact Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-16 grid grid-cols-3 max-w-lg gap-8 border-t border-border pt-8"
            >
                <Stat value={7} suffix="+" label="Premium Projects" />
              <Stat value={3} suffix="yrs" label="Building Experience" />
              <Stat value={100} suffix="%" label="Client Focused" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block lg:col-span-4"
          >
            <div className="relative aspect-[4/5]">
              <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-gold/20 shadow-gold animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-ink via-surface to-ink" />
                <AnimatedCharacter variant="hero" />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink to-transparent">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                    /// BitCraft Studio · Remote
                  </p>
                </div>
              </div>
              <HeroTerminal />
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, value, count]);

  return (
    <div ref={ref}>
      <div className="font-display text-4xl text-gold-gradient">
        {display}
        <span className="text-2xl">{suffix}</span>
      </div>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

/* -------------------------------------------------------------- */

function HeroTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="absolute -bottom-10 -left-16 w-[340px] rounded-2xl border border-border bg-ink/90 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden"
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/80 bg-surface/60">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          ~/codetrio — zsh
        </span>
      </div>
      <pre className="px-5 py-4 font-mono text-[11.5px] leading-relaxed text-muted-foreground whitespace-pre-wrap">
<span className="text-gold">const</span>{" "}<span className="text-foreground">studio</span>{" "}={"{"}{"\n"}
{"  "}<span className="text-gold-soft">name</span>: <span className="text-foreground">'BitCraft Studio'</span>,{"\n"}
{"  "}<span className="text-gold-soft">size</span>: <span className="text-foreground">3</span>,{"\n"}
{"  "}<span className="text-gold-soft">stack</span>: [<span className="text-foreground">'React'</span>, <span className="text-foreground">'Node'</span>,{"\n"}
{"           "}<span className="text-foreground">'TS'</span>, <span className="text-foreground">'RN'</span>],{"\n"}
{"  "}<span className="text-gold-soft">focus</span>: <span className="text-foreground">'web · mobile · api'</span>,{"\n"}
{"  "}<span className="text-gold-soft">status</span>: <span className="text-[#28c840]">'available'</span>,{"\n"}
{"};"}{"\n"}
<span className="text-gold">$</span> ship --quality production<span className="inline-block w-2 h-3 bg-gold ml-1 align-middle animate-pulse" />
      </pre>
    </motion.div>
  );
}

/* -------------------------------------------------------------- */

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    const fontSize = 14;
    const chars =
      "01<>/{}[]=+-*$;()abcdefABCDEF0123456789</>const=>asyncawaitreturn";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.ceil(width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -50);
    };
    resize();

    let raf = 0;
    let last = 0;
    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (t - last < 55) return; // ~18fps, gentle
      last = t;

      ctx.fillStyle = "rgba(8, 8, 10, 0.16)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      for (let i = 0; i < columns; i++) {
        const ch = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        // head glow
        ctx.fillStyle = "rgba(212, 175, 55, 0.95)";
        ctx.fillText(ch, x, y);
        // trail
        ctx.fillStyle = "rgba(212, 175, 55, 0.35)";
        ctx.fillText(ch, x, y - fontSize);

        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_78%)]"
    >
      <canvas ref={canvasRef} className="h-full w-full opacity-[0.35]" />
    </div>
  );
}

function FloatingTokens() {
  const tokens = [
    { t: "</>", x: "8%", y: "22%", d: 0 },
    { t: "{ }", x: "82%", y: "18%", d: 1.2 },
    { t: "=>", x: "14%", y: "72%", d: 2.1 },
    { t: "async", x: "70%", y: "78%", d: 0.6 },
    { t: "0x1A", x: "48%", y: "12%", d: 1.8 },
    { t: "useEffect", x: "60%", y: "58%", d: 2.6 },
    { t: "git push", x: "26%", y: "44%", d: 1.4 },
    { t: "200 OK", x: "88%", y: "48%", d: 0.9 },
  ];
  return (
    <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {tokens.map((tok) => (
        <motion.span
          key={tok.t}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 0.55, 0.55, 0], y: [10, -10, -10, -30] }}
          transition={{
            duration: 7,
            delay: tok.d,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
          style={{ left: tok.x, top: tok.y }}
          className="absolute font-mono text-[11px] tracking-widest text-gold/70 select-none"
        >
          {tok.t}
        </motion.span>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------- */

function Marquee() {
  const items = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "MongoDB",
    "React Native",
    "Flutter",
    "Figma",
    "Framer Motion",
    "Performance",
    "SEO",
  ];
  return (
    <div className="border-y border-border bg-ink/40 overflow-hidden py-6">
      <div className="flex animate-marquee gap-16 whitespace-nowrap font-display text-2xl text-muted-foreground/60">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-16">
            {it}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-soft">
      <span className="h-px w-10 bg-gold/50" />
      {children}
    </div>
  );
}

/* -------------------------------------------------------------- */

function SystemStatus() {
  const items = [
    { icon: GitBranch, label: "main", value: "deploy/ready" },
    { icon: Cpu, label: "uptime", value: "99.98%" },
    { icon: Terminal, label: "stack", value: "TS · React · Node" },
    { icon: Server, label: "region", value: "Global · US hours" },
  ];
  return (
    <div className="border-b border-border bg-ink/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest">
            <Icon className="h-3.5 w-3.5 text-gold" />
            <span className="text-muted-foreground/70">{label}</span>
            <span className="text-foreground/80">·</span>
            <span className="text-foreground">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- */

function CodeShowcase() {
  const tabs = ["api/users.ts", "app/page.tsx", "schema.prisma"];
  const [active, setActive] = useState(0);

  const blocks = [
    (
      <>
        <Line n={1}><span className="text-gold">import</span> {"{ Router }"} <span className="text-gold">from</span> <span className="text-[#a8e6a3]">'express'</span>;</Line>
        <Line n={2}><span className="text-gold">import</span> {"{ z }"} <span className="text-gold">from</span> <span className="text-[#a8e6a3]">'zod'</span>;</Line>
        <Line n={3} />
        <Line n={4}><span className="text-gold-soft">const</span> users = Router();</Line>
        <Line n={5}><span className="text-gold-soft">const</span> Body = z.object({"{"} email: z.string().email() {"}"});</Line>
        <Line n={6} />
        <Line n={7}>users.<span className="text-foreground">post</span>(<span className="text-[#a8e6a3]">'/'</span>, <span className="text-gold">async</span> (req, res) {"=>"} {"{"}</Line>
        <Line n={8}>{"  "}<span className="text-gold-soft">const</span> data = Body.parse(req.body);</Line>
        <Line n={9}>{"  "}<span className="text-gold-soft">const</span> user = <span className="text-gold">await</span> db.user.create({"{ data }"});</Line>
        <Line n={10}>{"  "}res.status(<span className="text-[#f6c177]">201</span>).json(user);</Line>
        <Line n={11}>{"});"}</Line>
      </>
    ),
    (
      <>
        <Line n={1}><span className="text-gold">'use client'</span>;</Line>
        <Line n={2}><span className="text-gold">import</span> {"{ motion }"} <span className="text-gold">from</span> <span className="text-[#a8e6a3]">'motion/react'</span>;</Line>
        <Line n={3} />
        <Line n={4}><span className="text-gold">export default function</span> <span className="text-foreground">Hero</span>() {"{"}</Line>
        <Line n={5}>{"  "}<span className="text-gold">return</span> ({"<motion.section"}</Line>
        <Line n={6}>{"    "}initial={"{{ opacity: 0, y: 24 }}"}</Line>
        <Line n={7}>{"    "}animate={"{{ opacity: 1, y: 0 }}"}</Line>
        <Line n={8}>{"    "}transition={"{{ duration: 0.8 }}"}</Line>
        <Line n={9}>{"  >"}<span className="text-foreground">Ship fast. Ship clean.</span>{"</motion.section>"});</Line>
        <Line n={10}>{"}"}</Line>
      </>
    ),
    (
      <>
        <Line n={1}><span className="text-gold-soft">model</span> <span className="text-foreground">User</span> {"{"}</Line>
        <Line n={2}>{"  "}id        String  @id @default(cuid())</Line>
        <Line n={3}>{"  "}email     String  @unique</Line>
        <Line n={4}>{"  "}name      String?</Line>
        <Line n={5}>{"  "}role      Role    @default(<span className="text-[#f6c177]">USER</span>)</Line>
        <Line n={6}>{"  "}createdAt DateTime @default(now())</Line>
        <Line n={7}>{"  "}projects  Project[]</Line>
        <Line n={8}>{"}"}</Line>
      </>
    ),
  ];

  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <SectionLabel>02 / Engineering</SectionLabel>
          <h2 className="mt-6 font-display text-5xl md:text-6xl tracking-tighter">
            Code that reads like <span className="text-gold-gradient italic">prose</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Typed end-to-end, validated at the boundary, and tested where it matters.
            We write code other engineers want to maintain — small modules, clear names,
            and zero clever tricks.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            {[
              "TypeScript-first, strict mode always on",
              "Zod / schema validation at every API boundary",
              "Conventional commits, atomic PRs, linear history",
              "Lighthouse 95+ as the default, not the goal",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check className="h-4 w-4 text-gold mt-1 flex-none" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-ink/80 overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/80 bg-surface/60">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className="ml-4 flex items-center gap-1">
                {tabs.map((t, i) => (
                  <button
                    key={t}
                    onClick={() => setActive(i)}
                    className={`font-mono text-[11px] px-3 py-1.5 rounded-md transition-colors ${
                      active === i
                        ? "bg-ink text-gold border-t border-x border-border"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="font-mono text-[12.5px] leading-[1.75] p-5 text-muted-foreground overflow-x-auto">
              {blocks[active]}
            </div>
            <div className="flex items-center justify-between px-4 py-2 border-t border-border/80 bg-surface/40 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2"><GitBranch className="h-3 w-3 text-gold" /> main</span>
              <span>UTF-8 · LF · TS · 2 spaces</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Line({ n, children }: { n: number; children?: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="select-none w-8 text-right pr-4 text-muted-foreground/40">{n}</span>
      <span className="whitespace-pre">{children}</span>
    </div>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-12 gap-16">
        <Reveal className="lg:col-span-5">
          <SectionLabel>01 / About</SectionLabel>
          <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] tracking-tighter">
            A developer who builds <em className="text-gold-gradient">complete digital products</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            We are BitCraft Studio — a software development team of three passionate engineers
            specializing in websites, full-stack web applications, and mobile app development.
          </p>
          <p>
            We build complete digital solutions for businesses — from modern websites and custom web
            applications to Android and iOS mobile apps. Our expertise covers frontend development,
            backend systems, database architecture, API integration, and mobile application development.
          </p>
          <p>
            Whether it's a business website, management system, SaaS platform, or mobile application,
            we focus on creating products that are fast, scalable, user-friendly, and aligned with business goals.
          </p>
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-border group">
            <img
              src={workspace}
              alt="Developer workspace"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
              /// Studio · Always shipping
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {[
              ["3+ years", "learning & building"],
              ["12+ tech", "in active rotation"],
              ["Problem-first", "engineering mindset"],
              ["US-friendly", "hours & comms"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-border bg-surface/60 p-5 hover:border-gold/40 transition-colors"
              >
                <div className="font-display text-2xl text-foreground">{k}</div>
                <div className="text-sm text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- */

type CharacterVariant = "founder" | "designer" | "mobile" | "hero";

function AnimatedCharacter({ variant }: { variant: CharacterVariant }) {
  const palette: Record<CharacterVariant, { skin: string; hair: string; shirt: string; accent: string; device: "laptop" | "tablet" | "phone" }> = {
    founder:  { skin: "#e9c9a8", hair: "#1f1a17", shirt: "#1f2937", accent: "#d4af37", device: "laptop" },
    designer: { skin: "#f1d2b6", hair: "#2a1a14", shirt: "#7c3aed", accent: "#f59e0b", device: "tablet" },
    mobile:   { skin: "#e6b48a", hair: "#0f172a", shirt: "#0ea5e9", accent: "#d4af37", device: "phone" },
    hero:     { skin: "#ecc8a4", hair: "#111827", shirt: "#111827", accent: "#d4af37", device: "laptop" },
  };
  const p = palette[variant];

  return (
    <div className="absolute inset-0 flex items-end justify-center">
      {/* soft glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(60% 50% at 50% 45%, ${p.accent}22, transparent 70%)`,
        }}
      />
      {/* floating orbits */}
      <motion.div
        aria-hidden
        className="absolute left-6 top-8 h-2 w-2 rounded-full"
        style={{ background: p.accent }}
        animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-8 top-14 h-1.5 w-1.5 rounded-full"
        style={{ background: p.accent }}
        animate={{ y: [0, -14, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.div
        aria-hidden
        className="absolute right-10 bottom-20 h-1 w-1 rounded-full bg-foreground/60"
        animate={{ y: [0, -8, 0], opacity: [0.2, 0.9, 0.2] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
      />

      <motion.svg
        viewBox="0 0 240 260"
        className="relative h-[88%] w-auto"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* shadow */}
        <ellipse cx="120" cy="248" rx="58" ry="6" fill="#000" opacity="0.35" />

        {/* chair back */}
        <rect x="60" y="170" width="120" height="70" rx="14" fill="#0b0b0d" stroke={p.accent} strokeOpacity="0.25" />

        {/* body / shirt */}
        <path d="M70 240 Q70 170 120 170 Q170 170 170 240 Z" fill={p.shirt} />
        <path d="M70 240 Q70 170 120 170 Q170 170 170 240 Z" fill="url(#shine)" opacity="0.15" />

        {/* neck */}
        <rect x="111" y="120" width="18" height="22" rx="4" fill={p.skin} />

        {/* head */}
        <g>
          <ellipse cx="120" cy="100" rx="34" ry="38" fill={p.skin} />
          {/* hair */}
          <path d="M86 96 Q86 60 120 58 Q156 60 154 96 Q146 80 120 80 Q96 80 86 96 Z" fill={p.hair} />
          {/* ears */}
          <ellipse cx="86" cy="104" rx="4" ry="6" fill={p.skin} />
          <ellipse cx="154" cy="104" rx="4" ry="6" fill={p.skin} />
          {/* eyes (blink) */}
          <motion.g
            animate={{ scaleY: [1, 1, 0.05, 1, 1] }}
            transition={{ duration: 4, times: [0, 0.45, 0.5, 0.55, 1], repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "120px 100px" }}
          >
            <ellipse cx="108" cy="100" rx="3" ry="4" fill="#0b0b0d" />
            <ellipse cx="132" cy="100" rx="3" ry="4" fill="#0b0b0d" />
          </motion.g>
          {/* smile */}
          <path d="M110 118 Q120 126 130 118" stroke="#0b0b0d" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* glasses for founder/hero */}
          {(variant === "founder" || variant === "hero") && (
            <g stroke={p.accent} strokeWidth="1.8" fill="none">
              <circle cx="108" cy="100" r="8" />
              <circle cx="132" cy="100" r="8" />
              <path d="M116 100 L124 100" />
            </g>
          )}
        </g>

        {/* arms + device */}
        {p.device === "laptop" && (
          <g>
            <rect x="62" y="206" width="116" height="30" rx="6" fill="#1a1a1f" stroke={p.accent} strokeOpacity="0.45" />
            <rect x="68" y="212" width="104" height="18" rx="3" fill="#0b0b0d" />
            {/* typing cursor blink */}
            <motion.rect
              x="75" y="216" width="2" height="10" fill={p.accent}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            {/* code lines */}
            <rect x="82" y="217" width="40" height="2" fill={p.accent} opacity="0.7" />
            <rect x="82" y="222" width="60" height="2" fill="#9ca3af" opacity="0.55" />
            <rect x="82" y="227" width="30" height="2" fill={p.accent} opacity="0.5" />
            {/* arms typing */}
            <motion.path
              d="M86 200 Q92 196 104 204"
              stroke={p.skin} strokeWidth="10" strokeLinecap="round" fill="none"
              animate={{ d: ["M86 200 Q92 196 104 204", "M86 202 Q92 200 104 206", "M86 200 Q92 196 104 204"] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M154 200 Q148 196 136 204"
              stroke={p.skin} strokeWidth="10" strokeLinecap="round" fill="none"
              animate={{ d: ["M154 200 Q148 196 136 204", "M154 202 Q148 200 136 206", "M154 200 Q148 196 136 204"] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
            />
          </g>
        )}
        {p.device === "tablet" && (
          <g>
            <motion.g
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "120px 215px" }}
            >
              <rect x="90" y="190" width="60" height="80" rx="8" fill="#1a1a1f" stroke={p.accent} strokeOpacity="0.5" />
              <rect x="96" y="198" width="48" height="60" rx="3" fill="#0b0b0d" />
              <rect x="102" y="206" width="36" height="6" rx="2" fill={p.accent} opacity="0.8" />
              <rect x="102" y="218" width="22" height="4" fill="#9ca3af" opacity="0.6" />
              <rect x="102" y="226" width="30" height="4" fill="#9ca3af" opacity="0.5" />
              <rect x="102" y="234" width="18" height="4" fill={p.accent} opacity="0.7" />
            </motion.g>
            <path d="M82 210 Q90 200 96 210" stroke={p.skin} strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M158 210 Q150 200 144 210" stroke={p.skin} strokeWidth="10" strokeLinecap="round" fill="none" />
          </g>
        )}
        {p.device === "phone" && (
          <g>
            <motion.g
              animate={{ y: [0, -3, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "120px 220px" }}
            >
              <rect x="102" y="188" width="36" height="64" rx="7" fill="#1a1a1f" stroke={p.accent} strokeOpacity="0.6" />
              <rect x="106" y="194" width="28" height="48" rx="3" fill="#0b0b0d" />
              <motion.rect
                x="110" y="200" width="20" height="4" fill={p.accent}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <rect x="110" y="210" width="14" height="3" fill="#9ca3af" opacity="0.6" />
              <rect x="110" y="218" width="18" height="3" fill="#9ca3af" opacity="0.5" />
              <rect x="110" y="226" width="12" height="3" fill={p.accent} opacity="0.7" />
              <circle cx="120" cy="247" r="2" fill="#9ca3af" />
            </motion.g>
            <path d="M92 210 Q100 198 110 208" stroke={p.skin} strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M148 210 Q140 198 130 208" stroke={p.skin} strokeWidth="10" strokeLinecap="round" fill="none" />
          </g>
        )}

        <defs>
          <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.6" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

function Team() {
  const members = [
    {
      name: "Aniket",
      role: "Founder & Full-Stack Software Developer",
      variant: "founder" as const,
      photo: aniketPhoto.url,
      bio: "Responsible for building scalable web applications, business websites, and software solutions from concept to deployment.",
      skills: ["Full-Stack Development", "Website Development", "Backend Architecture", "Database Design", "API Development", "Project Planning"],
    },
    {
      name: "Pooja",
      role: "Frontend Developer & UI/UX Specialist",
      variant: "designer" as const,
      photo: poojaPhoto.url,
      bio: "Focused on creating modern, user-friendly, and visually appealing interfaces that deliver exceptional user experiences.",
      skills: ["React Development", "Responsive Design", "UI Implementation", "User Experience Design", "Performance Optimization"],
    },
    {
      name: "Atharva",
      role: "Mobile App Developer",
      variant: "mobile" as const,
      photo: atharvaPhoto.url,
      bio: "Specializes in developing high-performance mobile applications for Android and iOS platforms with seamless user experiences.",
      skills: ["Android Development", "iOS Development", "Cross-Platform Development", "API Integration", "App Performance Optimization"],
    },
  ];
  return (
    <Section id="team">
      <Reveal>
        <SectionLabel>03 / Team</SectionLabel>
        <h2 className="mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-4xl">
          Small Team. <span className="text-gold-gradient italic">Big Results.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          We are a team of passionate software developers specializing in websites, web applications, and mobile app development. Together, we combine expertise in frontend development, backend engineering, database architecture, and mobile technologies to deliver complete digital solutions for businesses and startups.
        </p>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-3 gap-8">
        {members.map((m, idx) => (
          <Reveal key={m.name} delay={idx * 0.12}>
            <div className="group relative h-full rounded-3xl border border-border bg-surface/50 overflow-hidden hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold">
              <div className="relative aspect-square overflow-hidden bg-ink">
                <img
                  src={m.photo}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/40 pointer-events-none" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-3xl tracking-tight">{m.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-widest text-gold-soft">{m.role}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{m.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono uppercase tracking-wider rounded-full border border-border bg-ink/40 px-3 py-1 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- */

function Skills() {
  const groups: { title: string; items: string[] }[] = [
    { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
    { title: "Backend & DB", items: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"] },
    { title: "Mobile & Tools", items: ["React Native", "Flutter", "Git", "GitHub", "Figma", "VS Code"] },
  ];
  return (
    <Section>
      <Reveal>
        <SectionLabel>04 / Skills</SectionLabel>
        <h2 className="mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-3xl">
          A modern stack, used with <span className="text-gold-gradient italic">intention</span>.
        </h2>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {groups.map((g, idx) => (
          <Reveal key={g.title} delay={idx * 0.1}>
            <div className="group relative h-full rounded-3xl border border-border bg-surface/50 p-8 hover:border-gold/50 transition-all overflow-hidden">
              <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-mono text-xs uppercase tracking-widest text-gold">
                0{idx + 1}
              </div>
              <h3 className="mt-2 font-display text-3xl">{g.title}</h3>
              <ul className="mt-6 space-y-3">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between border-b border-border/60 pb-3 last:border-0"
                  >
                    <span className="text-foreground">{item}</span>
                    <Check className="h-4 w-4 text-gold" />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- */

const PROJECTS = [
  {
    name: "Luxe Beauty Salon",
    type: "Beauty & Wellness",
    img: projectSalon,
    desc: "A serene booking-first experience for a high-end salon with online appointments, service showcase, before/after gallery, and testimonials.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    live: "https://preview-react-9bi9pu-a7zdbz8kcssm9gcsngnkea.onspace.build/?_q=a7Zdbz8kcssM9gcsnGNkEA",
  },
  {
    name: "Haven Real Estate",
    type: "Real Estate",
    img: projectRealestate,
    desc: "Editorial property platform with rich listings, advanced filters, agent profiles, and a fast, image-led browse experience.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://preview-react-9bi9v3-xkga5sjmx8qwg8zvvpwgew.onspace.build/?_q=XKGA5sjmx8qwg8ZvVpWGEW",
  },
  {
    name: "Maison Fashion",
    type: "Fashion Brand",
    img: projectFashion,
    desc: "A storytelling-driven fashion brand site with product catalog, lookbook, and immersive editorial sections.",
    tech: ["Next.js", "Tailwind", "GSAP"],
    live: "https://preview-react-9bi9wm-s25np3npe5q4hexw9vzntd.onspace.build/",
  },
  {
    name: "Nova Medical Clinic",
    type: "Healthcare",
    img: projectClinic,
    desc: "Trust-first clinic site with doctor profiles, online appointment scheduling, and clear service breakdowns.",
    tech: ["React", "Express", "MongoDB"],
    live: "https://preview-react-9b0sbp-xshymbawxwkgqlqxkjhmxh.onspace.build/",
  },
  {
    name: "EliteHome",
    type: "Premium Home Services Management Platform",
    img: projectSaas,
    desc: "Lead Generation System, Booking Platform, Customer Portal, Technician Dashboard, AI Quote Assistant, and Real-Time Tracking — a complete home services solution.",
    tech: ["Next.js", "Node.js", "MongoDB", "Auth"],
    live: "https://preview-react-9bi2p5-nemmujjqmqhqsb63zhjabc.onspace.build/?_q=nEmMUJJQMQHqsB63ZhjABc",
  },
  {
    name: "Feast Food Delivery",
    type: "Mobile App (iOS & Android)",
    img: projectFoodApp,
    desc: "A full-featured food delivery app with restaurant browsing, real-time order tracking, cart management, and payment integration.",
    tech: ["React Native", "Express", "MongoDB"],
    live: "https://preview-react-9bi2d4-w3zwctxtty53nbtmh5tksw.onspace.build/?_q=W3ZWctxtTY53NbtMH5tkSw",
  },
];

function Projects() {
  return (
    <Section id="work">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <SectionLabel>05 / Featured Work</SectionLabel>
          <h2 className="mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-2xl">
            Premium projects, <span className="text-gold-gradient italic">built like real businesses</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-md text-muted-foreground">
            Transforming ideas into powerful digital experiences through modern web development, mobile engineering, and thoughtful product design.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        {PROJECTS.map((p, idx) => (
          <Reveal key={p.name} delay={idx * 0.1}>
            <ProjectCard project={p} index={idx} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project: p, index }: { project: typeof PROJECTS[number]; index: number }) {
  return (
    <a
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative rounded-3xl border border-border bg-surface/40 overflow-hidden hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold"
      style={{ willChange: "transform" }}
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-ink">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
        <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-ink/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-gold border border-gold/30">
          0{index + 1} / {p.type}
        </div>
        <div className="absolute top-5 right-5 h-10 w-10 grid place-items-center rounded-full bg-gold text-ink translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-display text-3xl tracking-tight">{p.name}</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono uppercase tracking-wider rounded-full border border-border bg-ink/40 px-3 py-1 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-5 text-sm">
          <span className="inline-flex items-center gap-1.5 text-gold group-hover:gap-2.5 transition-all">
            View Live Demo <ArrowUpRight className="h-4 w-4" />
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Github className="h-4 w-4" /> Code
          </span>
        </div>
      </div>
    </a>
  );
}

/* -------------------------------------------------------------- */

function Services() {
  const items = [
    {
      icon: Layout,
      title: "Website Design",
      desc: "Modern UI/UX designs crafted to feel premium and on-brand.",
    },
    {
      icon: Code2,
      title: "Website Development",
      desc: "Fast, responsive websites engineered for speed and scale.",
    },
    {
      icon: Briefcase,
      title: "Business Websites",
      desc: "Salon, clinic, real estate, restaurant — full marketing sites.",
    },
    {
      icon: Rocket,
      title: "Landing Pages",
      desc: "High-converting landing pages built for paid campaigns.",
    },
    {
      icon: Layers,
      title: "Full-Stack Web Apps",
      desc: "End-to-end web apps with auth, databases, dashboards, and REST APIs.",
    },
    {
      icon: Server,
      title: "APIs & Backends",
      desc: "Node.js & Express APIs with MongoDB / MySQL, integrations, and auth.",
    },
    {
      icon: Database,
      title: "Admin Dashboards",
      desc: "Custom admin panels and CMS-style dashboards to manage your business.",
    },
    {
      icon: TabletSmartphone,
      title: "Mobile App Development",
      desc: "Cross-platform Android & iOS apps with React Native — native feel, single codebase.",
    },
  ];
  return (
    <Section id="services">
      <Reveal>
        <SectionLabel>06 / Services</SectionLabel>
        <h2 className="mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-3xl">
          What We can <span className="text-gold-gradient italic">build for you</span>.
        </h2>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {items.map((it, idx) => (
          <Reveal key={it.title} delay={idx * 0.08}>
            <div className="group relative rounded-3xl border border-border bg-surface/50 p-8 hover:border-gold/50 transition-all overflow-hidden h-full">
              <div className="flex items-start justify-between">
                <div className="h-14 w-14 rounded-2xl bg-gold/10 grid place-items-center text-gold group-hover:bg-gold group-hover:text-ink transition-colors">
                  <it.icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{idx + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-3xl">{it.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- */

function TechStack() {
  const stack = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind", "React Native", "Flutter", "Figma", "Git"];
  return (
    <Section>
      <Reveal>
        <SectionLabel>07 / Tech Stack</SectionLabel>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3">
        {stack.map((s, idx) => (
          <Reveal key={s} delay={idx * 0.05}>
            <div className="aspect-square rounded-2xl border border-border bg-surface/50 grid place-items-center text-center px-2 hover:border-gold/50 hover:bg-surface transition-all hover:-translate-y-1">
              <div>
                <div className="font-display text-xl text-gold-gradient">{s}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- */

function WhyMe() {
  const items = [
    { icon: Smartphone, title: "Responsive Design" },
    { icon: Gauge, title: "Fast Loading Speed" },
    { icon: Search, title: "SEO Friendly" },
    { icon: Sparkles, title: "Modern UI/UX" },
    { icon: Layout, title: "Mobile Optimized" },
    { icon: LifeBuoy, title: "Ongoing Support" },
  ];
  return (
    <Section>
      <div className="rounded-[2rem] border border-border bg-surface/40 p-10 md:p-16 relative overflow-hidden">
        <img
          src={accentGold}
          alt=""
          aria-hidden
          loading="lazy"
          width={1280}
          height={720}
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen pointer-events-none"
        />
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <Reveal>
          <SectionLabel>08 / Why Work With Us</SectionLabel>
          <h2 className="mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-2xl">
            Six reasons clients <span className="text-gold-gradient italic">stick around</span>.
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, idx) => (
            <Reveal key={it.title} delay={idx * 0.07}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-ink/40 p-5 hover:border-gold/50 transition-colors">
                <div className="h-11 w-11 rounded-xl bg-gold/10 grid place-items-center text-gold">
                  <it.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-xl">{it.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- */

function Process() {
  const steps = [
    ["Discovery", "Understanding your business, goals, and audience."],
    ["Planning", "Mapping site structure, content, and key flows."],
    ["Design", "Crafting a premium, on-brand visual direction."],
    ["Development", "Building with React/Next.js for speed and scale."],
    ["Testing", "QA across devices, performance, and SEO checks."],
    ["Launch", "Deploy, monitor, and support post-launch."],
  ];
  return (
    <Section id="process">
      <Reveal>
        <SectionLabel>09 / Process</SectionLabel>
        <h2 className="mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-3xl">
          A calm, <span className="text-gold-gradient italic">predictable</span> process.
        </h2>
      </Reveal>
      <div className="mt-14 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
        <div className="space-y-10">
          {steps.map(([title, desc], idx) => (
            <Reveal key={title} delay={idx * 0.05}>
              <div
                className={`relative grid md:grid-cols-2 gap-6 ${
                  idx % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                  <div className="font-mono text-xs uppercase tracking-widest text-gold">
                    Step 0{idx + 1}
                  </div>
                  <h3 className="mt-2 font-display text-3xl">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{desc}</p>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-4 md:left-1/2 top-2 h-3 w-3 rounded-full bg-gold ring-4 ring-background -translate-x-1/2" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- */

function Testimonials() {
  const items = [
    {
      quote:
        "BitCraft Studio's work feels like a real luxury brand site. The attention to typography and motion is rare for a development team.",
      name: "A. Reyes",
      role: "Salon Owner · Sample Project Feedback",
    },
    {
      quote:
        "Communication was crisp and the site shipped fast. The pages load instantly and look fantastic on mobile.",
      name: "M. Carter",
      role: "Realtor · Sample Project Feedback",
    },
    {
      quote:
        "They think like designers and ship like engineers. Exactly what a small business needs to look credible online.",
      name: "S. Linwood",
      role: "Founder · Sample Project Feedback",
    },
  ];
  return (
    <Section>
      <Reveal>
        <SectionLabel>10 / Testimonials</SectionLabel>
        <h2 className="mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-3xl">
          Kind words from <span className="text-gold-gradient italic">sample projects</span>.
        </h2>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {items.map((t, idx) => (
          <Reveal key={t.name} delay={idx * 0.1}>
            <figure className="h-full rounded-3xl border border-border bg-surface/50 p-8 flex flex-col">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl leading-snug text-foreground/90 flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- */

function Contact() {
  // ⚠️ Replace these with your real details — every link below is wired to them.
  const CONTACT = {
    email: "bitcraftstudiobcs07@gmail.com",
    whatsapp: "918080671201", // country code + number, digits only
    linkedin: "https://www.linkedin.com/in/aniket-umare",
    github: "https://github.com/aniket-umare",
  };

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState<"whatsapp" | "email" | null>(null);

  const buildMessage = (fd: FormData) => {
    const name = String(fd.get("name") || "").trim().slice(0, 100);
    const email = String(fd.get("email") || "").trim().slice(0, 120);
    const type = String(fd.get("type") || "").trim();
    const message = String(fd.get("message") || "").trim().slice(0, 1500);
    const plain =
      `Hi BitCraft Studio, I'd like to discuss a project.\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Project: ${type}\n\n` +
      `${message}`;
    const body = encodeURIComponent(plain);
    return { name, email, type, message, body };
  };

  const send = (channel: "whatsapp" | "email") => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const { email, body } = buildMessage(fd);
    if (!email) return;
    setSending(channel);
    const subject = encodeURIComponent("New project enquiry");
    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/${CONTACT.whatsapp}?text=${body}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      // Primary: open Gmail web compose in a new tab — works for every Gmail user
      // (the target inbox is Gmail) without depending on a system mail handler.
      const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(CONTACT.email)}` +
        `&su=${subject}&body=${body}`;
      const mailtoUrl = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
      const win = window.open(gmailUrl, "_blank", "noopener,noreferrer");
      // Fallback to the OS mail client if the popup was blocked.
      if (!win) window.location.href = mailtoUrl;
    }
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setSending(null);
    }, 4000);
    form.reset();
  };

  return (
    <Section id="contact">
      <div className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-surface/80 to-ink p-8 md:p-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative grid lg:grid-cols-2 gap-14">
          <Reveal>
            <SectionLabel>11 / Contact</SectionLabel>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] tracking-tighter">
              Let's build <span className="text-gold-gradient italic">something great</span>.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Have a project in mind? Tell us about your business and the website or mobile app you want. We'll
              reply within 24 hours.
            </p>
            <ul className="mt-10 space-y-4 text-sm">
              {[
                { icon: Mail, label: CONTACT.email, href: `mailto:${CONTACT.email}`, external: false },
                {
                  icon: MessageCircle,
                  label: `WhatsApp · +${CONTACT.whatsapp}`,
                  href: `https://wa.me/${CONTACT.whatsapp}`,
                  external: true,
                },
                { icon: Linkedin, label: "LinkedIn", href: CONTACT.linkedin, external: true },
                { icon: Github, label: "GitHub", href: CONTACT.github, external: true },
              ].map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                  >
                    <span className="h-9 w-9 rounded-full border border-border grid place-items-center group-hover:border-gold/60">
                      <c.icon className="h-4 w-4" />
                    </span>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={send("whatsapp")}
              className="rounded-2xl border border-border bg-ink/40 backdrop-blur p-7 space-y-5"
            >
              <Field label="Name" name="name" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
              <SelectField
                label="Project Type"
                name="type"
                options={["Business Website", "Landing Page", "Web Application", "Mobile App", "E-commerce", "Other"]}
              />
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl bg-surface/70 border border-border px-4 py-3 text-sm outline-none focus:border-gold/60 transition-colors resize-none"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient text-ink px-6 py-4 text-sm font-medium shadow-gold hover:scale-[1.01] transition-transform"
                >
                  <MessageCircle className="h-4 w-4" />
                  {sent && sending === "whatsapp" ? "Opening WhatsApp…" : "Send via WhatsApp"}
                </button>
                <button
                  type="button"
                  onClick={(ev) => {
                    const form = (ev.currentTarget.closest("form") as HTMLFormElement) || null;
                    if (!form) return;
                    const fakeEvent = {
                      preventDefault: () => {},
                      currentTarget: form,
                    } as unknown as FormEvent<HTMLFormElement>;
                    send("email")(fakeEvent);
                  }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 text-foreground px-6 py-4 text-sm font-medium hover:border-gold hover:text-gold transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {sent && sending === "email" ? "Opening email…" : "Send via Email"}
                </button>
              </div>
              <p className="text-[11px] text-muted-foreground/80 text-center pt-1">
                Replies within 24 hours · Mon–Sat
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={200}
        className="w-full rounded-xl bg-surface/70 border border-border px-4 py-3 text-sm outline-none focus:border-gold/60 transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <select
        name={name}
        className="w-full rounded-xl bg-surface/70 border border-border px-4 py-3 text-sm outline-none focus:border-gold/60 transition-colors"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

/* -------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full bg-gold-gradient grid place-items-center text-ink font-display text-xs">
            BC
          </span>
          <span>© {new Date().getFullYear()} BitCraft Studio. Crafted with care.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#top" className="hover:text-gold transition-colors">Back to top</a>
          <a href="#contact" className="hover:text-gold transition-colors">Get in touch</a>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------- */

function Section({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-28 md:py-36 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
    </section>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
