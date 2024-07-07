import React from "react";

export const addTodo = () => {
  return (
    <div className="container my-3">
        <h3>Add a Todos</h3>
      <form class="row g-3">
        <div class="col-md-12">
          <label for="inputTask" class="form-label">
            Todo Task
          </label>
          <input type="text" class="form-control" id="inputTask" />
        </div>
        <div class="col-md-12">
          <label for="inputDescription" class="form-label">
            Description
          </label>
          <input type="text" class="form-control" id="inputDescription" />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-sm btn-success">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default addTodo;