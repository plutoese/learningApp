import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div className="w-50 h-50 bg-red-500" ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
