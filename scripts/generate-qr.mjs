import QRCode from 'qrcode';

const codes = [
  {
    path: 'public/qr-linkedin.svg',
    type: 'svg',
  },
  {
    path: 'public/qr-linkedin.png',
    type: 'png',
  },
];

const linkedInUrl = 'https://linkedin.com/in/sagar-shinde-095a6117/';

await Promise.all(
  codes.map(({ path, type }) =>
    QRCode.toFile(path, linkedInUrl, {
      type,
      errorCorrectionLevel: 'H',
      margin: 3,
      width: 1200,
      color: {
        dark: '#0B1120',
        light: '#FFFFFF',
      },
    }),
  ),
);

console.log('Generated downloadable LinkedIn QR codes.');
