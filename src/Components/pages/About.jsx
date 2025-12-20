import { List, ListItem } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">About Me</h1>

      <section>
        <img
          alt="Lancelle Clara Photo/Image"
          src="/public/Lancelle_clara.jpg"
          className="mb-5 rounded-full shadow-lg h-44 justify-self-center md:justify-self-auto"
        />
        <h2 className="text-xl font-semibold">Hi, my name is Clara</h2>
        <p> I'm a web developer who lives in France, Nantes (44000).</p>
        <p className="text-sm text-gray-600 mt-2">
          This website is part of my portfolio, to see more of it check out my
          other websites, my Github repositories or my Linkedin page.
        </p>
      </section>
      <section>
        <List>
          <Link to={`https://github.com/clara-lancelle`} target="_blank">
            <ListItem icon={BsGithub}>My Github</ListItem>
          </Link>
          <Link
            to={`https://www.linkedin.com/in/clara-lancelle-159634238/`}
            target="_blank"
          >
            <ListItem icon={BsLinkedin}>My Linkedin</ListItem>
          </Link>
          <Link to={`https://password-generator.lncl.fr/`} target="_blank">
            <ListItem icon={FaReact}>My Password generator website 🔑</ListItem>
          </Link>
        </List>
      </section>
    </main>
  );
}
