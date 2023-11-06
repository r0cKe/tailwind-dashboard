import {
  CheckIcon,
  PlusCircleIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import UserDataTable from "@/components/UserDataTable";
import Head from "next/head";
import AddUser from "@/components/Modules/AddUser";
import { useDispatch, useSelector } from "react-redux";

import { toggleUserModal } from "@/redux/features/modal/toggleModalSlice";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      if (!params.row?.img) {
        return <UserCircleIcon className="w-8 h-8 rounded-full" />;
      }
      return (
        <img
          src={params.row?.img}
          alt="user"
          className="w-10 h-10 rounded-full object-cover"
        />
      );
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 100,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 100,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
    renderCell: (params) => {
      if (params.row?.verified) {
        return <CheckIcon className="w-5 h-5 text-success" />;
      }
      return <XMarkIcon className="w-5 h-5 text-danger" />;
    },
  },
];

export default function Users() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state) => state.toggleModalReducer.toggleUserModal
  );
  const users = useSelector((state) => state.usersReducer.users);

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <main>
        {isModalOpen && (
          <AddUser reducer={toggleUserModal} slug="user" columns={columns} />
        )}
        <div className="flex items-center gap-5 mb-3">
          <h1 className="text-4xl font-bold">Users</h1>
          <button
            className="flex items-center gap-1 bg-soft text-dark text-sm p-1 rounded-md cursor-pointer transition-all duration-150 hover:bg-primary hover:text-soft"
            onClick={() => dispatch(toggleUserModal())}
          >
            <PlusCircleIcon className="w-6 h-6" /> New User
          </button>
        </div>
        <UserDataTable
          slug="users"
          columns={columns}
          rows={users}
          pageSize={10}
        />
      </main>
    </>
  );
}
