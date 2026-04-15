import os
from PIL import Image

source_dir = r"c:\Users\User\OneDrive\桌面\c code\python\web\public\persona-5-animated-cur"
dest_dir = r"c:\Users\User\OneDrive\桌面\c code\python\web\public\persona-5-animated-small"
os.makedirs(dest_dir, exist_ok=True)

for filename in os.listdir(source_dir):
    if filename.endswith(".cur"):
        filepath = os.path.join(source_dir, filename)
        try:
            img = Image.open(filepath)
            
            # The cur file may have multiple frames or sizes. Just take the first one and resize.
            img_resized = img.resize((48, 48), Image.Resampling.LANCZOS)
            
            base = os.path.splitext(filename)[0]
            out_filepath = os.path.join(dest_dir, f"{base}.png")
            img_resized.save(out_filepath, "PNG")
        except Exception as e:
            pass
