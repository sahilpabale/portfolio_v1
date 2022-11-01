import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import { Text } from "./Text";

export const About = () => {
  const TEXT_MARGIN_BOTTOM = 1.5;

  return (
    <section className="flex flex-col mb-12">
      <Heading>About 💭</Heading>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I&apos;m a {new Date().getFullYear() - 2002} yr old software engineer
        based in India 🇮🇳, I specialize in backend and systems development and a
        little bit of DevOps. I&apos;m currently studying{" "}
        <LinkTag
          href="https://en.wikipedia.org/wiki/Computer_science"
          target="_blank"
        >
          Computer Science
        </LinkTag>{" "}
        at{" "}
        <LinkTag href="https://vesit.ves.ac.in/" target="_blank">
          VESIT (Mumbai University)
        </LinkTag>
        .
      </Text>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I use a variety of technologies like <b>Node.js</b>, <b>Typescript</b>,{" "}
        <b>JavaScript</b>, <b>Rust</b>, <b>Java</b>, and databases like{" "}
        <b>MySQL</b>, <b>PostgreSQL</b>, <b>MongoDB</b>. I have knack for APIs
        and systems development with a tint of <b>developer operaitions.</b>
      </Text>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I&apos;m also very passionate about systems and drone programming and
        networking, recently I&apos;ve been picking up the{" "}
        <LinkTag href="https://www.rust-lang.org/" target="_blank">
          Rust Programming
        </LinkTag>{" "}
        and so far I&apos;m loving it.
      </Text>
      <Text>
        If you&apos;re interested on what specs I use on a daily basis then{" "}
        <LinkTag href="/specs">Click here</LinkTag>.
      </Text>
      <Text>
        Connect with me on my <LinkTag href="/socials">socials</LinkTag>.
      </Text>
    </section>
  );
};
