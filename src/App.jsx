import Counter from "./Counter"
const App=()=>{
  const obj=["suman","bando","kishu" ,"jaiswal"];
  const itemlist=obj.map((list)=>{return <li>{list}</li>})
  return (
    <>
    <Counter/>
    </>
  )
}
export default App