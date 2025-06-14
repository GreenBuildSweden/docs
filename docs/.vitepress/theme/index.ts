import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import AiContent from '../../components/AiContent.vue';
import Layout from './Layout.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AiContent', AiContent);
  },
  Layout,
} satisfies Theme;
