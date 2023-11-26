type Task = {
  id: number;
  title: string;
  body: string;
}

const getNewId = (items: Task[]): number => {
  const lastItemIndex = items.length - 1;
  const lastItem = items[lastItemIndex];
  return lastItem.id + 1;
};
 export default getNewId;
