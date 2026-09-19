from PIL import Image, ImageDraw
import numpy as np

w, h = 390, 680

# Let's test with test_solar_4.jpg from public/
solar = Image.open('public/test_solar_4.jpg').resize((w, h))

# Render SVG with Path B on solar image
svg_str = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <defs>
    <clipPath id="clipB" clipPathUnits="objectBoundingBox">
      <path d="M 0.3308 0.0000 C 0.6154 0.0000, 0.8718 0.0000, 0.9282 0.0000 C 0.9692 0.0000, 0.9974 0.0221, 0.9974 0.0588 L 0.9974 0.8529 C 0.9974 0.9412, 0.9231 0.9985, 0.8205 0.9985 L 0.2308 0.9985 L 0.2308 0.8824 C 0.2308 0.8456, 0.1923 0.8309, 0.1282 0.8309 L 0.0000 0.8309 L 0.0000 0.3971 C 0.0000 0.2206, 0.1282 0.0588, 0.3308 0.0000 Z" />
    </clipPath>
  </defs>
  <image href="test_solar_4.jpg" width="{w}" height="{h}" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipB)" />
</svg>'''

with open('public/work/test_clipped_solar_b.svg', 'w') as f:
    f.write(svg_str)

print("Saved test_clipped_solar_b.svg")
