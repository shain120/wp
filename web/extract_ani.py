import os

source_dir = r"C:\Users\User\Downloads\persona-5-animated"
dest_dir = r"c:\Users\User\OneDrive\桌面\c code\python\web\public\persona-5-animated-cur"
os.makedirs(dest_dir, exist_ok=True)

for filename in os.listdir(source_dir):
    if filename.endswith(".ani"):
        with open(os.path.join(source_dir, filename), "rb") as f:
            data = f.read()

        idx = 0
        while True:
            idx = data.find(b'icon', idx)
            if idx == -1:
                break
            size = int.from_bytes(data[idx+4:idx+8], 'little')
            cur_data = data[idx+8:idx+8+size]
            
            base = os.path.splitext(filename)[0]
            out_filename = os.path.join(dest_dir, f"{base}.cur")
            with open(out_filename, "wb") as out_f:
                out_f.write(cur_data)
            break
