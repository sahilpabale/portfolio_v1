import { EMAIL_ADDRESS } from "../lib/constants";
import { LinkTag } from "./LinkTag";
import { Heading } from "./Heading";
import { Text } from "./Text";

export const Contact = () => {
  return (
    <section className="flex flex-col mb-6">
      <Heading>Contact 💌</Heading>
      <Text>
        Be sure to shoot me a{" "}
        <LinkTag href="https://twitter.com/sahilpabale" target="_blank">
          DM on Twitter
        </LinkTag>
        .
      </Text>
      <Text>
        For more serious matters{" "}
        <LinkTag href={`mailto:${EMAIL_ADDRESS}`}>shoot me an email</LinkTag>.
      </Text>
    </section>
  );
};
