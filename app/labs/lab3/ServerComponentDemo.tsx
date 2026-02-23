import fs from "node:fs";

export default function ServerComponentDemo() {
  const processInfo = {
    platform: process.platform,
    nodeVersion: process.version,
    memoryUsage: process.memoryUsage(),
    cwd: process.cwd(),
  };

  const serverRenderTime = new Date().toLocaleTimeString();

  const projectRoot = process.cwd();
  let files: string[] = [];
  try {
    files = fs.readdirSync(projectRoot);
  } catch (e) {
    files = [];
  }

  return (
    <div id="wd-server-component-demo">
      <h2>Server Component Demo</h2>

      <h4>Server Render Time</h4>
      <p>Rendered on server at: {serverRenderTime}</p>

      <h4>Server Information</h4>
      <pre>{JSON.stringify(processInfo, null, 2)}</pre>

      <h4>Filesystem Access Demo</h4>
      <pre>{JSON.stringify(files, null, 2)}</pre>

      <hr />
    </div>
  );
}