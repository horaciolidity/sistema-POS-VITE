/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./cliente.html",
    "./login_admin.html",
    "./login_empleado.html",
    "./**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f2f8ff",
          100: "#e6f0ff",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        }
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,.25)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  safelist: [
    { pattern: /^(bg|text|border|ring)-(brand|slate|green|red|yellow)-(50|100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr)-(0|1|2|3|4|5|6|8|10)$/ },
    { pattern: /^(grid|flex|items|justify|gap|rounded|shadow).*$/ },
  ],
  plugins: [],
}
