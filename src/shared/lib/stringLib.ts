export const cutString = (str: string) => {
  if (str.length > 140) {
    return str.substring(0, 140) + "...";
  } else str;
};
