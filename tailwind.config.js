/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        //  สิ่งที่ใช้สร้างภาพเคลื่อนไหว
        shimmer: {
          "100%": { transform: "translateX(100%)" }, // ย้ายองค์ประกอบไปทางด้านขวา 100 %
        },
      },
      animation: {
        // ไปหา shimmer
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};
