import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'), // your entry file
      name: 'ReactDynamicOtpInput',                   // UMD build global name (optional)
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],                          // ES Modules + CommonJS
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // don't bundle react & react-dom
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
