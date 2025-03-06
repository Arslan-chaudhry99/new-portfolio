"use client";
import { useParams } from "next/navigation";
import EventLoop from "../articals/EventLoop";
import TDZ from "../articals/TDZ";
const Read = () => {
  const params = useParams();
  const id = params.id;

  return (
    <>
      {id === "what-is-event-loop-in-js" && <EventLoop />}
      {id === "what-is-TDZ" && <TDZ />}
    </>
  );
};
export default Read;
