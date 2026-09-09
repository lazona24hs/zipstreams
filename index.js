// BLUEY 24/7 & GRAVITY FALLS 24/7 & BAJOTERRA 24/7 - Cloudflare Worker HLS lineal

// ============ CONFIGURACIÓN DE CANALES ============
const CANALES = {
  simpson: {
    nombre: "Los Simpsons 24/7",
    epoch: Date.UTC(2026, 0, 1, 0, 0, 0) / 1000,
    episodios: [
            {
        nombre: "video1",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/21/s8/2/U/_/5/V/U_5VA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=168278016-168290722",
      },
      {
        nombre: "video2",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/ce/s8/2/8/q/-/V/8q-VA.oaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=36645376-36658210",
      },
      {
        nombre: "video3",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/3a/s8/2/Q/P/-/V/QP-VA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=171651584-171664587",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
      {
        nombre: "video4",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/aa/s8/2/k/R/-/V/kR-VA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=170514432-170527359",
      },
            {
        nombre: "video5",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/94/s8/2/o/T/-/V/oT-VA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=167813120-167825834",
      },
        {
        nombre: "video6",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/83/s8/2/A/1/-/V/A1-VA.baa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=108758016-108770823",
      },
      {
        nombre: "video7",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/bb/s8/2/s/a/f/W/safWA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=166760448-166773045",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
      {
        nombre: "video8",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/90/s8/2/i/g/f/W/igfWA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=173828608-173841714",
      },
      {
        nombre: "video9",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/b1/s8/2/6/x/f/W/6xfWA.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=350966784-350979875",
      },
      {
        nombre: "video10",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/38/s8/2/A/y/f/W/AyfWA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=181150720-181164429",
      },
      {
        nombre: "video11",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/c5/s8/2/0/5/-/V/05-VA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=168055808-168068526",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
    ],
  },
    elchavo: {
    nombre: "El Chavo 24/7",
    epoch: Date.UTC(2026, 0, 1, 0, 0, 0) / 1000,
    episodios: [
      {
        nombre: "video1",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/84/s8/2/S/L/5/K/SL5KA.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=308797440-308808921",
      },
      {
        nombre: "video2",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/5b/s8/2/Q/W/9/G/QW9GA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=156272128-156283815",
      },
      {
        nombre: "video3",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/2b/s8/2/i/Q/9/G/iQ9GA.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=355174400-355187672",
      },
      {
        nombre: "video4",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/aa/s8/2/c/N/5/K/cN5KA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=102046208-102053810",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
      {
        nombre: "video5",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/da/s8/2/Y/V/9/G/YV9GA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=203008000-203023394",
      },
            {
        nombre: "video7",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/e4/s8/2/C/4/6/s/C46sA.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=320742912-320754883",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
      {
        nombre: "video8",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/da/s8/2/Y/V/9/G/YV9GA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=203008000-203023394",
      },
      {
        nombre: "video9",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/46/s8/2/V/I/u/D/VIuDy.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=82493440-82499666",
      },
      {
        nombre: "video10",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/f9/s8/2/1/y/g/G/1ygGy.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=89126400-89133107",
      },
      {
        nombre: "video11",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/54/s8/2/d/8/T/G/d8TGy.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=216800768-216808842",
      },
      {
        nombre: "video12",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/db/s8/2/E/2/6/s/E26sA.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=328909312-328921591",
      },
      {
        nombre: "video13",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/f5/s8/2/z/U/X/F/zUXFy.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=74253312-74258857",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
    ],
  },
  gravityfalls: {
    nombre: "Gravity Falls 24/7",
    epoch: Date.UTC(2024, 6, 1, 0, 0, 0) / 1000,
    episodios: [
      {
        nombre: "Gravity Falls S01E01",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/06/s8/2/G/M/D/V/GMDVA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=166684672-166697264",
      },
      {
        nombre: "Gravity Falls S01E02",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/9f/s8/2/o/P/D/V/oPDVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=665805824-665818855",
      },
      {
        nombre: "Gravity Falls S01E03",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/79/s8/2/Q/Q/D/V/QQDVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=675152384-675165606",
      },
      {
        nombre: "Gravity Falls S01E04",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/69/s8/2/M/S/D/V/MSDVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=689944064-689957599",
      },
      {
        nombre: "Gravity Falls S01E05",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/11/s8/2/m/U/D/V/mUDVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=632708096-632720414",
      },
      {
        nombre: "Gravity Falls S01E06",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/58/s8/2/K/e/L/V/KeLVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=698421760-698435390",
      },
      {
        nombre: "Gravity Falls S01E07",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/5d/s8/2/u/s/L/V/usLVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=698655744-698669370",
      },
      {
        nombre: "Gravity Falls S01E08",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/50/s8/2/4/y/L/V/4yLVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=665725440-665738471",
      },
      {
        nombre: "Gravity Falls S01E09",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/23/s8/2/6/B/L/V/6BLVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=697114112-697127735",
      },
      {
        nombre: "Gravity Falls S01E10",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/57/s8/2/q/E/L/V/qELVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=698099712-698113339",
      },
    ],
  },
  bajoterra: {
    nombre: "Bajoterra 24/7",
    epoch: Date.UTC(2024, 6, 1, 0, 0, 0) / 1000,
    episodios: [
      {
        nombre: "Bajoterra S01E01",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/38/s8/2/A/F/Z/V/AFZVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=678022144-678035468",
      },
      {
        nombre: "Bajoterra S01E02",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/73/s8/2/i/P/Z/V/iPZVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=678354944-678368272",
      },
      {
        nombre: "Bajoterra S01E03",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/89/s8/2/2/U/Z/V/2UZVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=679327232-679340467",
      },
      {
        nombre: "Bajoterra S01E04",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/21/s8/2/Y/s/0/V/Ys0VA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=679844352-679857677",
      },
    ],
  },
  ziptv: {
    nombre: "ZipTVstream 24/7",
    epoch: Date.UTC(2024, 6, 1, 0, 0, 0) / 1000,
    episodios: [
      {
        nombre: "Pelicula11",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/37/s8/2/A/O/4/3/AO43z.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=1893749248-1893821382",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
      {
        nombre: "pelicula22",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/20/s8/2/6/t/4/3/6t43z.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=1737401856-1737467901",
      },
      {
        nombre: "video4",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/32/s8/2/E/W/5/L/EW5Lz.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=1491895296-1491951705",
      },
      {
        nombre: "video5",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/84/s8/2/S/L/5/K/SL5KA.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=308797440-308808921",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
      {
        nombre: "video6",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/5b/s8/2/Q/W/9/G/QW9GA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=156272128-156283815",
      },
      {
        nombre: "video7",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/2b/s8/2/i/Q/9/G/iQ9GA.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=355174400-355187672",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
      {
        nombre: "video8",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/aa/s8/2/c/N/5/K/cN5KA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=102046208-102053810",
      },
      {
        nombre: "video9",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/da/s8/2/Y/V/9/G/YV9GA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=203008000-203023394",
      },
          {
        nombre: "video10",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/21/s8/2/U/_/5/V/U_5VA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=168278016-168290722",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
      {
        nombre: "video11",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/ce/s8/2/8/q/-/V/8q-VA.oaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=36645376-36658210",
      },
      {
        nombre: "video12",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/3a/s8/2/Q/P/-/V/QP-VA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=171651584-171664587",
      },
      {
        nombre: "video13",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/aa/s8/2/k/R/-/V/kR-VA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=170514432-170527359",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
      {
        nombre: "video14",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/94/s8/2/o/T/-/V/oT-VA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=167813120-167825834",
      },
      {
        nombre: "video15",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/83/s8/2/A/1/-/V/A1-VA.baa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=108758016-108770823",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
      {
        nombre: "Pelicula1",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/3b/s8/2/i/T/5/l/iT5lz.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=1698507776-1698572426",
      },
      {
        nombre: "Pelicula2",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/86/s8/2/k/c/e/m/kcemz.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=1502260224-1502317150",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
         {
        nombre: "ELZORRO1",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/37/s8/2/I/e/m/p/Iempz.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=199261696-199276816",
      },
      {
        nombre: "ElZORRO2",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/b1/s8/2/g/A/K/r/gAKrz.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=199808000-199823121",
      },
      {
        nombre: "ElZorro3",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/25/s8/2/C/y/K/r/CyKrz.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=199579648-199594786",
      },
      {
        nombre: "ElZorro4",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/68/s8/2/E/B/K/r/EBKrz.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=197671424-197686453",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
          {
        nombre: "video16",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/21/s8/2/U/_/5/V/U_5VA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=168278016-168290722",
      },
      {
        nombre: "video17",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/ce/s8/2/8/q/-/V/8q-VA.oaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=36645376-36658210",
      },
           {
        nombre: "Gravity Falls S01E01",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/06/s8/2/G/M/D/V/GMDVA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=166684672-166697264",
      },
      {
        nombre: "Gravity Falls S01E02",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/9f/s8/2/o/P/D/V/oPDVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=665805824-665818855",
      },
      {
        nombre: "Gravity Falls S01E03",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/79/s8/2/Q/Q/D/V/QQDVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=675152384-675165606",
      },
      {
        nombre: "Gravity Falls S01E04",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/69/s8/2/M/S/D/V/MSDVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=689944064-689957599",
      },
      {
        nombre: "Bajoterra S01E02",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/73/s8/2/i/P/Z/V/iPZVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=678354944-678368272",
      },
        {
        nombre: "Bajoterra S01E04",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/21/s8/2/Y/s/0/V/Ys0VA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=679844352-679857677",
      },
         {
        nombre: "Gravity Falls S01E04",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/69/s8/2/M/S/D/V/MSDVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=689944064-689957599",
      },
      {
        nombre: "Gravity Falls S01E05",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/11/s8/2/m/U/D/V/mUDVA.haa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=632708096-632720414",
      },
      {
        nombre: "video18",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/3a/s8/2/Q/P/-/V/QP-VA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=171651584-171664587",
      },
      {
        nombre: "video19",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/aa/s8/2/k/R/-/V/kR-VA.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=170514432-170527359",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
      {
        nombre: "pelicula3",
        url: "https://hugh.cdn.rumble.cloud/video/fwe2/7c/s8/2/K/P/K/H/KPKHz.gaa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=1560011264-1560070291",
      },
      {
        nombre: "SEPARADORZIPTV",
        url: "https://pub-f00d5d649500451fb2fe8979f4685eea.r2.dev/YA-hls/master.m3u8",
      },
          {
        nombre: "pelicula4",
        url: "https://hugh.cdn.rumble.cloud/video/fww1/40/s8/2/S/7/F/H/S7FHz.caa.tar?r_file=chunklist.m3u8&r_type=application%2Fvnd.apple.mpegurl&r_range=706075648-706129551",
      },
    ],
  },
};

// ============ CONFIGURACIÓN GLOBAL ============
const SCHEDULE_TTL_MS = 5 * 60 * 1000;
const SOURCE_CACHE_TTL_SECONDS = 60 * 60;
const SEGMENTOS_ATRAS = 15;
const SEGMENTOS_ADELANTOS = 12;

// ============ CACHÉ POR CANAL ============
const scheduleCache = {};
const scheduleCacheTime = {};
let schedulePromise = {};

// ============ FUNCIONES AUXILIARES ============
function errorText(error) {
  return error instanceof Error ? error.message : String(error);
}

function resolveUri(uri, baseUrl) {
  try {
    return new URL(uri.trim(), baseUrl).href;
  } catch {
    throw new Error(`URI inválida en el M3U8: ${uri}`);
  }
}

function makeTagAbsolute(tag, baseUrl) {
  return tag.replace(/URI\s*=\s*"([^"]+)"/i, (_whole, uri) => {
    return `URI="${resolveUri(uri, baseUrl)}"`;
  });
}

function parseBandwidth(tag) {
  const match = tag.match(/(?:^|,)BANDWIDTH\s*=\s*(\d+)/i);
  return match ? Number(match[1]) : 0;
}

function findBestVariant(text, baseUrl) {
  const lines = text.split(/\r?\n/);
  const variants = [];

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line.toUpperCase().startsWith("#EXT-X-STREAM-INF:")) continue;

    let uri = null;
    for (let j = i + 1; j < lines.length; j += 1) {
      const next = lines[j].trim();
      if (!next) continue;
      if (!next.startsWith("#")) {
        uri = resolveUri(next, baseUrl);
      }
      break;
    }

    if (uri) variants.push({ uri, bandwidth: parseBandwidth(line) });
  }

  if (!variants.length) {
    throw new Error("La playlist maestra no contiene variantes de video");
  }

  variants.sort((a, b) => a.bandwidth - b.bandwidth);
  return variants[variants.length - 1].uri;
}

async function fetchPlaylist(url) {
  const response = await fetch(url, {
    cf: {
      cacheTtl: SOURCE_CACHE_TTL_SECONDS,
      cacheEverything: true,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} al cargar ${url}`);
  }

  return {
    text: await response.text(),
    finalUrl: response.url || url,
  };
}

async function loadEpisode(episode, episodeIndex, depth = 0, channelName) {
  if (depth > 2) {
    throw new Error(`Demasiadas playlists maestras encadenadas en ${episode.nombre}`);
  }

  const loaded = await fetchPlaylist(episode.url);
  const baseUrl = new URL(loaded.finalUrl);
  const text = loaded.text;

  if (/#EXT-X-STREAM-INF:/i.test(text)) {
    const variantUrl = findBestVariant(text, baseUrl);
    return loadEpisode({ ...episode, url: variantUrl }, episodeIndex, depth + 1, channelName);
  }

  const lines = text.split(/\r?\n/);
  const segments = [];
  let pendingDuration = null;
  let pendingByteRange = null;
  let pendingDiscontinuity = false;
  let currentMapTag = null;
  let currentKeyTag = null;
  let localIndex = 0;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.toUpperCase().startsWith("#EXT-X-MAP:")) {
      currentMapTag = makeTagAbsolute(line, baseUrl);
      continue;
    }

    if (line.toUpperCase().startsWith("#EXT-X-KEY:")) {
      currentKeyTag = makeTagAbsolute(line, baseUrl);
      continue;
    }

    if (line.toUpperCase().startsWith("#EXT-X-BYTERANGE:")) {
      pendingByteRange = line;
      continue;
    }

    if (line.toUpperCase() === "#EXT-X-DISCONTINUITY") {
      pendingDiscontinuity = true;
      continue;
    }

    if (line.toUpperCase().startsWith("#EXTINF:")) {
      const match = line.match(/^#EXTINF:\s*([0-9]+(?:\.[0-9]+)?)/i);
      if (!match) {
        throw new Error(`EXTINF inválido en ${episode.nombre}: ${line}`);
      }

      pendingDuration = Number(match[1]);
      if (!Number.isFinite(pendingDuration) || pendingDuration <= 0) {
        throw new Error(`Duración inválida en ${episode.nombre}: ${line}`);
      }
      continue;
    }

    if (!line.startsWith("#") && pendingDuration !== null) {
      segments.push({
        duration: pendingDuration,
        uri: resolveUri(line, baseUrl),
        mapTag: currentMapTag,
        keyTag: currentKeyTag,
        byteRange: pendingByteRange,
        sourceDiscontinuity: pendingDiscontinuity,
        episodeIndex,
        episodeName: episode.nombre,
        localIndex,
      });

      localIndex += 1;
      pendingDuration = null;
      pendingByteRange = null;
      pendingDiscontinuity = false;
    }
  }

  if (!segments.length) {
    throw new Error(`No se encontraron segmentos en ${episode.nombre}`);
  }

  return segments;
}

async function buildSchedule(channelKey) {
  const channel = CANALES[channelKey];
  const episodeLists = await Promise.all(
    channel.episodios.map((episode, index) => loadEpisode(episode, index, 0, channelKey)),
  );

  const segments = [];
  let total = 0;
  let targetDuration = 1;

  for (const episodeSegments of episodeLists) {
    for (const sourceSegment of episodeSegments) {
      const duration = sourceSegment.duration;
      segments.push({
        ...sourceSegment,
        start: total,
        end: total + duration,
      });
      total += duration;
      targetDuration = Math.max(targetDuration, Math.ceil(duration));
    }
  }

  if (!segments.length || !Number.isFinite(total) || total <= 0) {
    throw new Error("El calendario no tiene una duración válida");
  }

  const discontinuitiesBefore = new Array(segments.length + 1).fill(0);
  for (let i = 0; i < segments.length; i += 1) {
    const episodeChanged =
      i > 0 && segments[i - 1].episodeIndex !== segments[i].episodeIndex;
    const hasSourceDiscontinuity = Boolean(segments[i].sourceDiscontinuity);
    discontinuitiesBefore[i + 1] =
      discontinuitiesBefore[i] +
      (episodeChanged || hasSourceDiscontinuity ? 1 : 0);
  }

  return {
    segments,
    total,
    targetDuration,
    playlistVersion: segments.some((segment) => segment.mapTag)
      ? 6
      : segments.some((segment) => segment.byteRange)
        ? 4
        : 3,
    discontinuitiesBefore,
    cycleDiscontinuities: discontinuitiesBefore[segments.length] + 1,
    channelName: channel.nombre,
    epoch: channel.epoch,
  };
}

async function getSchedule(channelKey) {
  const now = Date.now();
  if (scheduleCache[channelKey] && now - scheduleCacheTime[channelKey] < SCHEDULE_TTL_MS) {
    return scheduleCache[channelKey];
  }

  if (!schedulePromise[channelKey]) {
    schedulePromise[channelKey] = buildSchedule(channelKey)
      .then((schedule) => {
        scheduleCache[channelKey] = schedule;
        scheduleCacheTime[channelKey] = Date.now();
        return schedule;
      })
      .catch((error) => {
        if (scheduleCache[channelKey]) {
          console.error(`No se pudo actualizar ${channelKey}; se conserva el anterior:`, error);
          return scheduleCache[channelKey];
        }
        throw error;
      })
      .finally(() => {
        schedulePromise[channelKey] = null;
      });
  }

  return schedulePromise[channelKey];
}

function getLiveState(schedule, nowSeconds) {
  const elapsed = Math.max(0, nowSeconds - schedule.epoch);
  let cycle = Math.floor(elapsed / schedule.total);
  let position = elapsed - cycle * schedule.total;

  if (position < 0) position = 0;
  if (position >= schedule.total - 0.05) {
    cycle += 1;
    position = 0;
  }

  let low = 0;
  let high = schedule.segments.length - 1;
  let index = high;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const segment = schedule.segments[middle];

    if (position < segment.start) {
      high = middle - 1;
    } else if (position >= segment.end) {
      low = middle + 1;
    } else {
      index = middle;
      break;
    }
  }

  return {
    cycle,
    position,
    index,
    absolute: cycle * schedule.segments.length + index,
  };
}

function segmentForAbsolute(schedule, absolute) {
  const count = schedule.segments.length;
  const index = ((absolute % count) + count) % count;
  return schedule.segments[index];
}

function hasDiscontinuityBefore(schedule, absolute) {
  if (absolute <= 0) return false;

  const count = schedule.segments.length;
  const index = absolute % count;

  if (index === 0) {
    return true;
  }

  const previous = schedule.segments[index - 1];
  const current = schedule.segments[index];

  return (
    previous.episodeIndex !== current.episodeIndex ||
    Boolean(current.sourceDiscontinuity)
  );
}

function discontinuitySequenceBefore(schedule, absolute) {
  if (absolute <= 0) return 0;

  const count = schedule.segments.length;
  const cycle = Math.floor(absolute / count);
  const index = absolute - cycle * count;

  return (
    cycle * schedule.cycleDiscontinuities +
    schedule.discontinuitiesBefore[index]
  );
}

function programDateTimeFor(schedule, absolute, segment) {
  const cycle = Math.floor(absolute / schedule.segments.length);
  return schedule.epoch + cycle * schedule.total + segment.start;
}

function buildLivePlaylist(schedule, state) {
  const first = Math.max(0, state.absolute - 15);
  const last = state.absolute + 12;
  const lines = [
    "#EXTM3U",
    `#EXT-X-VERSION:${schedule.playlistVersion}`,
    `#EXT-X-TARGETDURATION:${schedule.targetDuration}`,
    `#EXT-X-MEDIA-SEQUENCE:${first}`,
    `#EXT-X-DISCONTINUITY-SEQUENCE:${discontinuitySequenceBefore(schedule, first)}`,
  ];

  let previousMapTag = null;
  let previousKeyTag = null;

  for (let absolute = first; absolute <= last; absolute += 1) {
    const segment = segmentForAbsolute(schedule, absolute);
    const discontinuity = hasDiscontinuityBefore(schedule, absolute);

    if (discontinuity) {
      lines.push("#EXT-X-DISCONTINUITY");
      previousMapTag = null;
      previousKeyTag = null;
    }

    if (segment.mapTag && segment.mapTag !== previousMapTag) {
      lines.push(segment.mapTag);
      previousMapTag = segment.mapTag;
    }

    if (segment.keyTag !== previousKeyTag) {
      lines.push(segment.keyTag || "#EXT-X-KEY:METHOD=NONE");
      previousKeyTag = segment.keyTag;
    }

    const pdt = programDateTimeFor(schedule, absolute, segment);
    lines.push(`#EXT-X-PROGRAM-DATE-TIME:${new Date(pdt * 1000).toISOString()}`);

    if (segment.byteRange) lines.push(segment.byteRange);

    lines.push(`#EXTINF:${segment.duration.toFixed(6)},`);
    lines.push(segment.uri);
  }

  return `${lines.join("\n")}\n`;
}

function hlsHeaders() {
  return {
    "content-type": "application/vnd.apple.mpegurl; charset=utf-8",
    "cache-control": "no-store, no-cache, must-revalidate, max-age=0",
    "cdn-cache-control": "no-store",
    pragma: "no-cache",
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, HEAD, OPTIONS",
    "access-control-allow-headers": "*",
  };
}

function jsonResponse(value, status = 200) {
  return new Response(JSON.stringify(value, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store, no-cache, must-revalidate, max-age=0",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, HEAD, OPTIONS",
      "access-control-allow-headers": "*",
    },
  });
}

// ============ MANEJADOR PRINCIPAL ============
export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: hlsHeaders() });
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Método no permitido", {
        status: 405,
        headers: { ...hlsHeaders(), allow: "GET, HEAD, OPTIONS" },
      });
    }

    // ===== DETECTAR CANAL =====
    let channelKey = null;
    
    const pathParts = url.pathname.split('/').filter(p => p);
    if (pathParts.length >= 1) {
      const possibleKey = pathParts[0];
      if (CANALES[possibleKey]) {
        channelKey = possibleKey;
      }
    }

    // Si no se especificó canal, mostrar índice
    if (!channelKey) {
      return jsonResponse({
        mensaje: "Canales disponibles",
        canales: Object.keys(CANALES).map(key => ({
          nombre: CANALES[key].nombre,
          url: `/${key}/live.m3u8`,
          status: `/${key}/status`,
        })),
      });
    }

    try {
      const schedule = await getSchedule(channelKey);
      const state = getLiveState(schedule, Date.now() / 1000);

      // ===== RUTAS DEL CANAL =====
      const remainingPath = '/' + pathParts.slice(1).join('/');

      if (remainingPath === '/live.m3u8' || remainingPath === '') {
        const playlist = buildLivePlaylist(schedule, state);
        return new Response(request.method === "HEAD" ? null : playlist, {
          headers: hlsHeaders(),
        });
      }

      if (remainingPath === '/status') {
        const segment = schedule.segments[state.index];
        return jsonResponse({
          channel: schedule.channelName,
          episode: segment.episodeName,
          segment: segment.localIndex,
          cycle: state.cycle,
          positionInCycle: Number(state.position.toFixed(3)),
          cycleDuration: Number(schedule.total.toFixed(3)),
          mediaSequence: state.absolute,
          nextSegment: segmentForAbsolute(schedule, state.absolute + 1).uri,
        });
      }

      return new Response(`Canal ${schedule.channelName}. Usa /${channelKey}/live.m3u8`, {
        headers: hlsHeaders(),
      });
    } catch (error) {
      console.error(`Error en ${channelKey}:`, error);
      return new Response(`Error generando la señal: ${errorText(error)}`, {
        status: 502,
        headers: hlsHeaders(),
      });
    }
  },
};
