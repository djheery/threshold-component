const UUID_Generator = (() => {
  
  const generate_random_id = () => {
    const S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    return (S4()+S4()+"-"+S4()+S4());
  }
  const id = generate_random_id();
  
  return {
    get_id: () => {
      return id;
    }
  }
})()