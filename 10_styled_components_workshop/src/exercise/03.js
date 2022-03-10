import styled from "styled-components";

const UnorderedList = styled.ul`
  width: 400px;
  margin: 16px;
  padding: 16px;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  box-shadow: 2px 2px 4px black;
`;

// ✅ use the isEven prop in this component to change the background color for even rows!
const ListItem = styled.li`
  padding: 4px 16px;
  background: ${(props) => {
    const divisbleBy3 = props.number % 3 === 0;
    const divisbleBy5 = props.number % 5 === 0;
    if (divisbleBy3 && divisbleBy5) {
      return 'lightgreen';
    } else if (divisbleBy3) {
      return 'aliceblue'
    } else if (divisbleBy5) {
      return 'lemonchiffon'
    } else {
      return 'white';
    }
  }};
`;

const items = [];
for (let i = 1; i < 100; i++) {
  items.push(i);
}

export default function List() {
  return (
    <UnorderedList>
      {items.map((item, index) => (
        <ListItem key={item} isEven={(index + 1) % 2 === 0} number={item}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
