# Hướng dẫn triển khai website Unico Travel

Website được xây bằng Next.js 16 (App Router, TypeScript, Tailwind CSS v4).
Form "Request a trip" ở trang Contact sẽ lưu dữ liệu vào Supabase.

Tài liệu này hướng dẫn từng bước: chạy thử ở máy, đưa code lên GitHub,
triển khai lên Vercel, và kết nối Supabase cho form liên hệ.

---

## Tổng quan các bước

| # | Giai đoạn | Mục tiêu | Thời gian ước tính |
|---|---|---|---|
| 1 | Chạy thử ở máy local | Xem trước website trên trình duyệt của bạn | 5 phút |
| 2 | Đưa code lên GitHub | Lưu trữ code, làm nguồn để Vercel triển khai | 10 phút |
| 3 | Triển khai lên Vercel | Có link website thật, ai cũng truy cập được | 10 phút |
| 4 | Kết nối Supabase | Form liên hệ lưu được dữ liệu khách hàng gửi | 15 phút |

---

## Bước 1 — Chạy thử ở máy local

Yêu cầu: đã cài [Node.js](https://nodejs.org) (bản 18 trở lên).

| Bước | Việc cần làm | Lệnh / Ghi chú |
|---|---|---|
| 1.1 | Mở Terminal, di chuyển vào thư mục dự án | `cd unico-travel` |
| 1.2 | Cài các thư viện cần thiết | `npm install` |
| 1.3 | Chạy server phát triển | `npm run dev` |
| 1.4 | Mở website trên trình duyệt | Truy cập `http://localhost:3000` |

Lúc này mọi trang đều xem được bình thường, riêng form liên hệ sẽ báo lỗi
nhẹ vì chưa nối Supabase — điều đó là bình thường, sẽ xử lý ở Bước 4.

---

## Bước 2 — Đưa code lên GitHub

Yêu cầu: đã có tài khoản [GitHub](https://github.com) và cài
[Git](https://git-scm.com) trên máy.

| Bước | Việc cần làm | Lệnh / Ghi chú |
|---|---|---|
| 2.1 | Vào thư mục dự án | `cd unico-travel` |
| 2.2 | Khởi tạo Git | `git init` |
| 2.3 | Thêm toàn bộ file | `git add .` |
| 2.4 | Tạo commit đầu tiên | `git commit -m "Initial commit: Unico Travel website"` |
| 2.5 | Tạo repository mới trên GitHub | Vào github.com → **New repository** → đặt tên `unico-travel` → **không** tick "Add README" (để tránh xung đột) → **Create repository** |
| 2.6 | Gắn repository vừa tạo vào code local | `git remote add origin https://github.com/<ten-tai-khoan>/unico-travel.git` |
| 2.7 | Đổi tên nhánh chính thành `main` | `git branch -M main` |
| 2.8 | Đẩy code lên GitHub | `git push -u origin main` |

Sau bước này, vào lại trang GitHub repository để kiểm tra — code đã xuất
hiện đầy đủ.

---

## Bước 3 — Triển khai lên Vercel

Yêu cầu: đã có tài khoản [Vercel](https://vercel.com) (đăng nhập bằng
GitHub cho tiện).

| Bước | Việc cần làm | Chi tiết |
|---|---|---|
| 3.1 | Vào trang tạo project mới | Truy cập `vercel.com/new` |
| 3.2 | Đăng nhập bằng GitHub | Cho phép Vercel truy cập repository |
| 3.3 | Chọn repository `unico-travel` | Bấm **Import** |
| 3.4 | Kiểm tra cấu hình build | Vercel tự nhận diện Next.js — giữ nguyên mặc định |
| 3.5 | Thêm biến môi trường Supabase | Xem Bước 4 bên dưới rồi quay lại đây, hoặc thêm sau và **Redeploy** |
| 3.6 | Bấm **Deploy** | Chờ 1–2 phút |
| 3.7 | Nhận link website thật | Vercel cấp link dạng `unico-travel-xxxx.vercel.app` |

Từ nay, mỗi lần bạn `git push` code mới lên nhánh `main`, Vercel sẽ tự động
triển khai lại. Muốn gắn tên miền riêng (ví dụ `unicotravel.com`) thì vào
**Project Settings → Domains** trên Vercel.

---

## Bước 4 — Kết nối Supabase (để form liên hệ hoạt động)

Yêu cầu: đã có tài khoản [Supabase](https://supabase.com/dashboard).

| Bước | Việc cần làm | Chi tiết |
|---|---|---|
| 4.1 | Tạo project mới trên Supabase | Đặt tên, chọn khu vực gần khách hàng của bạn, đặt mật khẩu database |
| 4.2 | Mở SQL Editor | Menu bên trái → **SQL Editor → New query** |
| 4.3 | Chạy script tạo bảng | Mở file `supabase/schema.sql` trong dự án, copy toàn bộ nội dung, dán vào SQL Editor, bấm **Run** |
| 4.4 | Kiểm tra bảng đã tạo | Menu **Table Editor** → thấy bảng `trip_requests` |
| 4.5 | Lấy Project URL | **Project Settings → API** → copy mục **Project URL** |
| 4.6 | Lấy service role key | Cùng trang → copy mục **service_role** (secret key — **không** dùng khoá `anon`) |
| 4.7 | Thêm biến môi trường trên Vercel | **Project Settings → Environment Variables**, thêm 2 biến: `SUPABASE_URL` và `SUPABASE_SERVICE_ROLE_KEY` với giá trị vừa copy |
| 4.8 | Triển khai lại | **Deployments** → chọn bản mới nhất → **Redeploy** |
| 4.9 (tuỳ chọn) | Chạy thử ở máy local | Copy file `.env.local.example` thành `.env.local`, điền 2 giá trị trên vào |

Sau bước này, khi khách điền form ở trang Contact, dữ liệu sẽ xuất hiện
trong Supabase tại **Table Editor → trip_requests**.

> Lưu ý bảo mật: `SUPABASE_SERVICE_ROLE_KEY` là khoá bí mật, có toàn quyền
> với database — chỉ dùng ở phía server (đã được cấu hình sẵn trong
> `lib/supabase.ts`), tuyệt đối không dán vào code phía trình duyệt hay
> chia sẻ công khai.

---

## Chỉnh sửa nội dung website

| Muốn sửa gì | Sửa ở file |
|---|---|
| Danh sách tour, giá, lịch trình | `lib/tours.ts` |
| Nội dung trang chủ | `app/page.tsx` |
| Nội dung trang About / đội ngũ | `app/about/page.tsx` |
| Thông tin liên hệ (email, SĐT, địa chỉ) | `components/Footer.tsx` và `app/contact/page.tsx` |
| Video trang chủ | Thêm file `hero.mp4` và `hero-poster.jpg` vào thư mục `public/videos/` |
| Ảnh (gallery, thẻ tour...) | Hiện đang dùng nền gradient thay ảnh thật — thay bằng ảnh thật khi có, đặt trong `public/images/` |
| Màu sắc, font chữ | `app/globals.css` (phần `@theme inline`) |

---

## Cấu trúc dự án

```
app/
  page.tsx                 Trang chủ
  about/page.tsx            Trang giới thiệu
  services/page.tsx         Danh sách tour
  services/[slug]/page.tsx  Chi tiết từng tour
  gallery/page.tsx          Thư viện ảnh
  blog/page.tsx             Trang bài viết (Journal)
  contact/page.tsx          Trang liên hệ + form request
  api/contact/route.ts     API nhận dữ liệu form, lưu vào Supabase
components/                Header, Footer, Hero, TourCard, ContactForm
lib/tours.ts                Dữ liệu mẫu các tour
lib/supabase.ts              Kết nối Supabase (chỉ dùng ở server)
supabase/schema.sql         Câu lệnh SQL tạo bảng trip_requests
```

---

## Xử lý sự cố thường gặp

| Vấn đề | Nguyên nhân / Cách khắc phục |
|---|---|
| Form báo lỗi "server chưa cấu hình" | Chưa thêm `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` trên Vercel, hoặc thêm rồi nhưng chưa Redeploy |
| Push code lên GitHub báo lỗi quyền truy cập | Kiểm tra lại đã đăng nhập đúng tài khoản GitHub, hoặc dùng Personal Access Token thay mật khẩu |
| Trang deploy trên Vercel bị lỗi build | Vào tab **Deployments** trên Vercel, bấm vào bản build lỗi để xem log chi tiết |
| Video hero không hiện | Chưa có file `public/videos/hero.mp4` — website sẽ tự hiện nền gradient thay thế, không lỗi |
