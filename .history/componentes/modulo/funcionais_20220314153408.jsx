export function Comp1 () {
  return <h2>comp1</h2>
}

/* export const Comp2 = function() {
  return <h2>Comp2</h2>
}*/

export function Comp2 () {
  return <h2>comp2</h2>
}

export default function Comp3 () {
  return <h2>comp3</h2>
}

export const Comp4 = () => <h2>Comp 4</h2>

 const Comp5 = () =>  {<h2>Comp 4</h2>}

 const Comp6 = props =>  (
  <div>
    <h2>{props.msg}</h2>
  </div>
)

export {
  Comp5,Comp6,
}
