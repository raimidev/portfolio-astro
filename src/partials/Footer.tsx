import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5"></div>
    <div className="text-sm text-gray-200">
      ©Copyright 2024 by
      <a
        href="https://github.com/raimidev"
        className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent hover:from-sky-400 hover:to-cyan-300 hover:bg-clip-text hover:text-white"
      >
        {` ${AppConfig.github_username}`}
      </a>
      .
    </div>
  </Section>
);

export { Footer };
