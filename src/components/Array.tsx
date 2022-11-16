import React from "react";

type CourseProps = {
  items: {
    Role: string,
    course: string,
  }[],
};

export default function Array(props: CourseProps) {
  return <div>
    {props.items.map((list) => {
      return <div>
        <h3>Your role is {list.Role} using {list.course}</h3>
      </div>
    })}

  </div>;
}
