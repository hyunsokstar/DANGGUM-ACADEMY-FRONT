import type { Preview } from "@storybook/react";
import '../src/app/globals.css'; // Tailwind CSS 임포트
// import './nextjs-preview';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;