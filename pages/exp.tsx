import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";

const Projects: NextPage = () => {
  return (
    <>
      <Seo
        title="Projects - Sahil Pabale"
        description="Sahil Pabale - Backend Developer"
      />
      <Layout>
        <Animate>
          <div className="flex items-center mb-4 min-h-[4rem] justify-between">
            <Heading style={{ marginBottom: 0 }}>Experience</Heading>
          </div>
          <p className="text-white">WIP 🏗</p>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Projects;
