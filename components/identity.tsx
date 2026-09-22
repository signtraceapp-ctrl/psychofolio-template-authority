/* Sunucu ve istemci bileşenlerinde ortak kullanılan kimlik yardımcıları.
   Bu dosyada "use client" yoktur; layout (sunucu) da güvenle kullanabilir. */

/** "Ayşe Nur Yılmaz" → "AY" (Türkçe büyük harf kurallarıyla) */
export function initials(name: string) {
  const parts = name
    .replace(/^(dr\.?|uzm\.?|psk\.?|prof\.?|doç\.?)\s+/gi, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "";
  const first = parts[0][0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? "") : "";
  return (first + last).toLocaleUpperCase("tr");
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function Monogram({
  name,
  size = "md",
}: {
  name: string;
  size?: "sm" | "md" | "lg";
}) {
  const s =
    size === "sm"
      ? "h-9 w-9 text-[13px] rounded-md"
      : size === "lg"
        ? "h-16 w-16 text-xl rounded-xl"
        : "h-12 w-12 text-base rounded-lg";
  return (
    <span
      className={`${s} inline-flex shrink-0 items-center justify-center bg-primary font-semibold tracking-wide text-primary-fg`}
      aria-hidden="true"
    >
      {initials(name)}
    </span>
  );
}
