import { securityPolicy } from "@/data/securityPolicy";

function SecurityPolicy() {
  return (
    <>
      <main className="privacy-container">
        <section className="privacy-card">
          <h1 className="font-bold text-lg">Security Policy</h1>
          <p className="last-updated mt-2">
            Last Updated: <span className="font-bold">May 2026</span>
          </p>

          <p className="mt-2">
            Trip Fold Zeno is built with a focus on secure and reliable expense
            management. This Security Policy explains how user data is handled,
            stored, and protected across our website and Android application.
          </p>

          {securityPolicy.map((item) => (
            <div key={item.heading} className="border-t  pt-2 my-3 space-y-2">
              <h2 className="font-bold">{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
          ))}

          <div className="font-bold">
            <p>
              Email:{" "}
              <a href="mailto:moheebk522@gmail.com" className="hover:underline">
                moheebk522@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+917982831127" className="hover:underline">
                +91 7982831127
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default SecurityPolicy;
