import { Github, Linkedin, Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ContactSection = () => (
  <section id="contato" className="py-20 sm:py-28 px-4">
    <div className="max-w-4xl mx-auto">
      <SectionHeader
        phase="FASE FINAL // ROOT_ACCESS"
        title="CONTATO.root"
        subtitle="Permissão concedida — canal direto aberto"
      />

      <div className="hud-panel p-6 sm:p-10 text-center">
        <div className="font-pixel text-[10px] text-matrix-green text-glow mb-6">
          ░ ACCESS_GRANTED ░
        </div>

        <p className="font-mono-term text-lg sm:text-xl text-matrix-green/95 mb-8 max-w-2xl mx-auto">
          {'"'}Acesso liberado. Vamos construir soluções inteligentes com dados,
          lógica e tecnologia.{'"'}
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <a
            href="mailto:iagomonteiro13579@gmail.com"
            className="hud-panel p-4 group hover:border-matrix-green transition-all hover:[box-shadow:var(--glow-md)] glitch-hover"
          >
            <Mail className="w-5 h-5 mx-auto mb-2 text-matrix-green" aria-hidden />
            <div className="font-pixel text-[10px] text-matrix-dim mb-1">EMAIL</div>
            <div className="font-mono-term text-sm text-matrix-green break-all">
              iagomonteiro13579@gmail.com
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/iagomonteirosantos"
            target="_blank"
            rel="noopener noreferrer"
            className="hud-panel p-4 group hover:border-matrix-green transition-all hover:[box-shadow:var(--glow-md)] glitch-hover"
          >
            <Linkedin className="w-5 h-5 mx-auto mb-2 text-matrix-green" aria-hidden />
            <div className="font-pixel text-[10px] text-matrix-dim mb-1">LINKEDIN</div>
            <div className="font-mono-term text-sm text-matrix-green">
              /in/iagomonteirosantos
            </div>
          </a>

          <a
            href="https://github.com/iagomonteirosantos"
            target="_blank"
            rel="noopener noreferrer"
            className="hud-panel p-4 group hover:border-matrix-green transition-all hover:[box-shadow:var(--glow-md)] glitch-hover"
          >
            <Github className="w-5 h-5 mx-auto mb-2 text-matrix-green" aria-hidden />
            <div className="font-pixel text-[10px] text-matrix-dim mb-1">GITHUB</div>
            <div className="font-mono-term text-sm text-matrix-green">
              @iagomonteirosantos
            </div>
          </a>
        </div>

        <a href="mailto:iagomonteiro13579@gmail.com" className="btn-matrix glitch-hover">
          ▶ INICIAR CONEXÃO
        </a>
      </div>

      <footer className="mt-16 text-center font-mono-term text-xs text-matrix-dim/70">
        <div>© {new Date().getFullYear()} IAGO_MONTEIRO.sys — built inside the system_</div>
      </footer>
    </div>
  </section>
);

export default ContactSection;
