# -*- coding: utf-8 -*-
"""512x512 PNG szekció-ikonok -> 128x128 webp (app/assets/sec/<slug>-l.webp, -d.webp).
Futtatás: python tools/sec-icons-webp.py [slug ...]"""
import os, sys
from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), '..', 'app', 'assets')
RAW, OUT = os.path.join(os.path.dirname(__file__), 'sec-raw'), os.path.join(ROOT, 'sec')
only = sys.argv[1:]
n = 0
for f in sorted(os.listdir(RAW)):
    if not f.endswith('.png'):
        continue
    slug = f[:-6]
    if only and slug not in only:
        continue
    im = Image.open(os.path.join(RAW, f)).convert('RGB').resize((128, 128), Image.LANCZOS)
    im.save(os.path.join(OUT, f[:-4] + '.webp'), 'WEBP', quality=82, method=6)
    n += 1
print('kesz:', n, 'webp ->', OUT)
