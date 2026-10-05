# React Pattern Lab

Laboratório pessoal de estudos sobre React, Design Patterns e arquitetura de componentes.

Esse projeto serve pra praticar conceitos de React na prática e manter anotações que possam ser consultadas posteriormente.

---

## O que estou estudando

- Components
- Props
- Destructuring
- `props.children`
- Composition Pattern
- Componentes reutilizáveis
- Compound Components
- React Router
- Design Patterns

---

## ANOTAÇÕES

### Components

Components são partes reutilizaveis da interface.

Ex.:

function Header() {
    return (
        <header>
            <h1>DevPatterns</h1>
        </header>
    );
}

### Props

Props são dados enviados de um componente para outro.

Ex.:

<Footer text="Made by Vitor." />

O componente pode receber essa informação:

function Footer({ text }) {
    return (
        <footer>
            {text}
        </footer>
    );
}

Text ---> "Made by Vitor." ---> Footer.

### Destructuring

Destructuring permite pegar propriedades de um objeto diretamente.
Em vez de:

function Footer(props) {
    return <footer>{props.texto}</footer>;
}

Pode ser:

function Footer ({ texto }) {
    return <footer>{texto}</footer>;
}

### Props.children

children é uma prop especial que representa o conteúdo colocado dentro de um componente.

Ex.:

<Footer>
    <p>Made by Vitor.</p>
</Footer>

O componente pode receber esse conteúdo:

function Footer({ children }) {
    return (
        <footer>
            {children}
        </footer>
    );
}

O conteúdo dentro de <Footer> passa a ser o valor de children.

<Footer>
    <p>Made by Vitor.</p> ---> children ---> <p>Made by Vitor.</p>
</Footer>

### Composition Pattern

Composition é montar componentes usando outros componentes e permitindo que o conteúdo seja fornecido de fora.

Ex.:

<Card>
    <h3>Props</h3>
    <p>Data sent to components</p>
</Card>

O Card pode receber esse conteúdo através de children:

function Card({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}

Isso permite reutilizar o mesmo componente com conteúdos diferentes.

### Componentes reutilizáveis/Reusable Components

Um componente reutilizavel pode ser utilizado várias vezes, recebendo informações diferentes através de props e children.

Ex.:

<Card title="Props">
    <p>Data sent to components</p>
</Card>

<Card title="Children">
    <p>Content passed as children</p>
</Card>

---------------------------------

## Como executar o projeto
- npm install (instalar as dependências)
- npm run dev

## Progresso:

Progresso
- [x] Componentes
- [x] Props
- [x] Destructuring
- [x] props.children
- [x] Composição
 --
- [x]Componentes reutilizáveis/Reusable components
- [ ] Compound Components
- [ ] React Router
- [ ] Design Patterns