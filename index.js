const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Cloud + DevOps Mini Project</title>
        <style>
          body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            color: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
          }

          h1 {
            font-size: 2.8rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
          }

          p {
            font-size: 1.2rem;
            color: #dcdcdc;
            margin-bottom: 30px;
          }

          img {
            width: 180px;
            border-radius: 20px;
            margin-bottom: 20px;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
          }

          table {
            border-collapse: collapse;
            width: 70%;
            max-width: 600px;
            margin: 20px auto;
            background: rgba(255,255,255,0.1);
            border-radius: 15px;
            overflow: hidden;
          }

          th, td {
            padding: 15px;
            text-align: center;
          }

          th {
            background-color: rgba(255,255,255,0.2);
            color: #00e5ff;
            font-size: 1.1rem;
          }

          td {
            border-top: 1px solid rgba(255,255,255,0.2);
          }

          tr:hover {
            background-color: rgba(255,255,255,0.15);
            transition: 0.3s;
          }

          footer {
            margin-top: 40px;
            font-size: 0.9rem;
            color: #aaa;
          }
        </style>
      </head>
      <body>
        <img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" alt="Cloud DevOps Logo" />
        <h1>☁️ Cloud + DevOps Mini Project 🚀</h1>
        <p>Empowering modern deployment pipelines with automation and scalability</p>

        <table>
          <tr>
            <th>Purpose</th>
            <th>Tool</th>
          </tr>
          <tr>
            <td>Version Control</td>
            <td>Git & GitHub</td>
          </tr>
          <tr>
            <td>Infrastructure as Code</td>
            <td>Terraform</td>
          </tr>
          <tr>
            <td>Containerization</td>
            <td>Docker</td>
          </tr>
          <tr>
            <td>CI/CD Automation</td>
            <td>GitHub Actions</td>
          </tr>
          <tr>
            <td>Cloud Hosting</td>
            <td>AWS (EC2)</td>
          </tr>
        </table>

        <footer>© 2025 Cloud + DevOps Mini Project | Built with ❤️ by Aditya</footer>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
