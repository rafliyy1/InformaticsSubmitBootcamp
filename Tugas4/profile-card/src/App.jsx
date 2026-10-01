import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Header
        title="Interactive Profile Card"
        subtitle="Tugas Individu Week 4 - React Fundamental"
      />

      <main className="card-container">
        <Card
          name="Masrul Fikri"
          profession="Web Developer"
          description="Suka membuat website dan sedang belajar React."
        />
        <Card
          name="Asep Rahmat"
          profession="UI/UX Designer"
          description="Senang mendesain tampilan aplikasi yang nyaman dipakai."
        />
        <Card
          name="Joko Santoso"
          profession="Data Analyst"
          description="Hobi mengolah data dan membuat visualisasi menarik."
        />
      </main>
    </div>
  );
}

export default App;