<div className="grid grid-cols-1 md:grid-cols-4 mb-8 gap-8">
  <div className="md:col-start-2 md:col-end-4">
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <div className="relative flex">
          <input
            type="text"
            className="w-full pr-40 bg-gray-200 input input-lg text-black"
            placeholder="Search"
            value={text}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  </div>
  {users.length > 0 && (
    <div>
      <button className="btn btn-ghost btn-lg" onClick={clear}>
        Clear
      </button>
    </div>
  )}
</div>;
