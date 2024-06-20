type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  }
  
  function compare<T extends Pick<AllType, keyof AllType>, U extends Pick<AllType, keyof AllType>>(top: T, bottom: U): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
  }
  
  const obj1 = {
    name: "Alice",
    position: 1,
    color: "red",
    weight: 50
  };
  
  const obj2 = {
    name: "Bob",
    position: 2,
    color: "blue",
    weight: 60
  };
  
  const result = compare(obj1, obj2);
  console.log(result);
  