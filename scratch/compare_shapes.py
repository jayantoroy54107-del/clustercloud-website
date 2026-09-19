# scratch/compare_shapes.py
w, h = 390, 680

# Option A: Smooth Pebble (Continuous organic arch)
path_a = '''M 129 0
C 240 0, 340 0, 362 0
C 378 0, 389 15, 389 40
L 389 580
C 389 640, 360 679, 320 679
L 60 679
C 20 679, 0 650, 0 600
L 0 270
C 0 150, 50 40, 129 0
Z'''

# Option B: Notched Pebble matching Image 2
path_b = '''M 129 0
C 240 0, 340 0, 362 0
C 378 0, 389 15, 389 40
L 389 580
C 389 640, 360 679, 320 679
L 90 679
L 90 600
C 90 575, 75 565, 50 565
L 0 565
L 0 270
C 0 150, 50 40, 129 0
Z'''

# Let's also create normalized paths (0.0 to 1.0) for both:
def normalize_svg_path(path_str, w, h):
    tokens = path_str.strip().split()
    norm_tokens = []
    i = 0
    while i < len(tokens):
        tok = tokens[i]
        if tok in ['M', 'L']:
            norm_tokens.append(tok)
            x = float(tokens[i+1].replace(',', '')) / w
            y = float(tokens[i+2].replace(',', '')) / h
            norm_tokens.append(f"{x:.4f}")
            norm_tokens.append(f"{y:.4f}")
            i += 3
        elif tok == 'C':
            norm_tokens.append(tok)
            x1 = float(tokens[i+1].replace(',', '')) / w
            y1 = float(tokens[i+2].replace(',', '')) / h
            x2 = float(tokens[i+3].replace(',', '')) / w
            y2 = float(tokens[i+4].replace(',', '')) / h
            x = float(tokens[i+5].replace(',', '')) / w
            y = float(tokens[i+6].replace(',', '')) / h
            norm_tokens.append(f"{x1:.4f}")
            norm_tokens.append(f"{y1:.4f},")
            norm_tokens.append(f"{x2:.4f}")
            norm_tokens.append(f"{y2:.4f},")
            norm_tokens.append(f"{x:.4f}")
            norm_tokens.append(f"{y:.4f}")
            i += 7
        elif tok == 'Z':
            norm_tokens.append('Z')
            i += 1
        else:
            i += 1
    return ' '.join(norm_tokens)

norm_a = normalize_svg_path(path_a, w, h)
norm_b = normalize_svg_path(path_b, w, h)

print("Normalized Path A:")
print(norm_a)
print("\nNormalized Path B:")
print(norm_b)

with open('public/work/norm_path_a.txt', 'w') as f:
    f.write(norm_a)
with open('public/work/norm_path_b.txt', 'w') as f:
    f.write(norm_b)
