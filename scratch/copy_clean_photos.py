from PIL import Image
import shutil

# 1. Solar panel clean
shutil.copyfile('public/test_solar_4.jpg', 'public/work/solar_panel_clean.jpg')

# 2. Healthcare glass building clean
shutil.copyfile('public/work/health_glass.jpg', 'public/work/health_building_clean.jpg')

# 3. Luxury condo clean
shutil.copyfile('public/work/luxury_condo.jpg', 'public/work/luxury_condo_clean.jpg')

print("Copied clean rectangular base photos into public/work/")
