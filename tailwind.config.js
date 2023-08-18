/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        // sans가 제일 기본 상속 폰트이므로 전체 폰트바꾸려면 sans재지정후 맨앞에 원하는 폰트 넣기
        notosans: ['Noto Sans KR', 'sans-serif'],
        notoserif: ['Noto Serif Korean', 'serif'],
        ibmsans: ['IBM Plex Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
