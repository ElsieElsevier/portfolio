import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Builds plain static files into dist/, ready to upload to S3.
export default defineConfig({
  plugins: [react()],
});
