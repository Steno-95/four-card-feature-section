import Container from "./components/Container";
import Card from "./components/Card/Card";
import CardTitle from "./components/Card/CardTitle";
import CardDescription from "./components/Card/CardDescription";
import CardIcon from "./components/Card/CardIcon";

const cards = [
  {
    color: "border-t-(--cyan)",
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    icon: "supervisor",
    pos: "lg:col-start-1 lg:row-start-2 lg:row-end-4",
  },
  {
    color: "border-t-(--red)",
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    icon: "team-builder",
    pos: "lg:col-start-2 lg:row-start-1 lg:row-end-3 ",
  },
  {
    color: "border-t-(--orange)",
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: "karma",
    pos: "lg:col-start-2 lg:row-start-3 lg:row-end-5",
  },
  {
    color: "border-t-(--blue)",
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    icon: "calculator",
    pos: "lg:col-start-3 lg:row-start-2 lg:row-end-4",
  },
];

function App() {
  return (
    <div className="flex flex-col mx-5 ">
      <header className="text-center my-10 lg:max-w-[40rem] mx-auto">
        <h2 className="text-[var(--grey-light)] text-[1.5rem]">
          Reliable, efficient delivery
        </h2>
        <h1 className="text-[var(--grey-dark)] font-semibold text-[1.5rem]">
          Powered by Technology
        </h1>
        <p className="text-[1.1rem] my-3 text-[var(--grey-light)]">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <Container>
        {cards.map((card, i) => (
          <Card border={card.color} pos={card.pos} key={i}>
            <div className="col-span-2 row-span-1 mb-8">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </div>
            <CardIcon svg={card.icon} />
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default App;
/*
 Supervisor Monitors activity to identify
    project roadblocks Team Builder Scans our talent network to create the
    optimal team for your project Karma Regularly evaluates our talent to ensure
    quality Calculator Uses data from past projects to provide better delivery
    estimates */
