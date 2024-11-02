import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

function getMedia(fileName) {
    try {
        const modules = import.meta.glob("@/assets/**/*.{jpg,png,svg,mp4}", {
            eager: true,
            import: "default",
        });
        const moduleKeys = Object.keys(modules);
        const fileSrc = moduleKeys.find((key) => key.endsWith(fileName));

        return fileSrc ? modules[fileSrc] : "";
    } catch (err) {
        console.log(err);
    }
}

export function getMediaUrl(fileName) {
    return getMedia(fileName);
}

app.use(router);
app.mount("#app");
