/*import { wm, events } from "@seelen-ui/lib";*/
import { wm, events } from "jsr:@seelen-ui/lib";
// Select the visual target components
const appNameElement = document.getElementById("active-app-name") as HTMLElement;
const appIconElement = document.getElementById("active-app-icon") as HTMLImageElement;

/**
 * Updates the UI whenever a window state switch event occurs
 */
function updateFocusedWindowUI(windowData: any) {
  if (!windowData || !windowData.title) {
    appNameElement.innerText = "Desktop";
    appIconElement.src = "assets/default-desktop.png";
    return;
  }

  // Extract clean process or window titles (e.g., "chrome.exe" or "Discord")
  const processName = windowData.process_name || "Unknown App";
  const cleanTitle = windowData.title.split(" - ").pop() || processName;

  // Format strings gracefully for small toolbar/dock constraint profiles
  appNameElement.innerText = cleanTitle.length > 20 ? `${cleanTitle.substring(0, 17)}...` : cleanTitle;
  
  // Optional: Set dynamic CSS highlight class matching Seelen UI 2.2.0 capabilities
  document.body.setAttribute("data-active-process", processName.toLowerCase().replace(".exe", ""));
}

// 1. Fetch initial window focus state during widget boot lifecycle
async function initWidget() {
  try {
    const activeWindow = await wm.getActiveWindow();
    updateFocusedWindowUI(activeWindow);
  } catch (err) {
    console.error("Could not fetch active window state:", err);
  }

  // 2. Subscribe directly to the global Window Manager Focus Change event bus
  events.on("wm.window_focused", (eventData: any) => {
    // eventData contains the active window node details passed down from the Rust core
    updateFocusedWindowUI(eventData.window);
  });
}

// Fire initialization routine
initWidget();
