import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Raimir Alvarez</GradientText> 👋
        </>
      }
      description={
        <>
          <p className="text-xl">
            Driven and detail-oriented{' '}
            <GradientText>Software Engineer</GradientText> with nearly two years
            of hands-on experience in full stack web application development.
            Adept at translating complex requirements into scalable, robust, and
            user-friendly solutions. I bring a passion for cutting-edge
            technologies and a proven track record of delivering{' '}
            <GradientText>high-quality</GradientText> software.
          </p>
          <p className="mt-4 text-xl">
            I am also a <GradientText>lifelong learner</GradientText> and a{' '}
            <GradientText>problem solver</GradientText> who is always looking
            for new challenges. Please add me in either{' '}
            <GradientText>Facebook</GradientText> or{' '}
            <GradientText>LinkedIn </GradientText>
            so we can network and share ideas.
          </p>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.facebook.com/raimir.alvarez.96">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/raimir-alvarez-b2232521b/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
