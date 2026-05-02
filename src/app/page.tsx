"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Smartphone,
  Globe,
  LayoutDashboard,
  Server,
  Clock,
  Layers,
  Scale,
  FileCode,
  GitBranch,
  Zap,
  Shield,
  Cloud,
  Copy,
  Check,
  ChevronDown,
  ExternalLink,
  Mail,
} from "lucide-react";
import { useState } from "react";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Reusable section wrapper ─── */
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/* ─── Copy-to-clipboard helper ─── */
function CopyBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group">
      <pre className="text-sm md:text-base">
        <code>{text}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
        aria-label="Copiar"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Copy className="w-4 h-4 text-slate-400" />
        )}
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center blueprint-bg overflow-hidden">
      {/* Decorative blueprint circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-[rgba(37,99,235,0.15)]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-[rgba(37,99,235,0.1)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(37,99,235,0.08)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(37,99,235,0.4)] bg-[rgba(37,99,235,0.08)] px-4 py-1.5 text-sm font-medium text-blue-300 mb-8">
            <Zap className="w-4 h-4" />
            Boilerplate open source para productos digitales
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          AppDawn
          <span className="block text-blue-400 mt-2">
            Planos para construir
            <br className="hidden sm:block" /> cualquier producto digital
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AppDawn te da los planos básicos para montar cualquier aplicación.
          App móvil, landing page, backoffice y backend API — todo
          preconfigurado y listo para usar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#docs"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f59e0b] px-8 py-3.5 text-sm font-semibold text-[#0c1e33] shadow-lg shadow-amber-500/20 hover:bg-[#fbbf24] hover:shadow-amber-500/30 transition-all"
          >
            Empezar ahora
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/tohuerta/appdawn-landing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[rgba(37,99,235,0.4)] bg-white/5 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-all"
          >
            <GitBranch className="w-4 h-4" />
            Ver en GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 flex items-center justify-center gap-8 text-slate-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-blue-400" /> App móvil
          </div>
          <div className="w-px h-4 bg-slate-600" />
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-400" /> Landing
          </div>
          <div className="w-px h-4 bg-slate-600" />
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-4 h-4 text-blue-400" /> Backoffice
          </div>
          <div className="w-px h-4 bg-slate-600 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-2">
            <Server className="w-4 h-4 text-blue-400" /> Backend API
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12"
        >
          <a
            href="#que-es"
            className="inline-flex flex-col items-center text-slate-400 hover:text-white transition-colors"
          >
            <span className="text-xs mb-1">Descubre más</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ¿QUÉ ES APPDAWN?
   ═══════════════════════════════════════════════ */
function QueEs() {
  const products = [
    {
      icon: Smartphone,
      title: "App Móvil",
      desc: "React Native + Expo. Una codebase para iOS, Android y Web.",
      repo: "https://github.com/tohuerta/appdawn-app",
    },
    {
      icon: Globe,
      title: "Landing Page",
      desc: "Next.js + Tailwind CSS. SEO-friendly, rápida y moderna.",
      repo: "https://github.com/tohuerta/appdawn-landing",
    },
    {
      icon: LayoutDashboard,
      title: "Backoffice",
      desc: "React + Vite + Tailwind. Panel de administración ágil.",
      repo: "https://github.com/tohuerta/appdawn-backoffice",
    },
    {
      icon: Server,
      title: "Backend API",
      desc: "NestJS + Prisma + PostgreSQL. API robusta, tipada y escalable.",
      repo: "https://github.com/tohuerta/appdawn-backend",
    },
  ];

  return (
    <Section id="que-es" className="blueprint-bg-sm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Qué es AppDawn?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Un <strong className="text-blue-300">boilerplate/template base</strong>{" "}
            reutilizable que incluye todo lo que necesitas para arrancar un producto
            digital. Preconfigurado con las mejores prácticas del sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={i + 1}
              className="group relative rounded-xl border border-[rgba(37,99,235,0.2)] bg-[rgba(14,38,64,0.5)] p-6 hover:border-[rgba(37,99,235,0.5)] hover:bg-[rgba(14,38,64,0.7)] transition-all"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[rgba(37,99,235,0.15)] text-blue-400 group-hover:text-[#f59e0b] group-hover:bg-[rgba(245,158,11,0.15)] transition-colors">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                {p.title}
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   VENTAJAS
   ═══════════════════════════════════════════════ */
function Ventajas() {
  const benefits = [
    {
      icon: Clock,
      title: "Ahorro de tiempo",
      desc: "Semanas de setup reducidas a minutos. Enfócate en tu producto, no en la configuración.",
    },
    {
      icon: Layers,
      title: "Stack moderno y probado",
      desc: "React Native + Expo, Next.js, NestJS, Prisma. Tecnologías que la industria ya validó.",
    },
    {
      icon: Scale,
      title: "Arquitectura escalable",
      desc: "Diseñada para crecer desde el día 1. Sin deuda técnica en el arranque.",
    },
    {
      icon: FileCode,
      title: "Código limpio y documentado",
      desc: "Buenas prácticas, patrones consistentes y documentación clara en cada repo.",
    },
    {
      icon: GitBranch,
      title: "Open source y customizable",
      desc: "Fork, adapta y extiende. Sin vendor lock-in. Tu código, tus reglas.",
    },
  ];

  return (
    <Section className="bg-[#071428]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ventajas
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Todo lo que ganas al usar AppDawn como punto de partida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              custom={i + 1}
              className="rounded-xl border border-[rgba(37,99,235,0.15)] bg-[rgba(14,38,64,0.4)] p-6 hover:border-[rgba(245,158,11,0.3)] transition-colors"
            >
              <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[rgba(245,158,11,0.1)] text-[#f59e0b]">
                <b.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   TECNOLOGÍAS
   ═══════════════════════════════════════════════ */
function Tecnologias() {
  const techs = [
    {
      icon: Smartphone,
      name: "React Native + Expo",
      role: "App móvil",
      desc: "Una codebase. iOS + Android + Web.",
      color: "text-sky-400",
      bg: "bg-sky-400/10",
    },
    {
      icon: Globe,
      name: "Next.js + Tailwind",
      role: "Landing page",
      desc: "SEO-friendly, rápida, moderna.",
      color: "text-white",
      bg: "bg-white/10",
    },
    {
      icon: LayoutDashboard,
      name: "React + Vite + Tailwind",
      role: "Backoffice",
      desc: "Panel de administración ágil.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      icon: Server,
      name: "NestJS + Prisma + PostgreSQL",
      role: "Backend API",
      desc: "API robusta, tipada, escalable.",
      color: "text-red-400",
      bg: "bg-red-400/10",
    },
    {
      icon: Shield,
      name: "Supabase Auth",
      role: "Autenticación",
      desc: "Open source. Sin vendor lock-in.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      icon: Cloud,
      name: "Docker + Teros",
      role: "Deploy",
      desc: "Despliegue sencillo y portable.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
  ];

  return (
    <Section className="blueprint-bg-sm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tecnologías elegidas
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Cada pieza del stack está elegida por una razón: productividad,
            madurez y escalabilidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              custom={i + 1}
              className="rounded-xl border border-[rgba(37,99,235,0.15)] bg-[rgba(14,38,64,0.4)] p-6 hover:border-[rgba(37,99,235,0.4)] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-lg ${t.bg} ${t.color}`}
                >
                  <t.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {t.role}
                  </span>
                  <h3 className="text-base font-semibold text-white mt-0.5 mb-1">
                    {t.name}
                  </h3>
                  <p className="text-sm text-slate-400">{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   DOCUMENTACIÓN / CÓMO EMPEZAR
   ═══════════════════════════════════════════════ */
function Docs() {
  return (
    <Section id="docs" className="bg-[#071428]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cómo empezar
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            De cero a producto funcional en minutos.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10">
          {/* Step 1 */}
          <motion.div variants={fadeUp} custom={1}>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f59e0b] text-[#0c1e33] text-sm font-bold">
                1
              </span>
              <h3 className="text-lg font-semibold text-white">
                Requisitos previos
              </h3>
            </div>
            <p className="text-slate-400 mb-3 ml-11">
              Necesitas Node.js 18+, Docker y Git instalados.
            </p>
            <div className="ml-11">
              <CopyBlock text="node -v && docker -v && git -v" />
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={fadeUp} custom={2}>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f59e0b] text-[#0c1e33] text-sm font-bold">
                2
              </span>
              <h3 className="text-lg font-semibold text-white">
                Clona los repositorios
              </h3>
            </div>
            <div className="ml-11 space-y-2">
              <CopyBlock text="git clone https://github.com/tohuerta/appdawn-app" />
              <CopyBlock text="git clone https://github.com/tohuerta/appdawn-landing" />
              <CopyBlock text="git clone https://github.com/tohuerta/appdawn-backoffice" />
              <CopyBlock text="git clone https://github.com/tohuerta/appdawn-backend" />
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={fadeUp} custom={3}>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f59e0b] text-[#0c1e33] text-sm font-bold">
                3
              </span>
              <h3 className="text-lg font-semibold text-white">
                Instala dependencias
              </h3>
            </div>
            <p className="text-slate-400 mb-3 ml-11">
              En cada carpeta de proyecto:
            </p>
            <div className="ml-11">
              <CopyBlock text="cd appdawn-app && npm install" />
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div variants={fadeUp} custom={4}>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f59e0b] text-[#0c1e33] text-sm font-bold">
                4
              </span>
              <h3 className="text-lg font-semibold text-white">
                Configura variables de entorno
              </h3>
            </div>
            <p className="text-slate-400 mb-3 ml-11">
              Copia los templates <code>.env.example</code> a{" "}
              <code>.env</code> y ajusta los valores.
            </p>
            <div className="ml-11">
              <CopyBlock text="cp .env.example .env" />
            </div>
          </motion.div>

          {/* Step 5 */}
          <motion.div variants={fadeUp} custom={5}>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f59e0b] text-[#0c1e33] text-sm font-bold">
                5
              </span>
              <h3 className="text-lg font-semibold text-white">
                Levanta con Docker Compose
              </h3>
            </div>
            <div className="ml-11">
              <CopyBlock text="docker-compose up" />
            </div>
          </motion.div>

          {/* Step 6 */}
          <motion.div variants={fadeUp} custom={6}>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f59e0b] text-[#0c1e33] text-sm font-bold">
                6
              </span>
              <h3 className="text-lg font-semibold text-white">
                Accede a los servicios
              </h3>
            </div>
            <div className="ml-11 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "App", port: "19006" },
                { label: "Landing", port: "3000" },
                { label: "Backoffice", port: "5173" },
                { label: "API", port: "3001" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-[rgba(37,99,235,0.2)] bg-[rgba(14,38,64,0.5)] px-4 py-3 text-center"
                >
                  <div className="text-sm font-medium text-white">{s.label}</div>
                  <div className="text-xs text-blue-400 mt-1">
                    localhost:{s.port}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-[rgba(37,99,235,0.15)] bg-[#071428] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">AppDawn</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Planos para construir cualquier producto digital. Boilerplate
              open source mantenido por{" "}
              <a
                href="https://github.com/tohuerta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Antonio Huerta
              </a>
              .
            </p>
          </div>

          {/* Repos */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Repositorios
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "appdawn-app", url: "https://github.com/tohuerta/appdawn-app" },
                { label: "appdawn-landing", url: "https://github.com/tohuerta/appdawn-landing" },
                { label: "appdawn-backoffice", url: "https://github.com/tohuerta/appdawn-backoffice" },
                { label: "appdawn-backend", url: "https://github.com/tohuerta/appdawn-backend" },
              ].map((r) => (
                <li key={r.label}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:antonio@secture.com"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  antonio@secture.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tohuerta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tohuerta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(37,99,235,0.1)] text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} AppDawn. Open source bajo licencia MIT.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <QueEs />
      <Ventajas />
      <Tecnologias />
      <Docs />
      <Footer />
    </main>
  );
}
