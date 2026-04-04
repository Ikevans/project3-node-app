const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kingsley Evans | AWS Node.js Project</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #0f172a, #1e293b, #334155);
      color: #ffffff;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px;
    }

    .card {
      width: 100%;
      max-width: 900px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
    }

    .status {
      display: inline-block;
      background: #22c55e;
      color: #0f172a;
      font-weight: bold;
      font-size: 14px;
      padding: 8px 14px;
      border-radius: 999px;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 42px;
      margin-bottom: 10px;
      line-height: 1.2;
    }

    h2 {
      font-size: 22px;
      color: #38bdf8;
      margin-bottom: 20px;
      font-weight: normal;
    }

    p {
      font-size: 18px;
      line-height: 1.7;
      color: #e2e8f0;
      margin-bottom: 18px;
    }

    .section-title {
      font-size: 20px;
      margin-top: 28px;
      margin-bottom: 14px;
      color: #f8fafc;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 10px;
    }

    .skill {
      background: rgba(56, 189, 248, 0.15);
      color: #bae6fd;
      padding: 10px 14px;
      border-radius: 999px;
      font-size: 15px;
      border: 1px solid rgba(56, 189, 248, 0.25);
    }

    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      color: #94a3b8;
      font-size: 15px;
    }

    .highlight {
      color: #f8fafc;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="status">Live on AWS EC2</div>
    <h1>Kingsley Evans</h1>
<p>Node.js Portfolio Deployment Project</p>

<p style="color: #22c55e; font-weight: bold;">
  🚀 Deployed automatically with GitHub Actions (Updated)
</p>

<p>
  <strong>Public URL:</strong>
  <a href="https://ikecloud.tech" target="_blank" style="color:#38bdf8;">
    https://ikecloud.tech
  </a>
</p>


    <p>
      This is a live <span class="highlight">Node.js web application</span>
      deployed on an AWS EC2 instance as part of my cloud engineering portfolio.
    </p>

    <p>
      The project demonstrates my ability to configure a Linux server,
      install Node.js, manage security group rules, and deploy an application
      that is publicly accessible through a cloud-hosted virtual machine.
    </p>
<h3>My Projects</h3>

<div style="margin-top:20px;">

  <a href="https://d366bsebu8ln7.cloudfront.net" target="_blank"
     style="display:inline-block;margin:10px;padding:12px 20px;
     background:#38bdf8;color:#081018;border-radius:8px;
     text-decoration:none;font-weight:bold;">
     Project 1 (S3 + CloudFront)
  </a>

  <a href="http://18.170.92.187/project2" target="_blank"
     style="display:inline-block;margin:10px;padding:12px 20px;
     background:#22c55e;color:#081018;border-radius:8px;
     text-decoration:none;font-weight:bold;">
     Project 2 (Apache Web Server)
  </a>

  <a href="http://18.170.92.187" target="_blank"
     style="display:inline-block;margin:10px;padding:12px 20px;
     background:#f59e0b;color:#081018;border-radius:8px;
     text-decoration:none;font-weight:bold;">
     Project 3 (Node App)
  </a>

</div>

    <div class="section-title">Technologies Used</div>
    <div class="skills">
      <div class="skill">AWS EC2</div>
      <div class="skill">Node.js</div>
      <div class="skill">Amazon Linux</div>
      <div class="skill">Security Groups</div>
      <div class="skill">Linux CLI</div>
      <div class="skill">Web Deployment</div>
    </div>

    <div class="section-title">Project Outcome</div>
    <p>
      Successfully built, configured, and deployed by
      <span class="highlight">Kingsley Evans</span>.
    </p>

    <div class="footer">
      Cloud Portfolio Project | AWS Free Tier | Public IP Deployment
    </div>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});
