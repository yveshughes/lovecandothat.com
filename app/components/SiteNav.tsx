/* Shared header menu. Colors come from each page's own CSS variables,
   so it runs earth tones on the home and reading pages and the cool
   blue palette on the Roatán page without any page-specific styling. */

const LINKS = [
  { href: "/", label: "Hudson Valley", key: "hudson" },
  { href: "/roatan", label: "Roatán", key: "roatan" },
  { href: "/reading", label: "Research", key: "research" },
] as const;

export type NavKey = (typeof LINKS)[number]["key"];

export default function SiteNav({ current }: { current: NavKey }) {
  return (
    <nav aria-label="Site" style={{ padding: "26px 0 0" }}>
      <div
        className="wrap"
        style={{ display: "flex", flexWrap: "wrap", gap: "12px 36px", alignItems: "center" }}
      >
        {LINKS.map((l) => {
          const active = l.key === current;
          return (
            <a
              key={l.key}
              href={l.href}
              aria-current={active ? "page" : undefined}
              style={{
                fontSize: ".72rem",
                fontWeight: 400,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                textDecoration: "none",
                paddingBottom: 2,
                color: active ? "var(--clay)" : "var(--muted)",
                borderBottom: active ? "1px solid var(--tan)" : "1px solid transparent",
              }}
            >
              {l.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
