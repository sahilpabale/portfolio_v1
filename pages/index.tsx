import { Technologies } from "../components/Technologies";
import { Contact } from "../components/Contact";
import { Animate } from "../components/Animate";
import { Layout } from "../components/Layout";
import { About } from "../components/About";
import { Main } from "../components/Main";
import { Seo } from "../components/Seo";
import { useState } from "react";

// Next.js
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [_, setPresenceActive] = useState(false);

  return (
    <>
      <Seo
        title="Sahil Pabale"
        description="Sahil Pabale - Backend Developer"
      />

      <Layout>
        <Animate>
          <Main />
          <About />
          <Technologies />
          <Contact />
        </Animate>
      </Layout>
    </>
  );
};

export default Home;
