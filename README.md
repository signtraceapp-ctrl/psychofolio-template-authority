# Authority - Psychofolio Web Sitesi Sablonu

Psikologlar icin kurumsal, guvenilir ve profesyonel bir web sitesi sablonu.

## Icerik duzenleme

Tum metinler `content/site.json` dosyasindadir. Kod duzenlemeniz gerekmez.

Alanlarin tam listesi icin `lib/content.ts` dosyasina bakin.

## Kendi sitenizi yayina alma

1. Bu repo'yu GitHub hesabiniza fork'layin
2. `content/site.json` dosyasini kendi bilgilerinizle duzenleyin
3. Vercel'de "New Project" > GitHub repo'nuzu secin > Deploy
4. Otomatik olarak yayina alinir, SSL dahildir

## Yerelde calistirma

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde acilir.

## 7 Sayfa

| Yol | Sayfa |
|---|---|
| `/` | Ana Sayfa |
| `/hakkimda` | Hakkimda |
| `/hizmetler` | Hizmetler |
| `/yaklasim` | Yaklasim |
| `/yazilar` | Yazilar |
| `/sss` | Sik Sorulan Sorular |
| `/iletisim` | Iletisim |

## Teknoloji

- Next.js 16 (App Router)
- Tailwind CSS v4
- Framer Motion
- TypeScript
