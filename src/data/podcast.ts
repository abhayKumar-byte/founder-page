export type Episode = { id: string; title: string; platform: "YouTube"; youtubeId: string; date: string; duration: string; description: string; featured?: boolean };
export const episodes: Episode[] = [
  // Replace PLACEHOLDER_VIDEO_ID with the real YouTube video ID (the text after v=).
  { id: "conversation-one", title: "[PLACEHOLDER] A conversation on building", platform: "YouTube", youtubeId: "PLACEHOLDER_VIDEO_ID", date: "[PLACEHOLDER date]", duration: "[PLACEHOLDER duration]", description: "[PLACEHOLDER: add a short verified episode description.]", featured: true },
  { id: "conversation-two", title: "[PLACEHOLDER] Lessons in leadership", platform: "YouTube", youtubeId: "PLACEHOLDER_VIDEO_ID", date: "[PLACEHOLDER date]", duration: "[PLACEHOLDER duration]", description: "[PLACEHOLDER: add a short verified episode description.]" },
  { id: "conversation-three", title: "[PLACEHOLDER] Finding the long view", platform: "YouTube", youtubeId: "PLACEHOLDER_VIDEO_ID", date: "[PLACEHOLDER date]", duration: "[PLACEHOLDER duration]", description: "[PLACEHOLDER: add a short verified episode description.]" },
];
export const podcastLinks = { watch: "https://www.youtube.com/", subscribe: "https://www.youtube.com/" }; // [PLACEHOLDER: replace with channel links]
