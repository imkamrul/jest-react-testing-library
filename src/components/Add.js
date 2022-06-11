import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Add = () => {
  const [user, setUser] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (user.length) {
      setUser([...user, data]);

      console.log(user);
    } else {
      setUser([data]);
    }
    reset();
  };

  return (
    <div data-testid="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="user_name"
          className="block-block my-5 bg-transparent rounded border-2 pl-4 mx-4"
          placeholder="name"
          {...register("user_name", { required: true })}
        />

        {errors.user_name && (
          <p className="text-[red] mb-3">Name is required</p>
        )}

        <input
          id="submit"
          className="bg-[green] px-4 py-1 rounded hover:bg-red-700"
          type="submit"
        />
      </form>
      <div className="text-left">
        <p>User name list</p>
        {user.map((item, index) => {
          return (
            <p key={index} className="py-1 border-b-2 text-sm">
              {item.user_name}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default Add;
