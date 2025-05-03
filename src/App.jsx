import Container from "./components/Container";
import Card from "./components/Card/Card";
import CardTitle from "./components/Card/CardTitle";
import CardDescription from "./components/Card/CardDescription";
import CardIcon from "./components/Card/CardIcon";
import { cards } from "../data/data.json";

function App() {
  return (
    <div className="flex flex-col mx-5 my-10">
      <header className="text-center my-10 lg:max-w-[40rem] mx-auto">
        <h2 className="text-(--grey-light) text-[1.5rem]">
          Reliable, efficient delivery
        </h2>
        <h1 className="text-(--grey-dark) font-semibold text-[1.5rem]">
          Powered by Technology
        </h1>
        <p className="text-[1.1rem] my-3 text-(--grey-light)">
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
