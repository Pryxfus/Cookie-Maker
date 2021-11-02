const handlebarsHelpers ={
  'find-price': (entries, selectedItem) => { //nazwa w apostrofach
    const found = entries.find (el => el[0] === selectedItem);
    if (!found) {
      throw new Error(`Cannot find price of "${selectedItem}".`)
    }
    const [, price] = found;
    return price;
  },
  };

module.exports = {
  handlebarsHelpers,
}