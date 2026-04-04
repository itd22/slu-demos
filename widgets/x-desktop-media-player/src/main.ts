import { mount } from "svelte";
import { Widget } from "@seelen-ui/lib";
import { LogicalSize } from "@seelen-ui/lib/tauri";

import App from "./App.svelte";

import "./styles.css";

const widget = Widget.getCurrent();
const { window } = widget;

await widget.init();

await window.setSize(new LogicalSize(400, 120)); // set the widget initial size
await window.setMinSize(new LogicalSize(400, 120));

await widget.persistPositionAndSize();

mount(App, {
  target: document.getElementById("root")!,
});
