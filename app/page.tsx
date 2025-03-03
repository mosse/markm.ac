import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        markm.ac
      </h1>

      <p className="mb-4">
        Hi - I'm Mark, a technical product leader with experience
        leading Community Growth at{" "}
        <a
          href="https://www.strava.com"
          className="text-blue-500 hover:underline"
        >
          Strava
        </a>
        , previously Senior PM at{" "}
        <a href="https://newsela.com" className="text-blue-500 hover:underline">
          Newsela
        </a>{" "}
        and{" "}
        <a
          href="https://academia.edu"
          className="text-blue-500 hover:underline"
        >
          Academia.edu
        </a>
        , founder of{" "}
        <a href="https://gazet.com" className="text-blue-500 hover:underline">
          Gazet
        </a>
        , and on the founding team at{" "}
        <a
          href="https://skimlinks.com"
          className="text-blue-500 hover:underline"
        >
          Skimlinks
        </a>
        . I have over 15 years of experience at every stage of the product
        lifecycle and a dedication to supporting inclusive teams.
      </p>

      <p className="mb-4">
        {`I'm continuously fascinated by the power of technology to change the context of human behavior. How does newsfeed design influence what we share? What are the consequences of shifting the temporal context of media? How can we leverage data and machine learning to improve user engagement and retention while respecting privacy?`}
      </p>

      <h2 className="mt-8 mb-4 text-xl font-semibold">How I work</h2>
      <p className="mb-4">
        {`Addressing these types of questions requires effective collaboration across varied teams, and I strive to bring a sense of curiosity, humility, and empathy to this work. I've found that developing effective products requires user-centric leadership, data-driven product discovery, and considered analysis of product metrics.`}
      </p>

      <p className="mb-4">
        {`Over the years, I've spec'd features, written code, built teams, pitched customers, freelanced, bootstrapped a company, reversed declining metrics, and led successful product launches. I thrive on making sense of ambiguous challenges and continuously work to develop the skills needed to tackle an ever-changing technological landscape.`}
      </p>

      <h2 className="mt-8 mb-4 text-xl font-semibold">Experience</h2>
      <p className="mb-4">
        {`I began my professional career as a research specialist studying the neural basis of learning and memory at the University of Pennsylvania's Center for Cognitive Neuroscience. While mining terabytes of fMRI brain imaging data, I developed an appreciation for careful experimental design and analysis, and discovered a respect for the power of code that led me to pursue opportunities within the startup world.`}
      </p>

      <p className="mb-4">
        {`My journey in tech began at Skimlinks, where I was part of the founding team. As Senior Director of Publisher Development, I collaborated with design, engineering, and operations teams, scaling our platform to handle over 15 billion API calls per month and integrating with 20,000+ e-commerce merchants.`}
      </p>

      <p className="mb-4">
        {`After a stint as the founder of Gazet, a content-curation platform, I moved into roles at established tech companies. At Academia.edu, I led the development of mobile apps and content discovery systems for 127M users. At Newsela, I drove content discovery and engagement for their edTech platform used in 90% of US schools.`}
      </p>

      <p className="mb-4">
        {`Most recently, as Product Lead for Community Growth at Strava, I've led a product pod focused on acquisition, activation, and engagement of 120M users. I've collaborated with ML teams to redesign feed ranking systems, reversed multi-year declines in new user retention, and led successful campaigns that beat revenue targets by 35%.`}
      </p>

      <p className="mb-4">
        {`Throughout my career, I've maintained a strong focus on data-driven decision making, effective experimental design, and mentoring junior team members. I've contributed to annual planning at the leadership level and have a track record of improving key metrics across various products and platforms.`}
      </p>

      <h2 className="mt-8 mb-4 text-xl font-semibold">Say hi!</h2>
      <p className="mb-4">
        {`I'm always excited to tackle new challenges and collaborate with innovative, mission-driven product teams. Whether it's optimizing ML algorithms, improving user engagement, or developing novel product strategies, I bring a wealth of experience and a passion for user-centric design. I welcome any chance to chat with like-minded folks about the future of tech and product management. Do `}
        <a
          href="mailto:hello@markm.ac"
          className="text-blue-500 hover:underline"
        >
          get in touch
        </a>
        {`!`}
      </p>

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
