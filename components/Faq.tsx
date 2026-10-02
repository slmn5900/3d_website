import type { Faq } from "@/lib/site";
import JsonLd from "./JsonLd";
import { faqSchema, graph } from "@/lib/schema";

export default function FaqList({ faqs, title = "Frequently asked questions" }: { faqs: readonly Faq[]; title?: string }) {
  return (
    <section className="wrap sec" aria-labelledby="faq-h">
      <JsonLd data={graph(faqSchema(faqs))} />
      <h2 id="faq-h">{title}</h2>
      <div className="faq">
        {faqs.map((f) => (
          <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
        ))}
      </div>
    </section>
  );
}
