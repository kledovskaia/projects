export const reorder = <T>(
  list: T[],
  startIndex: number,
  endIndex: number
): T[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
export const move = <T, V extends { index: number; droppableId: string }>(
  source: T[],
  destination: T[],
  droppableSource: V,
  droppableDestination: V
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {
    [droppableSource.droppableId]: sourceClone,
    [droppableDestination.droppableId]: destClone,
  };

  return result;
};
