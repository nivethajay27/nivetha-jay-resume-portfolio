import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

await rm(dist, { force: true, recursive: true });
await mkdir(dist, { recursive: true });

await Promise.all([
  cp(join(root, "index.html"), join(dist, "index.html")),
  cp(join(root, "styles.css"), join(dist, "styles.css")),
  cp(join(root, "script.js"), join(dist, "script.js")),
  cp(join(root, ".nojekyll"), join(dist, ".nojekyll")),
  cp(join(root, "assets"), join(dist, "assets"), { recursive: true }),
  cp(join(root, "public"), join(dist, "public"), { recursive: true }),
]);
