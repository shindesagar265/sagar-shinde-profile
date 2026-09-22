import QRCode from 'qrcode';

const codes = [
  {
    path: 'public/qr-portfolio.svg',
    url: 'https://shindesagar265.github.io/sagar-shinde-profile/',
  },
  {
    path: 'public/qr-linkedin.svg',
    url: 'https://linkedin.com/in/sagar-shinde-095a6117/',
  },
];

await Promise.all(
  codes.map(({ path, url }) =>
    QRCode.toFile(path, url, {
      type: 'svg',
      errorCorrectionLevel: 'H',
      margin: 3,
      color: {
        dark: '#0B1120',
        light: '#FFFFFF',
      },
    }),
  ),
);

console.log('Generated portfolio and LinkedIn QR codes.');
