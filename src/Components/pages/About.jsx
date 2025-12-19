import { List, ListItem } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">About</h1>

      <section>
        <h2 className="text-xl font-semibold">Hi, my name is Clara</h2>
        <p> I'm a web developer who lives in France, Nantes (44000).</p>
        <p className="text-sm text-gray-600 mt-2">
          This website is part of my portfolio, to see more of it check out my
          other websites, my Github repositories or my Linkedin page.
        </p>
      </section>
      <section>
        <List>
          <ListItem href="https://github.com/clara-lancelle" icon={BsGithub}>
            My Github
          </ListItem>
          <ListItem href="#" icon={BsLinkedin}>
            My Linkedin
          </ListItem>
        </List>
      </section>
    </main>
  );
}
