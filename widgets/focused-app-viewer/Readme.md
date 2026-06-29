# Focused App Indicator Widget

An open-source, lightweight workspace module designed exclusively for the [Seelen UI Desktop Environment](https://seelen.io). This widget hooks natively into Seelen UI's integrated Tiling Window Manager (TWM) to capture and display the real-time process or window title of whichever application currently holds foreground system focus.

---

## User Perspective & Features

*   **Zero Polling Overhead:** Unlike typical desktop tools that continuously query the OS for the active window (wasting precious CPU cycles), this widget uses an asymmetric event bus. It only wakes up and re-renders when your active window focus physically changes.
*   **Dynamic Truncation:** Gracefully truncates overly long app titles down to fit the restrictive, clean spacing constraints of your taskbar layout or Fancy Toolbar panel.
*   **Aesthetic Theme Anchors:** Automatically applies matching system data attributes directly into the DOM tree (e.g., `data-active-process="spotify"`), allowing your active CSS stylesheets to glow or adapt colors depending on what software you are currently using.

---

## Developer Machine Environment Setup

Because this widget leverages the official `slu-demos` standard structure, compiling requires **Deno** as the primary runtime environment and module bundler. 

### 1. Install System Dependencies
Execute the following commands in your Linux system environment (or WSL/Debian-based setups) to ensure core cURL and compression tools are ready:

```bash
sudo apt update
sudo apt install -y curl tar unzip
```

### 2. Install the Deno Runtime

*Brew installation method *

- formula installation command in your terminal window:

```bash
brew install deno
```

- brew Quick Verification & Upgrades
Unlike the manual curl installation method, Homebrew automatically handles your system `PATH` configuration strings. 

You can immediately verify that the compiler environment is live and keep it updated with these commands:

```bash
# Verify the runtime is active globally
deno --version

```


-from website

Run the official installer script to fetch and install the Deno compiler tools:

```bash
curl -fsSL https://deno.land | sh
```
*(Make sure to append the exported environment paths to your shell profile as prompted by the installer script output).*





---

## Compilation Instructions

Once you have downloaded the project source package repository (or extracted its workspace tarball release), navigate directly into the development directory path to bundle the TypeScript code into client-side code:

```bash
# 1. Enter the specific extracted source tree target directory
cd slu-demos/widgets/focused-app-viewer  

# 2. Compile and bundle the TypeScript code using esbuild pipeline macro
deno task bundle
```

Running the `deno task bundle` macro instantly processes the dependencies, links up with the live `@seelen-ui/lib` runtime on JSR, optimizes spacing, and outputs a clean, production-ready execution script file straight into your local `./dist/main.js` sub-folder asset space.

---

## Deploying to Seelen UI

To add your compiled custom component directory directly onto your live setup panel:

### 1. Move the Widget Bundle Folder
Move your entire `focused-app-viewer` target folder workspace straight into your local Seelen system runtime directory configuration path. 

On typical Windows architecture layouts, copy your directory directly into:
```text
%LocalAppData%\Programs\Seelen UI\resources\public\widgets\
```

### 2. Activate the Component
1. Right-click on your active **Fancy Toolbar** or your lower **Seelenweg Dock** to open the options context tray.
2. Click on **Settings** to reveal the system-wide resources management overlay profile page.
3. Navigate directly over to the **Resources** left sidebar section category, then select **Widgets**.
4. Locate the **Focused App Indicator** panel row card checkbox and toggle its switch state to **On**.
5. Click **Save** to reload the layout container shell. Your active focused tracking element will instantly render live across your active monitor workspace layers.
