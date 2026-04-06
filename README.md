# 🚀 Project 6: CI/CD Pipeline with GitHub Actions (AWS EC2)

![AWS](https://img.shields.io/badge/AWS-EC2-orange?logo=amazonaws)
![Node.js](https://img.shields.io/badge/Node.js-App-green?logo=node.js)
![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-blue?logo=githubactions)
![Deployment Status](https://github.com/ikevans/project3-node-app/actions/workflows/deploy.yml/badge.svg)

---

## 📌 Overview

This project demonstrates how to build a **CI/CD pipeline** using **GitHub Actions** to automatically deploy a Node.js application to an AWS EC2 instance.

Any changes pushed to GitHub are automatically deployed to the live server, removing the need for manual updates.

---

## 🏗️ Architecture

* GitHub Repository (Source Code)
* GitHub Actions (CI/CD Pipeline)
* AWS EC2 (Application Server)
* Nginx (Reverse Proxy)
* Node.js (Backend Application)

---

## ⚙️ What I Built

* Created a GitHub repository for the Node.js app
* Configured GitHub Actions workflow
* Set up secure SSH access using GitHub Secrets
* Automated deployment to EC2 on every push
* Integrated Nginx with Node.js app
* Enabled live updates without manual intervention

---

## 🔄 CI/CD Workflow

1. Developer pushes code to GitHub
2. GitHub Actions workflow is triggered
3. Workflow connects securely to EC2 via SSH
4. Latest code is pulled from repository
5. Application is restarted automatically
6. Changes go live instantly

---

## 📸 Screenshots

### 📁 Repository

<img width="940" height="322" alt="image" src="https://github.com/user-attachments/assets/07ef1936-3a42-42c1-9b8b-250cc56b4b6b" />

### ⚙️ GitHub Actions Running

![Running](screenshots/project6/project6-actions-running.png)

### ✅ GitHub Actions Success

![Success](screenshots/project6/project6-actions-success.png)

### 📝 Commit History

![Commit](screenshots/project6/project6-commit.png)

### 🌐 Live Application

<img width="1098" height="855" alt="image" src="https://github.com/user-attachments/assets/8faf334b-73ed-47a9-a109-548445bf60ac" />


---

## 🌍 Live Demo

👉 https://ikecloud.tech

---

## 💻 Technologies Used

* AWS EC2 (Free Tier)
* GitHub Actions (CI/CD)
* Node.js
* Nginx
* Linux (Amazon Linux)
* Git & GitHub

---

## 🎯 Key Features

* Fully automated deployment pipeline
* Secure authentication using SSH keys
* Zero manual deployment required
* Real-time updates on code push
* Production-style DevOps workflow

---

## 🧠 What I Learned

* How CI/CD pipelines work in real environments
* Automating deployments using GitHub Actions
* Securely connecting GitHub to AWS EC2
* Managing production servers with Nginx
* Eliminating manual deployment processes

---

## 📊 Project Outcome

Successfully built and deployed a **fully automated CI/CD pipeline**.

Any code change pushed to GitHub is instantly reflected on the live website without manual intervention.

---

## 🚀 Future Improvements

* Add Docker containerisation
* Implement staging and production environments
* Add monitoring and logging (CloudWatch)
* Integrate domain-based deployments

---

## 👤 Author

Kingsley Evans
Cloud & DevOps Engineer (In Progress)

---
