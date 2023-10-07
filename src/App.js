import Expenses from "./components/Expenses/Expenses"

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "New Car",
      amount: 240.25,
      date: new Date(2023, 3, 27),
    },
    {
      id: "e2",
      title: "12 Carret Diamon",
      amount: 25.13,
      date: new Date(2023, 8, 17),
    },
    {
      id: "e3",
      title: "New Appartment",
      amount: 360.23,
      date: new Date(2023, 9, 15),
    },
  ];

  return (
    <div>
      <h2>Get Started.</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;