

from PIL import Image

# Đường dẫn tới file PNG logo
logo_png_path = '/Users/hanhphan/Documents/bilday_web/profile-page/logo_main.png'

# Định nghĩa các kích thước cần cho web logo và favicon
sizes = [(192, 192), (512, 512)]
favicon_size = [(32, 32)]  # Kích thước cho favicon.ico

# Mở file PNG gốc
img = Image.open(logo_png_path)

# Resize và lưu các file PNG với kích thước 192x192 và 512x512
for size in sizes:
    output_path = f"logo_{size[0]}x{size[1]}.png"
    img_resized = img.resize(size, Image.Resampling.LANCZOS)
    img_resized.save(output_path)

# Tạo favicon.ico từ file PNG với kích thước 32x32
img_resized = img.resize(favicon_size[0], Image.Resampling.LANCZOS)
# Đảm bảo lưu đúng định dạng ICO
img_resized.save('favicon.ico', format='ICO')

print("Đã tạo các file logo và favicon.ico thành công!")
