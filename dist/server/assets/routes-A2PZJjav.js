import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { animate, motion, useInView, useMotionValue, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Briefcase, Check, Code2, Cpu, Database, Gauge, GitBranch, Github, Layers, Layout, LifeBuoy, Linkedin, Mail, MessageCircle, Rocket, Search, Server, Smartphone, Sparkles, Star, TabletSmartphone, Terminal } from "lucide-react";
//#region src/assets/hero-bg.jpg
var hero_bg_default = "/assets/hero-bg-BaYW5WJ1.jpg";
//#endregion
//#region src/assets/project-salon.jpg
var project_salon_default = "/assets/project-salon-D1-LtV6q.jpg";
//#endregion
//#region src/assets/project-realestate.jpg
var project_realestate_default = "/assets/project-realestate-9IQPF3N8.jpg";
//#endregion
//#region src/assets/project-fashion.jpg
var project_fashion_default = "/assets/project-fashion-DgW8lcgZ.jpg";
//#endregion
//#region src/assets/project-clinic.jpg
var project_clinic_default = "/assets/project-clinic-D03zr2W3.jpg";
//#endregion
//#region src/assets/project-saas.jpg
var project_saas_default = "/assets/project-saas-CdVSuRA6.jpg";
//#endregion
//#region src/assets/project-food-app.jpg
var project_food_app_default = "/assets/project-food-app-W5JgJh4Q.jpg";
//#endregion
//#region src/assets/workspace.jpg
var workspace_default = "/assets/workspace-BdaU5Zfm.jpg";
//#endregion
//#region src/assets/accent-gold.jpg
var accent_gold_default = "/assets/accent-gold-CbtDbZ44.jpg";
var aniket_png_asset_default = {
	version: 1,
	asset_id: "d2e79fd5-7181-45de-bc19-b5c8d3955fe6",
	project_id: "33d16de4-db1c-42f1-9c96-2e9b520afbc0",
	url: "/__l5e/assets-v1/d2e79fd5-7181-45de-bc19-b5c8d3955fe6/aniket.png",
	r2_key: "a/v1/33d16de4-db1c-42f1-9c96-2e9b520afbc0/d2e79fd5-7181-45de-bc19-b5c8d3955fe6/aniket.png",
	original_filename: "aniket.png",
	size: 1662686,
	content_type: "image/png",
	created_at: "2026-06-20T06:56:47Z"
};
var pooja_png_asset_default = {
	version: 1,
	asset_id: "2675897c-ae5c-42c9-b9bd-be2209b23371",
	project_id: "33d16de4-db1c-42f1-9c96-2e9b520afbc0",
	url: "/__l5e/assets-v1/2675897c-ae5c-42c9-b9bd-be2209b23371/pooja.png",
	r2_key: "a/v1/33d16de4-db1c-42f1-9c96-2e9b520afbc0/2675897c-ae5c-42c9-b9bd-be2209b23371/pooja.png",
	original_filename: "pooja.png",
	size: 1579176,
	content_type: "image/png",
	created_at: "2026-06-20T06:56:47Z"
};
var atharva_png_asset_default = {
	version: 1,
	asset_id: "48e3b7c0-a12f-48c9-a5de-a08e23db4c5c",
	project_id: "33d16de4-db1c-42f1-9c96-2e9b520afbc0",
	url: "/__l5e/assets-v1/48e3b7c0-a12f-48c9-a5de-a08e23db4c5c/atharva.png",
	r2_key: "a/v1/33d16de4-db1c-42f1-9c96-2e9b520afbc0/48e3b7c0-a12f-48c9-a5de-a08e23db4c5c/atharva.png",
	original_filename: "atharva.png",
	size: 1678341,
	content_type: "image/png",
	created_at: "2026-06-20T06:56:47Z"
};
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function PortfolioPage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ jsx(ScrollProgress, {}),
			/* @__PURE__ */ jsx(CursorGlow, {}),
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(Marquee, {}),
			/* @__PURE__ */ jsx(SystemStatus, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(CodeShowcase, {}),
			/* @__PURE__ */ jsx(Team, {}),
			/* @__PURE__ */ jsx(Skills, {}),
			/* @__PURE__ */ jsx(Projects, {}),
			/* @__PURE__ */ jsx(Services, {}),
			/* @__PURE__ */ jsx(TechStack, {}),
			/* @__PURE__ */ jsx(WhyMe, {}),
			/* @__PURE__ */ jsx(Process, {}),
			/* @__PURE__ */ jsx(Testimonials, {}),
			/* @__PURE__ */ jsx(Contact, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ jsx(NavImpl, {});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
	return /* @__PURE__ */ jsx(motion.div, {
		style: {
			scaleX,
			transformOrigin: "0% 50%"
		},
		className: "fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gold-gradient"
	});
}
function CursorGlow() {
	const x = useMotionValue(-200);
	const y = useMotionValue(-200);
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		const onMove = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => window.removeEventListener("mousemove", onMove);
	}, [x, y]);
	return /* @__PURE__ */ jsx(motion.div, {
		"aria-hidden": true,
		style: {
			x,
			y,
			translateX: "-50%",
			translateY: "-50%",
			background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 35%, transparent) 0%, transparent 70%)"
		},
		className: "pointer-events-none fixed top-0 left-0 z-0 h-[420px] w-[420px] rounded-full blur-3xl opacity-60 mix-blend-screen hidden md:block"
	});
}
function NavImpl() {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 30);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ jsx("span", {
						className: "h-9 w-9 rounded-full bg-gold-gradient grid place-items-center text-ink font-display text-lg shadow-gold",
						children: "BC"
					}), /* @__PURE__ */ jsxs("span", {
						className: "font-display text-xl tracking-tight",
						children: ["BitCraft Studio", /* @__PURE__ */ jsx("span", {
							className: "text-gold",
							children: "."
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden md:flex items-center gap-9 text-sm text-muted-foreground",
					children: [
						["About", "#about"],
						["Team", "#team"],
						["Work", "#work"],
						["Services", "#services"],
						["Process", "#process"],
						["Contact", "#contact"]
					].map(([label, href]) => /* @__PURE__ */ jsx("a", {
						href,
						className: "relative hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full",
						children: label
					}, href))
				}),
				/* @__PURE__ */ jsxs("a", {
					href: "#contact",
					className: "hidden md:inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-5 py-2 text-sm text-foreground hover:bg-gold hover:text-ink transition-all duration-300",
					children: ["Collaborate ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })]
				})
			]
		})
	});
}
function Hero() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		ref,
		className: "relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				style: {
					y,
					opacity
				},
				className: "absolute inset-0 -z-10",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: hero_bg_default,
						alt: "",
						className: "absolute inset-0 h-full w-full object-cover opacity-50",
						width: 1920,
						height: 1080
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_color-mix(in_oklab,var(--gold)_18%,transparent),_transparent_60%)]" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10 overflow-hidden pointer-events-none",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -left-32 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl animate-aurora" }), /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-gold-soft/10 blur-3xl animate-aurora [animation-delay:-6s]" })]
			}),
			/* @__PURE__ */ jsx(MatrixRain, {}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10 pointer-events-none opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]",
				style: {
					backgroundImage: "linear-gradient(to right, color-mix(in oklab, var(--gold) 35%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--gold) 35%, transparent) 1px, transparent 1px)",
					backgroundSize: "44px 44px"
				}
			}),
			/* @__PURE__ */ jsx(FloatingTokens, {}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10 pointer-events-none mix-blend-overlay opacity-[0.08]",
				style: { backgroundImage: "repeating-linear-gradient(to bottom, rgba(255,255,255,0.6) 0 1px, transparent 1px 3px)" }
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-10 w-full",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid lg:grid-cols-12 gap-12 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-8",
						children: [
							/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { duration: .6 },
								className: "inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-soft",
								children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gold animate-pulse" }), "Three Minds. One Vision. Exceptional Software."]
							}),
							/* @__PURE__ */ jsxs(motion.p, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								transition: {
									duration: .5,
									delay: .15
								},
								className: "mt-5 font-mono text-xs text-muted-foreground/80",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-gold",
										children: "$"
									}),
									" whoami",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground/50",
										children: "—role"
									}),
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground",
										children: "software.studio"
									})
								]
							}),
							/* @__PURE__ */ jsxs(motion.h1, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .8,
									delay: .1
								},
								className: "mt-8 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tighter",
								children: [
									"We are ",
									/* @__PURE__ */ jsx("span", {
										className: "text-gold-gradient italic",
										children: "BitCraft Studio"
									}),
									".",
									/* @__PURE__ */ jsx("br", {}),
									"Building Premium",
									/* @__PURE__ */ jsx("br", {}),
									"Websites, Mobile Apps & ",
									/* @__PURE__ */ jsx("span", {
										className: "text-shimmer",
										children: "Custom Software"
									}),
									"."
								]
							}),
							/* @__PURE__ */ jsx(motion.p, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .3
								},
								className: "mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed",
								children: "Transforming ideas into powerful digital experiences through modern web development, mobile engineering, and thoughtful product design."
							}),
							/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .5
								},
								className: "mt-10 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ jsxs("a", {
									href: "#work",
									className: "group inline-flex items-center gap-3 rounded-full bg-gold-gradient text-ink px-7 py-3.5 text-sm font-medium shadow-gold hover:scale-[1.02] transition-transform",
									children: ["View Our Work", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								}), /* @__PURE__ */ jsx("a", {
									href: "#contact",
									className: "inline-flex items-center gap-3 rounded-full border border-border bg-surface/50 backdrop-blur px-7 py-3.5 text-sm hover:border-gold/60 hover:bg-surface transition-all",
									children: "Contact Us"
								})]
							}),
							/* @__PURE__ */ jsxs(motion.div, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								transition: {
									delay: .9,
									duration: .8
								},
								className: "mt-16 grid grid-cols-3 max-w-lg gap-8 border-t border-border pt-8",
								children: [
									/* @__PURE__ */ jsx(Stat, {
										value: 7,
										suffix: "+",
										label: "Premium Projects"
									}),
									/* @__PURE__ */ jsx(Stat, {
										value: 3,
										suffix: "yrs",
										label: "Building Experience"
									}),
									/* @__PURE__ */ jsx(Stat, {
										value: 100,
										suffix: "%",
										label: "Client Focused"
									})
								]
							})
						]
					}), /* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							scale: .95
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: 1,
							delay: .4
						},
						className: "hidden lg:block lg:col-span-4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative aspect-[4/5]",
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gold/10 blur-3xl rounded-full" }),
								/* @__PURE__ */ jsxs("div", {
									className: "relative h-full w-full overflow-hidden rounded-3xl border border-gold/20 shadow-gold animate-float",
									children: [
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-ink via-surface to-ink" }),
										/* @__PURE__ */ jsx(AnimatedCharacter, { variant: "hero" }),
										/* @__PURE__ */ jsx("div", {
											className: "absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink to-transparent",
											children: /* @__PURE__ */ jsx("p", {
												className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold",
												children: "/// BitCraft Studio · Remote"
											})
										})
									]
								}),
								/* @__PURE__ */ jsx(HeroTerminal, {})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: "#about",
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-gold transition-colors",
				"aria-label": "Scroll down",
				children: /* @__PURE__ */ jsx(ArrowDown, { className: "h-5 w-5 animate-bounce" })
			})
		]
	});
}
function Stat({ value, suffix, label }) {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });
	const count = useMotionValue(0);
	const [display, setDisplay] = useState("0");
	useEffect(() => {
		if (!inView) return;
		const controls = animate(count, value, {
			duration: 1.6,
			ease: "easeOut",
			onUpdate: (v) => setDisplay(Math.round(v).toString())
		});
		return () => controls.stop();
	}, [
		inView,
		value,
		count
	]);
	return /* @__PURE__ */ jsxs("div", {
		ref,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "font-display text-4xl text-gold-gradient",
			children: [display, /* @__PURE__ */ jsx("span", {
				className: "text-2xl",
				children: suffix
			})]
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		})]
	});
}
function HeroTerminal() {
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 30
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .8,
			delay: .9
		},
		className: "absolute -bottom-10 -left-16 w-[340px] rounded-2xl border border-border bg-ink/90 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 px-4 py-2.5 border-b border-border/80 bg-surface/60",
			children: [
				/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
				/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#febc2e]" }),
				/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" }),
				/* @__PURE__ */ jsx("span", {
					className: "ml-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
					children: "~/codetrio — zsh"
				})
			]
		}), /* @__PURE__ */ jsxs("pre", {
			className: "px-5 py-4 font-mono text-[11.5px] leading-relaxed text-muted-foreground whitespace-pre-wrap",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-gold",
					children: "const"
				}),
				" ",
				/* @__PURE__ */ jsx("span", {
					className: "text-foreground",
					children: "studio"
				}),
				" ",
				"=",
				"{",
				"\n",
				"  ",
				/* @__PURE__ */ jsx("span", {
					className: "text-gold-soft",
					children: "name"
				}),
				": ",
				/* @__PURE__ */ jsx("span", {
					className: "text-foreground",
					children: "'BitCraft Studio'"
				}),
				",",
				"\n",
				"  ",
				/* @__PURE__ */ jsx("span", {
					className: "text-gold-soft",
					children: "size"
				}),
				": ",
				/* @__PURE__ */ jsx("span", {
					className: "text-foreground",
					children: "3"
				}),
				",",
				"\n",
				"  ",
				/* @__PURE__ */ jsx("span", {
					className: "text-gold-soft",
					children: "stack"
				}),
				": [",
				/* @__PURE__ */ jsx("span", {
					className: "text-foreground",
					children: "'React'"
				}),
				", ",
				/* @__PURE__ */ jsx("span", {
					className: "text-foreground",
					children: "'Node'"
				}),
				",",
				"\n",
				"           ",
				/* @__PURE__ */ jsx("span", {
					className: "text-foreground",
					children: "'TS'"
				}),
				", ",
				/* @__PURE__ */ jsx("span", {
					className: "text-foreground",
					children: "'RN'"
				}),
				"],",
				"\n",
				"  ",
				/* @__PURE__ */ jsx("span", {
					className: "text-gold-soft",
					children: "focus"
				}),
				": ",
				/* @__PURE__ */ jsx("span", {
					className: "text-foreground",
					children: "'web · mobile · api'"
				}),
				",",
				"\n",
				"  ",
				/* @__PURE__ */ jsx("span", {
					className: "text-gold-soft",
					children: "status"
				}),
				": ",
				/* @__PURE__ */ jsx("span", {
					className: "text-[#28c840]",
					children: "'available'"
				}),
				",",
				"\n",
				"};",
				"\n",
				/* @__PURE__ */ jsx("span", {
					className: "text-gold",
					children: "$"
				}),
				" ship --quality production",
				/* @__PURE__ */ jsx("span", { className: "inline-block w-2 h-3 bg-gold ml-1 align-middle animate-pulse" })
			]
		})]
	});
}
function MatrixRain() {
	const canvasRef = useRef(null);
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
		let drops = [];
		const fontSize = 14;
		const chars = "01<>/{}[]=+-*$;()abcdefABCDEF0123456789</>const=>asyncawaitreturn";
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
		const tick = (t) => {
			raf = requestAnimationFrame(tick);
			if (t - last < 55) return;
			last = t;
			ctx.fillStyle = "rgba(8, 8, 10, 0.16)";
			ctx.fillRect(0, 0, width, height);
			ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
			for (let i = 0; i < columns; i++) {
				const ch = chars.charAt(Math.floor(Math.random() * 65));
				const x = i * fontSize;
				const y = drops[i] * fontSize;
				ctx.fillStyle = "rgba(212, 175, 55, 0.95)";
				ctx.fillText(ch, x, y);
				ctx.fillStyle = "rgba(212, 175, 55, 0.35)";
				ctx.fillText(ch, x, y - fontSize);
				if (y > height && Math.random() > .975) drops[i] = 0;
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
	return /* @__PURE__ */ jsx("div", {
		"aria-hidden": true,
		className: "absolute inset-0 -z-10 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_78%)]",
		children: /* @__PURE__ */ jsx("canvas", {
			ref: canvasRef,
			className: "h-full w-full opacity-[0.35]"
		})
	});
}
function FloatingTokens() {
	return /* @__PURE__ */ jsx("div", {
		"aria-hidden": true,
		className: "absolute inset-0 -z-10 pointer-events-none overflow-hidden",
		children: [
			{
				t: "</>",
				x: "8%",
				y: "22%",
				d: 0
			},
			{
				t: "{ }",
				x: "82%",
				y: "18%",
				d: 1.2
			},
			{
				t: "=>",
				x: "14%",
				y: "72%",
				d: 2.1
			},
			{
				t: "async",
				x: "70%",
				y: "78%",
				d: .6
			},
			{
				t: "0x1A",
				x: "48%",
				y: "12%",
				d: 1.8
			},
			{
				t: "useEffect",
				x: "60%",
				y: "58%",
				d: 2.6
			},
			{
				t: "git push",
				x: "26%",
				y: "44%",
				d: 1.4
			},
			{
				t: "200 OK",
				x: "88%",
				y: "48%",
				d: .9
			}
		].map((tok) => /* @__PURE__ */ jsx(motion.span, {
			initial: {
				opacity: 0,
				y: 10
			},
			animate: {
				opacity: [
					0,
					.55,
					.55,
					0
				],
				y: [
					10,
					-10,
					-10,
					-30
				]
			},
			transition: {
				duration: 7,
				delay: tok.d,
				repeat: Infinity,
				repeatDelay: 1.5,
				ease: "easeInOut"
			},
			style: {
				left: tok.x,
				top: tok.y
			},
			className: "absolute font-mono text-[11px] tracking-widest text-gold/70 select-none",
			children: tok.t
		}, tok.t))
	});
}
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
		"SEO"
	];
	return /* @__PURE__ */ jsx("div", {
		className: "border-y border-border bg-ink/40 overflow-hidden py-6",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex animate-marquee gap-16 whitespace-nowrap font-display text-2xl text-muted-foreground/60",
			children: [
				...items,
				...items,
				...items
			].map((it, i) => /* @__PURE__ */ jsxs("span", {
				className: "flex items-center gap-16",
				children: [it, /* @__PURE__ */ jsx("span", {
					className: "text-gold",
					children: "✦"
				})]
			}, i))
		})
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-soft",
		children: [/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-gold/50" }), children]
	});
}
function SystemStatus() {
	return /* @__PURE__ */ jsx("div", {
		className: "border-b border-border bg-ink/60",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-4 grid grid-cols-2 md:grid-cols-4 gap-4",
			children: [
				{
					icon: GitBranch,
					label: "main",
					value: "deploy/ready"
				},
				{
					icon: Cpu,
					label: "uptime",
					value: "99.98%"
				},
				{
					icon: Terminal,
					label: "stack",
					value: "TS · React · Node"
				},
				{
					icon: Server,
					label: "region",
					value: "Global · US hours"
				}
			].map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest",
				children: [
					/* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5 text-gold" }),
					/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground/70",
						children: label
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground/80",
						children: "·"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground",
						children: value
					})
				]
			}, label))
		})
	});
}
function CodeShowcase() {
	const tabs = [
		"api/users.ts",
		"app/page.tsx",
		"schema.prisma"
	];
	const [active, setActive] = useState(0);
	const blocks = [
		/* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsxs(Line, {
				n: 1,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "import"
					}),
					" ",
					"{ Router }",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "from"
					}),
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-[#a8e6a3]",
						children: "'express'"
					}),
					";"
				]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 2,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "import"
					}),
					" ",
					"{ z }",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "from"
					}),
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-[#a8e6a3]",
						children: "'zod'"
					}),
					";"
				]
			}),
			/* @__PURE__ */ jsx(Line, { n: 3 }),
			/* @__PURE__ */ jsxs(Line, {
				n: 4,
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-gold-soft",
					children: "const"
				}), " users = Router();"]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 5,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-gold-soft",
						children: "const"
					}),
					" Body = z.object(",
					"{",
					" email: z.string().email() ",
					"}",
					");"
				]
			}),
			/* @__PURE__ */ jsx(Line, { n: 6 }),
			/* @__PURE__ */ jsxs(Line, {
				n: 7,
				children: [
					"users.",
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground",
						children: "post"
					}),
					"(",
					/* @__PURE__ */ jsx("span", {
						className: "text-[#a8e6a3]",
						children: "'/'"
					}),
					", ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "async"
					}),
					" (req, res) ",
					"=>",
					" ",
					"{"
				]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 8,
				children: [
					"  ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gold-soft",
						children: "const"
					}),
					" data = Body.parse(req.body);"
				]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 9,
				children: [
					"  ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gold-soft",
						children: "const"
					}),
					" user = ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "await"
					}),
					" db.user.create(",
					"{ data }",
					");"
				]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 10,
				children: [
					"  ",
					"res.status(",
					/* @__PURE__ */ jsx("span", {
						className: "text-[#f6c177]",
						children: "201"
					}),
					").json(user);"
				]
			}),
			/* @__PURE__ */ jsx(Line, {
				n: 11,
				children: "});"
			})
		] }),
		/* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsxs(Line, {
				n: 1,
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-gold",
					children: "'use client'"
				}), ";"]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 2,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "import"
					}),
					" ",
					"{ motion }",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "from"
					}),
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-[#a8e6a3]",
						children: "'motion/react'"
					}),
					";"
				]
			}),
			/* @__PURE__ */ jsx(Line, { n: 3 }),
			/* @__PURE__ */ jsxs(Line, {
				n: 4,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "export default function"
					}),
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground",
						children: "Hero"
					}),
					"() ",
					"{"
				]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 5,
				children: [
					"  ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "return"
					}),
					" (",
					"<motion.section"
				]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 6,
				children: [
					"    ",
					"initial=",
					"{{ opacity: 0, y: 24 }}"
				]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 7,
				children: [
					"    ",
					"animate=",
					"{{ opacity: 1, y: 0 }}"
				]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 8,
				children: [
					"    ",
					"transition=",
					"{{ duration: 0.8 }}"
				]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 9,
				children: [
					"  >",
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground",
						children: "Ship fast. Ship clean."
					}),
					"</motion.section>",
					");"
				]
			}),
			/* @__PURE__ */ jsx(Line, {
				n: 10,
				children: "}"
			})
		] }),
		/* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsxs(Line, {
				n: 1,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-gold-soft",
						children: "model"
					}),
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground",
						children: "User"
					}),
					" ",
					"{"
				]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 2,
				children: ["  ", "id        String  @id @default(cuid())"]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 3,
				children: ["  ", "email     String  @unique"]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 4,
				children: ["  ", "name      String?"]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 5,
				children: [
					"  ",
					"role      Role    @default(",
					/* @__PURE__ */ jsx("span", {
						className: "text-[#f6c177]",
						children: "USER"
					}),
					")"
				]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 6,
				children: ["  ", "createdAt DateTime @default(now())"]
			}),
			/* @__PURE__ */ jsxs(Line, {
				n: 7,
				children: ["  ", "projects  Project[]"]
			}),
			/* @__PURE__ */ jsx(Line, {
				n: 8,
				children: "}"
			})
		] })
	];
	return /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
		className: "grid lg:grid-cols-12 gap-12 items-center",
		children: [/* @__PURE__ */ jsxs(Reveal, {
			className: "lg:col-span-5",
			children: [
				/* @__PURE__ */ jsx(SectionLabel, { children: "02 / Engineering" }),
				/* @__PURE__ */ jsxs("h2", {
					className: "mt-6 font-display text-5xl md:text-6xl tracking-tighter",
					children: [
						"Code that reads like ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gold-gradient italic",
							children: "prose"
						}),
						"."
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 text-lg text-muted-foreground leading-relaxed",
					children: "Typed end-to-end, validated at the boundary, and tested where it matters. We write code other engineers want to maintain — small modules, clear names, and zero clever tricks."
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-8 space-y-3 text-sm text-muted-foreground",
					children: [
						"TypeScript-first, strict mode always on",
						"Zod / schema validation at every API boundary",
						"Conventional commits, atomic PRs, linear history",
						"Lighthouse 95+ as the default, not the goal"
					].map((t) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-gold mt-1 flex-none" }), /* @__PURE__ */ jsx("span", { children: t })]
					}, t))
				})
			]
		}), /* @__PURE__ */ jsx(Reveal, {
			delay: .15,
			className: "lg:col-span-7",
			children: /* @__PURE__ */ jsxs("div", {
				className: "rounded-2xl border border-border bg-ink/80 overflow-hidden shadow-2xl shadow-black/40",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 px-4 py-3 border-b border-border/80 bg-surface/60",
						children: [
							/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
							/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#febc2e]" }),
							/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" }),
							/* @__PURE__ */ jsx("div", {
								className: "ml-4 flex items-center gap-1",
								children: tabs.map((t, i) => /* @__PURE__ */ jsx("button", {
									onClick: () => setActive(i),
									className: `font-mono text-[11px] px-3 py-1.5 rounded-md transition-colors ${active === i ? "bg-ink text-gold border-t border-x border-border" : "text-muted-foreground hover:text-foreground"}`,
									children: t
								}, t))
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "font-mono text-[12.5px] leading-[1.75] p-5 text-muted-foreground overflow-x-auto",
						children: blocks[active]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between px-4 py-2 border-t border-border/80 bg-surface/40 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(GitBranch, { className: "h-3 w-3 text-gold" }), " main"]
						}), /* @__PURE__ */ jsx("span", { children: "UTF-8 · LF · TS · 2 spaces" })]
					})
				]
			})
		})]
	}) });
}
function Line({ n, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex",
		children: [/* @__PURE__ */ jsx("span", {
			className: "select-none w-8 text-right pr-4 text-muted-foreground/40",
			children: n
		}), /* @__PURE__ */ jsx("span", {
			className: "whitespace-pre",
			children
		})]
	});
}
function About() {
	return /* @__PURE__ */ jsx(Section, {
		id: "about",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-12 gap-16",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ jsx(SectionLabel, { children: "01 / About" }), /* @__PURE__ */ jsxs("h2", {
					className: "mt-6 font-display text-5xl md:text-6xl leading-[1.05] tracking-tighter",
					children: [
						"A developer who builds ",
						/* @__PURE__ */ jsx("em", {
							className: "text-gold-gradient",
							children: "complete digital products"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ jsxs(Reveal, {
				delay: .15,
				className: "lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("p", { children: "We are BitCraft Studio — a software development team of three passionate engineers specializing in websites, full-stack web applications, and mobile app development." }),
					/* @__PURE__ */ jsx("p", { children: "We build complete digital solutions for businesses — from modern websites and custom web applications to Android and iOS mobile apps. Our expertise covers frontend development, backend systems, database architecture, API integration, and mobile application development." }),
					/* @__PURE__ */ jsx("p", { children: "Whether it's a business website, management system, SaaS platform, or mobile application, we focus on creating products that are fast, scalable, user-friendly, and aligned with business goals." }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative mt-8 overflow-hidden rounded-3xl border border-border group",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: workspace_default,
								alt: "Developer workspace",
								loading: "lazy",
								width: 1280,
								height: 896,
								className: "w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-105"
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" }),
							/* @__PURE__ */ jsx("div", {
								className: "absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-gold",
								children: "/// Studio · Always shipping"
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid sm:grid-cols-2 gap-4 pt-4",
						children: [
							["3+ years", "learning & building"],
							["12+ tech", "in active rotation"],
							["Problem-first", "engineering mindset"],
							["US-friendly", "hours & comms"]
						].map(([k, v]) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-2xl border border-border bg-surface/60 p-5 hover:border-gold/40 transition-colors",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-2xl text-foreground",
								children: k
							}), /* @__PURE__ */ jsx("div", {
								className: "text-sm text-muted-foreground mt-1",
								children: v
							})]
						}, k))
					})
				]
			})]
		})
	});
}
function AnimatedCharacter({ variant }) {
	const p = {
		founder: {
			skin: "#e9c9a8",
			hair: "#1f1a17",
			shirt: "#1f2937",
			accent: "#d4af37",
			device: "laptop"
		},
		designer: {
			skin: "#f1d2b6",
			hair: "#2a1a14",
			shirt: "#7c3aed",
			accent: "#f59e0b",
			device: "tablet"
		},
		mobile: {
			skin: "#e6b48a",
			hair: "#0f172a",
			shirt: "#0ea5e9",
			accent: "#d4af37",
			device: "phone"
		},
		hero: {
			skin: "#ecc8a4",
			hair: "#111827",
			shirt: "#111827",
			accent: "#d4af37",
			device: "laptop"
		}
	}[variant];
	return /* @__PURE__ */ jsxs("div", {
		className: "absolute inset-0 flex items-end justify-center",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "absolute inset-0",
				style: { background: `radial-gradient(60% 50% at 50% 45%, ${p.accent}22, transparent 70%)` }
			}),
			/* @__PURE__ */ jsx(motion.div, {
				"aria-hidden": true,
				className: "absolute left-6 top-8 h-2 w-2 rounded-full",
				style: { background: p.accent },
				animate: {
					y: [
						0,
						-10,
						0
					],
					opacity: [
						.4,
						1,
						.4
					]
				},
				transition: {
					duration: 3,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ jsx(motion.div, {
				"aria-hidden": true,
				className: "absolute right-8 top-14 h-1.5 w-1.5 rounded-full",
				style: { background: p.accent },
				animate: {
					y: [
						0,
						-14,
						0
					],
					opacity: [
						.3,
						1,
						.3
					]
				},
				transition: {
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
					delay: .6
				}
			}),
			/* @__PURE__ */ jsx(motion.div, {
				"aria-hidden": true,
				className: "absolute right-10 bottom-20 h-1 w-1 rounded-full bg-foreground/60",
				animate: {
					y: [
						0,
						-8,
						0
					],
					opacity: [
						.2,
						.9,
						.2
					]
				},
				transition: {
					duration: 3.4,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1.1
				}
			}),
			/* @__PURE__ */ jsxs(motion.svg, {
				viewBox: "0 0 240 260",
				className: "relative h-[88%] w-auto",
				animate: { y: [
					0,
					-6,
					0
				] },
				transition: {
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut"
				},
				children: [
					/* @__PURE__ */ jsx("ellipse", {
						cx: "120",
						cy: "248",
						rx: "58",
						ry: "6",
						fill: "#000",
						opacity: "0.35"
					}),
					/* @__PURE__ */ jsx("rect", {
						x: "60",
						y: "170",
						width: "120",
						height: "70",
						rx: "14",
						fill: "#0b0b0d",
						stroke: p.accent,
						strokeOpacity: "0.25"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M70 240 Q70 170 120 170 Q170 170 170 240 Z",
						fill: p.shirt
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M70 240 Q70 170 120 170 Q170 170 170 240 Z",
						fill: "url(#shine)",
						opacity: "0.15"
					}),
					/* @__PURE__ */ jsx("rect", {
						x: "111",
						y: "120",
						width: "18",
						height: "22",
						rx: "4",
						fill: p.skin
					}),
					/* @__PURE__ */ jsxs("g", { children: [
						/* @__PURE__ */ jsx("ellipse", {
							cx: "120",
							cy: "100",
							rx: "34",
							ry: "38",
							fill: p.skin
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M86 96 Q86 60 120 58 Q156 60 154 96 Q146 80 120 80 Q96 80 86 96 Z",
							fill: p.hair
						}),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "86",
							cy: "104",
							rx: "4",
							ry: "6",
							fill: p.skin
						}),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "154",
							cy: "104",
							rx: "4",
							ry: "6",
							fill: p.skin
						}),
						/* @__PURE__ */ jsxs(motion.g, {
							animate: { scaleY: [
								1,
								1,
								.05,
								1,
								1
							] },
							transition: {
								duration: 4,
								times: [
									0,
									.45,
									.5,
									.55,
									1
								],
								repeat: Infinity,
								ease: "easeInOut"
							},
							style: { transformOrigin: "120px 100px" },
							children: [/* @__PURE__ */ jsx("ellipse", {
								cx: "108",
								cy: "100",
								rx: "3",
								ry: "4",
								fill: "#0b0b0d"
							}), /* @__PURE__ */ jsx("ellipse", {
								cx: "132",
								cy: "100",
								rx: "3",
								ry: "4",
								fill: "#0b0b0d"
							})]
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M110 118 Q120 126 130 118",
							stroke: "#0b0b0d",
							strokeWidth: "2",
							fill: "none",
							strokeLinecap: "round"
						}),
						(variant === "founder" || variant === "hero") && /* @__PURE__ */ jsxs("g", {
							stroke: p.accent,
							strokeWidth: "1.8",
							fill: "none",
							children: [
								/* @__PURE__ */ jsx("circle", {
									cx: "108",
									cy: "100",
									r: "8"
								}),
								/* @__PURE__ */ jsx("circle", {
									cx: "132",
									cy: "100",
									r: "8"
								}),
								/* @__PURE__ */ jsx("path", { d: "M116 100 L124 100" })
							]
						})
					] }),
					p.device === "laptop" && /* @__PURE__ */ jsxs("g", { children: [
						/* @__PURE__ */ jsx("rect", {
							x: "62",
							y: "206",
							width: "116",
							height: "30",
							rx: "6",
							fill: "#1a1a1f",
							stroke: p.accent,
							strokeOpacity: "0.45"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "68",
							y: "212",
							width: "104",
							height: "18",
							rx: "3",
							fill: "#0b0b0d"
						}),
						/* @__PURE__ */ jsx(motion.rect, {
							x: "75",
							y: "216",
							width: "2",
							height: "10",
							fill: p.accent,
							animate: { opacity: [
								1,
								0,
								1
							] },
							transition: {
								duration: 1,
								repeat: Infinity
							}
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "82",
							y: "217",
							width: "40",
							height: "2",
							fill: p.accent,
							opacity: "0.7"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "82",
							y: "222",
							width: "60",
							height: "2",
							fill: "#9ca3af",
							opacity: "0.55"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "82",
							y: "227",
							width: "30",
							height: "2",
							fill: p.accent,
							opacity: "0.5"
						}),
						/* @__PURE__ */ jsx(motion.path, {
							d: "M86 200 Q92 196 104 204",
							stroke: p.skin,
							strokeWidth: "10",
							strokeLinecap: "round",
							fill: "none",
							animate: { d: [
								"M86 200 Q92 196 104 204",
								"M86 202 Q92 200 104 206",
								"M86 200 Q92 196 104 204"
							] },
							transition: {
								duration: .6,
								repeat: Infinity,
								ease: "easeInOut"
							}
						}),
						/* @__PURE__ */ jsx(motion.path, {
							d: "M154 200 Q148 196 136 204",
							stroke: p.skin,
							strokeWidth: "10",
							strokeLinecap: "round",
							fill: "none",
							animate: { d: [
								"M154 200 Q148 196 136 204",
								"M154 202 Q148 200 136 206",
								"M154 200 Q148 196 136 204"
							] },
							transition: {
								duration: .6,
								repeat: Infinity,
								ease: "easeInOut",
								delay: .15
							}
						})
					] }),
					p.device === "tablet" && /* @__PURE__ */ jsxs("g", { children: [
						/* @__PURE__ */ jsxs(motion.g, {
							animate: { rotate: [
								-2,
								2,
								-2
							] },
							transition: {
								duration: 3.6,
								repeat: Infinity,
								ease: "easeInOut"
							},
							style: { transformOrigin: "120px 215px" },
							children: [
								/* @__PURE__ */ jsx("rect", {
									x: "90",
									y: "190",
									width: "60",
									height: "80",
									rx: "8",
									fill: "#1a1a1f",
									stroke: p.accent,
									strokeOpacity: "0.5"
								}),
								/* @__PURE__ */ jsx("rect", {
									x: "96",
									y: "198",
									width: "48",
									height: "60",
									rx: "3",
									fill: "#0b0b0d"
								}),
								/* @__PURE__ */ jsx("rect", {
									x: "102",
									y: "206",
									width: "36",
									height: "6",
									rx: "2",
									fill: p.accent,
									opacity: "0.8"
								}),
								/* @__PURE__ */ jsx("rect", {
									x: "102",
									y: "218",
									width: "22",
									height: "4",
									fill: "#9ca3af",
									opacity: "0.6"
								}),
								/* @__PURE__ */ jsx("rect", {
									x: "102",
									y: "226",
									width: "30",
									height: "4",
									fill: "#9ca3af",
									opacity: "0.5"
								}),
								/* @__PURE__ */ jsx("rect", {
									x: "102",
									y: "234",
									width: "18",
									height: "4",
									fill: p.accent,
									opacity: "0.7"
								})
							]
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M82 210 Q90 200 96 210",
							stroke: p.skin,
							strokeWidth: "10",
							strokeLinecap: "round",
							fill: "none"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M158 210 Q150 200 144 210",
							stroke: p.skin,
							strokeWidth: "10",
							strokeLinecap: "round",
							fill: "none"
						})
					] }),
					p.device === "phone" && /* @__PURE__ */ jsxs("g", { children: [
						/* @__PURE__ */ jsxs(motion.g, {
							animate: {
								y: [
									0,
									-3,
									0
								],
								rotate: [
									-3,
									3,
									-3
								]
							},
							transition: {
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut"
							},
							style: { transformOrigin: "120px 220px" },
							children: [
								/* @__PURE__ */ jsx("rect", {
									x: "102",
									y: "188",
									width: "36",
									height: "64",
									rx: "7",
									fill: "#1a1a1f",
									stroke: p.accent,
									strokeOpacity: "0.6"
								}),
								/* @__PURE__ */ jsx("rect", {
									x: "106",
									y: "194",
									width: "28",
									height: "48",
									rx: "3",
									fill: "#0b0b0d"
								}),
								/* @__PURE__ */ jsx(motion.rect, {
									x: "110",
									y: "200",
									width: "20",
									height: "4",
									fill: p.accent,
									animate: { opacity: [
										1,
										.3,
										1
									] },
									transition: {
										duration: 1.6,
										repeat: Infinity
									}
								}),
								/* @__PURE__ */ jsx("rect", {
									x: "110",
									y: "210",
									width: "14",
									height: "3",
									fill: "#9ca3af",
									opacity: "0.6"
								}),
								/* @__PURE__ */ jsx("rect", {
									x: "110",
									y: "218",
									width: "18",
									height: "3",
									fill: "#9ca3af",
									opacity: "0.5"
								}),
								/* @__PURE__ */ jsx("rect", {
									x: "110",
									y: "226",
									width: "12",
									height: "3",
									fill: p.accent,
									opacity: "0.7"
								}),
								/* @__PURE__ */ jsx("circle", {
									cx: "120",
									cy: "247",
									r: "2",
									fill: "#9ca3af"
								})
							]
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M92 210 Q100 198 110 208",
							stroke: p.skin,
							strokeWidth: "10",
							strokeLinecap: "round",
							fill: "none"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M148 210 Q140 198 130 208",
							stroke: p.skin,
							strokeWidth: "10",
							strokeLinecap: "round",
							fill: "none"
						})
					] }),
					/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
						id: "shine",
						x1: "0",
						y1: "0",
						x2: "1",
						y2: "1",
						children: [/* @__PURE__ */ jsx("stop", {
							offset: "0",
							stopColor: "#fff",
							stopOpacity: "0.6"
						}), /* @__PURE__ */ jsx("stop", {
							offset: "1",
							stopColor: "#fff",
							stopOpacity: "0"
						})]
					}) })
				]
			})
		]
	});
}
function Team() {
	const members = [
		{
			name: "Aniket",
			role: "Founder & Full-Stack Software Developer",
			variant: "founder",
			photo: aniket_png_asset_default.url,
			bio: "Responsible for building scalable web applications, business websites, and software solutions from concept to deployment.",
			skills: [
				"Full-Stack Development",
				"Website Development",
				"Backend Architecture",
				"Database Design",
				"API Development",
				"Project Planning"
			]
		},
		{
			name: "Pooja",
			role: "Frontend Developer & UI/UX Specialist",
			variant: "designer",
			photo: pooja_png_asset_default.url,
			bio: "Focused on creating modern, user-friendly, and visually appealing interfaces that deliver exceptional user experiences.",
			skills: [
				"React Development",
				"Responsive Design",
				"UI Implementation",
				"User Experience Design",
				"Performance Optimization"
			]
		},
		{
			name: "Atharva",
			role: "Mobile App Developer",
			variant: "mobile",
			photo: atharva_png_asset_default.url,
			bio: "Specializes in developing high-performance mobile applications for Android and iOS platforms with seamless user experiences.",
			skills: [
				"Android Development",
				"iOS Development",
				"Cross-Platform Development",
				"API Integration",
				"App Performance Optimization"
			]
		}
	];
	return /* @__PURE__ */ jsxs(Section, {
		id: "team",
		children: [
			/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx(SectionLabel, { children: "03 / Team" }), /* @__PURE__ */ jsxs("h2", {
				className: "mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-4xl",
				children: ["Small Team. ", /* @__PURE__ */ jsx("span", {
					className: "text-gold-gradient italic",
					children: "Big Results."
				})]
			})] }),
			/* @__PURE__ */ jsx(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed",
					children: "We are a team of passionate software developers specializing in websites, web applications, and mobile app development. Together, we combine expertise in frontend development, backend engineering, database architecture, and mobile technologies to deliver complete digital solutions for businesses and startups."
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-14 grid md:grid-cols-3 gap-8",
				children: members.map((m, idx) => /* @__PURE__ */ jsx(Reveal, {
					delay: idx * .12,
					children: /* @__PURE__ */ jsxs("div", {
						className: "group relative h-full rounded-3xl border border-border bg-surface/50 overflow-hidden hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative aspect-square overflow-hidden bg-ink",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: m.photo,
									alt: `${m.name} — ${m.role}`,
									loading: "lazy",
									className: "absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent pointer-events-none" }),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/40 pointer-events-none" })
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-7",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-3xl tracking-tight",
									children: m.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm uppercase tracking-widest text-gold-soft",
									children: m.role
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-muted-foreground leading-relaxed text-sm",
									children: m.bio
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-5 flex flex-wrap gap-2",
									children: m.skills.map((s) => /* @__PURE__ */ jsx("span", {
										className: "text-[11px] font-mono uppercase tracking-wider rounded-full border border-border bg-ink/40 px-3 py-1 text-muted-foreground",
										children: s
									}, s))
								})
							]
						})]
					})
				}, m.name))
			})
		]
	});
}
function Skills() {
	return /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx(SectionLabel, { children: "04 / Skills" }), /* @__PURE__ */ jsxs("h2", {
		className: "mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-3xl",
		children: [
			"A modern stack, used with ",
			/* @__PURE__ */ jsx("span", {
				className: "text-gold-gradient italic",
				children: "intention"
			}),
			"."
		]
	})] }), /* @__PURE__ */ jsx("div", {
		className: "mt-14 grid md:grid-cols-3 gap-6",
		children: [
			{
				title: "Frontend",
				items: [
					"HTML",
					"CSS",
					"JavaScript",
					"React",
					"Next.js",
					"Tailwind CSS"
				]
			},
			{
				title: "Backend & DB",
				items: [
					"Node.js",
					"Express.js",
					"MongoDB",
					"MySQL",
					"REST APIs"
				]
			},
			{
				title: "Mobile & Tools",
				items: [
					"React Native",
					"Flutter",
					"Git",
					"GitHub",
					"Figma",
					"VS Code"
				]
			}
		].map((g, idx) => /* @__PURE__ */ jsx(Reveal, {
			delay: idx * .1,
			children: /* @__PURE__ */ jsxs("div", {
				className: "group relative h-full rounded-3xl border border-border bg-surface/50 p-8 hover:border-gold/50 transition-all overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" }),
					/* @__PURE__ */ jsxs("div", {
						className: "font-mono text-xs uppercase tracking-widest text-gold",
						children: ["0", idx + 1]
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-2 font-display text-3xl",
						children: g.title
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-6 space-y-3",
						children: g.items.map((item) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center justify-between border-b border-border/60 pb-3 last:border-0",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: item
							}), /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-gold" })]
						}, item))
					})
				]
			})
		}, g.title))
	})] });
}
var PROJECTS = [
	{
		name: "Luxe Beauty Salon",
		type: "Beauty & Wellness",
		img: project_salon_default,
		desc: "A serene booking-first experience for a high-end salon with online appointments, service showcase, before/after gallery, and testimonials.",
		tech: [
			"Next.js",
			"Tailwind",
			"Framer Motion"
		],
		live: "https://preview-react-9bi9pu-a7zdbz8kcssm9gcsngnkea.onspace.build/?_q=a7Zdbz8kcssM9gcsnGNkEA"
	},
	{
		name: "Haven Real Estate",
		type: "Real Estate",
		img: project_realestate_default,
		desc: "Editorial property platform with rich listings, advanced filters, agent profiles, and a fast, image-led browse experience.",
		tech: [
			"React",
			"Node.js",
			"MongoDB"
		],
		live: "https://preview-react-9bi9v3-xkga5sjmx8qwg8zvvpwgew.onspace.build/?_q=XKGA5sjmx8qwg8ZvVpWGEW"
	},
	{
		name: "Maison Fashion",
		type: "Fashion Brand",
		img: project_fashion_default,
		desc: "A storytelling-driven fashion brand site with product catalog, lookbook, and immersive editorial sections.",
		tech: [
			"Next.js",
			"Tailwind",
			"GSAP"
		],
		live: "https://preview-react-9bi9wm-s25np3npe5q4hexw9vzntd.onspace.build/"
	},
	{
		name: "Nova Medical Clinic",
		type: "Healthcare",
		img: project_clinic_default,
		desc: "Trust-first clinic site with doctor profiles, online appointment scheduling, and clear service breakdowns.",
		tech: [
			"React",
			"Express",
			"MongoDB"
		],
		live: "https://preview-react-9b0sbp-xshymbawxwkgqlqxkjhmxh.onspace.build/"
	},
	{
		name: "EliteHome",
		type: "Premium Home Services Management Platform",
		img: project_saas_default,
		desc: "Lead Generation System, Booking Platform, Customer Portal, Technician Dashboard, AI Quote Assistant, and Real-Time Tracking — a complete home services solution.",
		tech: [
			"Next.js",
			"Node.js",
			"MongoDB",
			"Auth"
		],
		live: "https://preview-react-9bi2p5-nemmujjqmqhqsb63zhjabc.onspace.build/?_q=nEmMUJJQMQHqsB63ZhjABc"
	},
	{
		name: "Feast Food Delivery",
		type: "Mobile App (iOS & Android)",
		img: project_food_app_default,
		desc: "A full-featured food delivery app with restaurant browsing, real-time order tracking, cart management, and payment integration.",
		tech: [
			"React Native",
			"Express",
			"MongoDB"
		],
		live: "https://preview-react-9bi2d4-w3zwctxtty53nbtmh5tksw.onspace.build/?_q=W3ZWctxtTY53NbtMH5tkSw"
	}
];
function Projects() {
	return /* @__PURE__ */ jsxs(Section, {
		id: "work",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap items-end justify-between gap-6",
			children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx(SectionLabel, { children: "05 / Featured Work" }), /* @__PURE__ */ jsxs("h2", {
				className: "mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-2xl",
				children: [
					"Premium projects, ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gold-gradient italic",
						children: "built like real businesses"
					}),
					"."
				]
			})] }), /* @__PURE__ */ jsx(Reveal, {
				delay: .2,
				children: /* @__PURE__ */ jsx("p", {
					className: "max-w-md text-muted-foreground",
					children: "Transforming ideas into powerful digital experiences through modern web development, mobile engineering, and thoughtful product design."
				})
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-16 grid md:grid-cols-2 gap-8",
			children: PROJECTS.map((p, idx) => /* @__PURE__ */ jsx(Reveal, {
				delay: idx * .1,
				children: /* @__PURE__ */ jsx(ProjectCard, {
					project: p,
					index: idx
				})
			}, p.name))
		})]
	});
}
function ProjectCard({ project: p, index }) {
	return /* @__PURE__ */ jsxs("a", {
		href: p.live,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "group block relative rounded-3xl border border-border bg-surface/40 overflow-hidden hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold",
		style: { willChange: "transform" },
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-[16/11] overflow-hidden bg-ink",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: p.img,
					alt: p.name,
					loading: "lazy",
					width: 1280,
					height: 896,
					className: "h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" }),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-ink/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-gold border border-gold/30",
					children: [
						"0",
						index + 1,
						" / ",
						p.type
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute top-5 right-5 h-10 w-10 grid place-items-center rounded-full bg-gold text-ink translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all",
					children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-7",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-3xl tracking-tight",
					children: p.name
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-muted-foreground leading-relaxed",
					children: p.desc
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: p.tech.map((t) => /* @__PURE__ */ jsx("span", {
						className: "text-[11px] font-mono uppercase tracking-wider rounded-full border border-border bg-ink/40 px-3 py-1 text-muted-foreground",
						children: t
					}, t))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex items-center gap-5 text-sm",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1.5 text-gold group-hover:gap-2.5 transition-all",
						children: ["View Live Demo ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })]
					}), /* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1.5 text-muted-foreground",
						children: [/* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }), " Code"]
					})]
				})
			]
		})]
	});
}
function Services() {
	return /* @__PURE__ */ jsxs(Section, {
		id: "services",
		children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx(SectionLabel, { children: "06 / Services" }), /* @__PURE__ */ jsxs("h2", {
			className: "mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-3xl",
			children: [
				"What We can ",
				/* @__PURE__ */ jsx("span", {
					className: "text-gold-gradient italic",
					children: "build for you"
				}),
				"."
			]
		})] }), /* @__PURE__ */ jsx("div", {
			className: "mt-14 grid md:grid-cols-2 gap-6",
			children: [
				{
					icon: Layout,
					title: "Website Design",
					desc: "Modern UI/UX designs crafted to feel premium and on-brand."
				},
				{
					icon: Code2,
					title: "Website Development",
					desc: "Fast, responsive websites engineered for speed and scale."
				},
				{
					icon: Briefcase,
					title: "Business Websites",
					desc: "Salon, clinic, real estate, restaurant — full marketing sites."
				},
				{
					icon: Rocket,
					title: "Landing Pages",
					desc: "High-converting landing pages built for paid campaigns."
				},
				{
					icon: Layers,
					title: "Full-Stack Web Apps",
					desc: "End-to-end web apps with auth, databases, dashboards, and REST APIs."
				},
				{
					icon: Server,
					title: "APIs & Backends",
					desc: "Node.js & Express APIs with MongoDB / MySQL, integrations, and auth."
				},
				{
					icon: Database,
					title: "Admin Dashboards",
					desc: "Custom admin panels and CMS-style dashboards to manage your business."
				},
				{
					icon: TabletSmartphone,
					title: "Mobile App Development",
					desc: "Cross-platform Android & iOS apps with React Native — native feel, single codebase."
				}
			].map((it, idx) => /* @__PURE__ */ jsx(Reveal, {
				delay: idx * .08,
				children: /* @__PURE__ */ jsxs("div", {
					className: "group relative rounded-3xl border border-border bg-surface/50 p-8 hover:border-gold/50 transition-all overflow-hidden h-full",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ jsx("div", {
								className: "h-14 w-14 rounded-2xl bg-gold/10 grid place-items-center text-gold group-hover:bg-gold group-hover:text-ink transition-colors",
								children: /* @__PURE__ */ jsx(it.icon, { className: "h-6 w-6" })
							}), /* @__PURE__ */ jsxs("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: ["0", idx + 1]
							})]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-6 font-display text-3xl",
							children: it.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-muted-foreground leading-relaxed",
							children: it.desc
						})
					]
				})
			}, it.title))
		})]
	});
}
function TechStack() {
	return /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionLabel, { children: "07 / Tech Stack" }) }), /* @__PURE__ */ jsx("div", {
		className: "mt-10 grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3",
		children: [
			"React",
			"Next.js",
			"TypeScript",
			"Node.js",
			"MongoDB",
			"Tailwind",
			"React Native",
			"Flutter",
			"Figma",
			"Git"
		].map((s, idx) => /* @__PURE__ */ jsx(Reveal, {
			delay: idx * .05,
			children: /* @__PURE__ */ jsx("div", {
				className: "aspect-square rounded-2xl border border-border bg-surface/50 grid place-items-center text-center px-2 hover:border-gold/50 hover:bg-surface transition-all hover:-translate-y-1",
				children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", {
					className: "font-display text-xl text-gold-gradient",
					children: s
				}) })
			})
		}, s))
	})] });
}
function WhyMe() {
	return /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
		className: "rounded-[2rem] border border-border bg-surface/40 p-10 md:p-16 relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: accent_gold_default,
				alt: "",
				"aria-hidden": true,
				loading: "lazy",
				width: 1280,
				height: 720,
				className: "absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen pointer-events-none"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute -top-32 -left-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" }),
			/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx(SectionLabel, { children: "08 / Why Work With Us" }), /* @__PURE__ */ jsxs("h2", {
				className: "mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-2xl",
				children: [
					"Six reasons clients ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gold-gradient italic",
						children: "stick around"
					}),
					"."
				]
			})] }),
			/* @__PURE__ */ jsx("div", {
				className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: [
					{
						icon: Smartphone,
						title: "Responsive Design"
					},
					{
						icon: Gauge,
						title: "Fast Loading Speed"
					},
					{
						icon: Search,
						title: "SEO Friendly"
					},
					{
						icon: Sparkles,
						title: "Modern UI/UX"
					},
					{
						icon: Layout,
						title: "Mobile Optimized"
					},
					{
						icon: LifeBuoy,
						title: "Ongoing Support"
					}
				].map((it, idx) => /* @__PURE__ */ jsx(Reveal, {
					delay: idx * .07,
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4 rounded-2xl border border-border bg-ink/40 p-5 hover:border-gold/50 transition-colors",
						children: [/* @__PURE__ */ jsx("div", {
							className: "h-11 w-11 rounded-xl bg-gold/10 grid place-items-center text-gold",
							children: /* @__PURE__ */ jsx(it.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsx("span", {
							className: "font-display text-xl",
							children: it.title
						})]
					})
				}, it.title))
			})
		]
	}) });
}
function Process() {
	return /* @__PURE__ */ jsxs(Section, {
		id: "process",
		children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx(SectionLabel, { children: "09 / Process" }), /* @__PURE__ */ jsxs("h2", {
			className: "mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-3xl",
			children: [
				"A calm, ",
				/* @__PURE__ */ jsx("span", {
					className: "text-gold-gradient italic",
					children: "predictable"
				}),
				" process."
			]
		})] }), /* @__PURE__ */ jsxs("div", {
			className: "mt-14 relative",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" }), /* @__PURE__ */ jsx("div", {
				className: "space-y-10",
				children: [
					["Discovery", "Understanding your business, goals, and audience."],
					["Planning", "Mapping site structure, content, and key flows."],
					["Design", "Crafting a premium, on-brand visual direction."],
					["Development", "Building with React/Next.js for speed and scale."],
					["Testing", "QA across devices, performance, and SEO checks."],
					["Launch", "Deploy, monitor, and support post-launch."]
				].map(([title, desc], idx) => /* @__PURE__ */ jsx(Reveal, {
					delay: idx * .05,
					children: /* @__PURE__ */ jsxs("div", {
						className: `relative grid md:grid-cols-2 gap-6 ${idx % 2 ? "md:[&>*:first-child]:order-2" : ""}`,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "pl-12 md:pl-0 md:pr-12 md:text-right",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "font-mono text-xs uppercase tracking-widest text-gold",
										children: ["Step 0", idx + 1]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-2 font-display text-3xl",
										children: title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-muted-foreground",
										children: desc
									})
								]
							}),
							/* @__PURE__ */ jsx("div", { className: "hidden md:block" }),
							/* @__PURE__ */ jsx("span", { className: "absolute left-4 md:left-1/2 top-2 h-3 w-3 rounded-full bg-gold ring-4 ring-background -translate-x-1/2" })
						]
					})
				}, title))
			})]
		})]
	});
}
function Testimonials() {
	return /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx(SectionLabel, { children: "10 / Testimonials" }), /* @__PURE__ */ jsxs("h2", {
		className: "mt-6 font-display text-5xl md:text-6xl tracking-tighter max-w-3xl",
		children: [
			"Kind words from ",
			/* @__PURE__ */ jsx("span", {
				className: "text-gold-gradient italic",
				children: "sample projects"
			}),
			"."
		]
	})] }), /* @__PURE__ */ jsx("div", {
		className: "mt-14 grid md:grid-cols-3 gap-6",
		children: [
			{
				quote: "BitCraft Studio's work feels like a real luxury brand site. The attention to typography and motion is rare for a development team.",
				name: "A. Reyes",
				role: "Salon Owner · Sample Project Feedback"
			},
			{
				quote: "Communication was crisp and the site shipped fast. The pages load instantly and look fantastic on mobile.",
				name: "M. Carter",
				role: "Realtor · Sample Project Feedback"
			},
			{
				quote: "They think like designers and ship like engineers. Exactly what a small business needs to look credible online.",
				name: "S. Linwood",
				role: "Founder · Sample Project Feedback"
			}
		].map((t, idx) => /* @__PURE__ */ jsx(Reveal, {
			delay: idx * .1,
			children: /* @__PURE__ */ jsxs("figure", {
				className: "h-full rounded-3xl border border-border bg-surface/50 p-8 flex flex-col",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex gap-1 text-gold",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-gold" }, i))
					}),
					/* @__PURE__ */ jsxs("blockquote", {
						className: "mt-5 font-display text-xl leading-snug text-foreground/90 flex-1",
						children: [
							"\"",
							t.quote,
							"\""
						]
					}),
					/* @__PURE__ */ jsxs("figcaption", {
						className: "mt-6 pt-6 border-t border-border",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-medium",
							children: t.name
						}), /* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: t.role
						})]
					})
				]
			})
		}, t.name))
	})] });
}
function Contact() {
	const CONTACT = {
		email: "bitcraftstudiobcs07@gmail.com",
		whatsapp: "918080671201",
		linkedin: "https://www.linkedin.com/in/aniket-umare",
		github: "https://github.com/aniket-umare"
	};
	const [sent, setSent] = useState(false);
	const [sending, setSending] = useState(null);
	const buildMessage = (fd) => {
		const name = String(fd.get("name") || "").trim().slice(0, 100);
		const email = String(fd.get("email") || "").trim().slice(0, 120);
		const type = String(fd.get("type") || "").trim();
		const message = String(fd.get("message") || "").trim().slice(0, 1500);
		const plain = `Hi BitCraft Studio, I'd like to discuss a project.\n\nName: ${name}\nEmail: ${email}\nProject: ${type}\n\n${message}`;
		return {
			name,
			email,
			type,
			message,
			body: encodeURIComponent(plain)
		};
	};
	const send = (channel) => (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const { email, body } = buildMessage(new FormData(form));
		if (!email) return;
		setSending(channel);
		const subject = encodeURIComponent("New project enquiry");
		if (channel === "whatsapp") window.open(`https://wa.me/${CONTACT.whatsapp}?text=${body}`, "_blank", "noopener,noreferrer");
		else {
			const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}&su=${subject}&body=${body}`;
			const mailtoUrl = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
			if (!window.open(gmailUrl, "_blank", "noopener,noreferrer")) window.location.href = mailtoUrl;
		}
		setSent(true);
		setTimeout(() => {
			setSent(false);
			setSending(null);
		}, 4e3);
		form.reset();
	};
	return /* @__PURE__ */ jsx(Section, {
		id: "contact",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-[2rem] border border-gold/20 bg-gradient-to-br from-surface/80 to-ink p-8 md:p-16 relative overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl" }), /* @__PURE__ */ jsxs("div", {
				className: "relative grid lg:grid-cols-2 gap-14",
				children: [/* @__PURE__ */ jsxs(Reveal, { children: [
					/* @__PURE__ */ jsx(SectionLabel, { children: "11 / Contact" }),
					/* @__PURE__ */ jsxs("h2", {
						className: "mt-6 font-display text-5xl md:text-6xl leading-[1.05] tracking-tighter",
						children: [
							"Let's build ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gold-gradient italic",
								children: "something great"
							}),
							"."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-muted-foreground text-lg max-w-md",
						children: "Have a project in mind? Tell us about your business and the website or mobile app you want. We'll reply within 24 hours."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-10 space-y-4 text-sm",
						children: [
							{
								icon: Mail,
								label: CONTACT.email,
								href: `mailto:${CONTACT.email}`,
								external: false
							},
							{
								icon: MessageCircle,
								label: `WhatsApp · +${CONTACT.whatsapp}`,
								href: `https://wa.me/${CONTACT.whatsapp}`,
								external: true
							},
							{
								icon: Linkedin,
								label: "LinkedIn",
								href: CONTACT.linkedin,
								external: true
							},
							{
								icon: Github,
								label: "GitHub",
								href: CONTACT.github,
								external: true
							}
						].map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
							href: c.href,
							target: c.external ? "_blank" : void 0,
							rel: c.external ? "noopener noreferrer" : void 0,
							className: "group inline-flex items-center gap-3 text-foreground hover:text-gold transition-colors",
							children: [/* @__PURE__ */ jsx("span", {
								className: "h-9 w-9 rounded-full border border-border grid place-items-center group-hover:border-gold/60",
								children: /* @__PURE__ */ jsx(c.icon, { className: "h-4 w-4" })
							}), c.label]
						}) }, c.label))
					})
				] }), /* @__PURE__ */ jsx(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ jsxs("form", {
						onSubmit: send("whatsapp"),
						className: "rounded-2xl border border-border bg-ink/40 backdrop-blur p-7 space-y-5",
						children: [
							/* @__PURE__ */ jsx(Field, {
								label: "Name",
								name: "name",
								placeholder: "Jane Doe",
								required: true
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Email",
								name: "email",
								type: "email",
								placeholder: "jane@company.com",
								required: true
							}),
							/* @__PURE__ */ jsx(SelectField, {
								label: "Project Type",
								name: "type",
								options: [
									"Business Website",
									"Landing Page",
									"Web Application",
									"Mobile App",
									"E-commerce",
									"Other"
								]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2",
								children: "Message"
							}), /* @__PURE__ */ jsx("textarea", {
								name: "message",
								required: true,
								rows: 4,
								placeholder: "Tell us about your project...",
								className: "w-full rounded-xl bg-surface/70 border border-border px-4 py-3 text-sm outline-none focus:border-gold/60 transition-colors resize-none"
							})] }),
							/* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-3 pt-1",
								children: [/* @__PURE__ */ jsxs("button", {
									type: "submit",
									className: "group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient text-ink px-6 py-4 text-sm font-medium shadow-gold hover:scale-[1.01] transition-transform",
									children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), sent && sending === "whatsapp" ? "Opening WhatsApp…" : "Send via WhatsApp"]
								}), /* @__PURE__ */ jsxs("button", {
									type: "button",
									onClick: (ev) => {
										const form = ev.currentTarget.closest("form") || null;
										if (!form) return;
										const fakeEvent = {
											preventDefault: () => {},
											currentTarget: form
										};
										send("email")(fakeEvent);
									},
									className: "group inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 text-foreground px-6 py-4 text-sm font-medium hover:border-gold hover:text-gold transition-colors",
									children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), sent && sending === "email" ? "Opening email…" : "Send via Email"]
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground/80 text-center pt-1",
								children: "Replies within 24 hours · Mon–Sat"
							})
						]
					})
				})]
			})]
		})
	});
}
function Field({ label, name, type = "text", placeholder, required }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
		className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2",
		children: label
	}), /* @__PURE__ */ jsx("input", {
		name,
		type,
		required,
		placeholder,
		maxLength: 200,
		className: "w-full rounded-xl bg-surface/70 border border-border px-4 py-3 text-sm outline-none focus:border-gold/60 transition-colors"
	})] });
}
function SelectField({ label, name, options }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
		className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2",
		children: label
	}), /* @__PURE__ */ jsx("select", {
		name,
		className: "w-full rounded-xl bg-surface/70 border border-border px-4 py-3 text-sm outline-none focus:border-gold/60 transition-colors",
		children: options.map((o) => /* @__PURE__ */ jsx("option", { children: o }, o))
	})] });
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border mt-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: "h-7 w-7 rounded-full bg-gold-gradient grid place-items-center text-ink font-display text-xs",
					children: "BC"
				}), /* @__PURE__ */ jsxs("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" BitCraft Studio. Crafted with care."
				] })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-6",
				children: [/* @__PURE__ */ jsx("a", {
					href: "#top",
					className: "hover:text-gold transition-colors",
					children: "Back to top"
				}), /* @__PURE__ */ jsx("a", {
					href: "#contact",
					className: "hover:text-gold transition-colors",
					children: "Get in touch"
				})]
			})]
		})
	});
}
function Section({ id, children }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: "py-28 md:py-36 scroll-mt-24",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children
		})
	});
}
function Reveal({ children, delay = 0, className }) {
	const ref = useRef(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ jsx(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y: 30
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
//#endregion
export { PortfolioPage as component };
