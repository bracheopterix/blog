import { JSX } from "react";
import { useMemo } from "react";
import { render } from "sass";

function New() {

  const bigArr = useMemo(() => {

    const bigArr = [];

    for (let i = 0; i < 10000; i++) {
      bigArr.push(1);
    }
    return bigArr;

  }, [])




  return (


    <List
      items={bigArr}
      renderItem={(item) =>
        
        <div>
          <button>{item}</button>
        </div>
      }
    />



  )

}

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
}

function List<T>(p: ListProps<T>) {


  const chunkedArr = p.items

  
  return (

    

    <></>
  )
}

export default New