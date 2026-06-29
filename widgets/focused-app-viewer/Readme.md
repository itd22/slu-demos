# Focused App Indicator Widget

An open-source, lightweight workspace module designed exclusively for the [Seelen UI Desktop Environment](https://seelen.io). This widget hooks natively into Seelen UI's integrated Tiling Window Manager (TWM) to capture and display the real-time process or window title of whichever application currently holds foreground system focus.

---

## User Perspective & Features

*   **Zero Polling Overhead:** Unlike typical desktop tools that continuously query the OS for the active window (wasting precious CPU cycles), this widget uses an asymmetric event bus. It only wakes up and re-renders when your active window focus physically changes.
*   **Dynamic Truncation:** Gracefully truncates overly long app titles down to fit the restrictive, clean spacing constraints of your taskbar layout or Fancy Toolbar panel.
*   **Aesthetic Theme Anchors:** Automatically applies matching system data attributes directly into the DOM tree (e.g., `data-active-process="spotify"`), allowing your active CSS stylesheets to glow or adapt colors depending on what software you are currently using.

---

## Developer Machine Environment Setup

Because this widget leverages the official `slu-demos` standard structure, compiling requires **Deno 2.x** as the primary runtime environment and module bundler.

### 1. Install Deno 2.x

**Windows (Winget):**
```powershell
winget install DenoLand.Deno
```

**Windows (Scoop):**
```powershell
scoop install deno
```

**macOS (Brew):**
```bash
brew install deno
```

**Linux:**
```bash
curl -fsSL https://deno.land/install.sh | sh
```

Verify:
```bash
deno --version
# deno 2.x.x ...
```

---

## Compilation

Navigate into the widget directory and run:

```bash
cd slu-demos/widgets/focused-app-viewer

# Production build (minified ESM â†’ dist/main.js)
deno task bundle

# Debug build (readable ESM â†’ dist/main.js)
deno task bundle:debug
```

Both tasks use `npm:esbuild` via Deno â€” no separate `npm install` needed.

> **Note:** The import `@seelen-ui/lib` resolves to `jsr:@seelen-ui/lib` via the
> import map in `deno.json`. The npm version of this package does **not** export
> `wm` or `events` â€” JSR is required.

---

## Deploying to Seelen UI

Move the entire `focused-app-viewer` folder into your Seelen UI widgets directory:

```text
%LocalAppData%\Programs\Seelen UI\resources\public\widgets\
```

Then in Seelen UI: **Settings â†’ Resources â†’ Widgets â†’ Focused App Indicator â†’ Enable**.

