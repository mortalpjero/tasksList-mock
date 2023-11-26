type Task = {
  id: number;
  title: string;
  body: string;
}

const getNewId = (items: Task[]): number => {
  return items.length + 1;
};
 export default getNewId;
