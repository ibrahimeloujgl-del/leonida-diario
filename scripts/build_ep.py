"""Build caption data for an episode from an ElevenLabs words.json.

usage: build_ep.py words.json speed out.ts MARKER1 MARKER2 ... (last marker = outro)
Markers are matched (case-insensitive, punctuation-stripped) against spoken words in order.
"""
import json, re, sys

src, speed, out, *markers = sys.argv[1:]
SPEED = float(speed)
words = [w for w in json.load(open(src))["words"] if w["type"] == "word" and not w["text"].startswith("[")]

NUM = {"cero":"0","uno":"1","dos":"2","tres":"3","cuatro":"4","cinco":"5","seis":"6","siete":"7","ocho":"8","nueve":"9",
       "diez":"10","once":"11","doce":"12","trece":"13","catorce":"14","quince":"15","dieciséis":"16","diecisiete":"17",
       "dieciocho":"18","diecinueve":"19","veinte":"20","veinticuatro":"24","treinta":"30","cuarenta":"40","cincuenta":"50",
       "sesenta":"60","setenta":"70","ochenta":"80","noventa":"90"}
MERGES = [
    (["GTA", "seis"], "GTA 6"), (["GTA", "cinco"], "GTA 5"), (["GTA", "cuatro"], "GTA 4"), (["GTA", "tres"], "GTA 3"),
    (["tres", "D"], "3D"), (["PlayStation", "cinco"], "PlayStation 5"), (["PlayStation", "dos"], "PlayStation 2"),
    (["cuatrocientos", "setenta", "y", "cinco"], "475"), (["doscientos", "veinte"], "220"),
    (["dos", "mil", "veintiséis"], "2026"), (["dos", "mil", "veinticinco"], "2025"), (["dos", "mil", "veintitrés"], "2023"),
    (["dos", "mil", "veintidós"], "2022"), (["dos", "mil", "trece"], "2013"), (["dos", "mil", "dos"], "2002"),
    (["dos", "mil", "seis"], "2006"), (["mil", "novecientos", "ochenta", "y", "seis"], "1986"),
    (["mil", "novecientos", "ochenta", "y", "cuatro"], "1984"),
]
bare = lambda t: re.sub(r"[^\wáéíóúñü]", "", t.lower())

toks, i = [], 0
while i < len(words):
    for seq, rep in MERGES:
        chunk = words[i:i + len(seq)]
        if len(chunk) == len(seq) and [bare(w["text"]) for w in chunk] == [bare(x) for x in seq]:
            tail = re.sub(r"^.*?([^\wáéíóúñü]*)$", r"\1", chunk[-1]["text"])
            toks.append({"text": rep + tail, "start": chunk[0]["start"], "end": chunk[-1]["end"], "spoken": chunk[0]["text"]})
            i += len(seq)
            break
    else:
        w = words[i]
        t = w["text"]
        b = bare(t)
        # Numbers as digits, except list markers like "Uno:" which stay words.
        if b in NUM and not t.endswith(":") and i > 0:
            t = NUM[b] + re.sub(r"^[\wáéíóúñü]+", "", t)
        toks.append({"text": t, "start": w["start"], "end": w["end"], "spoken": w["text"]})
        i += 1

caps = []
for k, t in enumerate(toks):
    s, e = round(t["start"] / SPEED * 1000), round(t["end"] / SPEED * 1000)
    caps.append({"text": (" " if k else "") + t["text"], "startMs": s, "endMs": e, "timestampMs": (s + e) // 2, "confidence": None})

starts, j = [], 0
for m in markers:
    # "Dos:" only matches the spoken list marker (with colon), not "dos mil...".
    while bare(toks[j]["spoken"]) != bare(m) or (m.endswith(":") and not toks[j]["spoken"].endswith(":")):
        j += 1
    starts.append(caps[j]["startMs"])
    j += 1

with open(out, "w") as f:
    f.write("// Generated from an ElevenLabs transcript.\nimport type { Caption } from \"@remotion/captions\";\n\n")
    f.write(f"export const SCENE_STARTS_MS = {json.dumps(starts)};\nexport const VOICE_END_MS = {caps[-1]['endMs']};\n\n")
    f.write("export const CAPTIONS: Caption[] = " + json.dumps(caps, ensure_ascii=False, indent=1) + ";\n")
print("starts", starts, "end", caps[-1]["endMs"], "tokens", len(caps))
