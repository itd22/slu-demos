if (!mediaSession) {
  return icon("IoStopCircleOutline");
}

let title = mediaSession.title;
if (title.length > 30) {
  title = title.slice(0, 25) + "...";
}

const content = [
  AppIcon({ umid: mediaSession.umid }),
  "  ",
  title,
  "  ",
  Button({
    content: icon("TbPlayerSkipBackFilled"),
    onClick: `invoke(SeelenCommand.MediaPrev, { id: '${mediaSession.umid}' })`,
  }),
  " ",
  Button({
    content: icon(
      mediaSession.playing ? "TbPlayerPauseFilled" : "TbPlayerPlayFilled",
    ),
    onClick:
      `invoke(SeelenCommand.MediaTogglePlayPause, { id: '${mediaSession.umid}' })`,
  }),
  " ",
  Button({
    content: icon("TbPlayerSkipForwardFilled"),
    onClick: `invoke(SeelenCommand.MediaNext, { id: '${mediaSession.umid}' })`,
  }),
];

return content;
