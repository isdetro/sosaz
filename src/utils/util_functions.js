export const dataMaskToDataConverter = (data, mask) => {
  const { dataMask, omitFields, optionFields } = mask;
  // omit field olanlar yeni arraya daxil edilmir,deyeri null olanlar yeni arraya daxil edilmir
  let dataFilter = Object.entries(data).filter((item) => {
    return (
      (item[1] && !omitFields.includes(item[0])) ||
      (item[1] === 0 && !omitFields.includes(item[0]))
    );
  });

  // console.log(dataFilter, 'DataFilter');
  // change values to ours
  const optionFieldsArray = Object.entries(optionFields);
  let newData = dataFilter.map((item) => {
    // changing field names
    optionFieldsArray.forEach((optionItem) => {
      if (optionItem[0] === item[0]) {
        item[1] = optionItem[1][item[1]];
        return item;
      }
    });
    // item[0] = dataMask[item[0]];
    return item;
  });

  // change keys to ours
  console.log(newData, 'newData');
  const changedKeyData = newData.map((item) => {
    item[0] = dataMask[item[0]];
    return item;
  });

  return changedKeyData;
};
