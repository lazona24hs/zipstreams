// BLUEY 24/7 & GRAVITY FALLS 24/7 & BAJOTERRA 24/7 - Cloudflare Worker HLS lineal

// ============ CONFIGURACIÓN DE CANALES ============
const CANALES = {
  margarita: {
    nombre: "Margarita 24/7",
    epoch: Date.UTC(2026, 0, 1, 0, 0, 0) / 1000,
    episodios: [
      {
        nombre: "Margarita S03E01",
        url: "https://c4-limit.cuevana4br.com/a00cfca7a02a71f1a3b24177d1c00102/6acafb28095848e386357329c6d28016-microframe-ld.m3u8?hdnts=exp=1787944209_acl=/a00cfca7a02a71f1a3b24177d1c00102/*_hmac=adaf3cc1a359c8ee9a0c7482addd7054ac65e41504eb7b9938626e470ff3d803",
      },
      {
        nombre: "Margarita S03E02",
        url: "https://c4-limit.cuevana4br.com/20129b55a02b71f1810f4177d0d10102/bd19f7c89b0a44a78f60be6e7245f090-microframe-ld.m3u8?hdnts=exp=1787944454_acl=/20129b55a02b71f1810f4177d0d10102/*_hmac=f18577c2012da6259d357e066f58ec14f38ba27f1755d20224f9eaa7283ed1b4",
      },
       {
        nombre: "Margarita S03E03",
        url: "https://c4-limit.cuevana4br.com/f0bdb906a02b71f181304077c0c30102/556b2faff5e2420493b0abed48c1d4c7-microframe-ld.m3u8?hdnts=exp=1787944743_acl=/f0bdb906a02b71f181304077c0c30102/*_hmac=27a8b386e7a94521a2a61ad650086e29c783fcdca2ddd4fbd02b56d8ec1bf16c",
      },
      {
        nombre: "Margarita S03E04",
        url: "https://c4-limit.cuevana4br.com/403dac20a02c71f1a119166993960102/0d28a1acf2354c0c80e7953d0884b7f7-microframe-ld.m3u8?hdnts=exp=1787944713_acl=/403dac20a02c71f1a119166993960102/*_hmac=085efe8fc0a658601910955ff8a9c92d530817ada6a28fabed8fe2b87ce6fc96",
      },
      {
        nombre: "Margarita S03E05",
        url: "https://c4-limit.cuevana4br.com/00c6824ca02c71f1b3ad4077c0c20102/1e38140fd0b549bf89cc09ce25fe1605-microframe-ld.m3u8?hdnts=exp=1787922442_acl=/00c6824ca02c71f1b3ad4077c0c20102/*_hmac=5bc6e8e9b2574b08fc29088ad1a967f94395dced5725f578569c1d08c4aa3d87",
      },
      {
        nombre: "Margarita S03E06",
        url: "https://c4-limit.cuevana4br.com/a00b3c80a50e71f19101150ad0e00102/e76ace866ee5488c9f9ac2ff2112d794-microframe-ld.m3u8?hdnts=exp=1788350457_acl=/a00b3c80a50e71f19101150ad0e00102/*_hmac=812580d3c8db0e3408f03e7bed402f2fb44e8b6312320f0e075879c0269c245c",
      },
      {
        nombre: "Margarita S03E07",
        url: "https://c4-limit.cuevana4br.com/c0063580a50e71f199354176c1c20102/3e21c6d763f942869b6de6b22fbe1116-microframe-ld.m3u8?hdnts=exp=1788350464_acl=/c0063580a50e71f199354176c1c20102/*_hmac=be9c44c31c007f3565b849d2fbd45a02f8b136687c6c62ab096e566386eba9b1",
      },
      {
        nombre: "Margarita S03E08",
        url: "https://c4-limit.cuevana4br.com/20587e38a51071f1a53b166993960102/619b28d75e9a4e16838bdeec758e554a-microframe-ld.m3u8?hdnts=exp=1788350465_acl=/20587e38a51071f1a53b166993960102/*_hmac=6dc0caaee041e792e9cadb6371a8483d7a78f2471110da2bdcda22c56d9b0e0a",
      },
       {
        nombre: "Margarita S03E09",
        url: "https://c4-limit.cuevana4br.com/60bb5880a50e71f1bdcf3109c5840102/54b77efa870746e6b915f01f02b801df-microframe-ld.m3u8?hdnts=exp=1788350547_acl=/60bb5880a50e71f1bdcf3109c5840102/*_hmac=0ed420d7032c7d0db8d7a006bb29b8d2be2d333e3cf7bd5fe8eb7ebb4dedd23a",
      },
      {
        nombre: "Margarita S03E10",
        url: "https://c4-limit.cuevana4br.com/c0aa57c5a51171f19101150ad0e00102/b4c7b8605e2248d3a206946c535b553c-microframe-ld.m3u8?hdnts=exp=1788350533_acl=/c0aa57c5a51171f19101150ad0e00102/*_hmac=0df06a0634e0e6890b0c8e270658691ca953ead2ac80f69ab0028f1b2b5df94c",
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
