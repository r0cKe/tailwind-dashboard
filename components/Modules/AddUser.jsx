import { XMarkIcon } from "@heroicons/react/24/outline";
import ModuleContainer from "./ModuleContainer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUsers } from "@/redux/features/user/usersSlice";
import { userRows as users } from "@/utils/data";

const AddUser = ({ slug, columns, reducer }) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    id: users?.length + 1,
    img: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    createdAt: new Date().toLocaleString("en-Us", {
      timeZone: "Asia/Kolkata",
    }),
    verified: false,
  });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    for (let value in inputValues) {
      if (inputValues[value] === "") {
        setIsEmpty(true);
        return;
      } else {
        setIsEmpty(false);
      }
    }
  }, [inputValues]);

  const handleChange = (e, field) => {
    field === "phone"
      ? e.target.value.length !== 10
        ? setError(true)
        : setError(false)
      : null;
    setInputValues((prev) => {
      return { ...prev, [field]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty) return;
    const createdAt = new Date().toLocaleString("en-Us", {
      timeZone: "Asia/Kolkata",
      dateStyle: "short",
    });
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: { ...inputValues, createdAt } }),
    });
    const data = await res.json();
    dispatch(setUsers(data));
    dispatch(reducer());
  };
  return (
    <ModuleContainer>
      <div className="relative p-12 rounded-lg bg-dark">
        <XMarkIcon
          className="pointer-icon absolute right-2 top-2"
          onClick={() => dispatch(reducer())}
        />
        <h1 className="text-3xl font-bold mb-10">Add new {slug}</h1>
        <form
          className="max-w-lg flex flex-wrap justify-between gap-2"
          onSubmit={handleSubmit}
        >
          {columns.map((col) => {
            if (col.field === "createdAt") return;
            return (
              <div
                className="w-full md:w-52 flex flex-col gap-2 mb-5"
                key={col.field}
              >
                <label className="text-sm">{col.headerName}</label>
                {col.field !== "verified" ? (
                  <input
                    className={`p-2 bg-transparent outline-none border rounded-md disabled:bg-slate-400
                    disabled:text-slate-50 disabled:cursor-not-allowed ${
                      col.field === "phone" && error
                        ? "border-red-500 text-red-500"
                        : "border-soft text-white"
                    }`}
                    type={
                      col.field === "email"
                        ? "email"
                        : col.field === "phone"
                        ? "number"
                        : "text"
                    }
                    placeholder={col.headerName}
                    disabled={col.field === "id"}
                    value={inputValues[col.field]}
                    onChange={(e) => handleChange(e, col.field)}
                  />
                ) : (
                  <select className="p-2 bg-transparent border rounded-md text-soft">
                    <option value={true} className="bg-dark">
                      True
                    </option>
                    <option value={false} className="bg-dark">
                      False
                    </option>
                  </select>
                )}
              </div>
            );
            // }
          })}
          <button
            type="submit"
            className="w-full p-2 bg-soft text-dark rounded-md transition-all duration-200 hover:bg-primary disabled:bg-slate-400 disabled:text-slate-50 disabled:cursor-not-allowed"
            disabled={isEmpty || error}
          >
            Submit
          </button>
        </form>
      </div>
    </ModuleContainer>
  );
};

export default AddUser;
