import { defineConfig } from "vite";
import basicSsl from '@vitejs/plugin-basic-ssl';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        basicSsl(),
        tailwindcss(),
        {
            name: 'reload',
            configureServer(server) {
                const { ws, watcher } = server;
                watcher.on("change", (file) => { if (file.endsWith('.html') || file.endsWith('.js')) ws.send({ type: 'full-reload' }) });
            }
        }
    ]
})