import os
from PIL import Image
import numpy as np

img_path = 'C:/Users/User/.gemini/antigravity-ide/brain/2a629023-e45b-48d8-a015-539bae88ce53/.user_uploaded/media_1789804017682.png'
img = Image.open(img_path)
w, h = img.size
alpha = np.array(img.split()[-1]) > 50

step = 8
# Right edge from top to bottom
right_pts = []
for y in range(0, h, step):
    row = np.where(alpha[y, :])[0]
    if len(row) > 0:
        right_pts.append((int(row[-1]), y))
row_last = np.where(alpha[h-1, :])[0]
if len(row_last) > 0:
    right_pts.append((int(row_last[-1]), h-1))

# Bottom edge
bottom_pts = []
for x in range(right_pts[-1][0], int(row_last[0]), -step):
    bottom_pts.append((x, h-1))

# Left edge from bottom to top
left_pts = []
for y in range(h-1, -1, -step):
    row = np.where(alpha[y, :])[0]
    if len(row) > 0:
        left_pts.append((int(row[0]), y))

all_pts = right_pts + bottom_pts + left_pts
print("Sampled points count:", len(all_pts))

# Create normalized path string
pts_str = " ".join([f"{x/w:.4f},{y/h:.4f}" for x, y in all_pts])
d_str = "M " + " L ".join([f"{x/w:.4f} {y/h:.4f}" for x, y in all_pts]) + " Z"

with open("public/norm_clip_path.txt", "w") as f:
    f.write(d_str)

# Also test smooth SVG
svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}">
  <path d="M {" L ".join([f"{x} {y}" for x, y in all_pts])} Z" fill="#2563EB" opacity="0.8" />
</svg>'''

with open("public/test_clip.svg", "w") as f:
    f.write(svg_content)

print("Saved clip path and SVG successfully.")
