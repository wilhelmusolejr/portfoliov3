import App from "./App.jsx";
import "./index.css";

import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";

const botToken = import.meta.env.VITE_BOT_TOKEN;
const chatId = import.meta.env.VITE_BOT_CHATID;

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
    const currentUrl = document.location.pathname; // Clean the current URL
    const date = new Date().toLocaleString();

    // Get the query parameters from the URL
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");

    if (ref) {
      // Retrieve the existing referrer array from localStorage
      const existingReferrers =
        JSON.parse(localStorage.getItem("referrer")) || [];

      // Check if the ref already exists in the array
      if (!existingReferrers.includes(ref)) {
        // Add the new ref to the array if it doesn't exist
        existingReferrers.push(ref.toUpperCase());

        // Save the updated array back to localStorage
        localStorage.setItem("referrer", JSON.stringify(existingReferrers));
      }

      // Hide the parameter from the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Retrieve the stored referrer from localStorage and parse it back into an array
    const storedReferrer = JSON.parse(localStorage.getItem("referrer")) || [];
    let originText;

    // Check if it's an array and log its values, or handle the case when it's empty
    if (storedReferrer.length > 0) {
      originText = storedReferrer.join(", ");
    } else {
      originText = "No referrer data available.";
    }

    let referrer = document.referrer;
    let referrerPathname;

    if (referrer) {
      referrerPathname = new URL(referrer).pathname;
    } else {
      referrerPathname = "Direct Access";
    }

    return `${date}
--------------------------
 🌐  Browser : ${browserName}
 🔗  Origin : ${originText}
------
 🔗  Referrer : ${referrerPathname}
 📍  Current URL : ${currentUrl}
 💻  Platform : ${info.platform}
 📱  Screen Size : ${info.screenWidth}x${info.screenHeight}
------
 🌍  Country : ${info.country}
 🏙️  City : ${info.city}
 🌏  Region : ${info.region}
 📍  IP Address : ${info.ip}
---------------------------
 `;
  };

  return formatVisitorInfo(visitorInfo);
};

const sendMessageToTelegram = async (message) => {
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

// ------------------------------------------------------

// getVisitorInfo().then((info) => sendMessageToTelegram(info));

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Analytics />
  </>
);
