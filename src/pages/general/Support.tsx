import logo from "/trip-fold-zeno.png";
import { Mail, Phone, Link, CodeXml, Globe } from "lucide-react";

function Support() {
  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-5">
          <img
            src={logo}
            alt="Trip Fold Zeno"
            className="w-20 h-20 mx-auto rounded-2xl"
          />

          <h1 className="text-4xl md:text-5xl font-bold">Trip Fold Zeno</h1>

          <p className="text-slate-400 max-w-2xl mx-auto leading-7">
            Need help, have feedback, or want to report an issue? Reach out
            through any of the contact options below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-5">
          <a
            href="mailto:moheebk522@gmail.com"
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 transition"
          >
            <Mail className="text-blue-400" />
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <p>moheebk522@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+917982831127"
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 transition"
          >
            <Phone className="text-green-400" />
            <div>
              <p className="text-sm text-slate-400">Phone</p>
              <p>+91 7982831127</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/moheebkhan/"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 transition"
          >
            <Link className="text-sky-400" />
            <div>
              <p className="text-sm text-slate-400">LinkedIn</p>
              <p>linkedin.com/in/moheebkhan/</p>
            </div>
          </a>

          <a
            href="https://github.com/moheebk123"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 transition"
          >
            <CodeXml className="text-slate-300" />
            <div>
              <p className="text-sm text-slate-400">GitHub</p>
              <p>github.com/moheebk123</p>
            </div>
          </a>

          <a
            href="https://moheeb-khan-portfolio.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 transition md:col-span-2"
          >
            <Globe className="text-purple-400" />
            <div>
              <p className="text-sm text-slate-400">Portfolio</p>
              <p>moheeb-khan-portfolio.vercel.app</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Support;
