import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Analytics } from "@vercel/analytics/react";

const extractBrowserName = (userAgent) => {
  let browser;
  if (userAgent.includes("Chrome")) {
    browser = "Chrome";
  } else if (userAgent.includes("Firefox")) {
    browser = "Firefox";
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    browser = "Safari";
  } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
    browser = "Opera";
  } else if (userAgent.includes("Edge")) {
    browser = "Edge";
  } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
    browser = "Internet Explorer";
  } else {
    browser = "Unknown";
  }
  return browser;
};

const getVisitorInfo = async () => {
  const locationResponse = await fetch(
    "https://ipinfo.io?token=e8c7c222ea978f"
  );
  const locationData = await locationResponse.json();

  // DEVICE INFO
  const deviceInfo = {
    browser: navigator.userAgent,
    platform: navigator.platform,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
  };

  // VISITOR INFO
  const visitorInfo = {
    ...deviceInfo,
    country: locationData.country,
    city: locationData.city,
    region: locationData.region,
    ip: locationData.ip,
  };

  const formatVisitorInfo = (info) => {
    const browserName = extractBrowserName(info.browser);
    const referrer = document.referrer || "No referrer available.";
    const currentUrl = window.location.href;
    const date = new Date().toLocaleString();

    return `
    ${date}
  --------------------------
  🌐  Browser : ${browserName}
  🔗  Referrer : ${referrer}
  📍  Current URL : ${currentUrl}
  💻  Platform : ${info.platform}
  📱  Screen Size : ${info.screenWidth}x${info.screenHeight}
  🌍  Country : ${info.country}
  🏙️  City : ${info.city}
  🌏  Region : ${info.region}
  🔢  IP Address : ${info.ip}
  --------------------------
  `;
  };

  return formatVisitorInfo(visitorInfo);
};

const sendMessageToTelegram = async (message) => {
  const botToken = import.meta.env.VITE_BOT_TOKEN;
  const chatId = import.meta.env.VITE_BOT_CHATID;
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    // const data = await response.json();

    // if (data.ok) {
    //   console.log("Message sent successfully:", data);
    // } else {
    //   console.error("Error sending message:", data);
    // }
  } catch (error) {
    console.error("Error:", error);
  }
};

getVisitorInfo().then((info) => sendMessageToTelegram(info));

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Analytics />
  </>
);
