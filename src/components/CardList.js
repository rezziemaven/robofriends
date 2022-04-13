import Card from "./Card";

const CardList = ({ robots, query }) => {
  // const regex = new RegExp(query, "i");
  return robots.map((robot) => (
    <Card
      id={robot.id}
      key={robot.id}
      name={robot.name}
      username={robot.username}
      email={robot.email}
    />
  ));
};

export default CardList;
