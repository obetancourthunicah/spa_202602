import Nav from "./components/nav/Nav";
import {
  Card ,
  CardHeaderWithImage,
  CardBody,
  CardFooter
} from "./components/cards";
import { Counter } from "./components/counter/Counter";

const links = [
  {
    text: "Home",
    href: "",
    classNames: []
  },
  {
    text: "Singin",
    href: "",
    classNames: []
  },
  {
    text: "Singup",
    href: "",
    classNames: []
  }
];
function App() {

  return (
    <>
     <header>
      <div>
        <h1>Brand Name</h1>
        <Nav links={links}/>
      </div>
     </header>
     <main>
      <section className="flex gap-4 p-4">
        <Card>
          <CardHeaderWithImage
             imgUrl={'https://picsum.photos/id/40/200/300'}
             altText="Demo de Image Header"
          />
          <CardBody>
            <strong>Esto es una descripción</strong>
            <br/>
            <p>Lorem Ipsum</p>
          </CardBody>
          <CardFooter>
            Voila
          </CardFooter>
        </Card>
      </section>
      <section className="flex flex-wrap gap-4">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </section>
     </main>
     <footer>
      Todos los derechos Resevados 2026
     </footer>
    </>
  )
}

export default App
