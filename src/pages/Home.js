import Today from "./Today";

export default function Home({current, today, tonight}) {

  return(
    <>
    {Object.keys(current).length !== 0 && <Today current={current} today={today} tonight={tonight} />}
    </>
  )
}