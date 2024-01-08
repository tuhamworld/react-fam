import { useRef } from "react";

const Users = () => {
  const elementRef = useRef(0);

  const handleElementChange = () => {
    elementRef.current.contentEditable = true;
    console.log(elementRef.current.clientWidth)
    console.log(elementRef.current.clientHeight)
}

  return (
    <>
      <section>
        <h1>This is a User</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
          accusamus quaerat voluptatum autem ex nemo cum, totam aliquid amet non
          ipsam aut nostrum error veritatis ab at consequuntur, aspernatur eos!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          inventore maxime impedit. 
        </div>
      </section>
      <br />
      <br />
      <br />
      <div ref={elementRef} onClick={handleElementChange}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus omnis architecto velit perferendis repellat molestiae praesentium nostrum, enim iusto maxime voluptatem, totam aliquam, quaerat nihil magnam corporis commodi voluptates?
     </div>
     
      
      <hr />

    </>
  );
};

export default Users;
