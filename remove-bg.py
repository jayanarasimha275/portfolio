from rembg import remove, new_session

input_path = "public/me.jpeg"
output_path = "public/me.png"

session = new_session("u2netp")

with open(input_path, "rb") as f:
    input_data = f.read()

output_data = remove(input_data, session=session)

with open(output_path, "wb") as f:
    f.write(output_data)

print(f"Done. Background-removed photo saved to {output_path}")
