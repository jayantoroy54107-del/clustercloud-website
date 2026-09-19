from PIL import Image
import numpy as np

img = Image.open('public/work/test_c1_photo.png')
arr = np.array(img).astype(float)
h, w, c = arr.shape

# For each row y in 20..120:
# Sky gradient is smooth horizontally across x in 90..185
# If pixel is significantly brighter than the surrounding sky baseline, interpolate it!
for y in range(15, 120):
    # Left sample at x=90..105, right sample at x=180 (if inside border)
    # The sky only varies with y (gradient from deep blue at top to warm at bottom)
    left_sample = np.median(arr[y, 90:105], axis=0)
    for x in range(105, 185):
        diff = np.linalg.norm(arr[y, x] - left_sample)
        # White text has high brightness and low saturation compared to deep blue sky
        # Sky: R ~ 50-80, G ~ 100-130, B ~ 150-180
        # Text: R > 150, G > 160, B > 180
        if arr[y, x, 0] > left_sample[0] + 30 and arr[y, x, 1] > left_sample[1] + 30:
            arr[y, x] = left_sample

clean_c1 = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
clean_c1.save('public/work/clean_solar_base.png')
print("Saved clean_solar_base.png")
