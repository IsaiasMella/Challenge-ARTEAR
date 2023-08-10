export const filterData = (data, filterSigns) => {
    if (!Array.isArray(data) || data.length === 0) return [];
  
    return filterSigns != null && filterSigns.length > 0
      ? data.filter((sign) =>
          sign?.name.toLowerCase().includes(filterSigns.toLowerCase().trim())
        )
      : data;
  };